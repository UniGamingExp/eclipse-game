// Chapter 3 · Regensburg · Part 3 "The Last Train" (New Year's Eve). Built to the playtest-2 rules.
// Goodbye keeps sending the trains off early. This is the last one to Halle tonight.
//  1. The station hall: the ticket barrier only stays open while someone stands on its plate. One holds it,
//     the other walks through and holds the plate on the far side.
//  2. The luggage hall: the escalator to the signal bridge is gone (6.8 m, no grabbing). Stack three pieces of
//     luggage (one won't close: Moon tapes it shut), tape the stack, climb.
//  3. From the signal bridge Moon tapes a zipline 30 m over the tracks onto the roof of the last carriage.
//     Both aboard → the train leaves (the station slides away behind you).
//  4. The roof run (side view, the night rushes past): jump the signal arms that sweep along the roofs; a 22 m gap
//     where a wagon is missing (Moon tapes it); a double-decker 6 m higher (luggage from the roof rack: a taped
//     stack of three); more signal arms; down to the locomotive.
//  5. On the locomotive: both on the ☀ and ☾ plates → 10 … 1 → midnight, fireworks. The third thread.
//  🎮 Hidden minigame "Sparkler Catch": behind the kiosk in the station hall, catch the falling sparks.
import * as THREE from 'three';
import { mat, add, rbox, sign, hangSign, sky, makeStar, spinStars, lights } from './common.js';
import { createMoving } from './moving.js';
import { checkpoint, lane, plate } from './play.js';
import { memoryMist } from '../memory.js';
import { createMinigame, starsGame, withMinigames } from './minigame.js';

