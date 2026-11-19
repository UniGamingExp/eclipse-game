// Chapter 5 · Damascus · Part 3 "Souq al-Hamidiyah" — the covered market with the iron roof full of little holes,
// so the floor is covered in dots of sunlight.
//  1. The square before the souq. Inside the entrance, rubble: her seeds only take where a dot of sunlight is,
//     and the dots drift as the sun moves.
//  2. Under the vault (side view): the floor has fallen into the cellar. In a sunbeam, his watering can makes a
//     rainbow, but too faint to walk on; her seeds make it bloom and hold. Three beams, two rainbows, each
//     one 3 m higher than the last.
//  3. The roof: up a jasmine through a hole in the vault, along hot iron (water it), a rose across to the khan.
//  4. The ice-cream parlour: pound the booza together, in turns. She gets a little homesick.
//  🎮 Hidden minigame "Booza Pound": the carpet seller's yard off the square (north side).
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { checkpoint, lane, plate } from './play.js';
import { memoryMist } from '../memory.js';
import { createSketch, mergeStatic } from './sketch.js';
import { createGarden } from './garden.js';
import { damascusKit } from './damascus.js';
import { createMinigame, mashGame, withMinigames } from './minigame.js';

const VY = 12.5;                                  // the vault's ridge
const RUB0 = -84, RUB1 = -80, RUBH = 7.5;         // the rubble inside the entrance
const VOID0 = -70, VOID1 = -34;                   // the floor that fell into the cellar
const UP = 6;                                     // the upper floor after the rainbows
const KH = 16.5, KH0 = 23, KH1 = 40;              // the khan's roof
const SHOP0 = 30, SHOP1 = 60;                     // the ice-cream parlour

