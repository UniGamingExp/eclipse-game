// Chapter 5 · Damascus · Part 4 "Al-Midan" — her family's neighbourhood: the sweets street, sujuk at Al-Mahabba,
// and the square where the celebrations happen. The end of Chapter 5.
//  1. The sweets street (side view along +z): a missing stretch with Homesickness drifting over it, a burning
//     oven, a hot tin roof (rose), the pond (lilies), and jasmine up to the terrace of Al-Mahabba.
//  2. Al-Mahabba's terrace: sujuk sandwiches.
//  3. The celebration square at dusk (boss): Homesickness itself, a big grey cloud that follows Moon. It wilts
//     any seed it sits on and she can't plant inside it. Plant at the three light poles, lead it away, water:
//     each pole that blooms lights its string of lights and shrinks it. Then raise the flag together.
//  🎮 Hidden minigame "Paint the Town": the courtyard east of the start (through the blue door).
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { checkpoint, lane, plate } from './play.js';
import { memoryMist } from '../memory.js';
import { createSketch, mergeStatic } from './sketch.js';
import { createGarden } from './garden.js';
import { damascusKit } from './damascus.js';
import { createMinigame, tilesGame, withMinigames } from './minigame.js';

const GH0 = -86, GH1 = -64;                       // the missing stretch
const OVEN = -57, ROOF0 = -46, ROOF1 = -34, RY = 8; // the oven fire, the tin roof over the building site
const POND0 = -28, POND1 = -6;                    // the pond
const MAH0 = 8, MAH1 = 30, MY = 9;                // Al-Mahabba and its terrace
const SQ = { x: 0, z: 58 };                       // the flagpole in the middle of the square
const POLES = [[-14, 44], [14, 44], [0, 74]];

