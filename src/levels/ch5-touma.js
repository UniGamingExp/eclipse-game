// Chapter 5 · Damascus · Part 2 "Bab Touma" — "say it like a Shami".
// In Damascus the ق is swallowed: قلبي becomes ألبي. Word stones, word bubbles and word lilies come in threes; only
// the Damascene one holds you, and only Moon can read them (Sun sees question marks). She has to tell him.
//  1. Bab Touma: through the gate into the square. The alley door only opens if Sun steps on the right word
//     stone over the pit; the stones are only there while Moon reads them out at the lectern.
//  2. The alley (side view): Sun sits on the talking chair and chats; his words float up as a staircase of
//     bubbles, three per step. A wrong one drops you back to the chair (and that step reshuffles).
//  3. The rooftops: hot tiles (water), a rose that throws you over the street, a burning roof, and planks that
//     were never drawn (walk them together) with Homesickness drifting over them.
//  4. The fountain square: Sun's Shami exam on three word-lilies, five words. Honorary Shami.
//  🎮 Hidden minigame "Courtyard Sumo": the courtyard through the arch on the west side of the square.
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { checkpoint, lane, plate } from './play.js';
import { memoryMist } from '../memory.js';
import { createSketch, mergeStatic } from './sketch.js';
import { createGarden } from './garden.js';
import { createShami } from './shami.js';
import { damascusKit } from './damascus.js';
import { createMinigame, sumoGame, withMinigames } from './minigame.js';

const RY = 12, RY2 = 16;                          // roof heights (the far roofs are higher: no gliding across)
const RA0 = 16, RA1 = 2, RB0 = -11, RB1 = -24, RC0 = -46, RC1 = -53;
const FZ = -76;                                   // the fountain
const POST = { x: 0, z: 35 };                     // the talking chair

