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
        
        // Copy the config file to the public directory so it can be imported by the browser
        const configContent = await fs.readFile(path.resolve(process.cwd(), configPath), 'utf-8');
        await fs.writeFile(path.join(process.cwd(), 'public', '.storyboardrc.js'), configContent);
        
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
                servedir: 'public',
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