const BR = 6.8;                       // the signal bridge
const RY = 4.2;                       // carriage roofs
const HI = RY + 6.0;                  // the double-decker's roof
const CARS = [[16, 36, RY], [38.4, 58.4, RY], [80.4, 100.4, RY], [102.8, 122.8, HI], [125.2, 140, RY]];
const VMAX = 15;                      // how fast the night goes by

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function buildCh3Train(root, scene) {
  const colliders = [], stars = [], anims = [];
  const world = new THREE.Group();
  root.add(world);
  const station = new THREE.Group();   // everything that stays behind when the train leaves
  world.add(station);
  const stationCols = [];

  scene.fog = new THREE.Fog(new THREE.Color('#1c1f4a'), 70, 240);
  sky(root, {
    top: '#070a26', mid: '#1c2a66', low: '#5a4a8a', neb1: '#5a6aff', neb2: '#ff8fc8', stars: 1, nebula: 0.7, cloud: 0x8a8ac0, far: false, cx: 40, cz: 0, seaY: -16,
    lightDir: [0.3, 0.5, 0.8],
    planets: [['lilac', 0.3, 0.3, 260, 0.2, 2.2], ['mint', -1.2, 0.2, 240, 0.3, 1.2], ['giant', 2.4, 0.3, 320, 0.42]],
  });
  lights(root, { sunColor: 0xbfd0ff, sunI: 1.5, hemiSky: 0x8a9aff, hemiGround: 0xffc8a0, hemiI: 1.5, pos: [10, 40, 30], target: [40, 2, 0], extent: 50 });

  const stoneM = mat(0xb9b4c8, { roughness: 0.9 }), wallM = mat(0xd9c9b8, { roughness: 0.9 }), ironM = mat(0x3a3f5a, { roughness: 0.5, metalness: 0.5 });
  const woodM = mat(0x9a6a4a, { roughness: 0.8 }), glowM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.7, 1.0) });
  const sbox = (x0, x1, z0, z1, top, bottom, m, col = {}, vis = true) => {
    let mesh = null;
    if (vis && m) mesh = add(station, rbox(x1 - x0, top - bottom, z1 - z0, Math.min(0.08, (top - bottom) / 4, (x1 - x0) / 4, (z1 - z0) / 4)), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2);
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, ...col };
    colliders.push(c); stationCols.push(c);
    return Object.assign(c, { mesh });
  };

  // ================================================================ 1 + 2. THE STATION (x −50 … −14)
  add(station, new THREE.BoxGeometry(40, 3, 30), stoneM, -32, -1.5, 0, { cast: false });
  for (const [w, d, y] of [[34, 24, -4.5], [24, 16, -7], [12, 9, -9.5]]) add(station, rbox(w, 3, d, 0.8), mat(0x6a628a, { roughness: 1, flatShading: true }), -32, y, 0, { cast: false });
  sbox(-52, -12, -15, 15, 0, -3, null, { safe: true, surface: 'concrete' }, false);
  const tile = canvasTex(256, 256, (g) => { g.fillStyle = '#cfc6d8'; g.fillRect(0, 0, 256, 256); g.strokeStyle = '#a79cb8'; g.lineWidth = 4; for (let i = 0; i <= 4; i++) { g.beginPath(); g.moveTo(i * 64, 0); g.lineTo(i * 64, 256); g.moveTo(0, i * 64); g.lineTo(256, i * 64); g.stroke(); } });
  tile.wrapS = tile.wrapT = THREE.RepeatWrapping; tile.repeat.set(10, 7.5);
  add(station, new THREE.PlaneGeometry(40, 30), new THREE.MeshStandardMaterial({ map: tile, roughness: 0.5 }), -32, 0.01, 0, { cast: false }).rotation.x = -Math.PI / 2;
  // walls: back (north, with arched windows), west, a low one on the camera side, and the barrier wall between the halls
  sbox(-52, -12, -15.6, -15, 11, 0, wallM, { noGrab: true, noCam: true });
  sbox(-52.6, -52, -15.6, 15, 11, 0, wallM, { noGrab: true });
  sbox(-52, -12, 15, 15.5, 1.0, 0, stoneM, { noGrab: true });
  for (const [z0, z1] of [[-15, -2.2], [2.2, 15]]) sbox(-32.3, -31.7, z0, z1, 5, 0, wallM, { noGrab: true });
  sbox(-32.3, -31.7, -2.2, 2.2, 5, 3.2, wallM, { noGrab: true });
  const winM = new THREE.MeshBasicMaterial({ color: new THREE.Color(0.5, 0.6, 1.3) });
  for (let x = -48; x <= -16; x += 6.4) {
    add(station, new THREE.PlaneGeometry(2.6, 5), winM, x, 5.4, -14.97, { cast: false, receive: false });
    add(station, new THREE.CircleGeometry(1.3, 24, 0, Math.PI), winM, x, 7.9, -14.97, { cast: false, receive: false });
  }
  for (let x = -50; x <= -14; x += 9) { const a = add(station, new THREE.TorusGeometry(15, 0.28, 8, 40, Math.PI), ironM, x, 0, 0, { cast: false }); a.rotation.y = Math.PI / 2; a.scale.y = 0.8; a.userData.noHide = true; }
  for (const [x, z] of [[-44, 6], [-38, -6], [-24, 8], [-18, -9]]) { add(station, new THREE.CylinderGeometry(0.07, 0.09, 3.4, 8), ironM, x, 1.7, z); add(station, new THREE.SphereGeometry(0.26, 12, 8), glowM, x, 3.5, z, { cast: false }); sbox(x - 0.1, x + 0.1, z - 0.1, z + 0.1, 3.4, 0, null, { noGrab: true, noStep: true }, false); }
  // the departure board
  const board = canvasTex(1024, 384, (g) => {
    g.fillStyle = '#12142e'; g.fillRect(0, 0, 1024, 384);
    g.font = '600 54px Fredoka, sans-serif'; g.textBaseline = 'middle';
    const rows = [['22:47', 'München', 'left early 💨', '#8a8fb8'], ['23:10', 'Nürnberg', 'left early 💨', '#8a8fb8'], ['23:41', 'Halle (Saale)', 'LAST TRAIN ✨', '#ffd76a']];
    rows.forEach(([t, d, n, c], i) => { g.fillStyle = c; g.fillText(t, 40, 80 + i * 110); g.fillText(d, 240, 80 + i * 110); g.font = '500 44px Fredoka, sans-serif'; g.fillText(n, 660, 80 + i * 110); g.font = '600 54px Fredoka, sans-serif'; });
  });
  const bd = add(station, new THREE.PlaneGeometry(9, 3.4), new THREE.MeshBasicMaterial({ map: board }), -42, 7.2, -14.9, { cast: false, receive: false });
  bd.userData.noHide = true;
  // benches, a kiosk (the minigame hides behind it), a Christmas tree left over, a clock at 23:30
  for (const [x, z] of [[-46, -9], [-40, -9], [-46, -12.6]]) { add(station, rbox(2.6, 0.14, 0.7, 0.04), woodM, x, 0.5, z); sbox(x - 1.3, x + 1.3, z - 0.35, z + 0.35, 0.57, 0, null, {}, false); }
  sbox(-47.5, -43.5, 3.2, 4.6, 3.0, 0, mat(0xc4452d, { roughness: 0.6 }), { noGrab: true });
  add(station, rbox(4.4, 0.25, 2.2, 0.06), mat(0xfff4e6), -45.5, 3.1, 3.9);
  hangSign(station, -45.5, 3.6, 5.2, ['Kiosk · closed', 'Guten Rutsch! 🎆'], { w: 2.6 });
  add(station, new THREE.ConeGeometry(1.5, 4.2, 10), mat(0x2f7a4a, { roughness: 0.9 }), -35, 2.6, 11.5);
  add(station, new THREE.CylinderGeometry(0.2, 0.2, 0.6, 8), woodM, -35, 0.3, 11.5);
  for (let i = 0; i < 14; i++) add(station, new THREE.SphereGeometry(0.12, 8, 6), new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(i / 14, 0.9, 0.65).multiplyScalar(1.8) }), -35 + Math.cos(i * 2.4) * (1.3 - i * 0.08), 0.8 + i * 0.26, 11.5 + Math.sin(i * 2.4) * (1.3 - i * 0.08), { cast: false });
  sbox(-35.6, -34.4, 10.9, 12.1, 4, 0, null, { noGrab: true, noStep: true }, false);
  // ---- the ticket barrier (hold plates on both sides)
  const gate = sbox(-32.25, -31.75, -2.2, 2.2, 3.2, 0, null, { noGrab: true }, false);
  const gateM = add(station, rbox(0.3, 3.0, 4.2, 0.05), new THREE.MeshStandardMaterial({ color: 0x6a8fd8, emissive: 0x2a3f8a, emissiveIntensity: 0.4, roughness: 0.3, transparent: true, opacity: 0.8 }), -32, 1.6, 0);
  gateM.userData.noHide = true;
  const plW = plate(station, { x: -37, y: 0, z: 4.5 }), plE = plate(station, { x: -27, y: 0, z: 4.5 });
  sign(station, -39.6, 1.6, Math.PI / 2 - 0.4, ['🎫 The barrier only opens while', 'someone stands on a plate']);
  // ---- the luggage hall: the signal bridge where the escalator used to be
  sbox(-20, -13, -3, 3, BR, BR - 0.5, ironM, { safe: true, noGrab: true, surface: 'wood' });
  for (const [x, z] of [[-19.6, -2.6], [-19.6, 2.6], [-13.4, -2.6], [-13.4, 2.6]]) { add(station, new THREE.CylinderGeometry(0.16, 0.2, BR - 0.5, 8), ironM, x, (BR - 0.5) / 2, z); sbox(x - 0.2, x + 0.2, z - 0.2, z + 0.2, BR - 0.5, 0, null, { noGrab: true, noStep: true }, false); }
  for (const z of [-3, 3]) sbox(-20, -13, z - 0.08, z + 0.08, BR + 1.0, BR, ironM, { noGrab: true });
  for (let i = 0; i < 6; i++) { const s = add(station, rbox(1.2, 0.2, 2.4, 0.04), ironM, -27.5 + i * 1.1, 0.6 + i * 1.0, -6.5, { cast: false }); s.rotation.z = 0.5; }   // what's left of the escalator
  sign(station, -26, -9.4, 0.5, ['Escalator: gone. 🙄', 'Stack the luggage, tape it ✦']);
  for (const [x, c] of [[-13.3, 0xff5a5a], [-13.3, 0x5aff8a]]) add(station, new THREE.SphereGeometry(0.2, 10, 8), new THREE.MeshBasicMaterial({ color: c }), x, BR + 1.6 + (c === 0xff5a5a ? 0.5 : 0), 2.9, { cast: false });

  // ================================================================ 4. THE TRAIN (x 16 … 140, z −1.5 … 1.5)
  const train = new THREE.Group();
  world.add(train);
  const carM = mat(0xc4452d, { roughness: 0.45 }), carM2 = mat(0xf4efe6, { roughness: 0.5 }), roofM = mat(0x5a5f7a, { roughness: 0.6 });
  const litM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 1.6, 1.0) });
  CARS.forEach(([x0, x1, top], i) => {
    const L = x1 - x0, loco = i === CARS.length - 1;
    add(train, rbox(L, top - 1.0, 3, 0.25), loco ? mat(0x2f3a6a, { roughness: 0.4 }) : carM, (x0 + x1) / 2, (top + 1.0) / 2 + 0.1, 0);
    add(train, rbox(L + 0.02, 0.5, 3.02, 0.1), carM2, (x0 + x1) / 2, 1.9, 0, { cast: false });
    add(train, rbox(L - 0.3, 0.22, 2.6, 0.1), roofM, (x0 + x1) / 2, top - 0.1, 0, { cast: false });
    for (const lvl of top > RY + 1 ? [3.0, 6.2, 8.6] : [3.0]) for (let x = x0 + 1.6; x < x1 - 1; x += 2.6) add(train, new THREE.PlaneGeometry(1.5, 1.0), litM, x, lvl, 1.52, { cast: false, receive: false });
    for (let x = x0 + 2.5; x < x1; x += L - 5) for (const z of [-1.3, 1.3]) add(train, new THREE.CylinderGeometry(0.5, 0.5, 0.3, 14).rotateX(Math.PI / 2), ironM, x, 0.55, z, { cast: false });
    colliders.push({ type: 'box', x0, x1, z0: -1.5, z1: 1.5, top, bottom: 0.4, safe: true, noGrab: true, surface: 'wood' });
    if (loco) { add(train, rbox(3, 1.6, 2.6, 0.3), mat(0x2f3a6a), x1 - 2.5, top + 0.8, 0); colliders.push({ type: 'box', x0: x1 - 4, x1: x1 - 1, z0: -1.3, z1: 1.3, top: top + 1.6, bottom: top, noGrab: true }); add(train, new THREE.SphereGeometry(0.4, 12, 8), litM, x1 + 0.1, 2.6, 0, { cast: false }); }
  });
  add(train, new THREE.BoxGeometry(132, 0.2, 0.25), ironM, 78, 0.1, -0.75, { cast: false });
  add(train, new THREE.BoxGeometry(132, 0.2, 0.25), ironM, 78, 0.1, 0.75, { cast: false });
  // the plates on the locomotive
  const plS = plate(train, { x: 129, y: RY, z: 0, who: 'sun', r: 0.8 }), plM = plate(train, { x: 132.4, y: RY, z: 0, who: 'moon', r: 0.8 });
  // signal arms that sweep along the roofs (jump them)
  const armM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 0.6, 0.5), transparent: true, opacity: 0.9 });
  const ARMS = [
    ...[0, 1, 2].map((k) => ({ x0: 39.5, x1: 58, y: RY, v: 5.5, off: k * 6.2 / 3 })),
    ...[0, 1, 2, 3].map((k) => ({ x0: 104, x1: 122, y: HI, v: 7, off: k * 18 / 7 / 4 })),
  ].map((a) => { const m = add(train, rbox(0.3, 0.55, 3.4, 0.1), armM, a.x1, a.y + 0.3, 0, { cast: false, receive: false }); m.userData.noHide = true; return { ...a, m }; });

  // ================================================================ boxes and tapes
  const moving = createMoving(world, colliders, {
    key: 'ch3t',
    killY: -1,
    wobble: true,
    boxes: [
      { id: 'h1', x: -24, y: 0, z: 9 }, { id: 'h2', x: -28.5, y: 0, z: -11, open: true }, { id: 'h3', x: -16, y: 0, z: 10.5 }, { id: 'h4', x: -22, y: 0, z: -11.5 },
      { id: 'r1', x: 84, y: RY, z: 0 }, { id: 'r2', x: 88, y: RY, z: 0, open: true }, { id: 'r3', x: 92, y: RY, z: 0 },
    ],
    tapes: [
      { id: 'tz', kind: 'zip', a: [-13.6, BR + 2, 0], b: [20, RY + 2.1, 0], pa: [-13.6, BR, 0], pb: [20, RY, 0.9] },
      { id: 'tw', kind: 'walk', a: [58.4, RY, 0], b: [80.4, RY, 0], pa: [57.8, RY, 1.1], pb: [81, RY, 1.1] },
    ],
  });

  // ================================================================ the night going by (scrolls once the train is moving)
  const SCN = [], SPAN = 300;
  const hillM = mat(0xdfe6ff, { roughness: 1 }), darkM = mat(0x1a1f3f, { roughness: 1 });
  const R = ((sd) => () => ((sd = (sd * 16807) % 2147483647) / 2147483647))(33);
  const scenery = new THREE.Group();
  scenery.visible = false;
  world.add(scenery);
  for (let i = 0; i < 16; i++) { const m = add(scenery, new THREE.SphereGeometry(1, 16, 10), hillM, 0, -6, -34 - R() * 30, { cast: false }); const w = 14 + R() * 16; m.scale.set(w, 7 + R() * 6, 10); SCN.push({ m, x: R() * SPAN, k: 0.35 }); }
  for (let i = 0; i < 22; i++) {   // little houses with lit windows
    const g = new THREE.Group(), w = 3 + R() * 2, h = 2.6 + R() * 2;
    add(g, new THREE.BoxGeometry(w, h, 3), darkM, 0, h / 2, 0, { cast: false });
    add(g, new THREE.ConeGeometry(w * 0.8, 1.6, 4).rotateY(Math.PI / 4), hillM, 0, h + 0.8, 0, { cast: false });
    for (let k = 0; k < 2; k++) add(g, new THREE.PlaneGeometry(0.6, 0.7), litM, -0.8 + k * 1.6, h * 0.55, 1.52, { cast: false, receive: false });
    g.position.set(0, -1.5, -16 - R() * 14);
    scenery.add(g);
    SCN.push({ m: g, x: R() * SPAN, k: 0.7 });
  }
  for (let i = 0; i < 26; i++) { const m = add(scenery, new THREE.ConeGeometry(1.2, 4.5, 7), mat(0x2f5a4a, { roughness: 1 }), 0, 1, -9 - R() * 6, { cast: false }); add(m, new THREE.ConeGeometry(0.9, 1.6, 7), hillM, 0, 1.6, 0, { cast: false }); SCN.push({ m, x: R() * SPAN, k: 0.9 }); }
  for (let i = 0; i < 10; i++) {   // catenary poles close to the track
    const g = new THREE.Group();
    add(g, new THREE.CylinderGeometry(0.1, 0.12, 9, 6), ironM, 0, 4.5, 0, { cast: false });
    add(g, new THREE.BoxGeometry(0.12, 0.12, 3), ironM, 0, 8.6, 1.4, { cast: false });
    g.position.set(0, 0, -3.2);
    scenery.add(g);
    SCN.push({ m: g, x: i * (SPAN / 10), k: 1 });
  }
  add(scenery, new THREE.PlaneGeometry(600, 80), mat(0xe8eeff, { roughness: 1 }), 60, -1.6, -40, { cast: false }).rotation.x = -Math.PI / 2;
  const ties = add(scenery, new THREE.PlaneGeometry(600, 4), new THREE.MeshStandardMaterial({ color: 0x4a4458, roughness: 1 }), 60, -0.05, 0, { cast: false });
  ties.rotation.x = -Math.PI / 2;

  // ================================================================ 🎮 hidden minigame: Sparkler Catch (behind the kiosk)
  const mgSpark = createMinigame(station, colliders, {
    id: 'c3spark', title: 'Sparkler Catch', rules: ['Catch the most falling sparks!', 'Big golden ones count 3 ✨'],
    at: { x: -50.4, y: 0, z: 10 }, face: Math.PI / 2, pads: { sun: [-49.6, 6.4], moon: [-49.6, 13.4] }, dur: 32000,
    game: starsGame({ cx: -44.6, cz: 10, y: 0, half: 3.8, count: 56 }),
  });

  // ================================================================ checkpoints, stars
  const cps = [
    checkpoint(station, { x: -43, y: 0, z: -3.4, r: 2.4, sun: [-43, 0, -1], moon: [-43, 0, 1], yaw: -Math.PI / 2 }),
    checkpoint(station, { x: -29.4, y: 0, z: -3.4, r: 2.4, sun: [-29, 0, -1], moon: [-29, 0, 1], yaw: -Math.PI / 2, label: 'The luggage hall' }),
    checkpoint(train, { x: 27, y: RY, z: 0, r: 2.6, sun: [25.6, RY, 0], moon: [28.4, RY, 0], label: 'All aboard! 🚆' }),
    checkpoint(train, { x: 82.4, y: RY, z: 0, r: 2.0, sun: [81.6, RY, 0], moon: [83, RY, 0], label: 'The roof rack' }),
    checkpoint(train, { x: 104.6, y: HI, z: 0, r: 1.6, sun: [103.6, HI, 0], moon: [104.4, HI, 0], label: 'Almost midnight' }),
  ];
  stars.push(makeStar(station, 'c3t-kiosk', -45.5, 4.4, 3.9, 0));     // on the kiosk roof (two cases and a jump)
  stars.push(makeStar(station, 'c3t-bridge', -19.2, BR + 1.6, 0, 1));  // at the back of the signal bridge
  stars.push(makeStar(train, 'c3t-arms', 49, RY + 3.2, 0, 2));         // high over the first signal arms (double jump)
  stars.push(makeStar(train, 'c3t-gap', 69.4, RY + 1.3, 0, 3));        // over the missing wagon, on the tape
  stars.push(makeStar(train, 'c3t-loco', 137.5, RY + 2.9, 0, 4));      // on the locomotive's cab
  {
    const P = [];
    for (let x = -52; x <= -12; x += 4) { P.push([x, -1 + R() * 2, 17 + R() * 2]); P.push([x, -1 + R() * 2, -18 - R() * 2]); }
    for (let z = -14; z <= 14; z += 4) P.push([-55 - R() * 2, -1 + R() * 2, z]);
    memoryMist(station, P, { size: 9, color: 0xc8d0ff, opacity: 0.3 });
  }

  // ================================================================ fireworks (a small pool of bursts)
  const dot = canvasTex(64, 64, (g) => { const gr = g.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, '#fff'); gr.addColorStop(0.3, 'rgba(255,255,255,.8)'); gr.addColorStop(1, 'rgba(255,255,255,0)'); g.fillStyle = gr; g.fillRect(0, 0, 64, 64); });
  const BURSTS = [];
  for (let i = 0; i < 7; i++) {
    const N = 90, pos = new Float32Array(N * 3), dir = [];
    for (let k = 0; k < N; k++) dir.push(new THREE.Vector3().setFromSphericalCoords(0.75 + R() * 0.25, Math.acos(1 - 2 * R()), R() * 6.283));
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const m = new THREE.PointsMaterial({ map: dot, size: 0.8, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffffff });
    const pts = new THREE.Points(geo, m);
    pts.frustumCulled = false; pts.visible = false;
    world.add(pts);
    BURSTS.push({ pts, geo, m, dir, t: 9, c: new THREE.Vector3(), r: 8 });
  }
  function burst(x, y, z, color, r) {
    const b = BURSTS.reduce((a, q) => (q.t > a.t ? q : a));
    b.t = 0; b.c.set(x, y, z); b.r = r; b.m.color.setHex(color).multiplyScalar(2.2); b.pts.visible = true;
  }

  // ================================================================ state
  let api = null, dist = 0, speed = 0, knockT = 0, doneT = -1, countFrom = -1, lastN = 99, fwT = 0, gone = false;
  const seen = {};
  const once = (k, ctx, text, ms = 4200) => { if (seen[k]) return; seen[k] = true; ctx.caption(text, ms); };
  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const onTrain = (p) => p && p.x > 15 && p.y > RY - 0.6;
  const tracks = lane([14, 0], [141, 0], { half: 2.2, y0: 2.2, y1: 24, dist: 16, pitch: 0.16 });
  const P2 = () => ({ sun: api?.mine().includes('sun') ? api.bodies.sun.pos : api?.partnerPos('sun'), moon: api?.mine().includes('moon') ? api.bodies.moon.pos : api?.partnerPos('moon') });
  const FW = [0xff6a8a, 0xffd76a, 0x8ad0ff, 0xc9a4ff, 0x8affc0, 0xffffff];

  return {
    id: 'ch3-train',
    title: 'Chapter 3 · Regensburg — The Last Train',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-43, 0, -1), moon: new THREE.Vector3(-43, 0, 1) },
    camYaw: { sun: -Math.PI / 2, moon: -Math.PI / 2 },
    lobbyCam: { cx: 20, cz: 0, r: 80, h: 30 },
    killY: -8,
    killAt: (p) => p.x > -11.5 && p.y < 2.2,
    lanes: [tracks],
    checkpoints: cps,
    respawnNearPartner: (pp) => !!pp && (pp.x < -12 || pp.y > RY - 0.6) && !(pp.x > 79),   // (past the gap: back to the checkpoint, each climb is done together)
    portal: new THREE.Vector3(126.8, RY, 0),
    intro: {
      all: ['Part 3 · The Last Train', '31 December. Regensburg Hauptbahnhof, 23:30.', 'Goodbye keeps sending the trains off early. The 23:41 to Halle is the last one tonight.'],
      sun: 'Strongman ✦ carry the luggage',
      moon: 'Tape gun ✦ tape it shut, tape the stack, tape the way',
    },
    abilities: withMinigames(moving.abilities, [mgSpark]),
    moving,
    attach(a) { api = a; moving.attach(a); mgSpark.attach(a); },
    onCheckpoint() {},
    debug: () => ({ dist, speed, dep: api?.save?.ch3t?.dep, mid: api?.save?.ch3t?.mid }),
    story(ctx, t) {
      const st = ctx.save.ch3t || {};
      const a = ctx.pos.sun, b = ctx.pos.moon, P = [a, b].filter(Boolean);
      if (P.some((p) => p.x > -31 && p.x < -14)) once('hall', ctx, 'The escalator to the signal bridge is gone. Luggage everywhere, though… 🧳', 4200);
      if (P.some((p) => p.x < -12.5 && p.y > BR - 0.5)) once('bridge', ctx, 'There she is: the last train. Moon: tape a zipline over to its roof ✦', 4600);
      // both aboard → the train leaves
      if (!st.dep && authority() && onTrain(a) && onTrain(b)) ctx.setSave('ch3t/dep', Math.round(api.serverNow()));
      if (st.dep) {
        once('dep', ctx, 'Both aboard… and it leaves early, of course. 🚆💨 Hold on!', 3800);
        if (P.some((p) => p.x > 37)) once('arms', ctx, 'Signal arms! Jump them.', 2600);
        if (P.some((p) => p.x > 55 && p.y < HI - 1)) once('gap', ctx, 'A wagon is missing. Moon: tape across ✦', 3400);
        if (P.some((p) => p.x > 81 && p.y < HI - 1)) once('dd', ctx, 'A double-decker, 6 m up. The roof rack has luggage: stack three, tape the stack ✦', 5200);
        if (P.some((p) => p.x > 124)) once('loco', ctx, 'The locomotive! Stand on your plates, both of you. It\'s almost midnight…', 4600);
      }
      // midnight on the locomotive
      if (st.dep && !st.mid && authority() && plS.on && plM.on) ctx.setSave('ch3t/mid', Math.round(api.serverNow() + 10500));
      if (st.mid) {
        const n = Math.ceil((st.mid - api.serverNow()) / 1000);
        if (n > 0 && n <= 10 && n !== lastN) { lastN = n; ctx.caption(String(n), 950); api.sound.play('pin'); }
        if (n <= 0 && doneT < 0) {
          doneT = t;
          const lines = [['🎆 HAPPY NEW YEAR! 🎆', 3600], ['Midnight, on a train between two cities.', 3600], ['Regensburg behind, Halle ahead… and the same sky over Damascus.', 4200], ['2026 starts in gold. ✨ Chapter 3 complete', 3600]];
          let at = 0;
          for (const [l, ms] of lines) { setTimeout(() => ctx.caption(l, ms), at); at += ms + 150; }
          setTimeout(() => ctx.finish(), at + 200);
        }
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      mgSpark.update(dt, serverMs, t);
      if (!api) return;
      const st = api.save?.ch3t || {}, P = P2();
      // the ticket barrier: open while a plate is held
      plW.update(P); plE.update(P);
      const open = plW.on || plE.on;
      gate.disabled = open;
      gateM.position.y += ((open ? 4.9 : 1.6) - gateM.position.y) * Math.min(1, dt * 6);
      plS.update(P); plM.update(P);
      // the train leaves: the station slides away, the night starts to scroll
      const moving_ = !!st.dep;
      speed += ((moving_ ? VMAX : 0) - speed) * Math.min(1, dt * 0.35);
      if (moving_) dist += speed * dt;
      if (moving_ && !gone) {
        gone = true;
        for (const c of stationCols) c.disabled = true;
        for (const o of moving.boxes) if (o.id[0] === 'h') { o.g.visible = false; o.col.disabled = true; }
        const tz = moving.tapes.find((q) => q.id === 'tz');
        if (tz) { tz.g.visible = false; tz.posts[0].g.visible = false; if (tz.col) tz.col.disabled = true; }
        scenery.visible = true;
        if (api.serverNow() - st.dep > 20000) { dist = 400; speed = VMAX; }   // came back later: the station is long gone
      }
      // nobody gets left behind in a station that isn't there any more
      if (gone) for (const r of api.mine()) { const bd = api.bodies[r]; if (bd.pos.x < 12) { bd.pos.set(r === 'sun' ? 25.6 : 28.4, RY + 0.2, 0); bd.vel.set(0, 0, 0); } }
      if (gone) {
        station.position.x = -dist;
        station.visible = dist < 260;
        for (const s of SCN) s.m.position.x = ((s.x - dist * s.k) % SPAN + SPAN) % SPAN - 60;
        ties.material.color.setScalar(0.25 + Math.sin(dist * 2) * 0.03);
        train.position.y = Math.sin(t * 11) * 0.012 * (speed / VMAX);
      }
      // the signal arms
      knockT -= dt;
      for (const a of ARMS) {
        const L = a.x1 - a.x0, u = ((serverMs / 1000 * a.v + a.off * a.v) % L + L) % L, x = a.x1 - u;
        a.m.visible = gone;
        a.m.position.x = x;
        armM.opacity = 0.75 + Math.sin(t * 9) * 0.2;
        if (!gone || knockT > 0) continue;
        for (const r of api.mine()) {
          const bd = api.bodies[r];
          if (Math.abs(bd.pos.x - x) < 0.55 && bd.pos.y > a.y - 0.3 && bd.pos.y < a.y + 0.75) { api.launch(r, 6.5, -7, 0); api.sound.play('bounce'); knockT = 0.5; }
        }
      }
      // fireworks from midnight on
      if (st.mid && api.serverNow() > st.mid) {
        fwT -= dt;
        if (fwT <= 0) {
          fwT = 0.28 + Math.random() * 0.4;
          const c = FW[Math.floor(Math.random() * FW.length)];
          burst(112 + Math.random() * 40, 9 + Math.random() * 8, -8 - Math.random() * 14, c, 5 + Math.random() * 5);
          if (Math.random() < 0.5) api.sound.play('pop', { vol: 0.35 });
        }
      }
      for (const b of BURSTS) {
        if (!b.pts.visible) continue;
        b.t += dt;
        const u = Math.min(1, b.t / 1.6), e = 1 - (1 - u) ** 3, p = b.geo.attributes.position;
        for (let k = 0; k < b.dir.length; k++) p.setXYZ(k, b.c.x + b.dir[k].x * b.r * e, b.c.y + b.dir[k].y * b.r * e - u * u * 2.2, b.c.z + b.dir[k].z * b.r * e);
        p.needsUpdate = true;
        b.m.opacity = u < 0.15 ? u / 0.15 : 1 - (u - 0.15) / 0.85;
        if (u >= 1) b.pts.visible = false;
      }
      const cpi = api.save?.cp?.l === 'ch3-train' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
    },
  };
}