export function buildCh5Touma(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 9;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#ead8e0'), 90, 300);
  sky(root, {
    top: '#5a6ab0', mid: '#dcc0e0', low: '#ffdcc8', neb1: '#c0a8ff', neb2: '#ffb8d0', stars: 0.3, nebula: 0.5, cloud: 0xfff0ea, far: false, cx: 0, cz: 0, seaY: -18,
    lightDir: [0.5, 0.55, 0.6],
    planets: [['lilac', 0.3, 0.32, 270, 0.3, 1.6], ['ember', 2.6, 0.24, 280, 0.2, 1.3]],
  });
  lights(root, { sunColor: 0xfff0dc, sunI: 2.4, hemiSky: 0xe6e2ff, hemiGround: 0xffe0c8, hemiI: 1.6, pos: [30, 60, 40], target: [0, 0, 10], extent: 110 });

  const K = damascusKit(world), M = K.M;
  const solid = (...a) => K.solid(colliders, ...a);
  const ground = (...a) => K.ground(colliders, ...a);
  let hs = 3;

  // ================================================================ ground
  ground(-20, 20, 88, 112);                 // outside the gate
  ground(-30, 30, 50, 88);                  // the square (and the gate passage)
  ground(-48, -30, 56, 78);                 // the hidden courtyard
  ground(-8, 8, 41, 44);                    // in front of the alley door
  ground(-3, 3, 16, 41);                    // the alley
  ground(-22, 22, -97, -53);                // the fountain square
  // the pit in front of the alley door
  colliders.push({ type: 'box', x0: -8, x1: 8, z0: 44, z1: 50, top: -2.5, bottom: -4, surface: 'concrete' });
  colliders.push({ type: 'box', x0: -8, x1: 8, z0: 48.8, z1: 50, top: -1.25, bottom: -4, surface: 'concrete' });
  add(world, new THREE.BoxGeometry(16, 1.5, 6), M.pave, 0, -3.25, 47, { cast: false });
  add(world, new THREE.BoxGeometry(16, 2.75, 1.2), M.pave, 0, -2.6, 49.4, { cast: false });

  // ================================================================ 1. BAB TOUMA
  solid(-40, -2.6, 84, 88, 10, 0, M.stone);
  solid(2.6, 40, 84, 88, 10, 0, M.stone);
  solid(-2.6, 2.6, 84, 88, 10, 5.4, M.stone);
  add(world, new THREE.TorusGeometry(2.6, 0.35, 8, 20, Math.PI), M.cream, 0, 5.4, 88.1).userData.noHide = true;
  for (let x = -38; x <= 38; x += 2.4) add(world, new THREE.BoxGeometry(1.0, 0.9, 1.2), M.stone, x, 10.45, 87.4);
  for (const x of [-12, 12]) { add(world, new THREE.CylinderGeometry(2.2, 2.4, 13, 10), M.stone2, x, 6.5, 86); colliders.push({ type: 'cyl', x, z: 86, r: 2.4, top: 13, bottom: 0, noGrab: true }); }
  // outside: palms, a roundabout of flowers
  for (const [x, z] of [[-10, 100], [10, 100], [-14, 108], [14, 108]]) {
    add(world, new THREE.CylinderGeometry(0.2, 0.3, 6, 7), mat(0x9a7a5a), x, 3, z);
    for (let k = 0; k < 7; k++) { const m = add(world, new THREE.BoxGeometry(2.6, 0.06, 0.5), mat(0x6aa85a), x + Math.cos(k * 0.9) * 1.2, 5.8, z + Math.sin(k * 0.9) * 1.2); m.rotation.y = -k * 0.9; m.rotation.z = 0.3; }
    colliders.push({ type: 'cyl', x, z, r: 0.35, top: 6, bottom: 0, noGrab: true, noStep: true });
  }
  add(world, new THREE.CylinderGeometry(3, 3.2, 0.6, 16), M.cream, 0, 0.3, 106); colliders.push({ type: 'cyl', x: 0, z: 106, r: 3.2, top: 0.6, bottom: 0 });
  for (let k = 0; k < 16; k++) add(world, new THREE.SphereGeometry(0.3, 6, 5), mat([0xff8fb8, 0xffe27a, 0xc6b3ff, 0xffffff][k % 4]), Math.cos(k * 0.4) * 2.4, 0.8, 106 + Math.sin(k * 0.4) * 2.4, { cast: false });

  // the square: houses on three sides, the west arch to the courtyard, the alley wall in the north
  for (let x = -26; x <= 26; x += 8) if (Math.abs(x) > 4) K.house(x, 80.5, 8, 6, 6 + (hs % 2), Math.PI, hs++);
  for (let z = 54; z <= 78; z += 8) { if (z !== 62 && z !== 70) K.house(-33.5, z, 8, 6, 6, Math.PI / 2, hs++); K.house(33.5, z, 8, 6, 6 + (hs % 3 === 0), -Math.PI / 2, hs++); }
  colliders.push({ type: 'box', x0: -30, x1: 30, z0: 77.5, z1: 84, top: 7.6, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: 30, x1: 37, z0: 50, z1: 84, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -37, x1: -30, z0: 50, z1: 61, top: 7, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -37, x1: -30, z0: 73, z1: 84, top: 7, bottom: 0, noGrab: true });
  solid(-37, -30, 61, 64, 7, 0, M.stone); solid(-37, -30, 70, 73, 7, 0, M.stone);
  solid(-37, -30, 64, 70, 7, 4.2, M.stone);
  add(world, new THREE.TorusGeometry(3, 0.3, 8, 20, Math.PI).rotateY(Math.PI / 2), M.cream, -30, 4.2, 67).userData.noHide = true;
  solid(-30, -8, 30, 50, 12, 0, M.stone2); solid(8, 30, 30, 50, 12, 0, M.stone);
  for (const x of [-18, 18]) for (let z = 33; z <= 47; z += 7) add(world, new THREE.BoxGeometry(2.4, 1.6, 0.1), M.glow, x, 8, 50.06, { cast: false });
  solid(-8, -2.6, 40.2, 41, 6, 0, M.stone); solid(2.6, 8, 40.2, 41, 6, 0, M.stone); solid(-2.6, 2.6, 40.2, 41, 6, 4.6, M.stone);
  const door = solid(-2.6, 2.6, 40.4, 40.8, 4.6, 0, null);
  const doorM = add(world, rbox(5.0, 4.5, 0.25, 0.06), M.wood, 0, 2.25, 40.6); doorM.userData.noHide = true;
  for (let k = 0; k < 5; k++) add(doorM, new THREE.SphereGeometry(0.07, 6, 4), M.dark, -1.8 + k * 0.9, 1.2, 0.15, { cast: false });
  // Moon's lectern (the reading stone)
  add(world, rbox(0.7, 1.1, 0.5, 0.05), M.wood, 9, 0.55, 54.2);
  add(world, rbox(0.9, 0.08, 0.7, 0.03), M.cream, 9, 1.18, 54.0).rotation.x = -0.4;
  const lect = plate(world, { x: 9, y: 0, z: 52.6, r: 0.9, who: 'moon' });
  // benches, a lemon tree, lanterns
  for (const [x, z] of [[-14, 56], [16, 72]]) { add(world, rbox(3, 0.5, 0.9, 0.08), M.cream, x, 0.25, z); colliders.push({ type: 'box', x0: x - 1.5, x1: x + 1.5, z0: z - 0.45, z1: z + 0.45, top: 0.5, bottom: 0 }); }
  add(world, new THREE.CylinderGeometry(0.25, 0.32, 3, 7), mat(0x7a5a44), -20, 1.5, 70);
  add(world, new THREE.IcosahedronGeometry(2.2, 1), mat(0x5aa04a, { flatShading: true }), -20, 4.2, 70);
  for (let k = 0; k < 9; k++) add(world, new THREE.SphereGeometry(0.17, 7, 5), mat(0xffe03a), -20 + Math.cos(k) * 1.9, 3.6 + (k % 3) * 0.6, 70 + Math.sin(k) * 1.9, { cast: false });
  colliders.push({ type: 'cyl', x: -20, z: 70, r: 0.35, top: 3, bottom: 0, noGrab: true, noStep: true });
  stars.push(makeStar(world, 'c5t-tree', -20, 6.9, 70, 0));
  for (const [x, z] of [[-6, 76], [6, 76], [26, 60], [-26, 76]]) K.lantern(x, 3.4, z);

  // ================================================================ 2. THE ALLEY (side view along −z)
  for (let z = 37; z >= 18; z -= 6.5) K.house(6.5, z, 6.5, 7, 9 + (hs % 3), -Math.PI / 2, hs++);
  colliders.push({ type: 'box', x0: 3, x1: 10, z0: 16, z1: 40.2, top: 12, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -3.4, x1: -3, z0: 16, z1: 40.2, top: 1.1, bottom: 0, noGrab: true, noCam: true });
  add(world, new THREE.BoxGeometry(0.4, 1.1, 24.2), M.cream, -3.2, 0.55, 28.1);
  for (let z = 38; z >= 18; z -= 5) { add(world, rbox(0.1, 0.1, 3.6, 0.02), M.dark, 2.9, 7.6, z); for (let k = 0; k < 6; k++) add(world, new THREE.SphereGeometry(0.1, 5, 4), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff0d8, emissiveIntensity: 0.6 }), 2.8, 7.3 - (k % 2) * 0.2, z - 1.5 + k * 0.6, { cast: false }); }
  // the talking chair and a tray with two tea glasses
  {
    const g = new THREE.Group(); g.position.set(POST.x, 0, POST.z); world.add(g); g.userData.noHide = true;
    add(g, rbox(0.7, 0.08, 0.7, 0.03), M.wood, 0, 0.5, 0);
    for (const [dx, dz] of [[-0.3, -0.3], [0.3, -0.3], [-0.3, 0.3], [0.3, 0.3]]) add(g, new THREE.CylinderGeometry(0.04, 0.04, 0.5, 5), M.wood, dx, 0.25, dz);
    add(g, rbox(0.7, 0.8, 0.08, 0.03), M.wood, 0, 0.9, 0.32);
    add(g, new THREE.CylinderGeometry(0.4, 0.4, 0.05, 16), mat(0xd8b048, { metalness: 0.6, roughness: 0.3 }), 0.9, 0.6, -0.2);
    add(g, new THREE.CylinderGeometry(0.06, 0.06, 0.6, 6), M.wood, 0.9, 0.3, -0.2);
    for (const dx of [0.8, 1.0]) add(g, new THREE.CylinderGeometry(0.05, 0.04, 0.12, 8), new THREE.MeshStandardMaterial({ color: 0xc8402a, transparent: true, opacity: 0.8 }), dx, 0.68, -0.2, { cast: false });
  }

  // ================================================================ 3. THE ROOFTOPS
  solid(-5, 5, RA1, RA0, RY, 0, M.stone, { noCam: false });
  solid(-5, 5, RB1, RB0, RY2, 0, M.stone2);
  solid(-5, 5, RC1, RC0, RY2, 0, M.stone);
  for (const [z0, z1, y] of [[RA1, RA0, RY], [RB1, RB0, RY2], [RC1, RC0, RY2]]) {
    add(world, new THREE.BoxGeometry(10.2, 0.4, z1 - z0 + 0.2), M.cream, 0, y + 0.02, (z0 + z1) / 2, { cast: false }).userData.noHide = true;
    for (let k = 0; k < 2; k++) add(world, new THREE.BoxGeometry(1.4, 1.3, 1.4), M.cream, 3.5, y + 0.65, z0 + 1.2 + k * (z1 - z0 - 2.4));
  }
  stars.push(makeStar(world, 'c5t-sat', 3.5, RY2 + 2.8, RB1 + 1.2, 1));
  // the street below the roofs is missing from the drawing; far houses for the skyline
  for (let z = 10; z >= -50; z -= 9) { K.house(-12, z, 7, 7, 8 + ((hs * 3) % 4), Math.PI / 2, hs++); K.house(13, z, 7, 7, 9 + ((hs * 5) % 3), -Math.PI / 2, hs++); }

  // ================================================================ 4. THE FOUNTAIN SQUARE
  for (let x = -18; x <= 18; x += 9) K.house(x, -100.5, 9, 7, 7 + (hs % 2), 0, hs++);
  for (let z = -60; z >= -92; z -= 8) { K.house(-25.5, z, 8, 7, 7, Math.PI / 2, hs++); K.house(25.5, z, 8, 7, 7 + (hs % 2), -Math.PI / 2, hs++); }
  colliders.push({ type: 'box', x0: -22, x1: 22, z0: -104, z1: -97, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -29, x1: -22, z0: -97, z1: -53, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: 22, x1: 29, z0: -97, z1: -53, top: 8, bottom: 0, noGrab: true });
  solid(-22, -5, -53.6, -53, 8, 0, M.stone); solid(5, 22, -53.6, -53, 8, 0, M.stone);
  // the fountain: a ring of rim stones round a pool you can fall into
  const pool = add(world, new THREE.CylinderGeometry(5, 5, 0.1, 32), M.water, 0, 0.35, FZ, { cast: false }); pool.userData.noHide = true; pool.userData.noSketch = true;
  add(world, new THREE.CylinderGeometry(5, 5, 1.2, 32, 1, true), M.cream, 0, -0.3, FZ, { cast: false });
  const rim = add(world, new THREE.TorusGeometry(5.35, 0.42, 8, 40).rotateX(Math.PI / 2), M.cream, 0, 0.45, FZ); rim.scale.y = 1.4; K.inks.push(rim);
  for (let k = 0; k < 22; k++) { const a = (k / 22) * Math.PI * 2; colliders.push({ type: 'cyl', x: Math.sin(a) * 5.35, z: FZ + Math.cos(a) * 5.35, r: 0.62, top: 0.7, bottom: 0 }); }
  add(world, new THREE.CylinderGeometry(0.4, 0.6, 2.4, 8), M.cream, 0, 1.2, FZ); colliders.push({ type: 'cyl', x: 0, z: FZ, r: 0.6, top: 2.4, bottom: -1, noGrab: true });
  add(world, new THREE.SphereGeometry(0.8, 14, 8, 0, Math.PI * 2, 0, Math.PI / 2).rotateX(Math.PI), M.cream, 0, 2.6, FZ);
  // an olive tree, lanterns
  add(world, new THREE.CylinderGeometry(0.35, 0.5, 3.4, 7), mat(0x6a5a44), -14, 1.7, -88);
  add(world, new THREE.IcosahedronGeometry(2.6, 1), mat(0x8aa06a, { flatShading: true }), -14, 4.6, -88);
  colliders.push({ type: 'cyl', x: -14, z: -88, r: 0.5, top: 3.4, bottom: 0, noGrab: true, noStep: true });
  for (const [x, z] of [[-12, -60], [12, -60], [16, -90], [-16, -70]]) K.lantern(x, 3.6, z);

  // ================================================================ the hidden courtyard (sumo on the old well platform)
  solid(-48, -46, 56, 78, 5, 0, M.stone); solid(-46, -37, 56, 58, 5, 0, M.stone); solid(-46, -37, 76, 78, 5, 0, M.stone);
  add(world, new THREE.CylinderGeometry(4.8, 5.0, 2.2, 24), M.cream, -39, 1.1, 66.5); K.inks.push(world.children[world.children.length - 1]);
  colliders.push({ type: 'cyl', x: -39, z: 66.5, r: 4.8, top: 2.2, bottom: 0 });
  solid(-40.2, -37.8, 71.4, 72.8, 1.1, 0, M.stone, {}, false);
  const mgG = new THREE.Group(); mgG.userData.noSketch = true; world.add(mgG);
  const mgSumo = createMinigame(mgG, colliders, {
    id: 'c5sumo', title: 'Courtyard Sumo', rules: ['Dash ⚡ into the other one.', 'Off the well = a point. First to 2!'],
    at: { x: -39, y: 2.2, z: 70.2 }, face: 0, pads: { sun: [-41.4, 65.2], moon: [-36.6, 65.2] }, dur: 120000,
    game: sumoGame({ cx: -39, cz: 66.2, y: 2.2, R: 4.6 }),
  });

  // ================================================================ the sketch, the garden, the words
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const ghostDefs = [];
  for (let z = RB1; z > RC0 + 0.1; z -= 2.75) ghostDefs.push({ x0: -1.6, x1: 1.6, z0: z - 2.75, z1: z, y: RY2, noGrab: true });
  const sketch = createSketch(world, {
    key: 'ch5b', x0: -60, x1: 60, z0: -110, z1: 115, ghosts: ghostDefs, ghostM: M.pave,
    wisps: [
      { pos: (ms) => [0, (RB1 + RC0) / 2 + Math.sin((ms / 1000) * (2 * Math.PI / 10)) * 10], y: RY2, r: 2.3 },
      { pos: (ms) => [Math.sin((ms / 1000) * 0.31) * 14, 66 + Math.cos((ms / 1000) * 0.31) * 9], y: 0, r: 2.4 },
    ],
  });
  for (const c of sketch.colliders) colliders.push(c);
  const lilyAt = (deg, r) => [Math.sin((deg * Math.PI) / 180) * r, FZ + Math.cos((deg * Math.PI) / 180) * r];
  const garden = createGarden(world, colliders, {
    key: 'ch5b',
    patches: [
      { id: 'roofrose', kind: 'rose', x: 0, y: RY, z: RA1 + 1.4, v: 21, aim: [0, -16.5], lock: 1.6 },
      ...[-50, 0, 50].map((d, i) => { const [x, z] = lilyAt(d, 5.35); return { id: 'w' + i, kind: 'lily', x, y: 0.7, z, to: [0, -1], count: 0 }; }),
    ],
    hot: [{ id: 'roofA', x0: -5, x1: 5, z0: RA1, z1: RA0 - 3.5, y: RY, cool: 20000 }],
    fires: [{ id: 'roofB', x: 0, y: RY2, z: RB0 - 9, w: 10, d: 1.2, h: 4.4 }],
    onGrow(id) {
      if (id === 'roofrose') api?.caption('A rose on a roof. Everything is possible in a sketch 🌹', 3400);
      const n = ['w0', 'w1', 'w2'].filter((k) => garden.grown(k)).length;
      if (id.startsWith('w')) api?.caption(n < 3 ? `A word-lily (${n}/3) 🪷` : 'Three word-lilies. Sun: the exam begins. Moon: you know the answers 😏', 4200);
    },
  });
  const LV = [0, 1, 2, 3, 4, 5, 6];
  let talkUntil = 0;
  const talking = () => api && api.serverNow() < Math.max(talkUntil, (api.save?.ch5b?.sp || 0) + 45000);
  const sh = createShami(world, colliders, {
    key: 'ch5b',
    sets: [
      { id: 'door', style: 'stone', slots: [[-3.2, 0, 47], [0, 0, 47], [3.2, 0, 47]], rounds: 1, who: 'sun', exists: () => lect.on || sh.done('door'),
        onRight: (n, w) => api?.caption(`«${w.s}» (${w.tr}) — "${w.mean}". The door creaks open 🚪`, 4200),
        onWrong: (r, word) => api?.caption(`لأ لأ! «${word}»? Nobody in Sham says that 🙅‍♀️`, 3000) },
      ...LV.map((L) => ({
        id: 'b' + L, style: 'bubble', rounds: Infinity, who: 'any', exists: talking,
        slots: [0, 1].map((k) => [0, 2.4 + 1.9 * L, 27.6 - 1.3 * L - 2.5 * k]),
        onWrong: (r, word) => api?.caption(`لأ! «${word}»… pop! That one wasn't Shami 😅`, 3000),
      })),
      { id: 'exam', style: 'lily', rounds: 5, who: 'sun', exists: () => ['w0', 'w1', 'w2'].every((k) => garden.grown(k)),
        slots: [-50, 0, 50].map((d) => { const [x, z] = lilyAt(d, 3.0); return [x, 0.5, z]; }),
        onRight: (n, w) => api?.caption(n + 1 < 5 ? `✓ «${w.s}» (${w.tr}) — "${w.mean}". ${n + 1}/5` : `✓ «${w.s}»! 5/5 🎉`, 3400),
        onWrong: (r, word) => api?.caption(`Splash! «${word}» 💦 She is laughing so hard.`, 3000) },
    ],
  });
  stars.push(makeStar(world, 'c5t-chat', 0, 2.4 + 1.9 * 6 + 2.6, 19.9, 2));
  stars.push(makeStar(world, 'c5t-plank', 0, RY2 + 3.2, -35, 3));
  stars.push(makeStar(world, 'c5t-well', 0, 3.6, FZ, 4));

  sign(world, 4, 95, -0.4, ['BAB TOUMA · باب توما', 'Walk TOGETHER:', 'the drawing fills in 🎨']);
  sign(world, 11.4, 54.6, -0.6, ['☾ READ here.', 'Only you can see', 'the words 👀']);
  hangSign(world, 0.6, 3.6, 38.6, ['The talking chair ☀', 'Sit and chat (✦)']);
  sign(world, 6, -60, Math.PI + 0.4, ['☀ Sun\'s Shami exam 🎖️', 'Jump on the right word.', '☾ Moon: no cheating… 😏']);

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: 3, y: 0, z: 100, r: 2.4, sun: [-1, 0, 100], moon: [1, 0, 100] }),
    checkpoint(world, { x: -4, y: 0, z: 60, r: 2.6, sun: [-1, 0, 58], moon: [1, 0, 58], label: 'Bab Touma' }),
    checkpoint(world, { x: -1.4, y: 0, z: 37.4, r: 2.2, sun: [0, 0, 38.4], moon: [0, 0, 37.2], label: 'The talking chair' }),
    checkpoint(world, { x: -1.4, y: RY, z: 15, r: 2.2, sun: [0, RY, 15.2], moon: [0, RY, 14.2], label: 'The rooftops' }),
    checkpoint(world, { x: -4, y: 0, z: -60, r: 2.6, sun: [-1, 0, -58], moon: [1, 0, -58], label: 'The fountain' }),
  ];
  {
    const P = [];
    for (let z = -100; z <= 110; z += 8) { P.push([-34 - R() * 6, 1 + R() * 3, z]); P.push([34 + R() * 6, 1 + R() * 3, z]); }
    for (let x = -30; x <= 30; x += 8) { P.push([x, 1 + R() * 3, 114]); P.push([x, 1 + R() * 3, -106]); }
    memoryMist(world, P, { size: 12, color: 0xece4e8, opacity: 0.45 });
  }
  for (const m of K.inks) sketch.ink(m);
  for (const s of stars) s.mesh.userData.noSketch = true;
  for (const c of cps) c.g.userData.noSketch = true;
  sketch.patch(world);
  mergeStatic(world);

  // ================================================================ powers: Sun talks on the chair
  const nearPost = (who) => { if (!api || who !== 'sun') return false; const p = api.bodies.sun.pos; return Math.hypot(p.x - POST.x, p.z - POST.z) < 2.2 && p.y < 1.5; };
  const base = garden.abilities;
  const powers = Object.create(base);
  powers.label = (who) => (nearPost(who) ? 'Talk' : base.label(who));
  powers.use = (who) => {
    if (nearPost(who)) {
      const s = Math.round(api.serverNow());
      talkUntil = s + 45000;
      api.setSave('ch5b/sp', s);
      api.sound.play('pin');
      once('talk', null, '☀ He starts chatting… his words float up as bubbles. ☾ Only Moon can read them: the Shami ones hold, the others pop.', 6000);
      return true;
    }
    return base.use(who);
  };

  // ================================================================ state
  let doneT = -1, restored = false;
  const line = lane([0, 41], [0, RC1], { half: 2.3, y0: -3, y1: 40, dist: 15, pitch: 0.12 });

  return {
    id: 'ch5-touma',
    title: 'Chapter 5 · Damascus — Bab Touma',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1, 0, 100), moon: new THREE.Vector3(1, 0, 100) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: 20, r: 90, h: 44 },
    killY: -6,
    killAt: (p) => p.y < -3.5 && !(p.z > 43 && p.z < 51 && Math.abs(p.x) < 8.5) || (p.y < 0.1 && Math.hypot(p.x, p.z - FZ) < 5),
    lanes: [line],
    checkpoints: cps,
    hints: [
      'Through the gate into the square. Moon stands at the lectern (lilac plate): three word stones appear over the pit and only she can read them. She tells Sun which one is the Damascus way (ق becomes ء, like ألبي). Sun jumps on it: the door opens.',
      'Sun sits on the talking chair and taps Talk. His words float up as bubbles, two per step. Moon can read them: only the Shami ones hold. Climb together, she calls out the right ones. They last 45 seconds.',
      'Sun waters the hot tiles first, Moon plants the rose at the edge, Sun waters it, then both bounce over the street. Sun puts out the fire. The missing planks only appear while you walk them side by side; wait for the grey wisp to pass.',
      'Moon plants the three lilac rings on the fountain rim, Sun waters them. Then Sun\'s exam: three word-lilies, only Moon can read them, only Sun\'s jumps count. Five right answers.',
      'Sun\'s exam: three word-lilies in the fountain. Moon reads, Sun jumps. Five right answers.',
    ],
    respawnNearPartner: (pp) => !!pp && pp.y > -0.5 && Math.hypot(pp.x, pp.z - FZ) > 5.6,
    portal: new THREE.Vector3(0, 0, FZ + 8.5),
    intro: {
      all: ['Chapter 5 · Damascus', 'Part 2 · Bab Touma', 'In Damascus the ق is swallowed: not قلبي but ألبي. She has been correcting him since the day they met.'],
      sun: 'Water ✦ as before · on the talking chair: Talk. You only see ؟ on the words',
      moon: 'Seeds ✦ as before · YOU can read the words. Tell him the Shami one',
    },
    abilities: withMinigames(powers, [mgSumo]),
    sketch, garden, shami: sh,
    attach(a) { api = a; sketch.attach(a); garden.attach(a); sh.attach(a); mgSumo.attach(a); },
    onCheckpoint() {},
    debug: () => ({ g: garden.grownMask(), door: sh.done('door'), exam: sh.round('exam'), talking: talking(), gh: sketch.ghosts.filter((g) => g.on).length, lect: lect.on }),
    story(ctx, t) {
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      if (P.some((p) => p.z < 84 && p.z > 52)) once('sq', ctx, 'Bab Touma. "This is where I used to meet my friends." A door at the far end, with a word on it.', 4800);
      if (P.some((p) => p.z < 53 && p.z > 44)) once('pit', ctx, 'Only one stone is the Damascus way of saying it. Moon: the lectern. Sun: listen to her.', 4600);
      if (P.some((p) => p.z < 40 && p.y < 2)) once('alley', ctx, 'A narrow alley, jasmine over every door. And a chair. He can never resist a chair.', 4200);
      if (P.some((p) => p.y > RY - 0.5 && p.z < RA0 + 0.5 && p.z > RA1)) once('roof', ctx, 'The rooftops! The tiles are baking in the sun 🔥', 3400);
      if (P.some((p) => p.z < RC1 && p.y < 2)) once('fount', ctx, 'A fountain square. "Time for your exam, habibi." 🎓', 4000);
      if (sh.done('exam') && doneT < 0) {
        doneT = t;
        sketch.bloom(new THREE.Vector3(0, 0, FZ));
        const lines = [
          ['🎖️ Honorary Shami! She pins a little jasmine badge on his shirt.', 4200],
          ['"You still say ahwe like a tourist." "I\'ll practise." "Every day." "Every day."', 4800],
          ['Part 2 complete ✨ Next: Souq al-Hamidiyah.', 3400],
        ];
        let at = 2200;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      sketch.update(dt, serverMs, t);
      mgSumo.update(dt, serverMs, t);
      if (!api) return;
      lect.update({ sun: api.bodies.sun.pos, moon: api.bodies.moon.pos });
      sh.update(dt, serverMs, t);
      const open = sh.done('door');
      door.disabled = open;
      doorM.position.x += ((open ? -4.6 : 0) - doorM.position.x) * Math.min(1, dt * 3);
      const cpi = api.save?.cp?.l === 'ch5-touma' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      if (!restored) { restored = true; sketch.restore(); for (let i = 1; i <= cpi; i++) sketch.paint(cps[i].x, cps[i].z, 12); }
    },
  };
}
