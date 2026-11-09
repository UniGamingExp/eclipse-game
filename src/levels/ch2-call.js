// Chapter 2 · 12 October · Part 2 "The Four-Hour Call" (v2: the long version, to the playtest-2 rules).
// The call from 7:13 to 11:10 PM, through the phone line between their skies. Sections:
//  1. 7:13 PM · The switchboard: an old telephone exchange. Only MOON's screen shows her number, and
//     SUN has to dial it on a giant floor keypad: they have to talk (asymmetric).
//  2. 8:00 PM · Inside the cable (side view): a 7 m kink with day/night steps, a "bad connection" run
//     where the floor cuts out, voice waves bobbing up with day/night bars.
//  3. 9:00 PM · Signal lost: out along the giant curly cord in a storm. The wind pushes you back unless
//     you hold hands, gusts come every few seconds, 20 m gaps on twilight / day+night tiles.
//  4. 11:10 PM · The clock: a huge clock in the sky; its turning hands are spiral stairs of day and night
//     steps up to the centre, where the call ends after 3:57:00.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, hangSign, cloud, sky, makeStar, spinStars, lights } from './common.js';
import { createLights } from './light.js';
import { lane, checkpoint, plate, approach } from './play.js';
import { memoryMist } from '../memory.js';

const LZ = -32;                    // the cable's side-view plane (and the storm cord's base line)
const CK = { x: 206, z: -32, y: 4, r: 14 };   // the clock island
const HUB = 11.4;                  // top of the clock's centre

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  t.redraw = (fn = draw) => { fn(cv.getContext('2d'), w, h); t.needsUpdate = true; };
  t.redraw();
  return t;
}
const screenBg = (g, w, h, a = '#2b1f5c', b = '#6a3fb8') => { const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, a); gr.addColorStop(1, b); g.fillStyle = gr; g.fillRect(0, 0, w, h); };

