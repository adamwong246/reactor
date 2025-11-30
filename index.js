import esbuild from "esbuild";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const htmlContent = (n) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Rakonto - ${n} </title>
</head>
<body>
    <div id="root"></div>
    <script type="module">
        const {RakontoReact, RakontoReactDOM} = await import('/rakonto-dist/react-entry.js');
        await import('/rakonto-dist/${n.split('.')[0]}.js').then(module => {
            const root = RakontoReactDOM.createRoot(document.getElementById('root'));
            const StoryComponent = module.default;
            root.render(RakontoReact.createElement(StoryComponent));
        });
    </script>
</body>
</html>
`;

const coreBuildOptions = {
  // external: ["react", "react-dom"],
  format: "esm",
  // entryPoints: [
  //     path.join(__dirname, 'index.js'),
  //     path.join(__dirname, 'story.tsx')
  // ],
  splitting: true,
  bundle: true,
  outbase: '.',
  outdir: 'public/dist',
  platform: "browser",
  loader: {
    ".js": "jsx",
    ".css": "css",
  },
  jsx: "automatic",
  // define: {
  //     'process.env.NODE_ENV': '"development"'
  // }
};

export default async (entryPoints, outdir) => {
  Object.entries(entryPoints).forEach(([filePath, name]) => {
    const directoryPath = `./${outdir}/${path.dirname(filePath)}`;
    // Create the directory if it doesn't exist, including parent directories
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    fs.writeFileSync(`./${directoryPath}/${name}-rakonto.html`, htmlContent(filePath));
  });

  const buildOptions = {
    ...coreBuildOptions,
    entryPoints: [
      `./react-entry.js`,
      ...Object.keys(entryPoints)],
    
    outdir: outdir,
  };

  const ctx = await esbuild.context(buildOptions);

  // Start the development server
  const { host, port } = await ctx.serve({
    servedir: process.cwd(),
    port: 8000,
  });

  console.log(`Rakonto is serving at http://localhost:${port}`);

  await ctx.watch();
};