export function buildCh5Souq(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 13;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#ecd8d8'), 90, 300);
  sky(root, {
    top: '#5a6ab0', mid: '#e0c4d8', low: '#ffe0c4', neb1: '#c8b0ff', neb2: '#ffc0d0', stars: 0.25, nebula: 0.45, cloud: 0xfff0e8, far: false, cx: -20, cz: 0, seaY: -18,
    lightDir: [0.4, 0.7, 0.4],
    planets: [['lilac', -0.4, 0.34, 270, 0.3, 1.6], ['ember', 2.0, 0.26, 280, 0.2, 1.3]],
  });
  lights(root, { sunColor: 0xfff0dc, sunI: 2.4, hemiSky: 0xe6e2ff, hemiGround: 0xffe0c8, hemiI: 1.6, pos: [30, 70, 20], target: [-20, 0, 0], extent: 110 });

  const K = damascusKit(world), M = K.M;
  const solid = (...a) => K.solid(colliders, ...a);
  const ground = (...a) => K.ground(colliders, ...a);
  const ironM = mat(0x6a7488, { roughness: 0.5, metalness: 0.5 });
  let hs = 7;

  // ================================================================ ground
  ground(-132, -90, -16, 32);                       // the square and the carpet seller's yard
  ground(-90, VOID0, -5, 5);                        // inside the entrance
  ground(SHOP0 - 2, SHOP1 + 14, -12, 12);           // the parlour and the columns (the rest of the souq floor has fallen in)
  colliders.push({ type: 'box', x0: VOID0, x1: VOID1, z0: -5, z1: 5, top: -8, bottom: -10, surface: 'concrete' });   // the cellar floor (you can't climb out: killAt)
  add(world, new THREE.BoxGeometry(VOID1 - VOID0, 0.4, 10), M.dark, (VOID0 + VOID1) / 2, -8.2, 0, { cast: false });

  // ================================================================ 1. THE SQUARE AND THE ENTRANCE
  for (let x = -128; x <= -96; x += 8) { K.house(x, -19.5, 8, 6, 6 + (hs % 2), 0, hs++); if (x !== -112 && x !== -104) K.house(x, 35.5, 8, 6, 6, Math.PI, hs++); }
  colliders.push({ type: 'box', x0: -132, x1: -90, z0: -23, z1: -16, top: 7.6, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -132, x1: -90, z0: 32, z1: 39, top: 6.6, bottom: 0, noGrab: true });
  solid(-136, -132, -16, 32, 7, 0, M.stone);
  // the north side of the square: the carpet seller's yard behind a wall with a gate
  solid(-132, -114, 13.6, 14.4, 4, 0, M.stone); solid(-108, -90, 13.6, 14.4, 4, 0, M.stone);
  for (let k = 0; k < 6; k++) add(world, new THREE.BoxGeometry(2.4, 2.8, 0.06), mat([0xb8324a, 0x2a5a9a, 0xc8a03a, 0x6a2a5a][k % 4]), -129 + k * 3.4, 2.4, 14.5, { cast: false });
  // the souq's entrance: a big arch in a high wall
  solid(-92, -90, -16, -5, 14, 0, M.stone); solid(-92, -90, 5, 32, 14, 0, M.stone); solid(-92, -90, -5, 5, 14, 10, M.stone);
  add(world, new THREE.TorusGeometry(5, 0.45, 8, 24, Math.PI).rotateY(Math.PI / 2), M.cream, -92.2, 10, 0).userData.noHide = true;
  // the souq's walls: shops on the far side (+z), only a low counter on the near side (the drawing has no front)
  solid(-90, SHOP0 - 2, 5, 8, VY - 4, 0, M.stone2);
  colliders.push({ type: 'box', x0: -90, x1: SHOP0 - 2, z0: -5.4, z1: -5, top: 1.0, bottom: -10, noGrab: true, noCam: true });
  add(world, new THREE.BoxGeometry(SHOP0 - 2 + 90, 1.0, 0.4), M.cream, (SHOP0 - 2 - 90) / 2, 0.5, -5.2).userData.noHide = true;
  // the iron vault: only the back half is drawn (panels from the shop wall up to the ridge), with iron ribs
  {
    const L = SHOP0 - 2 + 90, cx = (SHOP0 - 2 - 90) / 2;
    const arc = (u) => [5 * Math.cos(u * Math.PI / 2), (VY - 4.5) + 4.5 * Math.sin(u * Math.PI / 2)];   // u 0 → wall top, 1 → ridge
    const vaultM = new THREE.MeshStandardMaterial({ color: 0x9aa2b8, roughness: 0.5, metalness: 0.3, side: THREE.DoubleSide });
    for (let k = 0; k < 4; k++) {
      const [z0, y0] = arc(k / 4), [z1, y1] = arc((k + 1) / 4);
      const w = Math.hypot(z1 - z0, y1 - y0);
      const m = add(K.statics, new THREE.BoxGeometry(L, 0.12, w), vaultM, cx, (y0 + y1) / 2, (z0 + z1) / 2);
      m.rotation.x = Math.atan2(y1 - y0, z0 - z1);
    }
    for (let x = -88; x <= SHOP0 - 4; x += 6) {
      const pts = []; for (let k = 0; k <= 8; k++) { const [z, y] = arc(k / 8); pts.push(new THREE.Vector3(x, y - 0.1, z)); }
      add(K.statics, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 8, 0.1, 5), ironM, 0, 0, 0);
    }
  }
  // stalls along the back wall: fabric rolls, spice sacks, lanterns
  for (let x = -86; x <= SHOP0 - 6; x += 5) {
    if (x > VOID0 - 1 && x < VOID1 + 1) continue;
    const y0 = x > VOID1 && x < -10 ? UP : 0;
    add(world, rbox(3.6, 0.9, 1.2, 0.05), M.wood, x, y0 + 0.45, 4.2);
    for (let k = 0; k < 4; k++) add(world, new THREE.CylinderGeometry(0.22, 0.22, 1.0, 8).rotateZ(Math.PI / 2), mat([0xd8504a, 0x3a8ab8, 0xe2b03a, 0x5aa05a, 0xc85a9a][(k + Math.round(x)) % 5 < 0 ? 0 : (k + Math.abs(Math.round(x))) % 5]), x - 1.2 + k * 0.8, y0 + 1.1, 4.2, { cast: false });
    K.lantern(x + 1.8, y0 + 3.4, 4.6);
  }

  // the rubble and the first sunlit patch
  solid(RUB0, RUB1, -5, 5, RUBH, 0, M.stone2);
  for (let k = 0; k < 8; k++) { const m = add(world, rbox(1.6, 1.1, 1.4, 0.15), M.stone, RUB0 - 0.6 + (k % 2) * 0.5, 0.55 + Math.floor(k / 2) * 0.9, -3 + (k % 3) * 2); m.rotation.y = k; }
  stars.push(makeStar(world, 'c5s-rubble', (RUB0 + RUB1) / 2, RUBH + 1.6, 0, 0));

  // ================================================================ 2. THE FALLEN FLOOR: beams, a pillar, the upper floor
  const PB0 = -54, PB1 = -50;
  solid(PB0, PB1, -2.2, 2.2, 3, -9, M.stone);
  solid(VOID1, -10, -5, 5, UP, -9, M.stone2);                       // the upper floor (with the old shops under it)
  solid(-10, -8, -5, 5, VY, -9, M.stone);                           // the wall at its end, up to the roof
  for (let x = VOID0; x < VOID1; x += 4) add(world, new THREE.BoxGeometry(0.6, 0.3, 10), M.wood, x + 2, -1.5 - (x % 3), 0, { cast: false }).rotation.z = 0.4;   // broken beams

  // ================================================================ 3. THE ROOF (a walkway along the ridge) AND THE KHAN
  solid(-34, -13, -1.6, 1.6, VY + 0.3, VY - 0.2, ironM);            // the vault over the upper floor (closed)
  for (const [x0, x1] of [[-9.5, -2], [0, 5], [7, 10]]) solid(x0, x1, -1.6, 1.6, VY, VY - 0.4, ironM);
  solid(KH0, 34, -12, 12, KH, KH - 1, M.stone);        // (x 34…40 is the open skylight over the parlour)
  solid(34, KH1, -12, -4, KH, KH - 1, M.stone); solid(34, KH1, 4, 12, KH, KH - 1, M.stone);
  solid(SHOP0 - 2, SHOP0, -10, 10, KH - 1, 0, M.stone);   // the parlour's back wall (the end of the souq)
  solid(KH0, KH1, -12, -10, KH - 1, 0, M.stone); solid(KH0, KH1, 10, 12, KH - 1, 0, M.stone);
  solid(KH0, KH0 + 2, -10, 10, KH - 1, VY + 1.5, M.stone);
  for (const [x, z] of [[27, -6], [33, 6]]) { add(world, new THREE.SphereGeometry(2.4, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), M.cream, x, KH, z); colliders.push({ type: 'cyl', x, z, r: 2.4, top: KH + 2.4, bottom: KH, noGrab: true }); }
  stars.push(makeStar(world, 'c5s-dome', 27, KH + 3.8, -6, 3));
  stars.push(makeStar(world, 'c5s-ridge', 6, VY + 2.6, 0, 2));

  // ================================================================ 4. THE ICE-CREAM PARLOUR and the columns outside
  // (you drop in through the open skylight of the khan: x 34…40)
  solid(SHOP1, SHOP1 + 2, -12, -3, 9, 0, M.stone); solid(SHOP1, SHOP1 + 2, 3, 12, 9, 0, M.stone); solid(SHOP1, SHOP1 + 2, -3, 3, 9, 5, M.stone);
  solid(KH1, SHOP1, -12, -10, 9, 0, M.stone2); solid(KH1, SHOP1, 10, 12, 9, 0, M.stone2);
  const exitDoor = solid(SHOP1, SHOP1 + 0.4, -3, 3, 5, 0, null);
  const exitM = add(world, rbox(0.3, 5, 6, 0.06), M.wood, SHOP1 + 0.2, 2.5, 0); exitM.userData.noHide = true;
  // the parlour: counter, freezer, the copper tub with two pads, little tables
  add(world, rbox(10, 1.1, 1.4, 0.08), M.cream, 50, 0.55, -8.4); colliders.push({ type: 'box', x0: 45, x1: 55, z0: -9.1, z1: -7.7, top: 1.1, bottom: 0 });
  for (let k = 0; k < 6; k++) add(world, new THREE.CylinderGeometry(0.35, 0.35, 0.3, 14), mat([0xbfe8a0, 0xffd6ec, 0xfff4d8, 0x9ad08a, 0xd8b0ff, 0xffe0a0][k]), 46 + k * 1.6, 1.25, -8.4, { cast: false });
  add(world, rbox(6, 0.2, 0.8, 0.04), M.wood, 50, 3.2, -11.5); colliders.push({ type: 'box', x0: 47, x1: 53, z0: -12, z1: -11.1, top: 3.3, bottom: 3.1 });
  stars.push(makeStar(world, 'c5s-cone', 50, 4.4, -11.5, 4));
  const tub = new THREE.Group(); tub.position.set(50, 0, 3); world.add(tub); tub.userData.noSketch = true;
  add(tub, new THREE.CylinderGeometry(1.3, 1.0, 1.1, 24, 1, true), mat(0xc87a3a, { metalness: 0.6, roughness: 0.35, side: THREE.DoubleSide }), 0, 0.55, 0);
  const cream = add(tub, new THREE.CylinderGeometry(1.2, 1.2, 0.2, 24), mat(0xf4f0e0), 0, 0.5, 0, { cast: false });
  const pistachio = add(tub, new THREE.SphereGeometry(0.9, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), mat(0x9ad08a), 0, 0.6, 0, { cast: false }); pistachio.scale.y = 0.01;
  colliders.push({ type: 'cyl', x: 50, z: 3, r: 1.3, top: 1.1, bottom: 0, noGrab: true });
  const mallets = {};
  for (const [r, dx] of [['sun', -1], ['moon', 1]]) {
    const m = new THREE.Group(); m.position.set(dx * 0.6, 1.1, 0); tub.add(m);
    add(m, new THREE.CylinderGeometry(0.07, 0.07, 1.9, 6), M.wood, 0, 0.95, 0);
    add(m, new THREE.CylinderGeometry(0.24, 0.24, 0.6, 10).rotateZ(Math.PI / 2), M.wood, 0, 0.1, 0);
    mallets[r] = { m, k: 0, dx };
  }
  const padSun = plate(world, { x: 47.6, y: 0, z: 3, r: 0.9, who: 'sun' });
  const padMoon = plate(world, { x: 52.4, y: 0, z: 3, r: 0.9, who: 'moon' });
  for (const [x, z] of [[40, 6], [44, -3], [56, 7]]) {
    add(world, new THREE.CylinderGeometry(0.6, 0.6, 0.06, 14), M.cream, x, 0.78, z); add(world, new THREE.CylinderGeometry(0.05, 0.05, 0.75, 6), ironM, x, 0.38, z);
    colliders.push({ type: 'cyl', x, z, r: 0.6, top: 0.8, bottom: 0 });
  }
  // the old Roman columns outside
  for (let k = 0; k < 6; k++) {
    const x = 64 + (k % 3) * 3.6, z = k < 3 ? -4.5 : 4.5;
    add(world, new THREE.CylinderGeometry(0.55, 0.6, 9, 12), M.cream, x, 4.5, z);
    add(world, rbox(1.5, 0.7, 1.5, 0.08), M.cream, x, 9.3, z);
    colliders.push({ type: 'cyl', x, z, r: 0.6, top: 9, bottom: 0, noGrab: true });
  }
  add(world, rbox(9, 1.0, 1.2, 0.1), M.cream, 67.6, 10.1, -4.5); add(world, rbox(9, 1.0, 1.2, 0.1), M.cream, 67.6, 10.1, 4.5);
  solid(SHOP1 + 2, SHOP1 + 14, -12.6, -12, 4, 0, M.stone); solid(SHOP1 + 2, SHOP1 + 14, 12, 12.6, 4, 0, M.stone); solid(SHOP1 + 14, SHOP1 + 14.6, -12.6, 12.6, 4, 0, M.stone);

  // ================================================================ the dots of sunlight
  const beamM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.25, 0.9), transparent: true, opacity: 0.22, depthWrite: false, blending: THREE.AdditiveBlending });
  const dotM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.4, 0.9), transparent: true, opacity: 0.55, depthWrite: false, blending: THREE.AdditiveBlending });
  /** holes in the roof: the dot drifts between x0 and x1 (by the shared clock) */
  const HOLES = [
    { x0: -89.5, x1: -84.6, y: VY - 0.5, fy: 0, period: 12 },               // over the rose patch inside the entrance
    { x0: -71, x1: -71, y: VY - 0.5, fy: 0 },                                // beam A (rainbow start)
    { x0: -52, x1: -52, y: VY - 0.5, fy: 3 },                                // beam B (on the pillar)
    { x0: -13.4, x1: -10.2, y: VY + 0.3, fy: UP, period: 10, open: true },   // the hole the jasmine grows through
    { x0: -1, x1: -1, y: VY, fy: -8, open: true }, { x0: 6, x1: 6, y: VY, fy: 0, open: true },
    { x0: -26, x1: -18, y: VY - 0.5, fy: UP, period: 9 }, { x0: 2, x1: 14, y: VY - 0.5, fy: 0, period: 15 }, { x0: -100, x1: -100, y: 12, fy: 0 },
  ].map((h, i) => {
    const g = new THREE.Group(); g.userData.noSketch = true; g.userData.noHide = true; world.add(g);
    const L = h.y - h.fy;
    const beam = add(g, new THREE.CylinderGeometry(0.75, 1.0, L, 14, 1, true), beamM, 0, h.fy + L / 2, 0, { cast: false, receive: false });
    const dot = add(g, new THREE.CircleGeometry(1.1, 24).rotateX(-Math.PI / 2), dotM, 0, h.fy + 0.04, 0, { cast: false, receive: false });
    return { ...h, i, g, beam, dot, x: h.x0, z: 0 };
  });
  const dotX = (h, sNow) => (h.period ? (h.x0 + h.x1) / 2 + Math.sin((sNow / 1000) * (2 * Math.PI / h.period)) * (h.x1 - h.x0) / 2 : h.x0);
  const lit = (x, z, y) => HOLES.some((h) => Math.abs(h.x - x) < 1.6 && Math.abs(z) < 1.4 && Math.abs(y - h.fy) < 1.2);

  // ================================================================ the sketch, the garden
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const sketch = createSketch(world, {
    key: 'ch5c', x0: -140, x1: 80, z0: -30, z1: 45, ghosts: [], ghostM: M.pave,
    wisps: [
      { pos: (ms) => [-112 + Math.sin((ms / 1000) * 0.27) * 12, 4 + Math.cos((ms / 1000) * 0.27) * 6], y: 0, r: 2.4 },
      { pos: (ms) => [45 + Math.sin((ms / 1000) * 0.35) * 8, Math.cos((ms / 1000) * 0.35) * 5], y: 0, r: 2.6 },
    ],
  });
  const sunDry = 'Seeds only take in a dot of sunlight ☀ Wait for it to drift over the soil.';
  const garden = createGarden(world, colliders, {
    key: 'ch5c',
    patches: [
      { id: 'rubble', kind: 'rose', x: -87, y: 0, z: 0, v: 21, aim: [7, 0], lock: 1.2, need: () => lit(-87, 0, 0), dry: sunDry },
      { id: 'hole', kind: 'vine', x: -10.75, y: UP, z: 0, h: VY - UP, n: [-1, 0], stair: 'out', need: () => lit(-10.75, 0, UP), dry: sunDry },
      { id: 'khan', kind: 'rose', x: 8.5, y: VY, z: 0, v: 21, aim: [16.5, 0], lock: 1.6 },
    ],
    hot: [[-9.5, -6], [-6, -2], [0, 2.5], [2.5, 5]].map(([x0, x1], i) => ({ id: 'iron' + i, x0, x1, z0: -1.6, z1: 1.6, y: VY, cool: 9000 })),
    onGrow(id) {
      const t = { rubble: 'A rose in a sunbeam! Jump on 🌹', hole: 'Jasmine, up towards the light!', khan: 'A rose on the roof. Over to the khan!' }[id];
      if (t) api?.caption(t, 3200);
    },
  });

  // ================================================================ rainbows
  const jasM = new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4e0, emissiveIntensity: 0.5 });
  const RAINBOWS = [
    { id: 'r0', a: [VOID0 - 0.2, 0], b: [PB0 + 0.2, 3], H: 1.6, beam: 1 },
    { id: 'r1', a: [PB1 - 0.2, 3], b: [VOID1 + 0.2, UP], H: 1.6, beam: 2 },
  ].map((q, i) => {
    const g = new THREE.Group(); g.userData.noSketch = true; g.userData.noHide = true; world.add(g);
    const P = (t) => new THREE.Vector3(q.a[0] + (q.b[0] - q.a[0]) * t, q.a[1] + (q.b[1] - q.a[1]) * t + q.H * 4 * t * (1 - t), 0);
    const bands = [0xff5a5a, 0xffa04a, 0xffe04a, 0x6ad86a, 0x4ab0ff, 0x8a6aff].map((c, k) => {
      const pts = []; for (let s = 0; s <= 40; s++) { const p = P(s / 40); p.y -= 0.12 + k * 0.07; pts.push(p); }
      const m = new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0, depthWrite: false });
      add(g, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 40, 0.05, 4), m, 0, 0, 0, { cast: false, receive: false });
      return m;
    });
    const deckM = new THREE.MeshStandardMaterial({ color: 0xfff6ff, emissive: 0xffd6f0, emissiveIntensity: 0.5, roughness: 0.5, transparent: true, opacity: 0 });
    const cols = [], N = 30;
    for (let s = 0; s < N; s++) {
      const p0 = P(s / N), p1 = P((s + 1) / N), y = Math.max(p0.y, p1.y);
      add(g, new THREE.BoxGeometry(Math.abs(p1.x - p0.x) + 0.04, 0.12, 2.2), deckM, (p0.x + p1.x) / 2, y - 0.06, 0, { cast: false });
      if (s % 3 === 1) add(g, new THREE.SphereGeometry(0.12, 6, 4), jasM, (p0.x + p1.x) / 2, y + 0.06, (s % 2 ? 0.8 : -0.8), { cast: false }).visible = false;
      const c = { type: 'box', x0: Math.min(p0.x, p1.x), x1: Math.max(p0.x, p1.x) + 0.02, z0: -1.1, z1: 1.1, top: y, bottom: y - 0.15, disabled: true, noGrab: true, noStep: false };
      colliders.push(c); cols.push(c);
    }
    return { ...q, i, g, bands, deckM, cols, faint: 0, k: 0, P };
  });
  const rbSaved = (q) => !!api?.save?.ch5c?.rb?.[q.i];

  stars.push(makeStar(world, 'c5s-rain', -62, 3.4, 0, 1));

  sign(world, -116, -6, -Math.PI / 2 + 0.4, ['SOUQ AL-HAMIDIYAH', 'Her seeds only take', 'in a dot of sunlight ☀']);
  hangSign(world, -76, 4.4, -4.6, ['☀ Water in a sunbeam:', 'a rainbow. ☾ Seeds on it! 🌈']);
  hangSign(world, 46, 4.2, 9.4, ['BOOZA 🍨 pound it', 'in turns: ☀ ☾ ☀ ☾']);

  // ================================================================ hidden minigame: the carpet seller's yard
  solid(-132, -90, 31.4, 32, 4, 0, M.stone, {}, false);
  const mgG = new THREE.Group(); mgG.userData.noSketch = true; world.add(mgG);
  const mgPound = createMinigame(mgG, colliders, {
    id: 'c5pound', title: 'Booza Pound', rules: ['Pound your ice cream ✦ as fast as', 'you can! Most pounds in 15 s wins.'],
    at: { x: -111, y: 0, z: 17.6 }, face: 0, pads: { sun: [-114, 22], moon: [-108, 22] }, dur: 15000,
    game: mashGame({ tubs: { sun: [-114, 24.4], moon: [-108, 24.4] }, y: 0 }),
  });

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: -122, y: 0, z: -5, r: 2.4, sun: [-124, 0, -1], moon: [-124, 0, 1], yaw: -Math.PI / 2 }),
    checkpoint(world, { x: -76, y: 0, z: -1.6, r: 2.2, sun: [-76.5, 0, 0], moon: [-75.5, 0, 0], label: 'Under the vault' }),
    checkpoint(world, { x: -30, y: UP, z: -1.6, r: 2.2, sun: [-30.5, UP, 0], moon: [-29.5, UP, 0], label: 'The upper floor' }),
    checkpoint(world, { x: 28, y: KH, z: -1.6, r: 2.6, sun: [27.5, KH, 0], moon: [28.5, KH, 0], label: 'The khan' }),
    checkpoint(world, { x: 44, y: 0, z: 0, r: 2.6, sun: [43, 0, -1], moon: [43, 0, 1], label: 'The ice-cream parlour 🍨', yaw: -Math.PI / 2 }),
  ];
  {
    const P = [];
    for (let x = -136; x <= 76; x += 8) { P.push([x, 1 + R() * 3, -26 - R() * 4]); P.push([x, 1 + R() * 3, 40 + R() * 4]); }
    memoryMist(world, P, { size: 12, color: 0xece4e8, opacity: 0.45 });
  }
  for (const m of K.inks) sketch.ink(m);
  for (const s of stars) s.mesh.userData.noSketch = true;
  for (const c of cps) c.g.userData.noSketch = true;
  sketch.patch(world);
  mergeStatic(world);

  // ================================================================ powers: rainbows and the booza
  const base = withMinigames(garden.abilities, [mgPound]);
  const powers = Object.create(base);
  const pd = { n: 0, last: '', t: 0 };       // (the referee's count)
  const TARGET = 16;
  const atTub = () => padSun.on && padMoon.on && !(api.save?.ch5c?.pd >= TARGET);
  const nearRain = (who, q) => { const p = api.bodies[who].pos; return Math.abs(p.x - q.a[0]) < 3.2 && Math.abs(p.y - q.a[1]) < 1.6; };
  function pound(who, t) {
    mallets[who].k = 1; api.sound.play('thud');
    if (!(api.kind === 'solo' || api.role === 'sun')) return;
    if (pd.n > 0 && who === pd.last) { api.caption('Take turns! ☀ ☾ ☀ ☾ 🥄', 1600); return; }
    if (pd.n > 0 && t - pd.t > 2200) { pd.n = Math.max(0, pd.n - 2); }
    pd.n++; pd.last = who; pd.t = t;
    api.setSave('ch5c/pd', pd.n);
  }
  powers.label = (who) => {
    if (!api) return base.label(who);
    if (atTub()) return 'Pound';
    if (mgPound.playing) return 'Pound';
    if (who === 'moon' && RAINBOWS.some((q) => !rbSaved(q) && q.faint > api.serverNow() && nearRain('moon', q))) return 'Seeds';
    return base.label(who);
  };
  powers.use = (who) => {
    const sNow = api.serverNow();
    if (mgPound.press(who)) return true;
    if (atTub()) { pound(who, sNow); if (api.kind !== 'solo' && who === api.role) api.send('pound', { who, t: Math.round(sNow) }); return true; }
    const q = RAINBOWS.find((q) => !rbSaved(q) && nearRain(who, q));
    if (q && who === 'sun' && lit(api.bodies.sun.pos.x, 0, api.bodies.sun.pos.y)) {
      base.use(who);
      q.faint = sNow + 8000;
      api.send('rain', { i: q.i, t: Math.round(sNow) });
      once('rain', null, 'A rainbow! 🌈 …but you can see right through it. ☾ Moon: seeds on it, quick!', 4200);
      return true;
    }
    if (q && who === 'moon' && q.faint > sNow) {
      api.setSave(`ch5c/rb/${q.i}`, 1);
      api.sound.play('bloom');
      return true;
    }
    return base.use(who);
  };
  powers.onEvent = (e) => {
    if (e.type === 'rain') { const q = RAINBOWS[e.i]; if (q) q.faint = (e.t || api.serverNow()) + 8000; return true; }
    if (e.type === 'pound') { pound(e.who, e.t || api.serverNow()); return true; }
    return base.onEvent(e);
  };

  // ================================================================ state
  let doneT = -1, restored = false;
  const line = lane([-90, 0], [SHOP0, 0], { half: 2.3, y0: -12, y1: 30, dist: 15, pitch: 0.12 });

  return {
    id: 'ch5-souq',
    title: 'Chapter 5 · Damascus — Souq al-Hamidiyah',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-124, 0, -1), moon: new THREE.Vector3(-124, 0, 1) },
    camYaw: { sun: -Math.PI / 2, moon: -Math.PI / 2 },
    lobbyCam: { cx: -40, cz: 0, r: 90, h: 44 },
    killY: -12,
    killAt: (p) => p.y < -3 && p.x > VOID0 - 1 && p.x < SHOP0 - 2,
    lanes: [line],
    checkpoints: cps,
    hints: [
      'Inside the entrance: a dot of sunlight drifts back and forth over the soil. While it\'s on the soil, Moon plants and Sun waters: a rose. Bounce over the rubble.',
      'Sun stands in the sunbeam at the edge and waters: a faint rainbow. Within 8 seconds Moon (in the beam too) taps Seeds: it blooms and holds. Same again from the pillar.',
      'At the end of the upper floor a dot drifts over the soil by the wall. Plant and water while it\'s lit: jasmine up through the hole in the roof. On the roof, water the hot iron as you go; the rose at the end throws you over to the khan.',
      'Drop through the open skylight of the khan into the ice-cream parlour.',
      'Both stand on your pads by the copper tub and pound (✦) in turns: ☀ ☾ ☀ ☾. Sixteen good pounds.',
    ],
    respawnNearPartner: (pp) => !!pp && pp.y > -1 && !(pp.x > VOID0 && pp.x < VOID1 && pp.y < 2.5 && (pp.x < PB0 - 0.5 || pp.x > PB1 + 0.5)),
    portal: new THREE.Vector3(67.6, 0, 0),
    intro: {
      all: ['Chapter 5 · Damascus', 'Part 3 · Souq al-Hamidiyah', 'The long covered market. Its iron roof is full of little holes, so the floor is covered in dots of sunlight. "And at the end: booza."'],
      sun: 'Water ✦ in a sunbeam: a rainbow',
      moon: 'Seeds ✦ only take in sunlight · seeds on a rainbow make it hold',
    },
    abilities: powers,
    sketch, garden,
    attach(a) { api = a; sketch.attach(a); garden.attach(a); mgPound.attach(a); },
    onCheckpoint() {},
    debug: () => ({ g: garden.grownMask(), rb: RAINBOWS.map((q) => (rbSaved(q) ? 2 : q.faint > api.serverNow() ? 1 : 0)), pd: api?.save?.ch5c?.pd || 0, lit0: lit(-87, 0, 0) }),
    lit,
    story(ctx, t) {
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      if (P.some((p) => p.x > -100 && p.x < -92)) once('door', ctx, 'Souq al-Hamidiyah. "Every time I came here as a kid I got lost. On purpose."', 4600);
      if (P.some((p) => p.x > -90 && p.x < RUB0)) once('rub', ctx, 'Rubble… and a dot of sunlight drifting over a patch of soil.', 3800);
      if (P.some((p) => p.x > RUB1 && p.x < VOID0)) once('void', ctx, 'The floor has fallen into the cellar. But look at the sunbeams… 🌈', 4200);
      if (P.some((p) => p.y > VY - 0.5 && p.x > -10)) once('roof', ctx, 'On the iron roof. It\'s scorching up here 🔥', 3400);
      if (P.some((p) => p.x > KH1 - 6 && p.y < 2)) once('shop', ctx, 'The ice-cream parlour! The famous one, where they pound the booza by hand. 🍨', 4600);
      if ((api?.save?.ch5c?.pd || 0) >= TARGET && doneT < 0) {
        doneT = t;
        const lines = [
          ['Booza! Stretchy, cold, covered in pistachios 🍨', 3800],
          ['She takes a bite… and goes quiet. "I miss this place."', 4200],
          ['He takes her hand. "Then we\'ll come here. Together. For real."', 4400],
          ['Homesickness drifts off. The whole souq lights up in colour.', 4000],
          ['Part 3 complete ✨ Next: Al-Midan.', 3400],
        ];
        let at = 1600;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => { sketch.bloom(new THREE.Vector3(50, 0, 0)); for (const w of sketch.wisps) w.pos = () => [999, 999]; }, 10000);
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      sketch.update(dt, serverMs, t);
      mgPound.update(dt, serverMs, t);
      for (const h of HOLES) { h.x = dotX(h, serverMs); h.g.position.x = h.x; h.dot.material.opacity = 0.45 + Math.sin(t * 2 + h.i) * 0.1; }
      if (!api) return;
      const P = { sun: api.bodies.sun.pos, moon: api.bodies.moon.pos };
      padSun.update(P); padMoon.update(P);
      for (const q of RAINBOWS) {
        const solidNow = rbSaved(q), faint = q.faint > serverMs;
        q.k += ((solidNow ? 1 : faint ? 0.3 : 0) - q.k) * Math.min(1, dt * 4);
        q.bands.forEach((m) => { m.opacity = q.k * 0.9; });
        q.deckM.opacity = solidNow ? q.k * 0.6 : q.k * 0.15;
        q.g.children.forEach((c) => { if (c.geometry?.type === 'SphereGeometry') c.visible = solidNow; });
        for (const c of q.cols) c.disabled = !solidNow;
      }
      const n = api.save?.ch5c?.pd || 0;
      if (!(api.kind === 'solo' || api.role === 'sun')) pd.n = n;
      pistachio.scale.y = Math.max(0.01, Math.min(1, n / TARGET));
      for (const r of ['sun', 'moon']) { const q = mallets[r]; q.k = Math.max(0, q.k - dt * 5); q.m.position.y = 1.1 + q.k * 0.7; q.m.rotation.z = -q.dx * q.k * 0.4; }
      const open = n >= TARGET;
      exitDoor.disabled = open;
      exitM.position.z += ((open ? 5.6 : 0) - exitM.position.z) * Math.min(1, dt * 3);
      const cpi = api.save?.cp?.l === 'ch5-souq' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      if (!restored) { restored = true; for (let i = 1; i <= cpi; i++) sketch.paint(cps[i].x, cps[i].z, 12); }
    },
  };
}
