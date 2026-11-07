// Bundles src/ into build/game.js and stamps a version into index.html (cache busting).
// Usage: npm run build   (or: npm run watch while developing)
import * as esbuild from 'esbuild';
import { readFileSync, writeFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const watch = process.argv.includes('--watch');
const now = new Date();
const build = `${now.toISOString().slice(0, 10)}.${now.toISOString().slice(11, 16).replace(':', '')}`;

const opts = {
  entryPoints: ['src/main.js'],
  bundle: true,
  format: 'esm',
  target: ['es2020', 'safari15', 'chrome100'],
  minify: !watch,
  sourcemap: watch,
  outfile: 'build/game.js',
  define: { __BUILD__: JSON.stringify(build) },
  legalComments: 'none',
  logLevel: 'info',
};

function stamp() {
  const js = readFileSync('build/game.js');
  const css = readFileSync('style.css');
  const v = createHash('sha1').update(js).update(css).digest('hex').slice(0, 10);
  let html = readFileSync('index.html', 'utf8');
  html = html.replace(/build\/game\.js\?v=[\w.-]+/, `build/game.js?v=${v}`).replace(/style\.css\?v=[\w.-]+/, `style.css?v=${v}`);
  writeFileSync('index.html', html);
  console.log(`version ${build} (${v})`);
}

if (watch) {
  const ctx = await esbuild.context({ ...opts, plugins: [{ name: 'stamp', setup(b) { b.onEnd(() => stamp()); } }] });
  await ctx.watch();
} else {
  await esbuild.build(opts);
  stamp();
}
