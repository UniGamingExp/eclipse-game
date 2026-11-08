// Assembles background townspeople from Quaternius Modular Character Outfits (Fantasy) + Universal Base
// Characters (heads, hair) + Universal Animation Library 2 (CC0) into two small GLBs:
//   npc.glb      one top-level node per character (outfit + head cut from the base body + hair), node names in extras.n
//   npc-anim.glb the shared skeleton with a few animation clips (rotations only, plus root/pelvis motion)
// usage: node pack-npc.mjs <packs dir> <out dir>
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { dedup, prune, weld, simplify, textureCompress, meshopt, mergeDocuments, unpartition, resample } from '@gltf-transform/functions';
import { MeshoptSimplifier, MeshoptEncoder } from 'meshoptimizer';
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const [P, OUT] = process.argv.slice(2);
const UBC = path.join(P, 'Universal_Base_Characters_Standard_/Universal Base Characters[Standard]');
const OUTF = path.join(P, 'Modular_Character_Outfits_-_Fantasy_Standard_/Modular Character Outfits - Fantasy[Standard]/Exports/glTF (Godot-Unreal)/Outfits');
const HAIR = path.join(UBC, 'Hairstyles/Rigged to Head Bone/glTF (Godot -Unreal)');
const BODY = path.join(UBC, 'Base Characters/Godot - UE');
// a few referenced normal maps are missing in the pack: give them a stand-in file so the loader is happy
for (const [missing, src] of [['T_Hair_1_Normal_png.png', 'T_Hair_1_Normal.png'], ['T_Eye_Normal_png.png', 'T_Hair_1_Normal.png']]) {
  const m = path.join(BODY, missing);
  if (!fs.existsSync(m)) fs.copyFileSync(path.join(BODY, fs.existsSync(path.join(BODY, src)) ? src : 'T_Eye_Brown.png'), m);
}

await MeshoptSimplifier.ready; await MeshoptEncoder.ready;
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder });

const VARIANTS = {
  PeasantM: { outfit: 'Male_Peasant', body: 'Superhero_Male_FullBody', hair: ['Hair_Beard', 'Hair_SimpleParted'] },
  PeasantF: { outfit: 'Female_Peasant', body: 'Superhero_Female_FullBody', hair: ['Hair_Buns'] },
  RangerM: { outfit: 'Male_Ranger', body: 'Superhero_Male_FullBody', hair: ['Hair_Beard'] },
  RangerF: { outfit: 'Female_Ranger', body: 'Superhero_Female_FullBody', hair: [] },
  PeasantM2: { outfit: 'Male_Peasant', body: 'Superhero_Male_FullBody', hair: ['Hair_Buzzed'] },
  PeasantF2: { outfit: 'Female_Peasant', body: 'Superhero_Female_FullBody', hair: ['Hair_Long'] },
};

/** keep only the triangles of a primitive whose vertices hang mostly on the given joints */
function keepJoints(doc, prim, jointIdx) {
  const J = prim.getAttribute('JOINTS_0'), W = prim.getAttribute('WEIGHTS_0'), I = prim.getIndices();
  const keepV = new Uint8Array(J.getCount());
  const j = [], w = [];
  for (let v = 0; v < J.getCount(); v++) {
    J.getElement(v, j); W.getElement(v, w);
    let s = 0;
    for (let k = 0; k < 4; k++) if (jointIdx.has(j[k])) s += w[k];
    keepV[v] = s >= 0.5 ? 1 : 0;
  }
  const src = I.getArray(), out = [];
  for (let t = 0; t < src.length; t += 3) if (keepV[src[t]] && keepV[src[t + 1]] && keepV[src[t + 2]]) out.push(src[t], src[t + 1], src[t + 2]);
  I.setArray(new Uint32Array(out));
}

/** move every skinned mesh of `from` (merged into doc) onto the joints of `skin`, keeping its own bind matrices */
function adopt(doc, scene, fromRoots, skin, armature, filter) {
  const joints = skin.listJoints();
  for (const r of fromRoots) {
    r.traverse((n) => {
      const s = n.getSkin(), mesh = n.getMesh();
      if (!s || !mesh) return;
      if (filter && !filter(n)) { n.setMesh(null); return; }
      const ns = doc.createSkin(n.getName() + '_skin').setInverseBindMatrices(s.getInverseBindMatrices());
      for (const jt of joints) ns.addJoint(jt);
      ns.setSkeleton(skin.getSkeleton());
      const holder = doc.createNode(n.getName()).setMesh(mesh).setSkin(ns);
      armature.addChild(holder);
      n.setMesh(null);
    });
  }
  // drop the donor's own skeleton and nodes
  for (const r of fromRoots) { scene.removeChild(r); r.traverse((n) => n.dispose()); }
}