export function buildCh2Call(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const specs = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#5a4a96'), 60, 260);
  sky(root, {
    top: '#1c1850', mid: '#5b3f9c', low: '#d58fb8', neb1: '#7b6bff', neb2: '#ff8fc8', stars: 1.0, nebula: 0.75, cloud: 0xb9a3e0, far: false, cx: 100, cz: -40,
    lightDir: [0.4, 0.5, 1],
    planets: [['lilac', -1.0, 0.16, 260, 0.2, 2.0], ['ember', 1.2, 0.12, 260, -0.1, 1.6], ['giant', 0.3, 0.3, 330, 0.5], ['mint', 2.4, 0.22, 270, 0.3]],
  });
  lights(root, { sunColor: 0xd9d0ff, sunI: 1.9, hemiSky: 0xa898ff, hemiGround: 0xffb8d8, hemiI: 1.45, pos: [30, 34, 20], target: [60, 0, -32], extent: 60 });

  const box = (x0, x1, z0, z1, top, bottom, m, o = {}) => {
    add(world, rbox(x1 - x0, top - bottom, z1 - z0, Math.min(0.12, (top - bottom) / 3)), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2, o.cast === false ? { cast: false } : {});
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, ...o.col };
    colliders.push(c);
    return c;
  };
  const tilesX = (z, x0, x1, y, kinds, n, o = {}) => {
    const step = (x1 - x0) / n;
    for (let i = 0; i < n; i++) specs.push({ kind: kinds[i % kinds.length], x: x0 + step * (i + 0.5), y, z: typeof z === 'function' ? z(x0 + step * (i + 0.5)) : z, w: Math.min(2.2, step - 0.7), d: o.d ?? 2.6 });
  };

  const floorM = new THREE.MeshStandardMaterial({ roughness: 0.75, map: canvasTex(256, 256, (g) => { for (let y = 0; y < 8; y++) for (let x = 0; x < 8; x++) { g.fillStyle = (x + y) % 2 ? '#e9d9f2' : '#c9b2e0'; g.fillRect(x * 32, y * 32, 32, 32); } }) });
  floorM.map.wrapS = floorM.map.wrapT = THREE.RepeatWrapping; floorM.map.repeat.set(6, 6);
  const wallM = mat(0x7a5fae, { roughness: 0.85 });
  const wood = mat(0x8a5a3a, { roughness: 0.75 });
  const brass = mat(0xd8a84a, { roughness: 0.35, metalness: 0.7 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xd88a5a, emissive: 0xff8a4a, emissiveIntensity: 0.35, roughness: 0.4, metalness: 0.6 });

  // ================================================================ 1. THE SWITCHBOARD (7:13 PM)
  box(-12, 12, -24, 4, 0, -1.2, floorM, { col: { safe: true, surface: 'wood' } });
  for (const [x0, x1, z0, z1] of [[-13, -12, -24, 4], [12, 13, -24, 4], [-13, 13, 4, 5]]) box(x0, x1, z0, z1, 8, 0, wallM, { col: { noGrab: true } });
  // back wall with the doorway (x −1.6…1.6) to the cable
  box(-13, -1.6, -25, -24, 8, 0, wallM, { col: { noGrab: true } });
  box(1.6, 13, -25, -24, 8, 0, wallM, { col: { noGrab: true } });
  box(-1.6, 1.6, -25, -24, 8, 3.6, wallM, { col: { noGrab: true } });
  const hatch = add(world, rbox(3.2, 3.6, 0.3, 0.08), brass, 0, 1.8, -24.3);
  hatch.userData.noHide = true;
  const hatchCol = { type: 'box', x0: -1.6, x1: 1.6, z0: -24.6, z1: -24, top: 3.6, bottom: 0, noGrab: true };
  colliders.push(hatchCol);
  // the switchboards on the side walls: rows of jacks with dangling cords, and the operators' desk
  const jackTex = canvasTex(512, 256, (g, w, h) => {
    g.fillStyle = '#3a2a22'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < 6; y++) for (let x = 0; x < 16; x++) {
      g.fillStyle = '#1a1210'; g.beginPath(); g.arc(18 + x * 31, 22 + y * 40, 8, 0, Math.PI * 2); g.fill();
      g.fillStyle = ['#ffd27a', '#ff8fb8', '#a98bff'][(x + y * 3) % 3]; g.globalAlpha = (x * 7 + y) % 5 === 0 ? 1 : 0.25;
      g.beginPath(); g.arc(18 + x * 31, 36 + y * 40, 4, 0, Math.PI * 2); g.fill(); g.globalAlpha = 1;
    }
  });
  const jackM = new THREE.MeshStandardMaterial({ map: jackTex, emissive: 0xffffff, emissiveMap: jackTex, emissiveIntensity: 0.4, roughness: 0.7 });
  for (const sx of [-1, 1]) {
    const pnl = add(world, new THREE.PlaneGeometry(18, 4.2), jackM, sx * 11.94, 3.6, -10, { cast: false });
    pnl.rotation.y = -sx * Math.PI / 2;
    box(sx > 0 ? 9.6 : -12, sx > 0 ? 12 : -9.6, -19, -1, 1.0, 0, wood, { col: { safe: true, surface: 'wood' } });   // the desk
    for (let i = 0; i < 9; i++) {
      const z = -17.5 + i * 2, pts = [new THREE.Vector3(sx * 11.85, 3.2 + (i % 3) * 0.6, z), new THREE.Vector3(sx * 11.2, 1.4, z + 0.4), new THREE.Vector3(sx * 10.6, 1.05, z + 0.2)];
      add(world, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 16, 0.05, 6), mat([0xff8fb8, 0xffd27a, 0xa98bff][i % 3]), 0, 0, 0, { cast: false });
    }
  }
  // pendant lamps
  const bulbM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.4, 1.8, 1.1) });
  for (const [x, z] of [[-6, -6], [6, -6], [-6, -17], [6, -17]]) {
    add(world, new THREE.CylinderGeometry(0.02, 0.02, 3, 6), mat(0x222222), x, 8.5, z, { cast: false });
    add(world, new THREE.ConeGeometry(0.7, 0.5, 20, 1, true), brass, x, 6.9, z, { cast: false });
    add(world, new THREE.SphereGeometry(0.22, 12, 8), bulbM, x, 6.6, z, { cast: false });
  }
  // the floor keypad: 1–9, *, 0, # (Sun dials Moon's number)
  const KEYS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '*', '0', '#'];
  const keys = KEYS.map((label, i) => {
    const x = -2.4 + (i % 3) * 2.4, z = -7.6 - Math.floor(i / 3) * 2.4;
    const pl = plate(world, { x, y: 0, z, r: 0.95, who: 'sun', color: 0xffc46b });
    const tex = canvasTex(128, 128, (g) => { g.clearRect(0, 0, 128, 128); g.fillStyle = '#4a2a10'; g.font = '700 92px Fredoka, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, 64, 70); });
    const d = add(world, new THREE.CircleGeometry(0.72, 32).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }), x, 0.27, z, { cast: false });
    d.userData.noHide = true;
    return { label, pl, prev: false };
  });
  // screens: Moon's shows her number (only on Moon's screen in co-op), Sun's shows what to do
  const moonScr = canvasTex(512, 256, () => {});
  const sunScr = canvasTex(512, 256, () => {});
  const scrMesh = (tex, x) => {
    add(world, rbox(5.4, 2.9, 0.25, 0.15), mat(0x2a1f4a), x, 5.2, -23.7);
    const m = add(world, new THREE.PlaneGeometry(5, 2.5), new THREE.MeshBasicMaterial({ map: tex }), x, 5.2, -23.55, { cast: false });
    m.userData.noHide = true;
    return m;
  };
  const moonScrMesh = scrMesh(moonScr, -6.4);
  scrMesh(sunScr, 6.4);
  const bulbs = [];
  for (let i = 0; i < 4; i++) bulbs.push(add(world, new THREE.SphereGeometry(0.28, 16, 10), new THREE.MeshStandardMaterial({ color: 0x554466, emissive: 0xffc46b, emissiveIntensity: 0 }), -1.35 + i * 0.9, 4.4, -23.7, { cast: false }));
  hangSign(world, 0, 4.2, -2.6, ['☎ Sun dials, Moon knows the number:', 'only her screen shows it. Talk!'], { w: 3.6 });

  // ================================================================ 2. INSIDE THE CABLE (8:00 PM, side view)
  // the passage from the hall into the cable
  box(-1.6, 1.6, -30, -24, 0, -1.2, floorM, { col: { safe: true } });
  for (const sx of [-1, 1]) box(sx > 0 ? 1.6 : -2.6, sx > 0 ? 2.6 : -1.6, -28.8, -24, 4, 0, wallM, { col: { noGrab: true } });
  // the cable's inside: a dark back wall with glowing copper wires, a ceiling, the floors
  const cableBack = new THREE.MeshStandardMaterial({ color: 0x2a2046, roughness: 0.9 });
  add(world, new THREE.BoxGeometry(100, 20, 1), cableBack, 45, 7, LZ - 3.6);
  colliders.push({ type: 'box', x0: -5, x1: 95, z0: LZ - 4.1, z1: LZ - 3.1, top: 18, bottom: -3, noGrab: true, noCam: true });
  for (let k = 0; k < 7; k++) {
    const y = -1 + k * 2.6, pts = [];
    for (let x = -5; x <= 95; x += 5) pts.push(new THREE.Vector3(x, y + Math.sin(x * 0.2 + k) * 0.5, LZ - 3.0));
    add(world, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.16, 6), copper, 0, 0, 0, { cast: false });
  }
  add(world, new THREE.BoxGeometry(100, 0.8, 7), cableBack, 45, 17.4, LZ);
  colliders.push({ type: 'box', x0: -5, x1: 95, z0: LZ - 3.5, z1: LZ + 3.5, top: 18, bottom: 17, noGrab: true, noCam: true });
  const cfloor = (x0, x1, top, o = {}) => box(x0, x1, LZ - 2, LZ + 2, top, top - 1.2, mat(0x8a6ab8, { roughness: 0.7 }), { col: { safe: true, surface: 'concrete', ...o } });
  cfloor(-4, 12, 0);
  // the kink: a 7 m block, day / night steps up it (neither gets up alone)
  box(12, 26, LZ - 2, LZ + 2, 7, -1.2, mat(0x7a5aa8, { roughness: 0.8 }), { col: { safe: true, noGrab: true } });
  for (const [x, y, kind] of [[7.4, 1.8, 'day'], [9.1, 3.6, 'night'], [10.8, 5.4, 'day']]) specs.push({ kind, x, y, z: LZ, w: 1.6, d: 3 });
  sign(world, 4.5, LZ - 2.4, 0, ['A kink in the line!', 'Golden and lilac steps:', 'climb together']);
  // bad connection: floor pieces that cut out on a timer (static warns you first)
  const staticTex = canvasTex(64, 64, (g) => { for (let i = 0; i < 500; i++) { const v = Math.random() * 255 | 0; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(Math.random() * 64, Math.random() * 64, 2, 2); } });
  staticTex.wrapS = staticTex.wrapT = THREE.RepeatWrapping;
  const flick = [];
  for (let i = 0; i < 5; i++) {
    const cx = 28 + i * 4;
    const m = new THREE.MeshStandardMaterial({ color: 0xb48cff, emissive: 0x7a5aff, emissiveIntensity: 0.5, roughness: 0.5, transparent: true });
    const mesh = add(world, rbox(3.4, 0.5, 3.4, 0.12), m, cx, 6.75, LZ);
    const nz = add(world, new THREE.PlaneGeometry(3.4, 3.4).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ map: staticTex, transparent: true, opacity: 0, depthWrite: false }), cx, 7.03, LZ, { cast: false });
    const col = { type: 'box', x0: cx - 1.7, x1: cx + 1.7, z0: LZ - 1.7, z1: LZ + 1.7, top: 7, bottom: 6.5 };
    colliders.push(col);
    flick.push({ m, mesh, nz, col, ph: i * 450 });
  }
  sign(world, 27, LZ - 2.4, 0, ['Bad connection!', 'Cross when the line is clear']).position.y = 7;
  cfloor(46, 50, 7);
  // voice waves: bars bobbing up to the high ledge; golden and lilac (14 m up from here: together)
  for (let i = 0; i < 5; i++) {
    const x = 52 + i * 3, base = 7.8 + i * 1.45, ph = i * 0.9;
    specs.push({ kind: i % 2 ? 'night' : 'day', x, y: base, z: LZ, w: 2.0, d: 3, move: (s) => ({ x, y: base + Math.sin(s / 1000 * 1.5 + ph) * 0.9, z: LZ }) });
  }
  cfloor(65.5, 74, 14.2, { noGrab: true });
  cfloor(74, 92, 4);
  // inside the floor of the cable: the pit below the bad connection is a fall
  add(world, new THREE.BoxGeometry(70, 0.5, 5), mat(0x1a1236), 50, -1.8, LZ, { cast: false });

  // ================================================================ 3. SIGNAL LOST: the storm on the cord (9:00 PM)
  // the giant curly cord: a thick tube along a gentle S, walkable on top; two 20 m gaps with light tiles
  const cordZ = (x) => LZ + Math.sin((x - 92) / 16) * 4;
  const cordY = (x) => 4 + Math.sin((x - 92) / 11) * 0.8;
  const cordM = mat(0xb06bff, { roughness: 0.35 });
  const coilM = mat(0x8a4ae0, { roughness: 0.4 });
  const cordRun = (x0, x1) => {
    const pts = [];
    for (let x = x0; x <= x1 + 0.01; x += 1) pts.push(new THREE.Vector3(x, cordY(x) - 1.3, cordZ(x)));
    const curve = new THREE.CatmullRomCurve3(pts);
    add(world, new THREE.TubeGeometry(curve, Math.round((x1 - x0) * 3), 1.3, 14), cordM, 0, 0, 0);
    const hel = [];
    for (let u = 0; u <= 1; u += 0.002) { const p = curve.getPointAt(u), a = u * (x1 - x0) * 2.4; hel.push(new THREE.Vector3(p.x, p.y + Math.cos(a) * 1.42, p.z + Math.sin(a) * 1.42)); }
    add(world, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(hel), 900, 0.12, 6), coilM, 0, 0, 0, { cast: false });
    for (let x = x0; x < x1; x += 2) {
      const cz = cordZ(x + 1), cy = cordY(x + 1);
      colliders.push({ type: 'box', x0: x, x1: x + 2.05, z0: cz - 1.35, z1: cz + 1.35, top: cy, bottom: cy - 2.4, safe: true, noGrab: true, surface: 'carpet' });
    }
  };
  // the cable's end opens into the storm
  cordRun(92, 112);
  tilesX(cordZ, 112, 132, cordY(122), ['twilight'], 6);
  cordRun(132, 150);
  tilesX(cordZ, 150, 170, cordY(160), ['day', 'night'], 6);
  cordRun(170, 192);
  sign(world, 95, cordZ(95) - 2.3, -Math.PI / 2, ['The wind pushes you back…', 'unless you hold hands ♥']).position.y = cordY(95);
  // storm streaks (wind) and flashes of static
  const streakGeo = new THREE.BufferGeometry();
  const NS = 260, sp = new Float32Array(NS * 6);
  streakGeo.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const streakM = new THREE.LineBasicMaterial({ color: 0xe8dcff, transparent: true, opacity: 0.35, fog: false });
  const streaks = new THREE.LineSegments(streakGeo, streakM);
  streaks.frustumCulled = false;
  streaks.userData.noHide = true;
  world.add(streaks);
  const seeds = Array.from({ length: NS }, (_, i) => [Math.random(), Math.random(), Math.random(), 0.6 + Math.random()]);
  const flash = new THREE.PointLight(0xc8b8ff, 0, 60, 1.4);
  flash.position.set(140, 30, LZ);
  world.add(flash);

  // ================================================================ 4. THE CLOCK (11:10 PM)
  islandMeshes(world, CK.x, CK.z, CK.r, CK.y, 6, 0xf6eaff, 0xd9a8c8, 0x7c6aa8);
  colliders.push({ type: 'cyl', x: CK.x, z: CK.z, r: CK.r - 0.05, top: CK.y, bottom: CK.y - 1.2, safe: true });
  // the dial on the island
  const dialTex = canvasTex(1024, 1024, (g) => {
    const C = 512; g.fillStyle = '#fff6ec'; g.beginPath(); g.arc(C, C, 500, 0, Math.PI * 2); g.fill();
    g.lineWidth = 26; g.strokeStyle = '#b06bff'; g.stroke();
    g.fillStyle = '#4a3070'; g.font = '700 110px Fredoka, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
    for (let i = 1; i <= 12; i++) { const a = (i / 12) * Math.PI * 2; g.fillText(String(i), C + Math.sin(a) * 400, C - Math.cos(a) * 400); }
  });
  const dial = add(world, new THREE.CircleGeometry(CK.r - 0.4, 64).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: dialTex, roughness: 0.6 }), CK.x, CK.y + 0.03, CK.z, { cast: false });
  dial.rotation.y = -Math.PI / 2;   // 12 o'clock points away from where you arrive (from −x)
  dial.userData.noHide = true;
  // the centre: a 7.4 m pillar (no way up alone), the call screen above it
  add(world, new THREE.CylinderGeometry(2.6, 3.0, HUB - CK.y, 32), brass, CK.x, (HUB + CK.y) / 2, CK.z);
  colliders.push({ type: 'cyl', x: CK.x, z: CK.z, r: 2.6, top: HUB, bottom: CK.y, noGrab: true, safe: true });
  const callScr = canvasTex(512, 300, (g, w, h) => { screenBg(g, w, h); g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.font = '600 40px Fredoka, sans-serif'; g.fillText('📞 Audio call', w / 2, 70); g.font = '700 96px Fredoka, sans-serif'; g.fillText('3:57:00', w / 2, 165); g.font = '500 34px Fredoka, sans-serif'; g.globalAlpha = 0.85; g.fillText('7:13 PM → 11:10 PM', w / 2, 245); });
  const scrG = new THREE.Group();
  scrG.position.set(CK.x, HUB + 4.6, CK.z);
  world.add(scrG);
  add(scrG, rbox(5.6, 3.4, 0.3, 0.2), mat(0x2a2050), 0, 0, -0.1);
  for (const sg of [1, -1]) add(scrG, new THREE.PlaneGeometry(5.2, 3.05).rotateY(sg > 0 ? 0 : Math.PI), new THREE.MeshBasicMaterial({ map: callScr }), 0, 0, sg * 0.08, { cast: false });
  scrG.traverse((o) => { o.userData.noHide = true; });
  // the hands: spiral stairs of day and night steps that turn around the centre
  const handTiles = [];
  const hand = (n, r0, r1, y0, y1, period, a0, kinds) => {
    for (let i = 0; i < n; i++) {
      const u = i / (n - 1), r = r0 + (r1 - r0) * u, y = y0 + (y1 - y0) * u, kind = kinds[i % kinds.length];
      specs.push({ kind, x: CK.x + r, y, z: CK.z, w: 1.6, d: 1.6, move: (s) => { const a = a0 - (s / 1000) * (Math.PI * 2) / period; return { x: CK.x + Math.cos(a) * r, y, z: CK.z + Math.sin(a) * r }; } });
      handTiles.push({ r, y, a0, period });
    }
  };
  hand(9, 12.2, 3.6, CK.y + 1.3, HUB - 1.15, 46, 0, ['day', 'night']);          // the minute hand
  hand(6, 8.6, 3.6, CK.y + 1.7, HUB - 1.15, 80, Math.PI * 0.85, ['night', 'day']);   // the hour hand
  sign(world, CK.x - CK.r + 1.2, CK.z + 3.2, -Math.PI / 2, ['Climb the turning hands', 'to the middle, together']).position.y = CK.y;

  // clouds and the memory's edges
  for (const [x, z, w] of [[-20, -10, 6], [30, -10, 7], [70, -55, 8], [120, -5, 7], [160, -60, 8], [230, -10, 7]]) cloud(world, x, -4, z, w, w * 0.8, x * z);
  {
    const P = [], R = ((sd) => () => ((sd = (sd * 16807) % 2147483647) / 2147483647))(7);
    for (let x = -14; x <= 14; x += 2.4) for (const z of [6, -26]) P.push([x, -1 + R() * 3, z + (R() - 0.5) * 2]);
    for (let z = 4; z >= -24; z -= 2.4) for (const x of [-14.5, 14.5]) P.push([x + (R() - 0.5) * 2, -1 + R() * 3, z]);
    for (let x = 0; x < 95; x += 3) P.push([x, -3 + R() * 2, LZ + (R() - 0.5) * 4]);
    for (let a = 0; a < Math.PI * 2; a += 0.25) P.push([CK.x + Math.cos(a) * (CK.r + 1), CK.y - 2 + R() * 2, CK.z + Math.sin(a) * (CK.r + 1)]);
    memoryMist(world, P, { size: 10, color: 0xd8b8ff, opacity: 0.4 });
  }

  const lit = createLights(world, colliders, specs);

  // ---------------------------------------------------------------- checkpoints, stars, time
  const cps = [
    checkpoint(world, { x: 9, y: 0, z: 1.5, sun: [-1.2, 0, -1.5], moon: [1.2, 0, -1.5], yaw: 0 }),
    checkpoint(world, { x: 1.5, y: 0, z: LZ + 1.6, r: 2.6, sun: [0.5, 0, LZ], moon: [2, 0, LZ], yaw: 0, label: '8:00 PM · Inside the cable' }),
    checkpoint(world, { x: 76, y: 4, z: LZ + 1.6, r: 2.6, sun: [77, 4, LZ], moon: [78.5, 4, LZ], yaw: 0, label: '9:00 PM · Signal lost' }),
    checkpoint(world, { x: 134, y: cordY(134), z: cordZ(134) + 1, r: 2.6, sun: [134, cordY(134), cordZ(134) - 0.5], moon: [135.5, cordY(135.5), cordZ(135.5) + 0.5], yaw: -Math.PI / 2, label: '10:00 PM · Battery 12 %' }),
    checkpoint(world, { x: CK.x - CK.r + 2, y: CK.y, z: CK.z - 2, r: 3, sun: [CK.x - CK.r + 2, CK.y, CK.z - 0.8], moon: [CK.x - CK.r + 2, CK.y, CK.z + 0.8], yaw: -Math.PI / 2, label: '11:10 PM · Almost four hours' }),
  ];
  stars.push(makeStar(world, 'c2-dial', 10.8, 2.6, -18, 0));                       // on the operators' desk
  stars.push(makeStar(world, 'c2-wave', 64, 16.0, LZ, 1));                          // above the last voice wave
  stars.push(makeStar(world, 'c2-storm', 122, cordY(122) + 2.6, cordZ(122), 2));   // over the twilight tiles
  stars.push(makeStar(world, 'c2-gust', 186, cordY(186) + 2.4, cordZ(186), 3));     // at the cord's end
  stars.push(makeStar(world, 'c2-hands', CK.x, HUB + 1.6, CK.z + 1.8, 4));          // on top of the clock

  // ---------------------------------------------------------------- state
  let api = null, doneT = -1, dialLocal = 0, wrongT = -9, openK = 0, lastCp = -1, flashT = 0;
  const st = { num: null, open: false };
  const isMoonView = () => !api || api.kind === 'solo' || api.role === 'moon';
  const isSunPhone = () => api && (api.kind === 'solo' || api.role === 'sun');
  let drawnKey = '';
  function drawScreens(dial) {
    const num = st.num || '····';
    const key = `${num}|${dial}|${isMoonView()}`;
    if (key === drawnKey) return;
    drawnKey = key;
    moonScr.redraw((g, w, h) => {
      screenBg(g, w, h, '#3a1f5c', '#8a4ac4');
      g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = '600 34px Fredoka, sans-serif'; g.fillText(isMoonView() ? '☾ Moon\'s number' : '☾ Only Moon can see this', w / 2, 52);
      g.font = '700 110px Fredoka, sans-serif';
      g.fillText(isMoonView() ? num.split('').join(' ') : '? ? ? ?', w / 2, 150);
      g.font = '500 28px Fredoka, sans-serif'; g.globalAlpha = 0.85; g.fillText('Tell Sun the digits!', w / 2, 220);
    });
    sunScr.redraw((g, w, h) => {
      screenBg(g, w, h, '#5c3a1f', '#c48a4a');
      g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
      g.font = '600 34px Fredoka, sans-serif'; g.fillText('☀ Dial Moon\'s number', w / 2, 52);
      g.font = '700 100px Fredoka, sans-serif';
      g.fillText(Array.from({ length: 4 }, (_, i) => (i < dial ? '●' : '○')).join(' '), w / 2, 150);
      g.font = '500 28px Fredoka, sans-serif'; g.globalAlpha = 0.85; g.fillText('Step on the digits: ask her which!', w / 2, 220);
    });
  }
  drawScreens(0);
  const at = (p, x, z, r, y0 = -9, y1 = 99) => p && Math.hypot(p.x - x, p.z - z) < r && p.y > y0 && p.y < y1;

  return {
    id: 'ch2-call',
    title: 'Chapter 2 · 12 October — The Four-Hour Call',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1.2, 0, -1.5), moon: new THREE.Vector3(1.2, 0, -1.5) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 100, cz: -40, r: 90, h: 34 },
    killY: -16,
    lanes: [lane([-4, LZ], [92, LZ], { half: 3.2, y0: -3, y1: 17, dist: 14, pitch: 0.16 })],
    checkpoints: cps,
    portal: new THREE.Vector3(CK.x, HUB, CK.z + 1.4),
    respawnNearPartner: true,
    killAt: (p) => (p.x > 25 && p.x < 92 && Math.abs(p.z - LZ) < 3.5 && p.y < 3 && !(p.x > 74 && p.y > 2)) || (p.x > 92 && p.y < -4),
    intro: { all: ['Part 2 · The Four-Hour Call', '7:13 PM. "Call you here or on Discord?" "Doesn\'t matter."', 'First, the call has to go through…'] },
    abilities: lit.abilities,
    lights: lit,
    attach(a) { api = a; lit.attach(a); },
    onCheckpoint() {},
    debug: () => ({ st, dialLocal, openK }),
    story(ctx, t) {
      const c2 = ctx.save.ch2?.c2 || {};
      if (c2.num) st.num = c2.num;
      st.open ||= !!c2.open;
      // the number is made once, by Sun's phone (or in practice)
      if (!st.num && isSunPhone()) { st.num = String(1000 + Math.floor(Math.random() * 9000)).replace(/[^0-9]/g, '').slice(0, 4); ctx.setSave('ch2/c2/num', st.num); }
      if (ctx.save.ch2?.call2 && doneT < 0) {
        doneT = t;
        ctx.caption('11:10 PM. Almost four hours.', 3200);
        setTimeout(() => ctx.caption('Somewhere in those four hours, something changed…', 3800), 3400);
        setTimeout(() => ctx.finish(), 7400);
      }
      if (!ctx.save.ch2?.call2 && at(ctx.pos.sun, CK.x, CK.z, 2.6, HUB - 0.5) && at(ctx.pos.moon, CK.x, CK.z, 2.6, HUB - 0.5)) ctx.setSave('ch2/call2', true);
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      const P = lit.state.P;
      // ---- 1. dialling (counted on Sun's phone; the progress is shared through the save)
      const c2 = api?.save?.ch2?.c2 || {};
      const dialShared = c2.dial || 0;
      if (!isSunPhone()) dialLocal = dialShared;
      for (const k of keys) {
        const on = k.pl.update(P);
        if (on && !k.prev && isSunPhone() && !st.open && st.num) {
          const want = st.num[dialLocal];
          if (k.label === want) {
            dialLocal++;
            api.sound.play('pin');
            api.setSave('ch2/c2/dial', dialLocal);
            if (dialLocal >= 4) { st.open = true; api.setSave('ch2/c2/open', true); api.sound.play('star'); api.caption('Ring… ring… She picked up! 📞 The line is open', 3400); }
          } else if (k.label !== '*' && k.label !== '#') {
            dialLocal = 0; wrongT = t;
            api.setSave('ch2/c2/dial', 0);
            api.caption('Wrong number! Ask Moon again ☎', 2200);
          }
        }
        k.prev = on;
      }
      const dialNow = st.open ? 4 : dialLocal;
      bulbs.forEach((b, i) => { b.material.emissiveIntensity = i < dialNow ? 2.4 : t - wrongT < 0.8 ? (Math.sin(t * 30) > 0 ? 1.5 : 0) : 0.05; b.material.emissive.setHex(t - wrongT < 0.8 ? 0xff4a6a : 0xffc46b); });
      drawScreens(dialNow);
      openK = approach(openK, st.open ? 1 : 0, 0.8, dt);
      hatch.position.y = 1.8 + openK * 3.8;
      hatchCol.disabled = openK > 0.7;
      // ---- 2. bad connection: on 2.2 s, off 1.0 s, a wave along the run (shared clock)
      for (const f of flick) {
        const u = (((serverMs - f.ph) % 3200) + 3200) % 3200, on = u < 2200, warn = on && u > 1600;
        f.col.disabled = !on;
        f.m.opacity = on ? (warn ? 0.55 + Math.sin(t * 40) * 0.3 : 1) : 0.08;
        f.nz.material.opacity = warn ? 0.6 : on ? 0 : 0.25;
        f.nz.material.map.offset.set(Math.random(), Math.random());
      }
      // ---- 3. the storm: wind pushes back unless holding hands; a gust every 7 s
      const g7 = (serverMs / 1000) % 7, gust = g7 > 5.2 ? Math.sin(((g7 - 5.2) / 1.8) * Math.PI) : 0;
      const wind = 0.9 + gust * 2.6;
      if (api) for (const r of api.mine()) {
        if (api.kind === 'solo' && r !== api.active && !api.holding) continue;
        const b = api.bodies[r].pos;
        if (b.x > 92 && b.x < 192 && b.y > 0 && !api.holding) b.x -= wind * dt;
      }
      if (gust > 0.05 && gust < 0.2 && t - flashT > 3) { flashT = t; if (P.sun && P.sun.x > 90 && P.sun.x < 195) api?.caption('💨 Gust! Hold hands ♥', 1400); }
      flash.intensity = g7 > 6.4 && g7 < 6.55 ? 60 : flash.intensity * 0.85;
      // streaks: blow in -x around the cord
      const cx = Math.max(92, Math.min(190, (P.sun?.x ?? 120)));
      for (let i = 0; i < NS; i++) {
        const s = seeds[i], len = (1.4 + gust * 3) * s[3];
        const x = cx + 40 - ((s[0] * 80 + t * (14 + gust * 30) * s[3]) % 80), y = 1 + s[1] * 16, z = LZ - 12 + s[2] * 24;
        sp.set([x, y, z, x + len, y + 0.05, z], i * 6);
      }
      streakGeo.attributes.position.needsUpdate = true;
      streaks.visible = (P.sun?.x ?? 0) > 80 || (P.moon?.x ?? 0) > 80;
      streakM.opacity = 0.25 + gust * 0.4;
      // ---- checkpoints glow; the time on reaching each (captions come from the checkpoint labels)
      const cpi = api?.save?.cp?.l === 'ch2-call' ? api.save.cp.i : 0;
      if (cpi !== lastCp) lastCp = cpi;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      scrG.rotation.y = t * 0.25;
    },
  };
}
