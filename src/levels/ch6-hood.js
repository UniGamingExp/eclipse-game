// Chapter 6 · Watching Together · Part 1 "The Neighbourhood" — the pastel little town from the show they watched
// together: everything is lovely, there's frozen yogurt on every corner, and nothing ever breaks… except it does.
// Powers: Sun PAUSES things (the TV remote), Moon REWINDS them. The core trick: things that already fell can be
// rewound into one piece, but they fall again a moment later, unless he pauses them while they're whole.
//  1. The square: the footbridge over the canal fell in. Rewind it, pause it, run up it.
//  2. Main Street (side view): the staircase up to the high walkway (rewind + pause); the shuttle over the gap.
//  3. The froyo courtyard: the swirl tower. Spinning rings of cones; the middle ring has fallen (rewind + pause).
//     At the top: froyo for two. And on the big screen: "Loading… 99 %".
//  🎮 Hidden minigame "Froyo Dash": the garden behind the hedge arch, west of the square.
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { checkpoint, lane } from './play.js';
import { memoryMist } from '../memory.js';
import { mergeStatic } from './sketch.js';
import { createTime, collapse, shuttle } from './timeplay.js';
import { createMinigame, raceGame, withMinigames } from './minigame.js';

const CAN0 = 20, CAN1 = -2, UPY = 3;            // the canal (z 20 → −2), the upper street at y 3
const ST0 = -22, WY = 10;                       // the staircase starts at z −22; the walkway at y 10
const WK0 = -30, WK1 = -56, SH1 = -78;          // the walkway and the shuttle gap
const TC = { x: 0, z: -102 };                   // the swirl tower