export function buildCh5Midan(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  let seed = 17;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#e0c8d8'), 90, 300);
  sky(root, {
    top: '#3a4a90', mid: '#c8a0d0', low: '#ffc0a0', neb1: '#c0a0ff', neb2: '#ffa8c8', stars: 0.6, nebula: 0.55, cloud: 0xf8e0e8, far: false, cx: 0, cz: 0, seaY: -18,
    lightDir: [-0.4, 0.35, 0.8],
    planets: [['lilac', 0.2, 0.3, 270, 0.3, 1.7], ['ember', 2.8, 0.22, 280, 0.2, 1.3]],
  });
  lights(root, { sunColor: 0xffe0c8, sunI: 2.1, hemiSky: 0xd8d4ff, hemiGround: 0xffd4c0, hemiI: 1.5, pos: [-30, 50, -10], target: [0, 0, 0], extent: 110 });

  const K = damascusKit(world), M = K.M;
  const solid = (...a) => K.solid(colliders, ...a);
  const ground = (...a) => K.ground(colliders, ...a);
  let hs = 11;

  // ================================================================ ground
  ground(-24, 30, -124, -90);                       // the start (and the hidden courtyard to the east)
  ground(-3, 3, -90, GH0);
  ground(-3, 3, GH1, POND0);
  ground(-3, 3, POND1, MAH0);
  ground(-26, 26, 30, 84);                          // the celebration square
  add(world, new THREE.BoxGeometry(6, 0.1, POND1 - POND0), M.water, 0, -0.35, (POND0 + POND1) / 2, { cast: false }).userData.noSketch = true;
  add(world, new THREE.BoxGeometry(6, 1.2, POND1 - POND0), mat(0x3a6a88), 0, -1.0, (POND0 + POND1) / 2, { cast: false });

  // ================================================================ the start: the north end of Al-Midan
  for (let x = -20; x <= 20; x += 8) if (Math.abs(x) > 4) K.house(x, -127.5, 8, 6, 6 + (hs % 2), 0, hs++);
  for (let z = -120; z <= -96; z += 8) { K.house(-27.5, z, 8, 6, 6, Math.PI / 2, hs++); }
  colliders.push({ type: 'box', x0: -24, x1: 30, z0: -131, z1: -124, top: 7.6, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -31, x1: -24, z0: -124, z1: -90, top: 7, bottom: 0, noGrab: true });
  solid(-24, -3, -90.6, -90, 7, 0, M.stone); solid(3, 30, -90.6, -90, 7, 0, M.stone);
  // the hidden courtyard behind the blue door (east)
  solid(10, 10.6, -124, -108, 5, 0, M.stone); solid(10, 10.6, -104, -90.6, 5, 0, M.stone); solid(30, 30.6, -124, -90, 5, 0, M.stone);
  add(world, rbox(0.2, 3, 3.6, 0.1), M.blue, 10.3, 1.5, -106).position.x = 10.9;
  for (const [x, z] of [[-12, -100], [-6, -116]]) K.lantern(x, 3.4, z);
  for (let k = 0; k < 6; k++) add(world, new THREE.SphereGeometry(0.4, 8, 6), mat([0xe2a03a, 0xd88a2a, 0xf0c060][k % 3]), -18 + k * 0.9, 0.95, -100.6, { cast: false });   // a tray of sweets
  add(world, rbox(6, 0.9, 1.4, 0.08), M.wood, -16, 0.45, -100.6); colliders.push({ type: 'box', x0: -19, x1: -13, z0: -101.3, z1: -99.9, top: 0.9, bottom: 0 });
  const mgG = new THREE.Group(); mgG.userData.noSketch = true; world.add(mgG);
  const mgPaint = createMinigame(mgG, colliders, {
    id: 'c5paint', title: 'Paint the Town', rules: ['Run over the tiles to colour them.', 'Most tiles in 30 s wins! 🎨'],
    at: { x: 13.6, y: 0, z: -106 }, face: -Math.PI / 2, pads: { sun: [15.6, -108.6], moon: [15.6, -103.4] }, dur: 30000,
    game: tilesGame({ cx: 22.6, cz: -106, y: 0, n: 5, size: 2.4 }),
  });

  // ================================================================ 1. THE SWEETS STREET (side view along +z at x 0; camera on +x)
  for (let z = -86; z <= MAH0 - 4; z += 8) K.house(-6.5, z, 8, 7, 7 + ((hs * 3) % 3), Math.PI / 2, hs++);
  colliders.push({ type: 'box', x0: -10, x1: -3, z0: -90, z1: MAH0, top: 10, bottom: -2, noGrab: true });
  colliders.push({ type: 'box', x0: 3, x1: 3.4, z0: -90, z1: MAH0, top: 1.0, bottom: -2, noGrab: true, noCam: true });
  add(world, new THREE.BoxGeometry(0.4, 1.0, MAH0 + 90), M.cream, 3.2, 0.5, (MAH0 - 90) / 2).userData.noHide = true;
  // shop counters with sweets along the far side
  for (let z = -60; z <= 0; z += 9) {
    if (z > POND0 - 1 && z < POND1 + 1) continue;
    add(world, rbox(1.2, 0.9, 3.4, 0.05), M.wood, -2.4, 0.45, z);
    for (let k = 0; k < 4; k++) add(world, new THREE.CylinderGeometry(0.35, 0.35, 0.12, 12), mat([0xe2a03a, 0x9ad08a, 0xf4e0c0, 0xd85a4a][k]), -2.4, 0.96, z - 1.2 + k * 0.8, { cast: false });
    K.lantern(-2.8, 3.6, z + 2);
  }
  // the building site with the tin roof over the street (a wall across, 8 m)
  solid(-3, 3, ROOF0 + 5.5, ROOF0 + 6.5, RY, 0, M.stone2);
  solid(-3, 3, ROOF0, ROOF1, RY, RY - 0.5, mat(0x9aa2b0, { roughness: 0.5, metalness: 0.4 }));
  stars.push(makeStar(world, 'c5m-roof', 0, RY + 1.5, ROOF1 + 1.2, 1));
  stars.push(makeStar(world, 'c5m-ghost', 0, 3.2, (GH0 + GH1) / 2, 0));
  stars.push(makeStar(world, 'c5m-lily', 0, 3.0, (POND0 + POND1) / 2, 2));
  // Al-Mahabba: a corner restaurant with a roof terrace over the street's end
  solid(-10, 10, MAH0, MAH1, MY, 0, M.stone);
  add(world, new THREE.BoxGeometry(20.2, 0.4, 22.2), M.cream, 0, MY + 0.02, (MAH0 + MAH1) / 2).userData.noHide = true;
  {
    const cv = document.createElement('canvas'); cv.width = 1024; cv.height = 192;
    const g = cv.getContext('2d');
    g.fillStyle = '#1a6a3a'; g.fillRect(0, 0, 1024, 192); g.strokeStyle = '#ffe08a'; g.lineWidth = 8; g.strokeRect(10, 10, 1004, 172);
    g.fillStyle = '#fff4d8'; g.textAlign = 'center'; g.textBaseline = 'middle';
    g.direction = 'rtl'; g.font = '700 84px "Noto Naskh Arabic", "Geeza Pro", "Damascus", Arial, sans-serif'; g.fillText('مطعم المحبة', 700, 96);
    g.direction = 'ltr'; g.font = '700 56px ui-rounded, system-ui, sans-serif'; g.fillText('Al-Mahabba', 260, 80); g.font = '500 34px ui-rounded, system-ui, sans-serif'; g.fillText('سجق · sujuk', 260, 134);
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace;
    const s = add(world, new THREE.BoxGeometry(10, 1.9, 0.12), [0, 0, 0, 0, 1, 0].map((f) => (f ? new THREE.MeshStandardMaterial({ map: t, emissive: 0xffffff, emissiveMap: t, emissiveIntensity: 0.35, roughness: 0.6 }) : M.dark)), 0, 5.6, MAH0 - 0.1, { cast: false });
    s.rotation.y = Math.PI; s.userData.noSketch = true; s.userData.noHide = true;
  }
  add(world, rbox(8, 0.5, 1.6, 0.1), M.blue, 0, 4.2, MAH0 - 0.8).rotation.x = 0.3;
  // terrace furniture: tables, the grill, a parapet
  for (const [x, z] of [[-5, 14], [5, 14], [-5, 22], [5, 22]]) {
    add(world, new THREE.CylinderGeometry(0.7, 0.7, 0.06, 14), M.cream, x, MY + 0.8, z); add(world, new THREE.CylinderGeometry(0.06, 0.06, 0.8, 6), M.dark, x, MY + 0.4, z);
    add(world, new THREE.CylinderGeometry(0.16, 0.16, 0.1, 10), mat(0xc86a3a), x + 0.25, MY + 0.88, z, { cast: false });
    colliders.push({ type: 'cyl', x, z, r: 0.7, top: MY + 0.83, bottom: MY });
  }
  const grill = add(world, rbox(3, 1.0, 1.0, 0.06), M.dark, 0, MY + 0.5, 27); colliders.push({ type: 'box', x0: -1.5, x1: 1.5, z0: 26.5, z1: 27.5, top: MY + 1, bottom: MY });
  for (let k = 0; k < 6; k++) add(world, new THREE.CylinderGeometry(0.08, 0.08, 0.8, 8).rotateZ(Math.PI / 2), mat(0x8a3a2a), -1 + k * 0.4, MY + 1.06, 27, { cast: false }).rotation.y = Math.PI / 2;
  const smoke = new THREE.Group(); smoke.position.set(0, MY + 1.4, 27); world.add(smoke); smoke.userData.noSketch = true;
  for (let k = 0; k < 4; k++) add(smoke, new THREE.SphereGeometry(0.35 + k * 0.12, 8, 6), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.25, depthWrite: false }), 0, k * 0.6, 0, { cast: false });
  stars.push(makeStar(world, 'c5m-mahabba', 7.5, MY + 1.8, 27, 3));
  for (const [x0, x1, z0, z1] of [[-10, -1.6, MAH0, MAH0 + 0.3], [1.6, 10, MAH0, MAH0 + 0.3], [-10, -9.7, MAH0, MAH1], [9.7, 10, MAH0, MAH1]]) solid(x0, x1, z0, z1, MY + 1.0, MY, M.cream, {}, false);

  // ================================================================ 3. THE CELEBRATION SQUARE
  for (let x = -22; x <= 22; x += 8) K.house(x, 87.5, 8, 6, 7 + (hs % 2), Math.PI, hs++);
  for (let z = 36; z <= 80; z += 8) { K.house(-29.5, z, 8, 6, 7, Math.PI / 2, hs++); K.house(29.5, z, 8, 6, 7 + (hs % 2), -Math.PI / 2, hs++); }
  colliders.push({ type: 'box', x0: -26, x1: 26, z0: 84, z1: 91, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -33, x1: -26, z0: 30, z1: 84, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: 26, x1: 33, z0: 30, z1: 84, top: 8, bottom: 0, noGrab: true });
  solid(-26, -10, 31, 32, 7, 0, M.stone); solid(10, 26, 31, 32, 7, 0, M.stone);
  // the flagpole, its two rope plates, the flag (three red stars on the green-white-black)
  add(world, new THREE.CylinderGeometry(0.12, 0.16, 14, 8), mat(0xd8d8e0, { metalness: 0.6, roughness: 0.3 }), SQ.x, 7, SQ.z);
  add(world, new THREE.CylinderGeometry(1.4, 1.7, 0.6, 12), M.cream, SQ.x, 0.3, SQ.z); colliders.push({ type: 'cyl', x: SQ.x, z: SQ.z, r: 1.7, top: 0.6, bottom: 0 });
  colliders.push({ type: 'cyl', x: SQ.x, z: SQ.z, r: 0.3, top: 14, bottom: 0.6, noGrab: true });
  const flagT = (() => {
    const cv = document.createElement('canvas'); cv.width = 300; cv.height = 200;
    const g = cv.getContext('2d');
    g.fillStyle = '#007a3d'; g.fillRect(0, 0, 300, 67); g.fillStyle = '#ffffff'; g.fillRect(0, 67, 300, 66); g.fillStyle = '#000000'; g.fillRect(0, 133, 300, 67);
    g.fillStyle = '#ce1126';
    for (const cx of [90, 150, 210]) { g.beginPath(); for (let i = 0; i < 10; i++) { const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 9 : 22; g.lineTo(cx + Math.cos(a) * r, 100 + Math.sin(a) * r); } g.closePath(); g.fill(); }
    const t = new THREE.CanvasTexture(cv); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const flagGeo = new THREE.PlaneGeometry(3.6, 2.4, 12, 4).translate(1.8, 0, 0);
  const flag = add(world, flagGeo, new THREE.MeshStandardMaterial({ map: flagT, side: THREE.DoubleSide, roughness: 0.8 }), SQ.x + 0.15, 2.2, SQ.z, { cast: false });
  flag.userData.noSketch = true; flag.userData.noHide = true;
  const flagBase = flagGeo.attributes.position.array.slice();
  const ropeSun = plate(world, { x: SQ.x - 2.6, y: 0, z: SQ.z, r: 0.9, who: 'sun' });
  const ropeMoon = plate(world, { x: SQ.x + 2.6, y: 0, z: SQ.z, r: 0.9, who: 'moon' });
  // the three light poles and their strings of lights to the flagpole
  const bulbsOn = [];
  const bulbOff = new THREE.MeshStandardMaterial({ color: 0x6a6a70, roughness: 0.6 });
  const poleG = POLES.map(([x, z], i) => {
    add(world, new THREE.CylinderGeometry(0.14, 0.18, 8, 8), M.dark, x, 4, z);
    colliders.push({ type: 'cyl', x, z, r: 0.25, top: 8, bottom: 0, noGrab: true, noStep: true });
    const g = new THREE.Group(); g.userData.noSketch = true; g.userData.noHide = true; world.add(g);
    const on = [0xffd24a, 0xff7aa0, 0x8ad8ff, 0xb0ff8a, 0xd0a0ff].map((c) => new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.6 }));
    const bulbs = [];
    for (let k = 1; k < 18; k++) {
      const u = k / 18, bx = x + (SQ.x - x) * u, bz = z + (SQ.z - z) * u, by = 7.6 + (12.5 - 7.6) * u - Math.sin(u * Math.PI) * 1.4;
      bulbs.push(add(g, new THREE.SphereGeometry(0.13, 6, 5), bulbOff, bx, by, bz, { cast: false }));
    }
    // the jasmine that climbs the pole when it blooms
    const vine = new THREE.Group(); vine.visible = false; g.add(vine);
    const pts = []; for (let k = 0; k <= 40; k++) { const a = k * 0.5; pts.push(new THREE.Vector3(x + Math.cos(a) * 0.3, (k / 40) * 7.8, z + Math.sin(a) * 0.3)); }
    add(vine, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 80, 0.07, 5), mat(0x4a8a3a), 0, 0, 0, { cast: false });
    for (let k = 0; k < 16; k++) add(vine, new THREE.SphereGeometry(0.11, 6, 4), new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: 0xfff4e0, emissiveIntensity: 0.6 }), x + Math.cos(k * 1.9) * 0.4, 0.6 + k * 0.45, z + Math.sin(k * 1.9) * 0.4, { cast: false });
    return { g, bulbs, on, vine, k: 0 };
  });

  // ================================================================ the sketch, the garden
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const ghostDefs = [];
  for (let z = GH0; z < GH1 - 0.1; z += 2.75) ghostDefs.push({ x0: -2.2, x1: 2.2, z0: z, z1: z + 2.75, y: 0, noGrab: true });
  const sketch = createSketch(world, {
    key: 'ch5d', x0: -40, x1: 40, z0: -135, z1: 95, ghosts: ghostDefs, ghostM: M.pave,
    wisps: [{ pos: (ms) => [0, (GH0 + GH1) / 2 + Math.sin((ms / 1000) * (2 * Math.PI / 9)) * 9], y: 0, r: 2.2 }],
  });
  for (const c of sketch.colliders) colliders.push(c);
  const boss = { x: SQ.x, z: SQ.z + 6, r: 4.2, on: false, sit: {} };
  const inBoss = (x, z, pad = 0) => boss.on && Math.hypot(x - boss.x, z - boss.z) < boss.r + pad;
  const polePatch = ([x, z]) => { const L = Math.hypot(SQ.x - x, SQ.z - z); return [x + ((SQ.x - x) / L) * 1.3, z + ((SQ.z - z) / L) * 1.3]; };
  const garden = createGarden(world, colliders, {
    key: 'ch5d',
    patches: [
      { id: 'roof', kind: 'rose', x: 0, y: 0, z: ROOF0 - 3.5, v: 21, aim: [0, 7], lock: 1.2 },
      { id: 'pond', kind: 'lily', x: 0, y: 0, z: POND0 - 1.2, to: [0, 1], count: 7, gap: 3.1 },
      { id: 'mahabba', kind: 'vine', x: 0, y: 0, z: MAH0 - 0.75, h: MY + 0.4, n: [0, -1], stair: 'out' },
      ...POLES.map((p, i) => { const [x, z] = polePatch(p); return { id: 'p' + i, kind: 'lily', x, y: 0, z, to: [1, 0], count: 0, wiltable: true, need: () => !inBoss(x, z, 1.2), dry: 'Too homesick to plant here… lead the grey cloud away first 🌫️' }; }),
    ],
    hot: [{ id: 'tin', x0: -3, x1: 3, z0: ROOF0, z1: ROOF1, y: RY, cool: 12000 }],
    fires: [{ id: 'oven', x: 0, y: 0, z: OVEN, w: 6, d: 1.2, h: 4.4 }],
    onGrow(id) {
      const t = { roof: 'A rose by the building site 🌹', pond: 'Lilies across the pond 🪷', mahabba: 'Jasmine up to the terrace!' }[id];
      if (t) api?.caption(t, 3200);
      if (id[0] === 'p') {
        const n = [0, 1, 2].filter((i) => garden.grown('p' + i)).length;
        api?.caption(n < 3 ? `The lights come on ✨ (${n}/3) Homesickness shrinks…` : 'All the lights are on! ✨ Now the flag: both of you, on the ropes.', 4200);
      }
    },
  });

  sign(world, 6, -110, Math.PI + 0.3, ['AL-MIDAN · الميدان', 'The sweets street ➡', 'Walk TOGETHER 🎨']);
  hangSign(world, -2.6, 3.8, -62, ['Building site 🔥', 'Water the oven fire']);

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: -4, y: 0, z: -108, r: 2.4, sun: [-1, 0, -112], moon: [1, 0, -112], yaw: Math.PI }),
    checkpoint(world, { x: 1.6, y: 0, z: -60, r: 2.2, sun: [0, 0, -61], moon: [0, 0, -60], label: 'The sweets street' }),
    checkpoint(world, { x: 1.6, y: 0, z: -31, r: 2.2, sun: [0, 0, -31.5], moon: [0, 0, -30.5], label: 'The pond' }),
    checkpoint(world, { x: 6, y: MY, z: 12, r: 2.6, sun: [-1, MY, 12], moon: [1, MY, 12], label: 'Al-Mahabba 🥪', yaw: Math.PI }),
    checkpoint(world, { x: -4, y: 0, z: 36, r: 2.6, sun: [-1, 0, 36], moon: [1, 0, 36], label: 'The square', yaw: Math.PI }),
  ];
  {
    const P = [];
    for (let z = -125; z <= 90; z += 8) { P.push([-36 - R() * 4, 1 + R() * 3, z]); P.push([36 + R() * 4, 1 + R() * 3, z]); }
    memoryMist(world, P, { size: 12, color: 0xece0e8, opacity: 0.45 });
  }

  // ================================================================ Homesickness (the boss)
  const bossG = new THREE.Group(); bossG.userData.noSketch = true; bossG.userData.noHide = true; world.add(bossG); bossG.visible = false;
  const fogM = new THREE.MeshStandardMaterial({ color: 0x8a8a9a, roughness: 1, transparent: true, opacity: 0.55, depthWrite: false });
  for (let k = 0; k < 7; k++) add(bossG, new THREE.SphereGeometry(0.42 + (k % 3) * 0.12, 16, 10), fogM, Math.cos(k * 0.9) * 0.45, 0.5 + (k % 2) * 0.25, Math.sin(k * 0.9) * 0.4, { cast: false, receive: false });
  const eyeM = new THREE.MeshBasicMaterial({ color: 0x2a2a3a });
  for (const dx of [-0.22, 0.22]) { const e = add(bossG, new THREE.SphereGeometry(0.07, 8, 6), eyeM, dx, 0.75, 0.5, { cast: false }); e.scale.set(1, 0.6, 1); }
  const tear = add(bossG, new THREE.SphereGeometry(0.05, 6, 5), new THREE.MeshBasicMaterial({ color: 0x9ad0ff }), 0.22, 0.6, 0.55, { cast: false });

  for (const m of K.inks) sketch.ink(m);
  for (const s of stars) s.mesh.userData.noSketch = true;
  for (const c of cps) c.g.userData.noSketch = true;
  sketch.patch(world);
  mergeStatic(world);

  // ================================================================ state
  let doneT = -1, restored = false, sendT = 0, flagK = 0, popT = -1;
  const auth = () => api && (api.kind === 'solo' || api.role === 'sun');
  const litN = () => [0, 1, 2].filter((i) => garden.grown('p' + i)).length;
  const line = lane([0, -90], [0, MAH1], { half: 2.3, y0: -3, y1: 30, dist: 15, pitch: 0.12 });
  const abilities = withMinigames(garden.abilities, [mgPaint]);
  const powers = Object.create(abilities);
  powers.onEvent = (e) => {
    if (e.type === 'hs') { if (!auth()) { boss.tx = e.x; boss.tz = e.z; boss.on = !!e.on; } return true; }
    return abilities.onEvent(e);
  };

  return {
    id: 'ch5-midan',
    title: 'Chapter 5 · Damascus — Al-Midan',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1, 0, -112), moon: new THREE.Vector3(1, 0, -112) },
    camYaw: { sun: Math.PI, moon: Math.PI },
    lobbyCam: { cx: 0, cz: -20, r: 95, h: 46 },
    killY: -6,
    killAt: (p) => p.y < -2.5 || (p.y < -0.9 && p.z > POND0 && p.z < POND1 && Math.abs(p.x) < 3.2),
    lanes: [line],
    checkpoints: cps,
    hints: [
      'Into the sweets street (it runs away from the start). The missing stretch only appears while you walk it side by side; wait for the grey wisp to drift off.',
      'Sun waters the oven fire. Then Moon plants the rose in front of the building site, Sun waters it, and Sun cools the hot tin roof from below. Bounce up together.',
      'Lilies over the pond (Moon plants at the edge, Sun waters). At the end: jasmine up the front of Al-Mahabba to the terrace.',
      'Eat… then drop into the square from the back of the terrace.',
      'Homesickness follows Moon. Moon: plant at a light pole, then run and lead the cloud away. Sun: water the sprout before the cloud comes back (it wilts seeds it sits on). Three poles, then both stand on the flag ropes.',
    ],
    respawnNearPartner: (pp) => !!pp && pp.y > -0.5 && !(pp.z > GH0 && pp.z < GH1 && Math.abs(pp.x) < 3) && !(pp.z > POND0 && pp.z < POND1 && pp.y < 0.5),
    portal: new THREE.Vector3(SQ.x, 0, SQ.z - 6),
    intro: {
      all: ['Chapter 5 · Damascus', 'Part 4 · Al-Midan', 'Her family\'s neighbourhood. The sweets street, the best sujuk in the city, and the square where every celebration ends up. Homesickness is waiting there.'],
      sun: 'Water ✦ grows her plants, cools, puts out fires',
      moon: 'Seeds ✦ · Homesickness follows YOU: lead it away',
    },
    abilities: powers,
    sketch, garden, boss,
    attach(a) { api = a; sketch.attach(a); garden.attach(a); mgPaint.attach(a); },
    onCheckpoint() {},
    debug: () => ({ g: garden.grownMask(), lit: litN(), boss: [+boss.x.toFixed(1), +boss.z.toFixed(1), +boss.r.toFixed(2), boss.on], flag: +flagK.toFixed(2), gh: sketch.ghosts.filter((g) => g.on).length, done: !!api?.save?.ch5d?.flag }),
    story(ctx, t) {
      const P = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      if (P.some((p) => p.z > -90 && p.z < GH0)) once('st', ctx, '"My grandmother bought her sweets here. Every Friday." The street just… stops. Stay close.', 4800);
      if (P.some((p) => p.z > OVEN - 6 && p.z < ROOF0)) once('oven', ctx, 'A bakery oven, blazing in the middle of the street 🔥 and a building site behind it. Of course.', 4400);
      if (P.some((p) => p.y > MY - 0.5 && p.z > MAH0)) once('mah', ctx, 'Al-Mahabba! Two sujuk sandwiches, extra garlic. "Best in Damascus. Don\'t argue." 🥪', 5200);
      if (P.some((p) => p.z > 32 && p.y < 2)) once('sq', ctx, 'The square. Lights strung everywhere, all dark. And in the middle: Homesickness. It turns to look at her. 🌫️', 5200);
      if (api?.save?.ch5d?.flag && doneT < 0) {
        doneT = t;
        const lines = [
          ['The flag goes up. Every light in Al-Midan comes on at once ✨🎆', 4400],
          ['Homesickness bursts into a thousand little lights.', 3600],
          ['🦆 "You coloured a city you\'ve never walked in together. Imagine what happens when you actually do."', 6200],
          ['The whole old city is in colour, for the first time.', 3800],
          ['Chapter 5 complete ✨', 3000],
        ];
        let at = 1800;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        sketch.bloom(new THREE.Vector3(SQ.x, 0, SQ.z));
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      sketch.update(dt, serverMs, t);
      mgPaint.update(dt, serverMs, t);
      smoke.children.forEach((m, k) => { m.position.y = ((t * 0.6 + k * 0.6) % 2.4); m.material.opacity = 0.25 * (1 - m.position.y / 2.4); });
      if (!api) return;
      const Pp = { sun: api.bodies.sun.pos, moon: api.bodies.moon.pos };
      const n = litN(), done = !!api.save?.ch5d?.flag;
      // ---- the boss: wakes when someone enters the square; follows Moon (Sun's phone simulates, sends 5×/s)
      const targetR = done ? 0 : [4.2, 3.3, 2.5, 1.4][n];
      if (auth()) {
        if (!boss.on && !done && (Pp.sun.z > 33 || Pp.moon.z > 33) && Pp.moon.y < 3) boss.on = true;
        if (boss.on) {
          const m = Pp.moon, inSq = m.z > 32 && m.y < 4;
          let tx = inSq ? m.x : SQ.x, tz = inSq ? m.z : SQ.z + 6;
          if (n === 3) { tx = SQ.x; tz = SQ.z; }
          const dx = tx - boss.x, dz = tz - boss.z, L = Math.hypot(dx, dz), sp = n === 3 ? 1.5 : 2.1 + n * 0.35;
          if (L > 0.05) { const s = Math.min(L, sp * dt); boss.x += (dx / L) * s; boss.z += (dz / L) * s; }
          // a seed it sits on wilts
          for (let i = 0; i < 3; i++) {
            const id = 'p' + i, p = garden.byId[id];
            if (garden.seeded(id) && !garden.grown(id) && Math.hypot(p.x - boss.x, p.z - boss.z) < boss.r) {
              boss.sit[id] = (boss.sit[id] || 0) + dt;
              if (boss.sit[id] > 2.2) { boss.sit[id] = 0; garden.unseed(id); api.caption('The seed wilts under the grey cloud 🥀 Plant again and lead it away!', 3200); }
            } else boss.sit[id] = 0;
          }
          sendT -= dt;
          if (sendT <= 0 && api.kind !== 'solo') { sendT = 0.2; api.send('hs', { x: +boss.x.toFixed(2), z: +boss.z.toFixed(2), on: boss.on ? 1 : 0 }); }
        }
      } else if (boss.tx != null) { boss.x += (boss.tx - boss.x) * Math.min(1, dt * 6); boss.z += (boss.tz - boss.z) * Math.min(1, dt * 6); }
      boss.r += (targetR - boss.r) * Math.min(1, dt * 2);
      bossG.visible = boss.on && boss.r > 0.08;
      bossG.position.set(boss.x, 0.2 + Math.sin(t * 1.3) * 0.2, boss.z);
      bossG.scale.setScalar(Math.max(0.01, boss.r * 1.6));
      bossG.rotation.y = Math.atan2(Pp.moon.x - boss.x, Pp.moon.z - boss.z);
      tear.position.y = 0.6 - ((t * 0.5) % 0.4);
      if (boss.on && !done) sketch.rub(boss.x, boss.z, boss.r * 1.2, Math.round(dt * 220), 30);
      // ---- the poles light up
      poleG.forEach((q, i) => {
        const on = garden.grown('p' + i);
        q.k += ((on ? 1 : 0) - q.k) * Math.min(1, dt * 2);
        q.vine.visible = q.k > 0.02; q.vine.scale.y = Math.max(0.01, q.k);
        q.bulbs.forEach((b, k) => { b.material = on && k / q.bulbs.length < q.k ? q.on[k % q.on.length] : bulbOff; });
      });
      // ---- the flag: both on the ropes, after the three poles
      const pulling = n === 3 && !done && ropeSun.update(Pp) & ropeMoon.update(Pp);
      if (n < 3) { ropeSun.update(Pp); ropeMoon.update(Pp); }
      flagK = done ? 1 : Math.max(0, Math.min(1, flagK + (pulling ? dt / 5 : -dt / 8)));
      if (pulling && Math.random() < dt * 2) once('pull', null, 'Pull! Together… 🚩', 2400);
      flag.position.y = 2.2 + flagK * 10.6;
      const pos = flagGeo.attributes.position;
      for (let i = 0; i < pos.count; i++) { const x = flagBase[i * 3]; pos.setZ(i, Math.sin(x * 1.6 - t * 4) * 0.12 * (x / 3.6)); }
      pos.needsUpdate = true;
      if (flagK >= 1 && !done && auth()) api.setSave('ch5d/flag', 1);
      if (done && popT < 0) { popT = t; for (let k = 0; k < 6; k++) api.fx.sparks(new THREE.Vector3(boss.x, 1 + k * 0.6, boss.z), [0xffd24a, 0xff7aa0, 0x8ad8ff, 0xb0ff8a, 0xd0a0ff, 0xffffff][k], 40, 7); api.sound.play('win'); api.shake?.(0.6); }
      const cpi = api.save?.cp?.l === 'ch5-midan' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      if (!restored) { restored = true; sketch.restore(); for (let i = 1; i <= cpi; i++) sketch.paint(cps[i].x, cps[i].z, 12); }
    },
  };
}
