#!/usr/bin/env node

import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function run() {
    const args = process.argv.slice(2);
    const isDev = args.includes('--dev');
    const configPath = args.find(arg => !arg.startsWith('--')) || '.storyboardrc.js';
    
    try {
        const config = await import(path.resolve(process.cwd(), configPath)).then(mod => mod.default);
        
        // Ensure public directory exists
        await fs.mkdir('public', { recursive: true });
        
        // The .storyboardrc.js file should be provided by the app and served from the root
        // We don't need to copy it to the public directory
        
        // Write the HTML files directly to the public directory
        const indexHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rakonto Storybook</title>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import { initRakonto } from '/dist/index.js';
        const config = await import('/.storyboardrc.js').then(mod => mod.default);
        initRakonto(config);
    </script>
</body>
</html>`;
        await fs.writeFile(path.join(process.cwd(), 'public', 'index.html'), indexHtml);
        
        const storyIframeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Story Preview</title>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        import React from 'react';
        import ReactDOM from 'react-dom/client';
        
        const urlParams = new URLSearchParams(window.location.search);
        const storyPath = urlParams.get('story');
        
        if (storyPath) {
            const jsStoryPath = storyPath.replace(/\\.(tsx|jsx|ts|js)$/, '.js');
            const importPath = \`/dist/\${jsStoryPath}\`;
            
            import(importPath).then(module => {
                const root = ReactDOM.createRoot(document.getElementById('root'));
                const StoryComponent = module.default;
                root.render(React.createElement(StoryComponent));
            }).catch(error => {
                console.error('Error loading story:', error);
                document.getElementById('root').innerHTML = \`
                    <div style="padding: 20px; color: red;">
                        Error loading story: \${storyPath}<br>
                        \${error.message}
                    </div>
                \`;
            });
        } else {
            document.getElementById('root').innerHTML = 'No story specified';
        }
    </script>
</body>
</html>`;
        await fs.writeFile(path.join(process.cwd(), 'public', 'story-iframe.html'), storyIframeHtml);
        
        const buildOptions = {
            format: 'esm',
            entryPoints: [path.join(__dirname, 'index.js'), ...config.stories.map(story => path.resolve(process.cwd(), story))],
            bundle: true,
            outdir: 'public/dist',
            platform: 'browser',
            loader: { 
                '.js': 'jsx',
                '.css': 'css'
            },
            jsx: 'automatic',
            resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
            splitting: true,
            define: {
                'process.env.NODE_ENV': isDev ? '"development"' : '"production"'
            },
            nodePaths: [path.join(process.cwd(), 'node_modules')]
        };

        if (isDev) {
            const ctx = await esbuild.context({
                ...buildOptions,
                sourcemap: true,
            });
            
            await ctx.watch();
            const { port } = await ctx.serve({
                servedir: process.cwd(),
                port: 8000,
            });
            
            console.log(`Dev server running at http://localhost:${port}`);
            
            // Keep the process alive
            process.stdin.resume();
        } else {
            await esbuild.build({
                ...buildOptions,
                minify: true,
                sourcemap: true,
            });
            console.log('Build complete');
        }
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

run();