export function buildCh6Hood(root, scene) {
  const colliders = [], stars = [];
  const world = new THREE.Group();
  root.add(world);
  const statics = new THREE.Group(); statics.userData.static = true; world.add(statics);
  let seed = 21;
  const R = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

  scene.fog = new THREE.Fog(new THREE.Color('#f8d8e8'), 100, 320);
  sky(root, {
    top: '#7ab0f0', mid: '#ffd0e8', low: '#fff0d0', neb1: '#ffd0f0', neb2: '#d0f0ff', stars: 0.1, nebula: 0.35, cloud: 0xffffff, far: false, cx: 0, cz: -20, seaY: -16,
    lightDir: [0.4, 0.7, 0.5],
    planets: [['lilac', 0.6, 0.36, 270, 0.3, 1.4]],
  });
  lights(root, { sunColor: 0xfff6e8, sunI: 1.9, hemiSky: 0xe0e4ff, hemiGround: 0xf0d8e0, hemiI: 1.05, pos: [30, 60, 30], target: [0, 0, -20], extent: 110 });

  const P = [0xffd6e8, 0xd6f5e8, 0xfff2c4, 0xd8e4ff, 0xf0dcff, 0xffe0cc].map((c) => mat(c, { roughness: 0.8 }));
  const roofM = [0xff8fb0, 0x7ad0b0, 0xf0b85a, 0x8aa8f0, 0xc090e8].map((c) => mat(c, { roughness: 0.7 }));
  const whiteM = mat(0xffffff, { roughness: 0.7 }), paveM = mat(0xf4e6dc, { roughness: 0.9 }), grassM = mat(0xa8e0a0, { roughness: 1 });
  const waterM = new THREE.MeshStandardMaterial({ color: 0x7ad0f0, roughness: 0.1, transparent: true, opacity: 0.85 });
  const glassM = new THREE.MeshStandardMaterial({ color: 0x9ad0ff, emissive: 0xfff0d0, emissiveIntensity: 0.25, roughness: 0.2 });

  const solid = (x0, x1, z0, z1, top, bottom, m, col = {}) => {
    if (m) add(statics, new THREE.BoxGeometry(x1 - x0, top - bottom, z1 - z0), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2);
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, noGrab: true, ...col };
    colliders.push(c); return c;
  };
  const ground = (x0, x1, z0, z1, y = 0, m = paveM) => {
    add(statics, new THREE.BoxGeometry(x1 - x0, 2, z1 - z0), m, (x0 + x1) / 2, y - 1, (z0 + z1) / 2, { cast: false });
    colliders.push({ type: 'box', x0, x1, z0, z1, top: y, bottom: y - 2, safe: true, surface: m === grassM ? 'grass' : 'concrete' });
  };
  /** a pastel cottage: front faces +z when rotY = 0 */
  let hs = 0;
  const cottage = (x, z, w, d, h, rotY, y = 0) => {
    const k = hs++;
    const g = new THREE.Group(); g.position.set(x, y, z); g.rotation.y = rotY; statics.add(g);
    add(g, new THREE.BoxGeometry(w, h, d), P[k % P.length], 0, h / 2, 0);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 1, 1, 4, 1).rotateY(Math.PI / 4), roofM[k % roofM.length]);
    roof.scale.set(w * 0.75, 2.4, d * 0.75); roof.position.y = h + 1.2; roof.castShadow = true; g.add(roof);
    add(g, rbox(1.1, 2.1, 0.12, 0.05), roofM[(k + 2) % roofM.length], 0, 1.05, d / 2 + 0.06);
    for (const dx of [-w * 0.3, w * 0.3]) {
      add(g, rbox(1.1, 1.0, 0.1, 0.04), glassM, dx, h * 0.62, d / 2 + 0.05, { cast: false });
      add(g, rbox(1.3, 0.25, 0.4, 0.04), whiteM, dx, h * 0.62 - 0.6, d / 2 + 0.2);
      for (let f = 0; f < 3; f++) add(g, new THREE.SphereGeometry(0.13, 6, 4), mat([0xff7aa0, 0xffe27a, 0xb08aff][f]), dx - 0.4 + f * 0.4, h * 0.62 - 0.4, d / 2 + 0.25, { cast: false });
    }
    if (k % 3 === 0) add(g, rbox(w * 0.8, 0.1, 1.4, 0.04), roofM[(k + 1) % roofM.length], 0, 2.8, d / 2 + 0.7).rotation.x = 0.25;
    return g;
  };
  const froyo = (x, y, z, s = 1, k = 0) => {
    const g = new THREE.Group(); g.position.set(x, y, z); g.scale.setScalar(s); statics.add(g);
    add(g, new THREE.CylinderGeometry(0.5, 0.35, 0.6, 14), whiteM, 0, 0.3, 0);
    for (let i = 0; i < 3; i++) add(g, new THREE.TorusGeometry(0.42 - i * 0.12, 0.16, 8, 16).rotateX(Math.PI / 2), mat([0xffc0d8, 0xd0f0c0, 0xfff0c0, 0xe0c8ff][(k + i) % 4]), 0, 0.68 + i * 0.2, 0);
    add(g, new THREE.SphereGeometry(0.12, 8, 6), mat(0xe2334a), 0, 1.3, 0);
    return g;
  };

  // ================================================================ ground
  ground(-34, 34, CAN0, 66);                       // the square
  ground(-50, -34, 34, 60, 0, grassM);             // the garden behind the hedge (minigame)
  ground(-34, 34, -10, CAN1, UPY);                 // the upper street on the far bank
  ground(-3, 3, ST0 + 0.1, -10, UPY);              // Main Street up to the staircase
  ground(-24, 24, -124, -80, UPY);                 // the froyo courtyard
  add(world, new THREE.BoxGeometry(68, 0.1, CAN0 - CAN1), waterM, 0, -0.6, (CAN0 + CAN1) / 2, { cast: false });
  add(statics, new THREE.BoxGeometry(68, 1.2, CAN0 - CAN1), mat(0x5ab0d0), 0, -1.3, (CAN0 + CAN1) / 2, { cast: false });
  solid(-34, 34, CAN1 - 0.01, CAN1, UPY, -2, whiteM);   // the canal wall on the far side (3 m, no grabbing)

  // ================================================================ 1. THE SQUARE
  for (let x = -28; x <= 28; x += 8) cottage(x, 69.5, 7, 6, 5 + (hs % 2), Math.PI);
  colliders.push({ type: 'box', x0: -34, x1: 34, z0: 66, z1: 73, top: 8, bottom: 0, noGrab: true });
  for (let z = 26; z <= 62; z += 9) { if (z !== 44) cottage(-37.5, z, 7, 6, 5, Math.PI / 2); cottage(37.5, z, 7, 6, 5 + (hs % 2), -Math.PI / 2); }
  colliders.push({ type: 'box', x0: -41, x1: -34, z0: CAN0, z1: 40, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -41, x1: -34, z0: 48, z1: 66, top: 8, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: 34, x1: 41, z0: CAN0, z1: 66, top: 8, bottom: 0, noGrab: true });
  // the hedge arch to the garden (west)
  add(statics, new THREE.TorusGeometry(2.4, 0.5, 8, 16, Math.PI).rotateY(Math.PI / 2), mat(0x6ab86a), -34, 3.2, 44);
  // froyo stands, benches, a fountain, lamp posts with bunting
  for (const [x, z, k] of [[-14, 50, 0], [14, 52, 1], [-20, 30, 2], [20, 32, 3]]) {
    add(statics, rbox(3, 1.0, 1.4, 0.08), whiteM, x, 0.5, z); add(statics, rbox(3.4, 0.12, 1.8, 0.04), roofM[k], x, 2.8, z);
    for (const dx of [-1.4, 1.4]) add(statics, new THREE.CylinderGeometry(0.05, 0.05, 1.8, 6), whiteM, x + dx, 1.9, z);
    froyo(x - 0.6, 1.0, z, 0.6, k); froyo(x + 0.6, 1.0, z, 0.6, k + 1);
    colliders.push({ type: 'box', x0: x - 1.5, x1: x + 1.5, z0: z - 0.7, z1: z + 0.7, top: 1.0, bottom: 0 });
  }
  add(statics, new THREE.CylinderGeometry(3, 3.3, 0.7, 20), whiteM, 0, 0.35, 42); add(world, new THREE.CylinderGeometry(2.7, 2.7, 0.1, 20), waterM, 0, 0.65, 42, { cast: false });
  froyo(0, 0.7, 42, 2.2, 1);
  colliders.push({ type: 'cyl', x: 0, z: 42, r: 3.3, top: 0.7, bottom: 0 }); colliders.push({ type: 'cyl', x: 0, z: 42, r: 1.1, top: 3.6, bottom: 0.7, noGrab: true });
  stars.push(makeStar(world, 'c6n-swirl', 0, 4.8, 42, 0));
  for (const [x, z] of [[-8, 24], [8, 24], [-24, 44], [24, 44]]) { add(statics, new THREE.CylinderGeometry(0.08, 0.1, 4, 8), whiteM, x, 2, z); add(statics, new THREE.SphereGeometry(0.28, 10, 8), new THREE.MeshStandardMaterial({ color: 0xfff6d8, emissive: 0xffe0a0, emissiveIntensity: 0.6 }), x, 4.2, z); colliders.push({ type: 'cyl', x, z, r: 0.14, top: 4, bottom: 0, noGrab: true, noStep: true }); }

  // ================================================================ 2. MAIN STREET (side view along −z, camera on −x)
  for (let z = -14; z >= SH1 + 2; z -= 8) cottage(7, z, 7, 7, 7 + (hs % 3), -Math.PI / 2, UPY);
  colliders.push({ type: 'box', x0: 3.5, x1: 11, z0: SH1, z1: -10, top: UPY + 11, bottom: 0, noGrab: true });
  for (let z = -14; z >= -26; z -= 8) cottage(-27, z, 7, 7, 5, Math.PI / 2, UPY);
  solid(-34, -3, -26, -10, UPY + 1.0, UPY, whiteM, { noCam: true });     // a low garden wall on the near side
  solid(-3, 3, WK1, WK0, WY, 0, P[3]);                                      // the block under the high walkway
  add(statics, new THREE.BoxGeometry(6.2, 0.4, WK0 - WK1 + 0.2), whiteM, 0, WY + 0.02, (WK0 + WK1) / 2);
  solid(-3, 3, -84, SH1, WY, UPY, P[1]);                                    // a pier at the far end (drop into the courtyard)
  add(statics, new THREE.BoxGeometry(6.2, 0.4, 2.2), whiteM, 0, WY + 0.02, SH1 - 1);
  stars.push(makeStar(world, 'c6n-walk', 0, WY + 1.6, WK1 + 1.4, 2));
  stars.push(makeStar(world, 'c6n-gap', 0, WY + 3.6, (WK1 + SH1) / 2, 3));
  hangSign(world, -2.6, UPY + 3.8, -14, ['Fallen? ⏪ Rewind it.', 'Whole again? ⏸ Pause it!']);

  // ================================================================ 3. THE FROYO COURTYARD and the swirl tower
  for (let x = -20; x <= 20; x += 8) cottage(x, -127.5, 7, 6, 6 + (hs % 2), 0, UPY);
  colliders.push({ type: 'box', x0: -24, x1: 24, z0: -131, z1: -124, top: UPY + 9, bottom: 0, noGrab: true });
  for (let z = -116; z >= -120; z -= 8) { cottage(-27.5, z, 7, 6, 6, Math.PI / 2, UPY); cottage(27.5, z, 7, 6, 6, -Math.PI / 2, UPY); }
  solid(-31, -24, -124, -80, UPY + 8, 0, P[0]); solid(24, 31, -124, -80, UPY + 8, 0, P[4]);
  // the big outdoor screen (where the Buffer shows up at the end)
  const scrCv = document.createElement('canvas'); scrCv.width = 512; scrCv.height = 288;
  const scrT = new THREE.CanvasTexture(scrCv); scrT.colorSpace = THREE.SRGBColorSpace;
  const drawScreen = (pct, eyes) => {
    const g = scrCv.getContext('2d');
    g.fillStyle = '#1a1830'; g.fillRect(0, 0, 512, 288);
    if (pct < 0) { g.fillStyle = '#ffd6e8'; g.font = '700 120px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('♡', 256, 150); }
    else {
      g.strokeStyle = '#ffffff'; g.lineWidth = 14; g.lineCap = 'round';
      for (let k = 0; k < 8; k++) { g.globalAlpha = 0.25 + (k / 8) * 0.75; const a = k * Math.PI / 4; g.beginPath(); g.moveTo(256 + Math.cos(a) * 46, 120 + Math.sin(a) * 46); g.lineTo(256 + Math.cos(a) * 74, 120 + Math.sin(a) * 74); g.stroke(); }
      g.globalAlpha = 1;
      if (eyes) { g.fillStyle = '#fff'; for (const dx of [-18, 18]) { g.beginPath(); g.ellipse(256 + dx, 116, 9, 13, 0, 0, Math.PI * 2); g.fill(); } g.fillStyle = '#9ad0ff'; g.beginPath(); g.arc(275, 140, 5, 0, Math.PI * 2); g.fill(); }
      g.fillStyle = '#fff'; g.font = '600 34px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.fillText(`Loading… ${pct} %`, 256, 238);
    }
    scrT.needsUpdate = true;
  };
  drawScreen(-1, false);
  add(statics, rbox(13, 8, 0.8, 0.2), whiteM, 0, UPY + 7.5, -124.4);
  const scr = add(world, new THREE.PlaneGeometry(12, 6.75), new THREE.MeshBasicMaterial({ map: scrT }), 0, UPY + 7.5, -123.95, { cast: false }); scr.userData.noHide = true;
  // the tower: a cone of froyo with a column up the middle
  const TOP = UPY + 10.0;
  add(statics, new THREE.CylinderGeometry(2.2, 2.6, TOP - UPY, 16), mat(0xf0d0a0, { roughness: 0.8 }), TC.x, (TOP + UPY) / 2, TC.z);
  for (let k = 0; k < 5; k++) add(statics, new THREE.TorusGeometry(2.4, 0.12, 6, 20).rotateX(Math.PI / 2), mat(0xe0b080), TC.x, UPY + 1 + k * 2.1, TC.z);
  colliders.push({ type: 'cyl', x: TC.x, z: TC.z, r: 2.4, top: TOP, bottom: 0, noGrab: true });
  for (let i = 0; i < 3; i++) add(statics, new THREE.TorusGeometry(1.6 - i * 0.45, 0.45, 10, 20).rotateX(Math.PI / 2), mat([0xffc0d8, 0xd0f0c0, 0xfff0c0][i]), TC.x, TOP + 0.25 + i * 0.4, TC.z);
  stars.push(makeStar(world, 'c6n-ring', TC.x, TOP + 3.2, TC.z, 4));
  for (const [x, z] of [[-14, -90], [14, -90], [-14, -114], [14, -114]]) { add(statics, rbox(2.4, 0.8, 1.2, 0.08), whiteM, x, UPY + 0.4, z); froyo(x, UPY + 0.8, z, 0.5, x > 0 ? 2 : 0); colliders.push({ type: 'box', x0: x - 1.2, x1: x + 1.2, z0: z - 0.6, z1: z + 0.6, top: UPY + 0.8, bottom: UPY }); }

  // ================================================================ the time objects
  let api = null;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; (ctx || api)?.caption(text, ms); };
  const bridgeM = mat(0xffffff, { roughness: 0.6 }), stepM = mat(0xffc0d8, { roughness: 0.6 }), coneM = mat(0xf0c890, { roughness: 0.7 });
  const N = 8, segL = (CAN0 - CAN1) / N;
  const bridge = collapse('bridge', Array.from({ length: N }, (_, k) => ({ w: 3.2, h: 0.4, d: segL + 0.02, m: bridgeM, x: 0, y: (UPY / N) * (k + 1), z: CAN0 - segL * (k + 0.5), noGrab: true })),
    { dur: 2, fall: [0, -4.4, 0], stagger: 0.06, aim: [0, 1.5, (CAN0 + CAN1) / 2] });
  const SN = 6, sRise = (WY - UPY) / SN;
  const stairs = collapse('stairs', Array.from({ length: SN }, (_, k) => ({ w: 3, h: 0.5, d: 1.5, m: stepM, x: 0, y: UPY + sRise * (k + 1), z: ST0 - 1.35 * k - 0.75, noGrab: true })),
    { dur: 2, fall: [0, -6.2, 1.5], stagger: 0.07, aim: [0, UPY + 3.5, ST0 - 4] });
  const shut = shuttle('shuttle', { w: 3, h: 0.5, d: 3, m: mat(0xb0e8ff, { roughness: 0.5 }), x: 0, y: WY, z: WK1 - 2, noGrab: true }, [[0, WY, WK1 - 2], [0, WY, SH1 + 2]], { period: 7 });
  // the swirl tower: three rings of cones; the middle one has fallen off
  const RINGS = [{ y: UPY + 2.4, r: 4.6, n: 3, period: 9, dir: 1 }, { y: UPY + 5.0, r: 4.6, n: 3, period: 7, dir: -1 }, { y: UPY + 7.6, r: 4.6, n: 3, period: 11, dir: 1 }];
  const ringObj = RINGS.map((q, j) => {
    const pieces = Array.from({ length: q.n }, () => ({ w: 2.2, h: 0.4, d: 2.2, round: true, m: [stepM, coneM, mat(0xd0f0c0)][j], x: TC.x + q.r, y: q.y, z: TC.z, noGrab: false }));
    const aimV = new THREE.Vector3(TC.x, q.y, TC.z);
    const spin = (pcs, s, drop = 0, solid = true) => pcs.forEach((pc, k) => {
      const a = q.dir * (s / q.period) * Math.PI * 2 + (k / q.n) * Math.PI * 2;
      pc.set(TC.x + Math.cos(a) * q.r, q.y - drop, TC.z + Math.sin(a) * q.r, solid);
    });
    if (j === 1) return { id: 'ring1', kind: 'once', dur: 2, pieces, aim: () => aimV, place(u, pcs, tau, s) { const a = Math.max(0, Math.min(1, (u - 0.12) / 0.45)); spin(pcs, s, a * a * (q.y - UPY - 0.2), a < 0.2); } };
    return { id: 'ring' + j, kind: 'loop', period: q.period, pieces, aim: () => aimV, place(u, pcs, tau) { spin(pcs, tau); } };
  });
  const time = createTime(world, colliders, {
    objects: [bridge, stairs, shut, ...ringObj],
    onUse(o, k) {
      if (o.id === 'bridge' && k === 'r') once('rew', null, '⏪ It flies back together! …and it\'s already starting to wobble. ☀ Pause it!', 4200);
      if (o.kind === 'once' && k === 'p') once('pau', null, '⏸ Paused! Quick, while it\'s in one piece!', 3400);
    },
  });
  stars.push(makeStar(world, 'c6n-bridge', 0, 4.6, (CAN0 + CAN1) / 2, 1));

  // ================================================================ hidden minigame: the garden behind the hedge
  solid(-50, -34, 59.4, 60, 2.2, 0, mat(0x6ab86a)); solid(-50, -34, 34, 34.6, 2.2, 0, mat(0x6ab86a)); solid(-50.6, -50, 34, 60, 2.2, 0, mat(0x6ab86a));
  const mgG = new THREE.Group(); world.add(mgG);
  for (const [x, z, h] of [[-42, 40, 0.8], [-45, 46, 1.2], [-40, 52, 0.8], [-46, 54, 1.4]]) { add(mgG, rbox(1.4, h, 1.4, 0.1), P[(x * 7) & 3], x, h / 2, z); colliders.push({ type: 'box', x0: x - 0.7, x1: x + 0.7, z0: z - 0.7, z1: z + 0.7, top: h, bottom: 0 }); }
  for (const z of [56.6, 57.8]) add(mgG, new THREE.PlaneGeometry(0.7, 0.45), new THREE.MeshBasicMaterial({ color: z < 57 ? 0xffb347 : 0xa98bff, side: THREE.DoubleSide }), -48, 1.9, z, { cast: false });
  const mgDash = createMinigame(mgG, colliders, {
    id: 'c6dash', title: 'Froyo Dash', rules: ['Over the boxes to the flags!', 'First one there gets the bigger cup.'],
    at: { x: -36.6, y: 0, z: 41 }, face: -Math.PI / 2, pads: { sun: [-38.6, 38.4], moon: [-38.6, 43.6] }, dur: 45000,
    game: raceGame({ finish: { sun: [-48, 56.6], moon: [-48, 57.8] }, y: 0, fallY: -3 }),
  });

  // ================================================================ checkpoints, mist
  const cps = [
    checkpoint(world, { x: 4, y: 0, z: 58, r: 2.4, sun: [-1, 0, 58], moon: [1, 0, 58] }),
    checkpoint(world, { x: -1.6, y: UPY, z: -14, r: 2.2, sun: [0, UPY, -13], moon: [0, UPY, -14.4], label: 'Main Street' }),
    checkpoint(world, { x: -1.6, y: WY, z: WK0 - 3, r: 2.2, sun: [0, WY, WK0 - 2.5], moon: [0, WY, WK0 - 3.8], label: 'The high walkway' }),
    checkpoint(world, { x: -4, y: UPY, z: -86, r: 2.6, sun: [-1, UPY, -86], moon: [1, UPY, -86], label: 'The froyo courtyard 🍦' }),
  ];
  {
    const Pm = [];
    for (let z = -128; z <= 70; z += 8) { Pm.push([-44 - R() * 4, 1 + R() * 3, z]); Pm.push([44 + R() * 4, 1 + R() * 3, z]); }
    memoryMist(world, Pm, { size: 12, color: 0xfff0f6, opacity: 0.45 });
  }
  mergeStatic(world);

  // ================================================================ state
  let doneT = -1, lastScr = 0;
  const line = lane([0, -10], [0, SH1 - 1.5], { half: 2.3, y0: 1, y1: 30, dist: 15, pitch: 0.12 });
  const abilities = withMinigames(time.abilities, [mgDash]);

  return {
    id: 'ch6-hood',
    title: 'Chapter 6 · Watching Together — The Neighbourhood',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1, 0, 58), moon: new THREE.Vector3(1, 0, 58) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: -20, r: 95, h: 46 },
    killY: -6,
    killAt: (p) => p.y < -0.9 && p.z < CAN0 && p.z > CAN1 - 0.5 || p.y < 1.5 && p.z < CAN1 - 1,
    lanes: [line],
    checkpoints: cps,
    hints: [
      'The footbridge fell into the canal. Moon: stand near it and Rewind (it flies back together for a moment). Sun: Pause it right then. Run up it together before it falls again.',
      'The staircase up to the walkway fell down too: same trick. Moon rewinds, Sun pauses while it\'s whole, climb fast.',
      'The shuttle goes back and forth over the gap. Pause it when it\'s next to you, or Moon rewinds it back to you. At the end, drop into the courtyard.',
      'The swirl tower: three rings of cones spin round it; the middle ring has fallen. Climb the first ring, then Moon rewinds the middle ring and Sun pauses it. Up the top ring to the top of the tower: both of you.',
    ],
    respawnNearPartner: (pp) => !!pp && pp.y > -0.5 && !(pp.z < CAN0 && pp.z > CAN1 && pp.y < 0.5),
    portal: new THREE.Vector3(0, UPY, -88),
    intro: {
      all: ['Chapter 6 · Watching Together', 'Part 1 · The Neighbourhood', 'Every evening they pressed play at the same moment, 2,800 km apart. This is the little town from the show they loved. Lovely. Frozen yogurt on every corner. Nothing ever breaks… right?'],
      sun: 'Pause ✦ (the remote) freezes whatever is moving near you',
      moon: 'Rewind ✦ runs it backwards: even things that already fell',
    },
    abilities,
    time,
    attach(a) { api = a; time.attach(a); mgDash.attach(a); },
    onCheckpoint() {},
    debug: () => { const s = api.serverNow() / 1000; return Object.fromEntries(time.objects.map((o) => [o.id, +time.tau(o, s).toFixed(2)])); },
    story(ctx, t) {
      const Pp = [ctx.pos.sun, ctx.pos.moon].filter(Boolean);
      if (Pp.some((p) => p.z < CAN0 + 6 && p.z > CAN0 - 1 && p.y < 1)) once('canal', ctx, 'The little bridge over the canal… is in the canal. Moon: Rewind ⏪', 4200);
      if (Pp.some((p) => p.z < ST0 + 6 && p.z > ST0 - 2 && p.y < UPY + 1)) once('stairs', ctx, 'The staircase to the walkway has collapsed. You know what to do.', 3800);
      if (Pp.some((p) => p.y > WY - 0.5 && p.z < WK1 + 4)) once('shuttle', ctx, 'The little shuttle never stops. Pause it, or rewind it back to you.', 4000);
      if (Pp.some((p) => p.z < -84 && p.y < UPY + 1)) once('tower', ctx, 'The swirl tower! There\'s froyo at the top. Obviously.', 3600);
      const top = (p) => p && p.y > TOP - 0.5 && Math.hypot(p.x - TC.x, p.z - TC.z) < 2.6;
      if (top(ctx.pos.sun) && top(ctx.pos.moon) && doneT < 0) {
        doneT = t;
        const lines = [
          ['Two cups of froyo, the biggest in town 🍦🍦', 3400],
          ['"This is exactly like the show." "Except the show never had you in it."', 4400],
          ['…the big screen flickers. A little wheel starts spinning. "Loading… 99 %"', 4600],
          ['Two sad eyes peek out of the wheel. The Buffer. 🌀', 3800],
          ['Part 1 complete ✨ Next: the Office Maze.', 3400],
        ];
        let at = 1600;
        for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
        setTimeout(() => ctx.finish(), at + 200);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      mgDash.update(dt, serverMs, t);
      const scrState = doneT >= 0 && t - doneT > 8.5 ? (t - doneT > 12.5 ? 2 : 1) : 0;
      if (scrState !== lastScr) { lastScr = scrState; if (scrState) drawScreen(99, scrState === 2); }
      if (!api) return;
      const cpi = api.save?.cp?.l === 'ch6-hood' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
    },
  };
}
