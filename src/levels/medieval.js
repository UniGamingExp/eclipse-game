// Old-town buildings assembled from the Quaternius Medieval Village MegaKit (CC0) pieces in assets/medieval.glb.
// Pieces are 2 m wide wall panels (3.12 m tall, outer face toward +z), roofs sized 4x4 … 6x8 and props.
// house() puts walls on all four sides floor by floor, fills the window holes, adds corner posts and a tiled roof.
import * as THREE from 'three';
import { kit } from '../nature.js';

const FLOOR_H = 3.12;
const ROOFS = { '4x4': 'Roof_RoundTiles_4x4', '4x6': 'Roof_RoundTiles_4x6', '6x6': 'Roof_RoundTiles_6x6', '6x8': 'Roof_RoundTiles_6x8' };

function rng(seed) { let s = seed >>> 0 || 1; return () => ((s = (s * 1664525 + 1013904223) >>> 0) / 4294967296); }

/**
 * A house. x, z = centre of the footprint on the ground (y), rotY turns it (its front faces +z before turning).
 * w, d = footprint in metres (4 or 6, d 4/6/8), floors 1–3, style 'plaster' | 'brick' | 'mixed' (brick ground floor).
 * Returns { g, top } where top = height of the eaves (for colliders).
 */
export function house(parent, x, y, z, { w = 4, d = 4, floors = 2, rotY = 0, style = 'mixed', seed = 1, door = true, s = 1, shutters = true, roof = true, chimney = true } = {}) {
  const K = kit('medieval');
  const r = rng(seed);
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  g.scale.setScalar(s);
  g.userData.kitStatic = true;   // batched after the level is built (batchKit)
  parent.add(g);
  const put = (name, px, py, pz, ry = 0) => K.place(g, name, px, py, pz, { rotY: ry });
  // the four sides: [centre offset along the side normal, side length, rotation so the outer face points out]
  const sides = [
    { n: [0, 1], len: w, ry: 0 },            // front (+z)
    { n: [0, -1], len: w, ry: Math.PI },     // back
    { n: [1, 0], len: d, ry: Math.PI / 2 },  // right (+x)
    { n: [-1, 0], len: d, ry: -Math.PI / 2 },
  ];
  for (let f = 0; f < floors; f++) {
    const brick = style === 'brick' || (style === 'mixed' && f === 0);
    const P = brick ? 'Wall_UnevenBrick' : 'Wall_Plaster';
    for (const [si, S] of sides.entries()) {
      const half = (S.n[0] ? w : d) / 2;   // distance from the centre to this side
      const cells = Math.round(S.len / 2);
      for (let i = 0; i < cells; i++) {
        const u = -S.len / 2 + 1 + i * 2;   // position along the side
        // local frame of the side: along = (cos ry, -sin ry), out = n
        const ax = Math.cos(S.ry), az = -Math.sin(S.ry);
        const px = S.n[0] * (half - 0.09) + ax * u, pz = S.n[1] * (half - 0.09) + az * u;
        const py = f * FLOOR_H;
        let piece = `${P}_Straight`, win = null;
        const pick = r();
        if (f === 0 && si === 0 && door && i === Math.floor(cells / 2)) piece = `${P}_Door_Round`;
        else if (pick < 0.55) { piece = `${P}_Window_Wide_Round`; win = 'Wide'; }
        else if (pick < 0.75 && !brick) { piece = 'Wall_Plaster_Window_Thin_Round'; win = 'Thin'; }
        else if (pick < 0.88 && !brick) piece = 'Wall_Plaster_WoodGrid';
        put(piece, px, py, pz, S.ry);
        if (win) {
          put(`Window_${win}_Round1`, px, py, pz, S.ry);
          if (shutters && r() < 0.6) put(`WindowShutters_${win}_Round_Open`, px, py, pz, S.ry);
        }
        if (piece.endsWith('Door_Round')) put('Door_1_Round', px - ax * 0.53, py, pz - az * 0.53, S.ry);
      }
    }
    // corner posts
    for (const [cx, cz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) put(brick ? 'Corner_Exterior_Brick' : 'Corner_Exterior_Wood', cx * w / 2, f * FLOOR_H, cz * d / 2, Math.atan2(cx, cz) - Math.PI / 4);
  }
  const top = floors * FLOOR_H;
  if (roof) {
    const key = `${Math.min(w, d)}x${Math.max(w, d)}`;
    const name = ROOFS[key] || ROOFS['4x4'];
    const turned = w > d;
    put(name, 0, top, 0, turned ? Math.PI / 2 : 0);
    // close the gable ends (the triangles under the roof)
    const gw = turned ? d : w, gl = turned ? w : d;
    const front = gw >= 6 ? 'Roof_Front_Brick6' : 'Roof_Front_Brick4';
    for (const sgn of [1, -1]) {
      if (turned) put(front, sgn * (gl / 2 - 0.09), top, 0, sgn > 0 ? Math.PI / 2 : -Math.PI / 2);
      else put(front, 0, top, sgn * (gl / 2 - 0.09), sgn > 0 ? 0 : Math.PI);
    }
    if (chimney && r() < 0.7) put('Prop_Chimney', (r() - 0.5) * (w - 2), top + 0.6, (r() - 0.5) * (d - 2));
  }
  return { g, top: y + top * s };
}

/** a square gate tower with an arched passage through it (along z), tiled spire on top */
export function gateTower(parent, x, y, z, { floors = 4, rotY = 0, s = 1 } = {}) {
  const K = kit('medieval');
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = rotY;
  g.scale.setScalar(s);
  g.userData.kitStatic = true;   // batched after the level is built (batchKit)
  parent.add(g);
  const put = (name, px, py, pz, ry = 0) => K.place(g, name, px, py, pz, { rotY: ry });
  const W = 6;
  for (let f = 0; f < floors; f++) {
    for (const [nx, nz, ry] of [[0, 1, 0], [0, -1, Math.PI], [1, 0, Math.PI / 2], [-1, 0, -Math.PI / 2]]) {
      for (let i = 0; i < 3; i++) {
        const u = -2 + i * 2, ax = Math.cos(ry), az = -Math.sin(ry);
        const px = nx * (W / 2 - 0.09) + ax * u, pz = nz * (W / 2 - 0.09) + az * u;
        // the passage: the middle panel of the front and back on the ground floor is an open arch
        const passage = f === 0 && nz !== 0 && i === 1;
        let piece = 'Wall_UnevenBrick_Straight';
        if (passage) piece = null;
        else if (f > 0 && i === 1 && f % 2 === 1) piece = 'Wall_UnevenBrick_Window_Wide_Round';
        if (piece) put(piece, px, f * FLOOR_H, pz, ry);
        if (piece && piece.includes('Window')) put('Window_Wide_Round1', px, f * FLOOR_H, pz, ry);
        if (passage) put('Wall_Arch', px, 0, pz, ry);
      }
    }
    for (const [cx, cz] of [[1, 1], [1, -1], [-1, 1], [-1, -1]]) put('Corner_Exterior_Brick', cx * W / 2, f * FLOOR_H, cz * W / 2, Math.atan2(cx, cz) - Math.PI / 4);
  }
  put('Roof_Tower_RoundTiles', 0, floors * FLOOR_H, 0);
  return { g, top: y + floors * FLOOR_H * s };
}

export const FLOOR = FLOOR_H;

/**
 * Houses and towers are built from hundreds of little kit pieces: far too many draw calls for a phone
 * (the Stone Bridge had 13,000 per frame). After a level is built, collect every piece of every house and draw
 * each distinct piece once, instanced. The pieces share geometry, so this costs no extra memory.
 */
const CELL = 40;
export function batchKit(root) {
  root.updateWorldMatrix(true, true);
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
  const buckets = new Map(), groups = [];
  root.traverse((o) => { if (o.userData.kitStatic) groups.push(o); });
  const wp = new THREE.Vector3();
  for (const g of groups) {
    g.getWorldPosition(wp);
    const cell = `${Math.floor(wp.x / CELL)},${Math.floor(wp.z / CELL)}`;   // batched per 40 m block, so far blocks are still culled
    g.traverse((m) => {
      if (!m.isMesh || m.isInstancedMesh || m.isSkinnedMesh || Array.isArray(m.material) || !m.visible) return;
      if (m.matrixWorld.determinant() < 0) return;   // mirrored pieces keep their own mesh
      const key = `${cell}|${m.geometry.uuid}|${m.material.uuid}|${m.castShadow ? 1 : 0}${m.receiveShadow ? 1 : 0}`;
      let b = buckets.get(key);
      if (!b) buckets.set(key, (b = []));
      b.push(m);
    });
  }
  let saved = 0;
  const mtx = new THREE.Matrix4();
  for (const list of buckets.values()) {
    if (list.length < 2) continue;
    const src = list[0];
    const im = new THREE.InstancedMesh(src.geometry, src.material, list.length);
    list.forEach((m, i) => { im.setMatrixAt(i, mtx.multiplyMatrices(inv, m.matrixWorld)); m.removeFromParent(); });
    im.instanceMatrix.needsUpdate = true;
    im.castShadow = src.castShadow; im.receiveShadow = src.receiveShadow;
    im.userData.noHide = true;
    im.computeBoundingSphere();
    root.add(im);
    saved += list.length - 1;
  }
  return saved;
}
