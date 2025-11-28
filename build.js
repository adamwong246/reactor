import esbuild from 'esbuild';

console.log(process.argv);
const isDev = process.argv[3] === '--dev';
const configFile = process.argv[2];

const config = await import(`./${configFile}`).then(mod => mod.default);

console.log("stories:", config.stories);

const buildOptions = {
    format: 'esm',
    entryPoints: ['index.js', ...config.stories],
    bundle: true,
    outdir: 'public/dist',
    platform: 'browser',
    loader: { '.js': 'jsx' },
    jsx: 'automatic',
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
    splitting: true,
    external: [],
    // Use specific chunk names for stories
    // chunkNames: 'stories/[name]',
};

if (isDev) {
    const ctx = await esbuild.context({
        ...buildOptions,
        sourcemap: true,
    });
    
    await ctx.watch();
    await ctx.serve({
        servedir: 'public',
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
