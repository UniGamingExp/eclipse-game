// Packs a chosen subset of the Quaternius Stylized Nature MegaKit (CC0) into one small GLB for phones.
// usage: node pack-nature.mjs <megakit glTF dir> <out.glb>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, textureCompress, meshopt, mergeDocuments, unpartition, resample } from '@gltf-transform/functions';
import { MeshoptSimplifier, MeshoptEncoder } from 'meshoptimizer';
import sharp from 'sharp';
import path from 'node:path';

const [dir, out] = process.argv.slice(2);
const PICK = {
  // name: simplify ratio (1 = keep)
  CommonTree_1: 0.55, CommonTree_2: 0.55, CommonTree_3: 0.6, CommonTree_5: 0.65,
  TwistedTree_1: 0.4, Pine_5: 0.7,
  Bush_Common: 1, Bush_Common_Flowers: 1,
  Flower_3_Group: 1, Flower_4_Group: 0.7, Flower_3_Single: 1, Flower_4_Single: 1,
  Grass_Common_Short: 1, Grass_Wispy_Short: 1, Fern_1: 1, Plant_1: 1, Plant_7: 1, Clover_1: 1,
  Rock_Medium_1: 1, Rock_Medium_2: 1, Rock_Medium_3: 1,
  Pebble_Round_1: 1, Pebble_Round_2: 1, Pebble_Round_3: 1, Pebble_Square_1: 1,
  RockPath_Round_Small_1: 0.6, RockPath_Round_Small_2: 0.6, RockPath_Square_Small_1: 0.7, RockPath_Square_Small_2: 0.7,
  Mushroom_Common: 1, Mushroom_Laetiporus: 0.5,
};
await MeshoptSimplifier.ready;
await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });
let doc = null;
for (const [name, ratio] of Object.entries(PICK)) {
  const d = await io.read(path.join(dir, name + '.gltf'));
  if (ratio < 1) await d.transform(weld(), simplify({ simplifier: MeshoptSimplifier, ratio, error: 0.004, lockBorder: false }));
  if (!doc) doc = d; else mergeDocuments(doc, d);
}
// one scene with every model as a named root node
const root = doc.getRoot();
const scenes = root.listScenes();
for (const s of scenes.slice(1)) { for (const n of s.listChildren()) scenes[0].addChild(n); s.dispose(); }
// drop bark normal maps (tiny on a phone screen, saves megabytes)
for (const m of root.listMaterials()) { const t = m.getNormalTexture(); if (t) m.setNormalTexture(null); }
await doc.transform(
  unpartition(),
  dedup(),
  prune(),
  textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 82, pattern: /Leaves|Leaf|Flowers|Grass|Mushroom/, resize: [1024, 1024] }),
  textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 80, pattern: /^(?!.*(Leaves|Leaf|Flowers|Grass|Mushroom)).*$/, resize: [512, 512] }),
  meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
);
await io.write(out, doc);
for (const n of scenes[0].listChildren()) {
  let tris = 0;
  for (const p of n.getMesh()?.listPrimitives() || []) tris += (p.getIndices()?.getCount() || 0) / 3;
  console.log(n.getName(), tris);
}
console.log('textures', root.listTextures().map((t) => t.getName() || t.getURI()));
