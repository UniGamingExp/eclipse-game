// Chapter 5 · Damascus · Part 1 "Bab Sharqi" — her city, but only as a pencil sketch: they have never walked
// here together. Wherever they walk side by side, the drawing fills with colour.
//  1. Bab Sharqi: half the bridge over the ditch is missing from the drawing. Moon sees its dotted outline;
//     walking over it TOGETHER draws it in. Then her jasmine (seeds + his watering can) climbs the city wall.
//  2. Straight Street (side view): a missing stretch where Homesickness drifts and rubs the colour out again;
//     a barricade with a covered bridge over it (rose bounce; the tiles up there are burning hot until he
//     waters them); the flooded street under the Roman arch (lily pads); a burning cart and one more vine.
//  3. The courtyard of a Damascene house: plant jasmine, lilies and a rose, and it blooms.
//  🎮 Hidden minigame "Jasmine Rain": the little garden behind the inner square (through the north alley).
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { checkpoint, lane } from './play.js';
import { memoryMist } from '../memory.js';
import { createSketch, mergeStatic } from './sketch.js';
import { createGarden } from './garden.js';
import { createMinigame, starsGame, withMinigames } from './minigame.js';

const WALL0 = 56, WALL1 = 62, WALLH = 9;        // the city wall
const MOAT0 = 66, MOAT1 = 88;                   // the missing ditch bridge
const SZ0 = -4.4, SZ1 = 4.4;                    // Straight Street
const GH0 = -20, GH1 = 4;                       // the missing stretch of street
const BAR = -39, SAB0 = -46, SAB1 = -32, SABY = 8;   // the barricade and the covered bridge over it
const FL0 = -80, FL1 = -58;                     // the flooded street
const END = -98;                                // the house wall at the end of the street
const CX = -118;                                // the courtyard's middle