let lib = null;
for (const [name, V] of Object.entries(VARIANTS)) {
  const doc = await io.read(path.join(OUTF, V.outfit + '.gltf'));
  const root = doc.getRoot(), scene = root.listScenes()[0];
  const skin = root.listSkins()[0];
  const outfitRoots = scene.listChildren();
  // the armature node that holds the joints: the topmost parent of the skeleton
  const armature = doc.createNode('NPC_' + name);
  for (const r of outfitRoots) { scene.removeChild(r); armature.addChild(r); }
  scene.addChild(armature);
  // the head (and eyes, eyebrows) from the base body
  const headIdx = new Set(skin.listJoints().map((jn, i) => [jn.getName(), i]).filter(([n]) => n === 'Head' || n === 'neck_01').map(([, i]) => i));
  const body = await io.read(path.join(BODY, V.body + '.gltf'));
  for (const m of body.getRoot().listMeshes()) {
    if (/Retopology|^Superhero_/.test(m.getName())) for (const p of m.listPrimitives()) keepJoints(body, p, headIdx);
  }
  const before = new Set(root.listScenes());
  mergeDocuments(doc, body);
  for (const s of root.listScenes()) if (!before.has(s)) { adopt(doc, scene, s.listChildren(), skin, armature, (n) => !/^(Face\.001)$/.test(n.getName()) || true); s.dispose(); }
  for (const h of V.hair) {
    const hd = await io.read(path.join(HAIR, h + '.gltf'));
    const b2 = new Set(root.listScenes());
    mergeDocuments(doc, hd);
    for (const s of root.listScenes()) if (!b2.has(s)) {
      // hair rigged to the head bone may have no skin: then parent it to the Head joint
      const kids = s.listChildren();
      let skinned = false;
      for (const k of kids) k.traverse((n) => { if (n.getSkin()) skinned = true; });
      if (skinned) adopt(doc, scene, kids, skin, armature);
      else {
        const headJ = skin.listJoints().find((j) => j.getName() === 'Head');
        for (const k of kids) { s.removeChild(k); k.traverse((n) => { if (n.getMesh()) { const c = doc.createNode(n.getName()).setMesh(n.getMesh()); c.setTranslation([0, 0, 0]); headJ.addChild(c); n.setMesh(null); } }); k.dispose(); }
      }
      s.dispose();
    }
  }
  // remember original node names (the loader renames duplicates)
  armature.traverse((n) => n.setExtras({ ...(n.getExtras() || {}), n: n.getName() }));
  if (!lib) lib = doc; else mergeDocuments(lib, doc);
}
{
  const root = lib.getRoot(), scenes = root.listScenes();
  for (const s of scenes.slice(1)) { for (const n of s.listChildren()) scenes[0].addChild(n); s.dispose(); }
  for (const m of root.listMaterials()) { m.setNormalTexture(null); m.setOcclusionTexture(null); m.setMetallicRoughnessTexture(null); m.setMetallicFactor(0); m.setRoughnessFactor(0.85); }
  await lib.transform(
    unpartition(), dedup(), prune(),
    weld(), simplify({ simplifier: MeshoptSimplifier, ratio: 0.5, error: 0.002, lockBorder: false }),
    textureCompress({ encoder: sharp, targetFormat: 'webp', quality: 82, resize: [512, 512] }),
    meshopt({ encoder: MeshoptEncoder, level: 'medium' }),
  );
  await io.write(path.join(OUT, 'npc.glb'), lib);
  let tris = 0;
  for (const m of root.listMeshes()) for (const p of m.listPrimitives()) tris += (p.getIndices()?.getCount() || 0) / 3;
  console.log('npc.glb', fs.statSync(path.join(OUT, 'npc.glb')).size, 'bytes, tris', tris, 'meshes', root.listMeshes().length, 'materials', root.listMaterials().map((m) => m.getName()).join(','));
  for (const n of scenes[0].listChildren()) console.log(' ', n.getName());
}

// ---------- animations ----------
const KEEP = ['Idle_Rail_Loop', 'Idle_TalkingPhone_Loop', 'Walk_Carry_Loop', 'Idle_FoldArms_Loop', 'Idle_Lantern_Loop', 'Consume', 'Yes'];
const FINGER = /^(index|middle|pinky|ring|thumb)_|_leaf_/;
{
  const doc = await io.read(path.join(P, 'ual2/Universal Animation Library 2[Standard]/Unreal-Godot/UAL2_Standard.glb'));
  const root = doc.getRoot();
  for (const a of root.listAnimations()) {
    if (!KEEP.includes(a.getName())) { for (const c of a.listChannels()) c.dispose(); for (const sm of a.listSamplers()) sm.dispose(); a.dispose(); continue; }
    for (const c of a.listChannels()) {
      const tn = c.getTargetNode()?.getName();
      if (c.getTargetPath() === 'scale' || FINGER.test(tn || '') || (c.getTargetPath() === 'translation' && tn !== 'root' && tn !== 'pelvis')) { const s = c.getSampler(); c.dispose(); s.dispose(); }
    }
  }
  const used = new Set();
  for (const a of root.listAnimations()) for (const sm of a.listSamplers()) { used.add(sm.getInput()); used.add(sm.getOutput()); }
  for (const n of root.listNodes()) { if (n.getMesh()) n.setMesh(null); if (n.getSkin()) n.setSkin(null); }
  for (const m of root.listMeshes()) m.dispose();
  for (const acc of root.listAccessors()) if (!used.has(acc)) acc.dispose();
  for (const s of root.listSkins()) s.dispose();
  await doc.transform(resample(), prune({ keepLeaves: true }), dedup(), meshopt({ encoder: MeshoptEncoder, level: 'medium' }));
  await io.write(path.join(OUT, 'npc-anim.glb'), doc);
  console.log('npc-anim.glb', fs.statSync(path.join(OUT, 'npc-anim.glb')).size, root.listAnimations().map((a) => a.getName()).join(','));
}
