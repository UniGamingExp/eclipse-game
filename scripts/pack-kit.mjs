// Packs a chosen subset of a Quaternius kit (CC0) into one small GLB for phones.
// usage: node pack-kit.mjs <glTF dir> <out.glb> <pick.json>   pick = { name: simplifyRatio }
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, textureCompress, meshopt, mergeDocuments, unpartition } from '@gltf-transform/functions';
import { MeshoptSimplifier, MeshoptEncoder } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const [dir, out, pickFile, keepNormals = ''] = process.argv.slice(2);
const PICK = JSON.parse(fs.readFileSync(pickFile, 'utf8'));
await MeshoptSimplifier.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
let doc = null;
for (const [name, ratio] of Object.entries(PICK)) {
  const d = await io.read(path.join(dir, name + '.gltf'));
  // the scene's root node gets the model's name
  const roots = d.getRoot().listScenes()[0].listChildren();
  if (roots.length === 1) roots[0].setName(name);
  else { const g = d.createNode(name); for (const r of roots) { d.getRoot().listScenes()[0].removeChild(r); g.addChild(r); } d.getRoot().listScenes()[0].addChild(g); }
  for (const m of d.getRoot().listMeshes()) for (const p of m.listPrimitives()) { if (p.getAttribute('COLOR_0')) p.setAttribute('COLOR_0', null); }
  if (ratio < 1) await d.transform(weld(), simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.003, lockBorder: true }));
  if (!doc) doc = d; else mergeDocuments(doc, d);
}
const root = doc.getRoot();
const scenes = root.listScenes();
for (const s of scenes.slice(1)) { for (const n of s.listChildren()) scenes[0].addChild(n); s.dispose(); }
const keep = new RegExp(keepNormals || '^$');
for (const m of root.listMaterials()) { const t = m.getNormalTexture(); if (t && !keep.test(m.getName())) m.setNormalTexture(null); }
await doc.transform(
  unpartition(), dedup(), prune(),
  textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 80, resize: [512, 512] }),
  meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
);
await io.write(out, doc);
let total = 0;
for (const n of scenes[0].listChildren()) {
  let tris = 0;
  n.traverse((c) => { for (const p of c.getMesh()?.listPrimitives() || []) tris += (p.getIndices()?.getCount() || 0) / 3; });
  total += tris;
  console.log(n.getName().padEnd(34), tris);
}
console.log('total tris', total, 'materials', root.listMaterials().map((m) => m.getName()).join(','));
console.log('textures', root.listTextures().map((t) => `${t.getName() || t.getURI()} ${t.getImage()?.byteLength}`).join(' | '));
console.log('size', fs.statSync(out).size);
