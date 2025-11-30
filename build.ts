import esbuild from 'esbuild';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(process.argv);
const isDev = process.argv[3] === '--dev';
const configFile = process.argv[2];

// For library usage, the config file path should be relative to the consuming project
const config = await import(path.resolve(process.cwd(), configFile)).then(mod => mod.default);

// Ensure public and dist directories exist
await fs.mkdir('public', { recursive: true });
await fs.mkdir('dist', { recursive: true });

// The .storyboardrc.js file should be provided by the app and served from the root
// We don't need to copy it to the public directory

// Copy index.js and story.tsx to dist directory for library usage
await fs.copyFile(path.join(__dirname, 'index.js'), path.join(process.cwd(), 'dist', 'index.js'));
await fs.copyFile(path.join(__dirname, 'story.tsx'), path.join(process.cwd(), 'dist', 'story.js'));
// Copy cli.js to root directory for bin usage
await fs.copyFile(path.join(__dirname, 'cli.js'), path.join(process.cwd(), 'cli.js'));

const buildOptions = {
    format: 'esm',
    entryPoints: [
        path.join(__dirname, 'index.js'),
        path.join(__dirname, 'story.tsx'),
        ...config.stories.map(story => path.resolve(process.cwd(), story))
    ],
    bundle: true,
    outdir: 'public/dist',
    platform: 'browser',
    loader: { 
        '.js': 'jsx',
        '.css': 'css'  // Bundle CSS files
    },
    jsx: 'automatic',
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
    splitting: true,
    define: {
        'process.env.NODE_ENV': '"development"'
    },
    // Make sure node_modules from the consuming project are resolved
    nodePaths: [path.join(process.cwd(), 'node_modules')]
};

if (isDev) {
    const ctx = await esbuild.context({
        ...buildOptions,
        sourcemap: true,
    });
    
    await ctx.watch();
    await ctx.serve({
        servedir: process.cwd(),
        port: 8000,
    });
    
    console.log('Dev server: http://localhost:8000');
} else {
    await esbuild.build({
        ...buildOptions,
        minify: true,
        sourcemap: true,
    });
    console.log('Build done');
}