export function buildCh5Gate(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 5;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#e8dcd8'), 90, 300);
  sky(root, {
    top: '#6a7ab8', mid: '#e0c4d8', low: '#ffe2c4', neb1: '#c8b0ff', neb2: '#ffc0d0', stars: 0.25, nebula: 0.45, cloud: 0xfff0e8, far: false, cx: -10, cz: 0, seaY: -18,
    lightDir: [0.6, 0.55, 0.4],
    planets: [['lilac', -0.8, 0.32, 270, 0.3, 1.6], ['ember', 2.2, 0.24, 280, 0.2, 1.3]],
  });
  lights(root, { sunColor: 0xfff0dc, sunI: 2.4, hemiSky: 0xe6e2ff, hemiGround: 0xffe0c8, hemiI: 1.6, pos: [40, 60, 30], target: [-10, 0, 0], extent: 110 });

  // ================================================================ materials (they are drawn in pencil until coloured)
  const stoneM = mat(0xe8b47a, { roughness: 0.95 }), stone2M = mat(0xd89466, { roughness: 0.95 }), darkStoneM = mat(0x3a3050, { roughness: 0.9 });
  const paveM = mat(0xdcb48c, { roughness: 0.95 }), woodM = mat(0x8a5a3a, { roughness: 0.8 }), lattM = mat(0x6a3e2a, { roughness: 0.8 });
  const blueM = mat(0x3a7ab8, { roughness: 0.6 }), tileM = mat(0x2f8a8a, { roughness: 0.6 }), creamM = mat(0xfff0d8, { roughness: 0.9 });
  const glowM = new THREE.MeshStandardMaterial({ color: 0x2a2030, emissive: 0xffc070, emissiveIntensity: 0.35, roughness: 0.6 });
  const waterM = new THREE.MeshStandardMaterial({ color: 0x5aaed8, roughness: 0.1, metalness: 0.1, transparent: true, opacity: 0.85 });
  const inks = [];
  const statics = new THREE.Group(); statics.userData.static = true; world.add(statics);

  const solid = (x0, x1, z0, z1, top, bottom, m, col = {}, ink = true) => {
    const mesh = m ? add(statics, new THREE.BoxGeometry(x1 - x0, top - bottom, z1 - z0), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2) : null;
    if (mesh) { mesh.userData.noHide = true; if (ink) inks.push(mesh); }
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, noGrab: true, ...col };
    colliders.push(c);
    return Object.assign(c, { mesh });
  };
  const ground = (x0, x1, z0, z1, extra = {}) => {
    add(statics, new THREE.BoxGeometry(x1 - x0, 2, z1 - z0), paveM, (x0 + x1) / 2, -1, (z0 + z1) / 2, { cast: false }).userData.noHide = true;
    colliders.push({ type: 'box', x0, x1, z0, z1, top: 0, bottom: -2, safe: true, surface: 'concrete', ...extra });
  };

  /** a Damascene house: stone, ablaq stripes, a wooden bay window (mashrabiya), an arched door, a flat roof */
  const dHouse = (x, z, w, d, h, rotY, sd) => {
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; world.add(g); g.userData.noHide = true; g.userData.static = true;
    const body = add(g, new THREE.BoxGeometry(w, h, d), sd % 3 ? stoneM : stone2M, 0, h / 2, 0); inks.push(body);
    add(g, new THREE.BoxGeometry(w + 0.2, 0.5, d + 0.2), creamM, 0, h + 0.25, 0);
    for (let k = 0; k < 4; k++) add(g, new THREE.BoxGeometry(w + 0.06, 0.22, d + 0.06), k % 2 ? creamM : darkStoneM, 0, 2.4 + k * 0.22, 0, { cast: false });
    add(g, new THREE.BoxGeometry(1.2, 2.0, 0.1), woodM, (sd % 2 ? -1 : 1) * w * 0.22, 1.0, d / 2 + 0.05, { cast: false });
    add(g, new THREE.CylinderGeometry(0.6, 0.6, 0.1, 14, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), woodM, (sd % 2 ? -1 : 1) * w * 0.22, 2.0, d / 2 + 0.05, { cast: false });
    if (h > 5.5) {
      const bx = (sd % 2 ? 1 : -1) * w * 0.18;
      const bay = add(g, new THREE.BoxGeometry(Math.min(3, w * 0.5), 1.7, 0.8), lattM, bx, h - 1.9, d / 2 + 0.4); inks.push(bay);
      add(g, new THREE.BoxGeometry(Math.min(3, w * 0.5) - 0.3, 1.2, 0.05), glowM, bx, h - 1.9, d / 2 + 0.82, { cast: false });
    }
    if (sd % 4 === 0) for (let k = 0; k < 5; k++) add(g, new THREE.SphereGeometry(0.28, 6, 5), mat([0x6ab86a, 0x8fc878][k % 2]), -w / 2 + 0.4 + k * (w - 0.8) / 4, h + 0.7, d / 2 - 0.2, { cast: false });
    return g;
  };

  // ================================================================ ground
  ground(MOAT1, 126, -30, 30);
  ground(MOAT0 - 4, MOAT0, -30, 30, { noGrab: true });
  ground(GH1, WALL0, -30, 58);                       // the inner square, the alley, the garden, the start of the street
  ground(-58, GH0, SZ0, SZ1);
  ground(END - 2, FL0, SZ0, SZ1, { noGrab: true });
  ground(-140, END, -22, 22);
  add(world, new THREE.BoxGeometry(FL1 - FL0, 0.1, SZ1 - SZ0), waterM, (FL0 + FL1) / 2, -0.35, 0, { cast: false }).userData.noHide = true;
  add(world, new THREE.BoxGeometry(FL1 - FL0, 1.2, SZ1 - SZ0), mat(0x3a6a88), (FL0 + FL1) / 2, -1.0, 0, { cast: false });

  // ================================================================ 1. BAB SHARQI
  solid(WALL0, WALL1, -44, 44, WALLH, 0, stoneM);
  for (const [z, w, h] of [[0, 4.4, 7.4], [-6.2, 2.4, 4.6], [6.2, 2.4, 4.6]]) {
    add(world, new THREE.BoxGeometry(0.2, h - w / 2, w), darkStoneM, WALL1 + 0.05, (h - w / 2) / 2, z, { cast: false });
    add(world, new THREE.CylinderGeometry(w / 2, w / 2, 0.2, 18, 1, false, 0, Math.PI).rotateZ(Math.PI / 2).rotateY(Math.PI / 2), darkStoneM, WALL1 + 0.05, h - w / 2, z, { cast: false });
  }
  for (let z = -42; z <= 42; z += 2.2) add(world, new THREE.BoxGeometry(1.2, 0.9, 1.0), stoneM, WALL1 - 0.6, WALLH + 0.45, z);
  colliders.push({ type: 'box', x0: WALL1 - 1.2, x1: WALL1, z0: -44, z1: 44, top: WALLH + 0.9, bottom: WALLH, noGrab: true });
  stars.push(makeStar(world, 'c5-gate', 58.5, WALLH + 1.5, 0, 0));
  // outside: a few houses and palms along the road to the gate
  let hs = 1;
  for (const z of [-22, -14, 14, 22]) dHouse(112, z, 7, 6, 5 + (hs % 2) * 2, -Math.PI / 2, hs++);
  for (const [x, z] of [[96, -12], [96, 12], [118, 0]]) {
    add(world, new THREE.CylinderGeometry(0.2, 0.3, 6, 7), mat(0x9a7a5a), x, 3, z);
    for (let k = 0; k < 7; k++) { const m = add(world, new THREE.BoxGeometry(2.6, 0.06, 0.5), mat(0x6aa85a), x + Math.cos(k * 0.9) * 1.2, 6 - 0.2, z + Math.sin(k * 0.9) * 1.2); m.rotation.y = -k * 0.9; m.rotation.z = 0.3; }
    colliders.push({ type: 'cyl', x, z, r: 0.35, top: 6, bottom: 0, noGrab: true, noStep: true });
  }

  // the inner square
  for (let x = 30; x <= 52; x += 7) dHouse(x, -27, 7, 6, 6 + (hs % 2), 0, hs++);
  colliders.push({ type: 'box', x0: 26.5, x1: 55.5, z0: -30, z1: -24, top: 7.6, bottom: 0, noGrab: true });
  dHouse(30.5, 27, 7, 6, 6, Math.PI, hs++);
  colliders.push({ type: 'box', x0: 27, x1: 40, z0: 24, z1: 30, top: 6.6, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: 46, x1: 55.5, z0: 24, z1: 30, top: 6.6, bottom: 0, noGrab: true });
  dHouse(36.9, 27, 4.6, 6, 6, Math.PI, hs++); dHouse(48.6, 27, 4.6, 6, 6, Math.PI, hs++); dHouse(53.2, 27, 4.6, 6, 6.5, Math.PI, hs++);
  // the corner blocks that close the square towards the street
  solid(GH1, 26.5, SZ1 + 0.2, 30, 7, 0, stoneM);
  solid(GH1, 26.5, -30, SZ0 - 0.2, 7, 0, stoneM);
  add(world, new THREE.CylinderGeometry(1.4, 1.6, 0.8, 12), stoneM, 42, 0.4, 4);               // a little fountain
  add(world, new THREE.CylinderGeometry(1.2, 1.2, 0.1, 12), waterM, 42, 0.8, 4, { cast: false });
  colliders.push({ type: 'cyl', x: 42, z: 4, r: 1.6, top: 0.8, bottom: 0 });
  stars.push(makeStar(world, 'c5-roof', 44, 8.6, -26.5, 1));

  // the north alley and the hidden garden
  solid(39.4, 40, 30, 40, 5, 0, stoneM); solid(46, 46.6, 30, 40, 5, 0, stoneM);
  solid(32, 40, 39.4, 40, 4, 0, stoneM); solid(46, 54, 39.4, 40, 4, 0, stoneM);
  solid(31.4, 32, 40, 56, 4, 0, stoneM); solid(54, 54.6, 40, 56, 4, 0, stoneM); solid(32, 54, 55.4, 56, 4, 0, stoneM);
  for (let k = 0; k < 14; k++) add(world, new THREE.SphereGeometry(0.11, 6, 4), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0d8, emissiveIntensity: 0.5 }), 32.4 + (k % 7) * 3.2, 3.2 + (k % 3) * 0.2, k < 7 ? 55.2 : 40.2, { cast: false });
  const mgG = new THREE.Group(); mgG.userData.noSketch = true; world.add(mgG);
  const mgJas = createMinigame(mgG, colliders, {
    id: 'c5jas', title: 'Jasmine Rain', rules: ['The jasmine is falling! Catch the most.', 'Golden flowers count 3 🌼'],
    at: { x: 43, y: 0, z: 41.6 }, face: 0, pads: { sun: [40.6, 43], moon: [45.4, 43] }, dur: 32000,
    game: starsGame({ cx: 43, cz: 49.5, y: 0, half: 4.2, count: 56 }),
  });

  // ================================================================ 2. STRAIGHT STREET (side view)
  for (let x = 0; x >= END + 4; x -= 8) dHouse(x, -8.4, 8, 7, 6 + ((hs * 7) % 3), 0, hs++);
  colliders.push({ type: 'box', x0: END, x1: 28, z0: -12, z1: SZ0 - 0.1, top: 9, bottom: -2, noGrab: true });
  // camera side: only a low parapet and the old colonnade (the drawing is mostly blank there)
  colliders.push({ type: 'box', x0: END, x1: GH1, z0: SZ1, z1: SZ1 + 0.4, top: 1.1, bottom: -2, noGrab: true, noCam: true });
  for (let x = 22; x >= END + 2; x -= 9) {
    const c = add(world, new THREE.CylinderGeometry(0.32, 0.36, 5.2, 10), creamM, x, 2.6, SZ1 + 0.6); c.userData.noHide = false;
    add(world, new THREE.BoxGeometry(0.9, 0.3, 0.9), creamM, x, 5.3, SZ1 + 0.6);
  }
  // shop awnings and lanterns along the south side
  for (let x = 20; x >= END + 6; x -= 8) {
    if (x < GH1 && x > GH0) continue;
    add(world, rbox(3.2, 0.1, 1.4, 0.04), mat([0xd8504a, 0x3a8ab8, 0xe2b03a, 0x5aa05a][Math.abs(Math.round(x / 8)) % 4]), x, 3.2, SZ0 + 0.6).rotation.x = -0.25;
    add(world, new THREE.SphereGeometry(0.2, 8, 6), new THREE.MeshStandardMaterial({ color: 0xffe0a0, emissive: 0xffc070, emissiveIntensity: 0.8 }), x + 2.5, 3.6, SZ0 + 0.3, { cast: false });
  }
  // the barricade and the covered bridge (sabat) over it
  solid(BAR - 1, BAR + 1, SZ0, SZ1, SABY, 0, woodM);
  for (let k = 0; k < 6; k++) { const m = add(world, rbox(1.4, 1.0, 1.2, 0.1), stone2M, BAR + 1.6 + (k % 2) * 0.6, 0.5 + Math.floor(k / 2) * 0.9, -3 + k * 1.1); m.rotation.y = k; }
  add(world, new THREE.CylinderGeometry(1.2, 1.2, 0.3, 14).rotateX(Math.PI / 2), woodM, BAR + 1.3, 1.2, 2.2);   // a cart wheel
  solid(SAB0, SAB1, SZ0, SZ1, SABY, SABY - 0.6, stone2M);
  for (const x of [SAB0 + 0.3, SAB1 - 0.3]) add(world, new THREE.BoxGeometry(0.6, 3, SZ1 - SZ0), stoneM, x, SABY - 2.1, 0).userData.noHide = true;
  stars.push(makeStar(world, 'c5-sabat', SAB0 + 1.2, SABY + 1.4, 0, 2));
  // the flooded street under the Roman arch
  const archX = -69.4;
  for (const z of [-5.6, 5.6]) solid(archX - 1.2, archX + 1.2, z - 1.2, z + 1.2, 9, -1.5, creamM, { noCam: z > 0 });
  add(world, new THREE.TorusGeometry(5.6, 1.0, 8, 24, Math.PI).rotateY(Math.PI / 2), creamM, archX, 9, 0).userData.noHide = true;
  add(world, new THREE.BoxGeometry(2.4, 1.2, 14), creamM, archX, 15.2, 0).userData.noHide = true;
  stars.push(makeStar(world, 'c5-lily', -69.4, 3.0, 0, 3));
  // the end of the street: a house wall, a burning cart before it
  solid(END - 2, END, -22, 22, WALLH, 0, stoneM);
  for (let k = 0; k < 4; k++) add(world, new THREE.BoxGeometry(0.1, 1.3, 1.0), lattM, END + 0.05, 5 + (k % 2) * 0.1, -3 + k * 2, { cast: false });
  add(world, rbox(3.2, 1.0, 1.8, 0.1), woodM, -85.6, 0.5, -1.8);

  // ================================================================ 3. THE COURTYARD
  solid(-140, -138, -22, 22, WALLH, 0, stoneM);
  solid(-140, END, -22, -20, WALLH, 0, stoneM);
  solid(-140, END, 20, 22, WALLH, 0, stoneM);
  // the iwan (a big arched hall open to the courtyard) on the south side, a liwan roof terrace above it
  solid(-128, -108, -20, -15, 8, 0, stone2M);
  add(world, new THREE.BoxGeometry(6, 5.2, 0.2), darkStoneM, -118, 2.6, -14.9, { cast: false });
  add(world, new THREE.CylinderGeometry(3, 3, 0.2, 20, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), darkStoneM, -118, 5.2, -14.9, { cast: false });
  for (let k = 0; k < 3; k++) add(world, new THREE.BoxGeometry(20.06, 0.25, 5.06), k % 2 ? creamM : darkStoneM, -118, 6.6 + k * 0.25, -17.5, { cast: false });
  stars.push(makeStar(world, 'c5-iwan', -111, 9.4, -17.5, 4));
  // the fountain
  const fountain = add(world, new THREE.CylinderGeometry(4.2, 4.4, 0.7, 8), creamM, CX, 0.35, 0); inks.push(fountain);
  add(world, new THREE.CylinderGeometry(3.7, 3.7, 0.1, 8), waterM, CX, 0.55, 0, { cast: false });
  add(world, new THREE.CylinderGeometry(0.35, 0.5, 1.6, 8), creamM, CX, 1.2, 0);
  colliders.push({ type: 'cyl', x: CX, z: 0, r: 4.3, top: 0.7, bottom: 0 });
  colliders.push({ type: 'cyl', x: CX, z: 0, r: 0.5, top: 2.0, bottom: 0.7, noGrab: true });
  // tiled floor pattern, lemon tree, benches with cushions
  for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) if ((i + j) % 2 === 0 && Math.hypot(i, j) > 1.6) add(world, new THREE.BoxGeometry(2.6, 0.04, 2.6), (i * j) % 3 ? tileM : creamM, CX + i * 2.9, 0.02, j * 2.9, { cast: false });
  add(world, new THREE.CylinderGeometry(0.25, 0.32, 3, 7), mat(0x7a5a44), -128, 1.5, 11);
  add(world, new THREE.IcosahedronGeometry(2.2, 1), mat(0x5aa04a, { flatShading: true }), -128, 4.2, 11);
  for (let k = 0; k < 9; k++) add(world, new THREE.SphereGeometry(0.17, 7, 5), mat(0xffe03a), -128 + Math.cos(k) * 1.9, 3.6 + (k % 3) * 0.6, 11 + Math.sin(k) * 1.9, { cast: false });
  colliders.push({ type: 'cyl', x: -128, z: 11, r: 0.35, top: 3, bottom: 0, noGrab: true, noStep: true });
  for (const z of [-11, 11]) { add(world, rbox(6, 0.6, 1.2, 0.1), creamM, -104, 0.3, z); add(world, rbox(5.6, 0.25, 1.0, 0.1), mat(0xa8324a), -104, 0.72, z); colliders.push({ type: 'box', x0: -107, x1: -101, z0: z - 0.6, z1: z + 0.6, top: 0.85, bottom: 0 }); }

  // ================================================================ the sketch, the garden, Homesickness
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const ghostDefs = [];
  for (let x = MOAT1; x > MOAT0 + 0.1; x -= (MOAT1 - MOAT0) / 7) ghostDefs.push({ x0: x - (MOAT1 - MOAT0) / 7, x1: x, z0: -1.7, z1: 1.7, y: 0, noGrab: true });
  for (let x = GH1; x > GH0 + 0.1; x -= 3) ghostDefs.push({ x0: x - 3, x1: x, z0: SZ0 + 0.6, z1: SZ1 - 0.6, y: 0, noGrab: true });
  const sketch = createSketch(world, {
    key: 'ch5a', x0: -142, x1: 128, z0: -50, z1: 60, ghosts: ghostDefs, ghostM: paveM,
    wisps: [
      { pos: (ms) => [(GH0 + GH1) / 2 + Math.sin((ms / 1000) * (2 * Math.PI / 11)) * 11, 0], y: 0, r: 2.3 },
      { pos: (ms) => [CX + Math.cos((ms / 1000) * (2 * Math.PI / 24)) * 9, Math.sin((ms / 1000) * (2 * Math.PI / 24)) * 9], y: 0, r: 2.6 },
    ],
  });
  for (const c of sketch.colliders) colliders.push(c);
  const garden = createGarden(world, colliders, {
    key: 'ch5a',
    patches: [
      { id: 'gate', kind: 'vine', x: WALL1 + 0.75, y: 0, z: -7.5, h: WALLH + 0.9, n: [1, 0] },
      { id: 'roof', kind: 'rose', x: 44, y: 0, z: -19.6, v: 21, aim: [0, -8] },
      { id: 'sabat', kind: 'rose', x: SAB1 + 5, y: 0, z: 0, v: 23, aim: [-9, 0], lock: 1.3 },
      { id: 'lily', kind: 'lily', x: FL1 + 1.2, y: 0, z: 0, to: [-1, 0], count: 7, gap: 3.1 },
      { id: 'end', kind: 'vine', x: END + 0.75, y: 0, z: 0, h: WALLH, n: [1, 0], stair: 'out' },
      { id: 'c-vine', kind: 'vine', x: -112, y: 0, z: -14.25, h: 8, n: [0, 1] },
      { id: 'c-lily', kind: 'lily', x: CX + 4.0, y: 0.7, py: 0.5, z: 0, to: [-1, 0], count: 2, gap: 2.4 },
      { id: 'c-rose', kind: 'rose', x: -128, y: 0, z: -6, v: 19 },
    ],
    hot: [{ id: 'sabat', x0: SAB0, x1: SAB1 + 0.5, z0: SZ0, z1: SZ1, y: SABY }],
    fires: [{ id: 'cart', x: -86, y: 0, z: 0, w: 1.4, d: SZ1 - SZ0, h: 4.6 }],
    onGrow(id) {
      const t = {
        gate: 'Jasmine! 🌿 It climbs the old wall faster than you can say "yalla".',
        sabat: 'A rose bush. Jump on it… boing! 🌹',
        lily: 'Lily pads across the flood 🪷 (her favourite flower).',
        end: 'One more vine, and over the wall!',
      }[id];
      if (t) api?.caption(t, 3600);
      const c = ['c-vine', 'c-lily', 'c-rose'].filter((k) => garden.grown(k)).length;
      if (id.startsWith('c-') && c < 3) api?.caption(['', 'The courtyard is waking up… 🌱', 'Almost! One more plant.'][c], 3200);
    },
  });
  // (the courtyard's lily patch sits in the fountain: the pads float over the water)

  sign(world, 100, -3.6, Math.PI / 2, ['DAMASCUS · باب شرقي', 'Walk TOGETHER: the', 'drawing fills in 🎨']);
  sign(world, 64.6, -9, Math.PI / 2, ['☾ plants a seed,', '☀ waters it 💧']);
  hangSign(world, 14, 3.8, SZ0 + 0.5, ['Missing street ahead.', 'She can see it. Stay close!']);
  hangSign(world, -26, 3.8, SZ0 + 0.5, ['Hot tiles up there 🔥', 'Water them first']);

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: 104, y: 0, z: 6, r: 2.4, sun: [104, 0, -1], moon: [104, 0, 1], yaw: Math.PI / 2 }),
    checkpoint(world, { x: 50, y: 0, z: 8, r: 2.6, sun: [50, 0, -1], moon: [50, 0, 1], label: 'Bab Sharqi', yaw: Math.PI / 2 }),
    checkpoint(world, { x: -23, y: 0, z: -1.6, r: 2.2, sun: [-22.6, 0, -0.6], moon: [-24, 0, 0.6], label: 'Straight Street' }),
    checkpoint(world, { x: -53, y: 0, z: -1.6, r: 2.2, sun: [-52.6, 0, -0.6], moon: [-54, 0, 0.6], label: 'The flooded street' }),
    checkpoint(world, { x: -106, y: 0, z: 4, r: 2.6, sun: [-106, 0, -1], moon: [-106, 0, 1], label: 'The courtyard', yaw: Math.PI / 2 }),
  ];
  {
    const P = [];
    for (let x = -140; x <= 126; x += 8) { P.push([x, 1 + R() * 3, 34 + R() * 6]); P.push([x, 1 + R() * 3, -34 - R() * 4]); }
    for (let z = -30; z <= 30; z += 8) { P.push([128 + R() * 2, 1 + R() * 3, z]); P.push([-143, 1 + R() * 3, z]); }
    memoryMist(world, P, { size: 12, color: 0xece4e8, opacity: 0.45 });
  }
  for (const m of inks) sketch.ink(m);
  for (const s of stars) s.mesh.userData.noSketch = true;
  for (const c of cps) c.g.userData.noSketch = true;
  sketch.patch(world);
  mergeStatic(world);

  // ================================================================ state
  let doneT = -1, restored = false;
  const line = lane([27, 0], [END, 0], { half: 2.3, y0: -3, y1: 30, dist: 15, pitch: 0.1 });

  return {
    id: 'ch5-gate',
    title: 'Chapter 5 · Damascus — Bab Sharqi',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(104, 0, -1), moon: new THREE.Vector3(104, 0, 1) },
    camYaw: { sun: Math.PI / 2, moon: Math.PI / 2 },
    lobbyCam: { cx: 20, cz: 0, r: 90, h: 44 },
    killY: -6,
    killAt: (p) => p.y < -2 || (p.y < -0.9 && p.x > FL0 && p.x < FL1),
    lanes: [line],
    checkpoints: cps,
    hints: [
      'Moon can see the missing part of the bridge (dotted lines). Walk onto it side by side, close together: it gets drawn in under you. At the wall: Moon plants a seed in the lilac ring (Seeds), Sun waters it (Water). Climb the jasmine.',
      'Through the square to Straight Street (west). The missing stretch only appears while you walk it together; when the grey wisp passes, the colour fades, so wait for it to drift off.',
      'East of the barricade: Sun waters the hot tiles up on the bridge from below, Moon plants the rose, Sun waters it. Then both jump on the rose quickly, before the tiles heat up again.',
      'Moon plants the lily patch at the edge of the water, Sun waters it. At the end of the street: Sun puts out the burning cart, then the two of you grow one more jasmine up the wall.',
      'Three lilac rings in the courtyard: by the hall (jasmine), in the fountain (lilies) and by the lemon tree (a rose). Plant all three, water all three.',
    ],
    respawnNearPartner: (pp) => !!pp && pp.y > -0.5,
    portal: new THREE.Vector3(CX, 0.7, 6.5),
    intro: {
      all: ['Chapter 5 · Damascus', 'Part 1 · Bab Sharqi', 'Her city. They have never walked here together, so it\'s only a sketch: paper, pencil, half the streets missing. "I know the way," she says. "Stay close."'],
      sun: 'Water ✦ makes her plants grow · cools hot tiles · puts out fires',
      moon: 'Seeds ✦ plant jasmine, lilies and roses · you can see the missing streets',
    },
    abilities: withMinigames(garden.abilities, [mgJas]),
    sketch, garden,
    attach(a) { api = a; sketch.attach(a); garden.attach(a); mgJas.attach(a); },
    onCheckpoint() {},
    debug: () => ({ g: garden.grownMask(), gh: sketch.ghosts.filter((g) => g.on).length, together: sketch.together() }),
    story(ctx, t) {
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      if (P.some((p) => p.x < 96)) once('moat', ctx, 'The bridge just… stops. It was never drawn. (Moon: you can see where it goes. Lead the way, together.)', 5200);
      if (P.some((p) => p.x < MOAT0 + 0.5 && p.x > WALL1)) once('wall', ctx, 'Bab Sharqi, the East Gate. Closed. But there is soil at the foot of the wall… 🌱', 4200);
      if (P.some((p) => p.x < WALL0 && p.y < 2)) once('in', ctx, '"Every street I love is in here." Straight Street starts on the far side of the square.', 4600);
      if (P.some((p) => p.x < GH1 + 6 && p.x > GH0)) once('ghost', ctx, 'Homesickness drifts here, rubbing the colour back out. Wait for it.', 4400);
      if (P.some((p) => p.x < BAR + 9 && p.x > SAB0)) once('bar', ctx, 'A barricade. Over the covered bridge, then… if you don\'t mind hot tiles.', 4200);
      if (P.some((p) => p.x < FL1 + 3 && p.x > FL0)) once('flood', ctx, 'The street is flooded under the old Roman arch. Lilies grow on water 🪷', 4200);
      if (P.some((p) => p.x < END && p.y < 2)) once('court', ctx, 'A Damascene courtyard. A fountain, a lemon tree, and three empty patches of soil.', 4600);
      if (garden.grown('c-vine') && garden.grown('c-lily') && garden.grown('c-rose') && doneT < 0) {
        doneT = t;
        sketch.bloom(new THREE.Vector3(CX, 0, 0));
        const lines = [
          ['The courtyard bursts into colour: jasmine over the hall, lilies in the fountain, the smell of lemons. 🍋', 4800],
          ['"This is what it\'s like here," she says. "Well. Almost."', 4000],
          ['"You\'ll show me the real one." "I\'ll show you everything."', 4200],
          ['Part 1 complete ✨ Next: Bab Touma.', 3400],
        ];
        let at = 2400;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      sketch.update(dt, serverMs, t);
      mgJas.update(dt, serverMs, t);
      if (!api) return;
      const cpi = api.save?.cp?.l === 'ch5-gate' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      if (!restored) { restored = true; sketch.restore(); for (let i = 1; i <= cpi; i++) sketch.paint(cps[i].x, cps[i].z, 12); }
    },
  };
}
