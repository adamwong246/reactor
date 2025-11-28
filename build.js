import esbuild from 'esbuild';

const isDev = process.argv.includes('--dev');

const buildOptions = {
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'public/dist/bundle.js',
    platform: 'browser',
    loader: { '.js': 'jsx' },
    jsx: 'automatic',
    // Ensure all imports are resolved and bundled
    resolveExtensions: ['.js', '.jsx', '.ts', '.tsx'],
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
