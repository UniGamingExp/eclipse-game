// Chapter 2 · 12 October · Part 1 "Night & Day" (v2: the long version, playtest 2).
// Five sections, each with its own idea:
//  1. Two hours apart: a split street (Sun's sunny old town | Moon's night rooftops) on either side of a
//     shimmering time wall. Each path is full of the other one's light platforms; a gate, rooftops,
//     an alley where they are too far apart (flare!), and ferries that move.
//  2. The clock tower: a side-view climb (left/right only) inside a giant clock: wall-jump shaft,
//     turning gears with day / night teeth, a day-night zig-zag, a pendulum, two plates open the top door.
//  3. The courtyard of flowers (rooftop garden): a sunflower lift that rises in Sun's light, a night-jasmine
//     bridge that grows in Moon's light, three lamps to light with flares (gold, violet, and one for both).
//  4. The shadow run: across the rooftops while a wall of shadow follows; flares push it back.
//  5. 7:13 PM: moving twilight tiles (both lights at once) to the ringing phone.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { createLights } from './light.js';
import { nature, kit } from '../nature.js';
import { house } from './medieval.js';
import { lane, checkpoint, platform, plate, approach } from './play.js';

const SX = -2.4, MX = 2.4, LW = 3.2;
const CY = 29;                          // courtyard / rooftop height
const TZ = -80;                         // the tower's side-view plane
const RZ = -83;                         // the rooftop run's line
const PH = { x: 164, z: -83, y: CY, r: 6 };   // the phone island

// ---------------------------------------------------------------- textures
function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
const clockTex = (h, m, night) => canvasTex(512, 512, (g) => {
  const C = 256, R = 244;
  g.fillStyle = night ? '#2f2a66' : '#fff3da'; g.beginPath(); g.arc(C, C, R, 0, Math.PI * 2); g.fill();
  g.lineWidth = 18; g.strokeStyle = night ? '#b9a6ff' : '#c98a3a'; g.stroke();
  g.fillStyle = night ? '#d8ccff' : '#6a4420';
  g.font = 'bold 54px Fredoka, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  const roman = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; g.fillText(roman[i], C + Math.sin(a) * 186, C - Math.cos(a) * 186); }
  if (h != null) {
    const hand = (a, len, w) => { g.lineWidth = w; g.lineCap = 'round'; g.strokeStyle = night ? '#ffffff' : '#3a2810'; g.beginPath(); g.moveTo(C, C); g.lineTo(C + Math.sin(a) * len, C - Math.cos(a) * len); g.stroke(); };
    hand(((h % 12) + m / 60) / 12 * Math.PI * 2, 110, 22);
    hand(m / 60 * Math.PI * 2, 170, 13);
    g.fillStyle = night ? '#ffffff' : '#3a2810'; g.beginPath(); g.arc(C, C, 16, 0, Math.PI * 2); g.fill();
  }
});
/** façade with lit windows (night town) */
const windowsTex = (warm) => {
  const t = canvasTex(256, 256, (g, w, h) => {
    g.fillStyle = warm ? '#d9b48f' : '#5b4f8a'; g.fillRect(0, 0, w, h);
    for (let y = 0; y < 4; y++) for (let x = 0; x < 4; x++) {
      const on = Math.random() < 0.55;
      g.fillStyle = on ? (warm ? '#ffe3a3' : '#ffd27a') : (warm ? '#8a6a52' : '#2d2858');
      g.fillRect(x * 64 + 18, y * 64 + 14, 28, 36);
      if (!warm) { g.fillStyle = 'rgba(0,0,0,0.25)'; g.fillRect(x * 64 + 18, y * 64 + 46, 28, 4); }
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
};

function retroPhone(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  const body = mat(0xb06bff, { roughness: 0.35 }), dark = mat(0x5a2fa0, { roughness: 0.4 });
  add(g, rbox(2.4, 1.1, 1.8, 0.35), body, 0, 0.55, 0);
  const top = add(g, rbox(2.0, 0.5, 1.4, 0.25), body, 0, 1.25, 0.05);
  top.rotation.x = -0.15;
  const dial = add(g, new THREE.CylinderGeometry(0.55, 0.55, 0.12, 32), mat(0xfff6ec), 0, 1.55, 0.25);
  dial.rotation.x = -0.15;
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 1.6 + 0.5;
    add(dial, new THREE.CylinderGeometry(0.07, 0.07, 0.14, 12), dark, Math.cos(a) * 0.36, 0.02, Math.sin(a) * 0.36, { cast: false });
  }
  const hs = new THREE.Group();
  hs.position.set(0, 1.85, -0.2);
  g.add(hs);
  add(hs, new THREE.CapsuleGeometry(0.2, 1.5, 6, 14).rotateZ(Math.PI / 2), body, 0, 0, 0);
  for (const s of [-1, 1]) add(hs, new THREE.CylinderGeometry(0.32, 0.28, 0.3, 20), body, s * 0.85, -0.12, 0);
  const pts = [];
  for (let i = 0; i <= 120; i++) { const u = i / 120; pts.push(new THREE.Vector3(-1.2 - Math.sin(u * Math.PI) * 0.6 + Math.cos(u * 60) * 0.08, 0.5 + u * 1.2 + Math.sin(u * 60) * 0.08, -0.6 + u * 0.3)); }
  add(g, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 240, 0.035, 6), dark, 0, 0, 0, { cast: false });
  return { g, hs };
}

/** a flat-roofed Damascene house (night side): stone block, arched door, lit lattice windows, roof parapet */
function shamiHouse(parent, x, y, z, w, d, hgt, { rotY = 0, seed = 1 } = {}) {
  const g = new THREE.Group();
  g.position.set(x, y, z); g.rotation.y = rotY;
  parent.add(g);
  const R = ((s) => () => ((s = (s * 16807) % 2147483647) / 2147483647))(seed * 7919 + 13);
  const stoneC = [0xb8a8c8, 0xa898c0, 0xc4b4cc][Math.floor(R() * 3)];
  add(g, new THREE.BoxGeometry(w, hgt, d), mat(stoneC, { roughness: 0.92 }), 0, hgt / 2, 0);
  add(g, new THREE.BoxGeometry(w + 0.2, 0.3, d + 0.2), mat(0x9a88b0, { roughness: 0.9 }), 0, hgt + 0.15, 0);   // parapet
  // striped ablaq band (the black-and-white stone stripes of old Damascus)
  for (let k = 0; k < 3; k++) add(g, new THREE.BoxGeometry(w + 0.04, 0.16, d + 0.04), mat(k % 2 ? 0xeee4f4 : 0x4a4068), 0, 0.9 + k * 0.16, 0, { cast: false });
  const lit = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.0, 1.45, 0.75) });
  const wood = mat(0x5a3a2a, { roughness: 0.8 });
  // arched door (front = +z face)
  add(g, new THREE.BoxGeometry(1.1, 1.7, 0.1), mat(0x3a2a40), 0, 0.85, d / 2 + 0.02, { cast: false });
  add(g, new THREE.CylinderGeometry(0.55, 0.55, 0.1, 16, 1, false, 0, Math.PI).rotateX(Math.PI / 2).rotateZ(Math.PI / 2), mat(0x3a2a40), 0, 1.7, d / 2 + 0.02, { cast: false });
  // lattice windows (mashrabiya) glowing from inside
  for (let f = 1; f * 2.2 < hgt - 0.5; f++) for (const sx of [-w / 3, w / 3]) {
    if (R() < 0.25) continue;
    add(g, new THREE.BoxGeometry(0.8, 1.0, 0.08), lit, sx, f * 2.2 + 0.2, d / 2 + 0.03, { cast: false });
    add(g, new THREE.BoxGeometry(0.95, 1.15, 0.12), wood, sx, f * 2.2 + 0.2, d / 2 + 0.06, { cast: false }).scale.set(1, 1, 0.5);
  }
  return g;
}

// ---------------------------------------------------------------- the level
export function buildCh2Day(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);
  const K = kit('medieval');

  scene.fog = new THREE.Fog(new THREE.Color('#9c7fc0'), 70, 260);
  sky(root, {
    top: '#2a2f7a', mid: '#f5a4a6', low: '#ffd7a8', neb1: '#8a7bff', neb2: '#ff9a7a', stars: 0.75, nebula: 0.6, cloud: 0xf3c2c8, far: false, cx: 40, cz: -60,
    lightDir: [-0.5, 0.4, 1],
    planets: [['ember', -0.9, 0.12, 260, 0.1, 2.2], ['lilac', 0.9, 0.14, 260, 0.2, 1.8], ['giant', 0.05, 0.26, 320, 0.42], ['rose', 2.8, 0.2, 280, -0.5], ['mint', -2.6, 0.3, 250, 0.3]],
  });
  lights(root, { sunColor: 0xffd9b8, sunI: 2.0, hemiSky: 0xb0a8ff, hemiGround: 0xffc8a8, hemiI: 1.5, pos: [-14, 30, -20], target: [0, 0, -36], extent: 52 });

  const stoneSrc = K.material?.('MI_UnevenBrick');
  const stone = stoneSrc ? stoneSrc.clone() : mat(0xcdbfc8, { roughness: 0.92 });
  if (stoneSrc) { for (const k of ['map', 'normalMap', 'roughnessMap']) if (stone[k]) { stone[k] = stone[k].clone(); stone[k].wrapS = stone[k].wrapT = THREE.RepeatWrapping; stone[k].repeat.set(3, 3); stone[k].needsUpdate = true; } stone.color.setRGB(1.45, 1.38, 1.55); }
  const dayTop = mat(0xffe0a0, { roughness: 0.8 }), daySide = mat(0xe0a070, { roughness: 0.85 });
  const nightTop = mat(0x4a4592, { roughness: 0.7 }), nightSide = mat(0x2f2b66, { roughness: 0.8 });
  const wood = mat(0x8a5a3a, { roughness: 0.8 });
  const specs = [];
  const box = (x0, x1, z0, z1, top, bottom, m, o = {}) => {
    add(world, rbox(x1 - x0, top - bottom, z1 - z0, Math.min(0.12, (top - bottom) / 3)), m, (x0 + x1) / 2, (top + bottom) / 2, (z0 + z1) / 2, o.cast === false ? { cast: false } : {});
    const c = { type: 'box', x0, x1, z0, z1, top, bottom, ...o.col };
    colliders.push(c);
    return c;
  };
  const floor = (x0, x1, z0, z1, top, m, side, o = {}) => {
    add(world, rbox(x1 - x0, 1.2, z1 - z0, 0.1), side, (x0 + x1) / 2, top - 0.62, (z0 + z1) / 2);
    add(world, new THREE.BoxGeometry(x1 - x0 - 0.06, 0.06, z1 - z0 - 0.06), m, (x0 + x1) / 2, top - 0.0, (z0 + z1) / 2, { cast: false }).receiveShadow = true;
    colliders.push({ type: 'box', x0, x1, z0, z1, top, bottom: top - 1.2, safe: true, ...o });
  };
  // tiles across a gap along z (sections 1, 4, 5 helpers)
  const tilesZ = (x, z0, z1, y, kind, n, o = {}) => {
    const step = (z0 - z1) / n;
    for (let i = 0; i < n; i++) specs.push({ kind, x, y, z: z0 - step * (i + 0.5), w: o.w ?? 2.4, d: Math.min(2.2, step - 0.8), ...o });
  };
  const tilesX = (z, x0, x1, y, kind, n, o = {}) => {
    const step = (x1 - x0) / n;
    for (let i = 0; i < n; i++) specs.push({ kind, x: x0 + step * (i + 0.5), y, z, w: Math.min(2.2, step - 0.7), d: o.d ?? 2.6, ...o });
  };

  // ================================================================ 1. TWO HOURS APART
  // Sun's street (day, x < 0) and Moon's (night, x > 0), split by the time wall at x = 0.
  // Rule (playtest 3): anything built for two must be impossible alone. Alone, Sun reaches ~5 m up and
  // ~9 m across; Moon's glide carries her ~15 m across. So "needs both" spots are WALLS too high to climb
  // alone (6.5 m) with light steps up them, or gaps wider than 16 m.
  // Sun: start → the canal wall (night steps) → market → alley wall (night steps, flare) → ferries
  floor(-4, -0.15, -33.5, 9, 0, dayTop, daySide, { surface: 'wood' });
  const wallBlock = (x0, x1, z0, z1, top, m) => box(x0, x1, z0, z1, top, 0, m, { col: { safe: true, noGrab: true } });
  wallBlock(-4, -0.15, -12.5, -10.5, 7.0, stone);                                 // the canal gate-wall
  for (const [z, y] of [[-5.2, 1.8], [-7.0, 3.6], [-8.8, 5.4]]) specs.push({ kind: 'night', x: SX, y, z, w: 2.4, d: 1.5 });
  floor(-8.4, -3.9, -33.5, -30, 0, dayTop, daySide, { surface: 'wood' });          // corner into the alley
  floor(-8.4, -4.8, -47, -33.5, 0, dayTop, daySide, { surface: 'wood' });          // the alley
  wallBlock(-8.4, -4.8, -42, -40, 7.0, stone);
  for (const [z, y] of [[-34.8, 1.8], [-36.6, 3.6], [-38.4, 5.4]]) specs.push({ kind: 'night', x: -6.6, y, z, w: 2.4, d: 1.5 });
  floor(-8.4, -0.15, -50, -47, 0, dayTop, daySide, { surface: 'wood' });
  // Moon: gate (Sun's plate opens it) → rooftops climbing on day planks → down → alley wall (day steps, flare) → ferries
  floor(0.15, 4, -14, 9, 0, nightTop, nightSide, { surface: 'carpet' });
  for (let i = 0; i < 7; i++) box(0.15, 4, -14 - (i + 1) * 0.5, -14 - i * 0.5, (i + 1) * 0.43, 0, nightSide, { col: { safe: true, surface: 'carpet' } });
  box(0.15, 4, -21, -17.5, 3.0, 0, nightSide, { col: { safe: true, surface: 'carpet' } });
  for (const [z, y] of [[-22.3, 4.6], [-24.1, 6.2], [-25.9, 7.8]]) specs.push({ kind: 'day', x: MX, y, z, w: 2.4, d: 1.5 });
  box(0.15, 4, -30, -27, 9.4, 0, nightSide, { col: { safe: true, surface: 'carpet' } });     // the high roof: 6.4 m up
  floor(0.15, 4, -50, -30, 0, nightTop, nightSide, { surface: 'carpet' });
  wallBlock(0.15, 4, -42, -40, 7.0, mat(0xb8a8c8, { roughness: 0.92 }));
  for (const [z, y] of [[-34.8, 1.8], [-36.6, 3.6], [-38.4, 5.4]]) specs.push({ kind: 'day', x: MX, y, z, w: 2.4, d: 1.5 });
  // the ferries: tiles drifting back and forth across the time river (14 m, and the far bank is
  // 3 m higher, so even Moon's glide falls short)
  const ferry = (x, z, kind, ph) => specs.push({ kind, x, y: 0, z, w: 2.4, d: 2.2, move: (s) => ({ x, y: 0, z: z + Math.sin(s / 1000 * 1.2 + ph) * 1.4 }) });
  ferry(SX, -53, 'day', 0); ferry(SX, -57, 'night', 1.2); ferry(SX, -61, 'night', 2.4);
  ferry(MX, -53, 'night', 0); ferry(MX, -57, 'day', 1.2); ferry(MX, -61, 'day', 2.4);
  // both lanes meet in front of the tower
  floor(-4, 4, -74.5, -64, 3.0, mat(0xd8c8e0, { roughness: 0.85 }), nightSide, { surface: 'concrete' });
  // the time river and canal under the gaps (falling in = back to the last safe spot)
  const water = new THREE.MeshStandardMaterial({ color: 0x6a7fd0, emissive: 0x2a2f80, emissiveIntensity: 0.6, roughness: 0.15, metalness: 0.1 });
  add(world, new THREE.PlaneGeometry(12.6, 76).rotateX(-Math.PI / 2), water, -2.2, -1.6, -36, { cast: false });
  add(world, new THREE.PlaneGeometry(8, 14).rotateX(-Math.PI / 2), water, 0, -1.6, -57, { cast: false });
  // Moon's gate, opened from Sun's plate
  const gateM = mat(0x6a4a8a, { roughness: 0.6 });
  const gate = add(world, rbox(3.7, 3, 0.4, 0.1), gateM, MX, 1.5, -4);
  const gateCol = { type: 'box', x0: 0.15, x1: 4, z0: -4.2, z1: -3.8, top: 3, bottom: 0, noGrab: true };
  colliders.push(gateCol);
  const gatePlate = plate(world, { x: SX, y: 0, z: -2.2, who: 'sun' });
  // obstacles in Sun's market street
  box(-4, -2.4, -18.6, -17.6, 1.0, 0, wood, { col: { safe: true } });
  box(-2.6, -0.15, -22.4, -21.4, 1.2, 0, wood, { col: { safe: true } });
  box(-4, -2.4, -26.6, -25.4, 2.2, 0, wood, { col: { safe: true } });
  if (K.has('Prop_Crate')) for (const [x, y, z] of [[-3.2, 0, -18.1], [-1.4, 0, -21.9], [-3.2, 0, -26], [-3.2, 1.1, -26]]) K.place(world, 'Prop_Crate', x, y, z, { rotY: x * z });
  // the time wall between the streets
  const wallLen = 9 - -66, wallZ = (9 + -66) / 2;
  const wallMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { time: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`uniform float time; varying vec2 vUv;
      void main(){
        vec3 day = vec3(1.0, 0.78, 0.45), night = vec3(0.55, 0.45, 1.0);
        float band = 0.5 + 0.5 * sin(vUv.x * 160.0 - time * 1.5);
        float shimmer = 0.5 + 0.5 * sin(vUv.y * 40.0 + vUv.x * 30.0 + time * 2.0);
        vec3 c = mix(day, night, 0.5 + 0.5 * sin(vUv.x * 8.0 + time * 0.3));
        float a = (0.12 + 0.1 * band * shimmer) * smoothstep(0.0, 0.1, vUv.y) * (1.0 - smoothstep(0.7, 1.0, vUv.y));
        gl_FragColor = vec4(c * 1.4, a);
      }`,
  });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(wallLen, 14), wallMat);
  wall.rotation.y = Math.PI / 2;
  wall.position.set(0, 4, wallZ);
  wall.userData.noHide = true;
  wall.renderOrder = 2;
  world.add(wall);
  anims.push((t) => { wallMat.uniforms.time.value = t; });
  colliders.push({ type: 'box', x0: -0.15, x1: 0.15, z0: -66, z1: 9, top: 40, bottom: -30, noGrab: true, noCam: true });
  // clocks at the start: two hours apart
  for (const [x, rot, h, night, label] of [[SX - 1.9, Math.PI / 2, 5, false, 'Halle'], [MX + 1.9, -Math.PI / 2, 7, true, 'Damascus']]) {
    const c = add(world, new THREE.CircleGeometry(0.9, 40), new THREE.MeshStandardMaterial({ map: clockTex(h, 13, night), roughness: 0.6, emissive: night ? 0x2a2060 : 0x000000 }), x, 2.6, 6.4, { cast: false });
    c.rotation.y = rot;
    add(world, new THREE.CylinderGeometry(0.06, 0.08, 2.0, 8), mat(0xdddde6), x, 1.0, 6.4);
    colliders.push({ type: 'cyl', x, z: 6.4, r: 0.1, top: 2.2, bottom: 0, noStep: true, noGrab: true });
    sign(world, x + (x < 0 ? 0.9 : -0.9), 4.2, rot, [label]).scale.setScalar(0.7);
  }
  sign(world, SX - 0.6, 1.2, 0.25, ['☀ Sun: step on the plate', 'to open Moon\'s gate']);
  sign(world, SX - 0.6, -3.6, 0.2, ['Too high alone! Lilac steps', 'are solid only near Moon ☾']);
  sign(world, MX + 0.6, -15.4, -0.2, ['Golden planks are solid', 'only near Sun ☀']);
  sign(world, -7.6, -33.0, 0.5, ['Too far apart? Flare (E):', 'your light reaches twice', 'as far for 4 seconds']);
  sign(world, SX - 0.6, -50.6, 0.2, ['Ride the ferries', 'side by side ⛴']);

  // Sun's side: the old town (half-timbered houses); Moon's side: Damascus at night
  if (K.has('Wall_Plaster_Straight')) {
    let sd = 40;
    for (const [z, w, d, fl] of [[4, 4, 6, 2], [-2, 4, 4, 3], [-9, 6, 6, 2], [-17, 4, 6, 3], [-24, 4, 4, 2], [-53, 4, 4, 2], [-57.5, 4, 6, 3], [-63, 4, 4, 2]]) house(world, -4 - d / 2 - 0.4, 0, z, { w, d, floors: fl, rotY: Math.PI / 2, seed: sd++ });
    // the house block between Sun's alley and the time wall
    house(world, -2.5, 0, -37.2, { w: 6, d: 4, floors: 2, rotY: Math.PI / 2, style: 'plaster', seed: 51 });
    house(world, -2.5, 0, -43.2, { w: 6, d: 4, floors: 2, rotY: Math.PI / 2, seed: 52 });
    for (const [z, w, d, fl] of [[-30, 4, 4, 3], [-38, 6, 6, 3], [-45, 4, 4, 2]]) house(world, -8.8 - d / 2 - 0.4, 0, z, { w, d, floors: fl, rotY: Math.PI / 2, seed: sd++ });
  }
  colliders.push({ type: 'box', x0: -4.6, x1: -0.4, z0: -46.2, z1: -34.2, top: 10, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -16, x1: -8.6, z0: -50, z1: -28, top: 14, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -16, x1: -4.2, z0: -28, z1: 9, top: 14, bottom: 0, noGrab: true });
  colliders.push({ type: 'box', x0: -16, x1: -4.2, z0: -66, z1: -50.2, top: 14, bottom: 0, noGrab: true });
  let hs = 3;
  for (const [z, w, d, hh] of [[5, 5, 4, 5], [-1, 5, 5, 7], [-8, 5, 6, 4.5], [-24, 6, 6, 4], [-33, 5, 5, 6.5], [-41, 5, 6, 5], [-48, 5, 5, 7], [-56, 5, 6, 5], [-62.5, 5, 5, 6]]) shamiHouse(world, 4.5 + d / 2, 0, z, w, d, hh, { rotY: -Math.PI / 2, seed: hs++ });
  colliders.push({ type: 'box', x0: 4.2, x1: 14, z0: -66, z1: 9, top: 14, bottom: 0, noGrab: true });
  // night lanterns on Moon's side, flowers on Sun's
  const lanternMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.5, 0.8) });
  const stringMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.3, 2.4) });
  const bulbs = [];
  const bulbGeo = new THREE.SphereGeometry(1, 6, 4);
  for (const z of [6, -6, -12, -33, -40, -47, -52, -60]) {
    add(world, new THREE.CylinderGeometry(0.04, 0.05, 2.2, 6), mat(0x22204a), MX + 1.45, 1.1, z);
    add(world, new THREE.SphereGeometry(0.16, 12, 8), lanternMat, MX + 1.45, 2.3, z, { cast: false });
  }
  // string lights over Moon's street
  for (let z = 8; z > -64; z -= 0.9) bulbs.push([2.2 + Math.sin(z * 0.7) * 1.6, 5.4 + Math.cos(z * 0.35) * 0.25, z, 0.07]);
  if (nature.has('Flower_3_Group')) {
    const items = [];
    for (let z = 8; z > -14; z -= 2.4) items.push({ x: -3.8, y: 0.05, z, s: 0.3, rotY: z });
    nature.scatter(world, 'Flower_3_Group', items);
  }

  // ================================================================ 2. THE CLOCK TOWER (side view)
  const towerM = stone;
  const darkStone = mat(0x6a5a80, { roughness: 0.9 });
  // back wall with the clock face, side walls, roof; the front is open (a cut-away, like a doll's house)
  add(world, new THREE.BoxGeometry(24, 36, 1), darkStone, 0, 18, -86.5);
  add(world, new THREE.BoxGeometry(1, 36, 13), towerM, -11.5, 18, -80);
  // the right wall has the door to the roof garden in it (z −82…−78, y 29…32.2)
  add(world, new THREE.BoxGeometry(1, 29, 13), towerM, 11.5, 14.5, -80);
  add(world, new THREE.BoxGeometry(1, 3.8, 13), towerM, 11.5, 34.1, -80);
  for (const [z0, z1] of [[-86.5, -82], [-78, -73.5]]) add(world, new THREE.BoxGeometry(1, 3.2, z1 - z0), towerM, 11.5, 30.6, (z0 + z1) / 2);
  add(world, new THREE.ConeGeometry(17.5, 9, 4).rotateY(Math.PI / 4), mat(0x5a4a8a, { roughness: 0.6 }), 0, 40.5, -80);
  for (const s of [-1, 1]) add(world, new THREE.BoxGeometry(1.2, 36, 1.2), mat(0x8a6a9a), s * 11.5, 18, -73.6);   // front corner posts
  colliders.push({ type: 'box', x0: -12, x1: 12, z0: -87, z1: -86, top: 36, bottom: 0, noGrab: true, noCam: true });
  colliders.push({ type: 'box', x0: -12, x1: -11, z0: -87, z1: -73, top: 36, bottom: 0, noGrab: true, noCam: true, wallJump: true });
  colliders.push({ type: 'box', x0: 11, x1: 12, z0: -87, z1: -73, top: 29, bottom: 0, noGrab: true, noCam: true });
  colliders.push({ type: 'box', x0: 11, x1: 12, z0: -87, z1: -73, top: 36, bottom: 32.2, noGrab: true, noCam: true });
  colliders.push({ type: 'box', x0: 11, x1: 12, z0: -87, z1: -82, top: 32.2, bottom: 29, noGrab: true, noCam: true });
  colliders.push({ type: 'box', x0: 11, x1: 12, z0: -78, z1: -73, top: 32.2, bottom: 29, noGrab: true, noCam: true });
  // the big clock face on the back wall: 7:13, its hands turn while you climb
  const face = add(world, new THREE.CircleGeometry(9, 64), new THREE.MeshStandardMaterial({ map: clockTex(null, 0, false), roughness: 0.7, emissive: 0x3a2a10, emissiveIntensity: 0.4 }), 0, 19, -85.95, { cast: false });
  face.userData.noHide = true;
  const handM = mat(0x3a2810, { roughness: 0.5 });
  const hourHand = new THREE.Group(), minHand = new THREE.Group();
  hourHand.position.set(0, 19, -85.8); minHand.position.set(0, 19, -85.75);
  add(hourHand, new THREE.BoxGeometry(0.7, 4.6, 0.1), handM, 0, 2.1, 0, { cast: false });
  add(minHand, new THREE.BoxGeometry(0.45, 7.0, 0.1), handM, 0, 3.3, 0, { cast: false });
  world.add(hourHand, minHand);
  // floor
  floor(-11, 11, -86, -74.5, 0, mat(0xc8b4d0, { roughness: 0.85 }), darkStone, { surface: 'wood' });
  // wall-jump shaft on the left: the tower wall + a pillar
  box(-8.6, -7.6, -82, -78, 8, 2.0, towerM, { col: { wallJump: true, noGrab: true } });
  floor(-8.6, -4, -82, -78, 8, mat(0xd9c2a0), wood, { surface: 'wood' });
  sign(world, -6.2, -78.6, 0, ['Wall-jump up the shaft:', 'jump at a wall, then again ↑']);
  // gear 1 (golden teeth) and gear 2 (lilac teeth): turning light platforms
  const gears = [];
  const gear = (cx, cy, R, kind, n, period, dir) => {
    const gm = new THREE.Group();
    gm.position.set(cx, cy, -84.5);
    const gc = kind === 'day' ? 0xd8a040 : 0x6a58c8;
    add(gm, new THREE.CylinderGeometry(R - 0.6, R - 0.6, 0.5, 40).rotateX(Math.PI / 2), mat(gc, { roughness: 0.4, metalness: 0.4 }), 0, 0, 0);
    for (let i = 0; i < 16; i++) { const a = (i / 16) * Math.PI * 2; add(gm, new THREE.BoxGeometry(0.6, 0.8, 0.5), mat(gc, { roughness: 0.4, metalness: 0.4 }), Math.cos(a) * (R - 0.4), Math.sin(a) * (R - 0.4), 0).rotation.z = a; }
    world.add(gm);
    gears.push({ gm, period, dir });
    for (let i = 0; i < n; i++) {
      const a0 = (i / n) * Math.PI * 2;
      specs.push({ kind, x: cx, y: cy, z: TZ, w: 1.9, d: 3, h: 0.35, move: (s) => { const a = a0 + dir * (s / 1000) * (Math.PI * 2) / period; return { x: cx + Math.cos(a) * R, y: cy + Math.sin(a) * R, z: TZ }; } });
    }
  };
  gear(-0.4, 10.6, 3.3, 'day', 4, 14, -1);
  floor(3.4, 5.4, -82, -78, 11.6, mat(0xd9c2a0), wood, { surface: 'wood' });
  gear(7.2, 15.6, 2.7, 'night', 3, 12, 1);
  floor(9.6, 11, -82, -78, 19, mat(0xd9c2a0), wood, { surface: 'wood' });
  // the zig-zag: day and night steps, back to the left
  for (const [x, y, kind] of [[5.6, 19.6, 'night'], [1.6, 21.6, 'day'], [-2.4, 23.6, 'night'], [-6.4, 25.6, 'day']]) specs.push({ kind, x, y, z: TZ, w: 2.0, d: 3 });
  floor(-11, -8.4, -82, -78, 27.2, mat(0xd9c2a0), wood, { surface: 'wood' });
  sign(world, -9.7, -78.6, 0, ['Ride the pendulum →']).position.y = 27.2;
  // the pendulum
  const pivot = { x: -1.6, y: 35 }, PL = 8;
  const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, PL, 8), mat(0xc9a060, { metalness: 0.6, roughness: 0.3 }));
  rod.geometry.translate(0, -PL / 2, 0);
  rod.position.set(pivot.x, pivot.y, TZ - 1.4);
  world.add(rod);
  const pend = platform(world, colliders, { w: 2.4, h: 0.4, d: 3, material: mat(0xffd27a, { roughness: 0.4, metalness: 0.3 }), x: pivot.x, y: pivot.y - PL, z: TZ });
  // top floor with two plates, door to the roof garden
  floor(4.8, 11, -82, -78, 29, mat(0xd9c2a0), wood, { surface: 'wood' });
  const topSun = plate(world, { x: 6.4, y: 29, z: TZ, who: 'sun', r: 0.7 });
  const topMoon = plate(world, { x: 8.6, y: 29, z: TZ, who: 'moon', r: 0.7 });
  const door = add(world, new THREE.BoxGeometry(0.6, 3.2, 4), mat(0x8a5ac0, { roughness: 0.5 }), 11.5, 29 + 1.6, TZ);
  const doorCol = { type: 'box', x0: 11, x1: 12, z0: -82, z1: -78, top: 32.2, bottom: 29, noGrab: true };
  colliders.push(doorCol);
  sign(world, 7.5, -78.4, 0, ['Both on your plates:', 'the door opens ☀ ☾']).position.y = 29;

  // ================================================================ 3. THE COURTYARD OF FLOWERS
  const tiles = mat(0xe8d4c8, { roughness: 0.8 });
  const bodyTex = windowsTex(false); bodyTex.repeat.set(5, 6);
  const bodyM = new THREE.MeshStandardMaterial({ map: bodyTex, roughness: 0.9, emissive: 0xffffff, emissiveMap: bodyTex, emissiveIntensity: 0.18 });
  // the building under the garden, then the floor pieces (main square + south strip; a gap to the east island)
  add(world, new THREE.BoxGeometry(28, CY, 28), bodyM, 25, CY / 2 - 0.6, -80);
  floor(11, 39, -94, -74, CY, tiles, darkStone, { surface: 'concrete' });
  floor(11, 26, -74, -66, CY, tiles, darkStone, { surface: 'concrete' });
  add(world, new THREE.BoxGeometry(6, CY, 6), bodyM, 18.5, CY / 2 - 0.6, -49);
  floor(15.5, 21.5, -52, -46, CY, tiles, darkStone, { surface: 'concrete' });
  // parapets
  for (const [x0, x1, z0, z1] of [[11, 39, -94.6, -94], [11, 17.2, -66, -65.4], [19.8, 26, -66, -65.4], [38.4, 39, -94, -86], [38.4, 39, -80, -74], [11, 11.6, -94, -82], [11, 11.6, -78, -66]]) box(x0, x1, z0, z1, CY + 0.8, CY, darkStone, { col: { noGrab: true } });
  // lamps: A violet (balcony, Moon), B gold (east island, Sun), C pink (centre, both at once)
  const lampMat = (c) => new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: c, emissiveIntensity: 0.15, roughness: 0.3 });
  const mkLamp = (x, y, z, c, key) => {
    add(world, new THREE.CylinderGeometry(0.35, 0.5, 1.2, 12), darkStone, x, y + 0.6, z);
    colliders.push({ type: 'cyl', x, z, r: 0.5, top: y + 1.2, bottom: y, noGrab: true });
    const m = lampMat(c);
    const bulb = add(world, new THREE.SphereGeometry(0.42, 20, 14), m, x, y + 1.65, z, { cast: false });
    bulb.userData.noHide = true;
    const pl = new THREE.PointLight(c, 0, 9, 1.6);
    pl.position.set(x, y + 2, z);
    world.add(pl);
    return { x, y, z, m, pl, key, on: false, c };
  };
  const lamps = { a: mkLamp(21, 35.5, -92.6, 0xa98bff, 'a'), b: mkLamp(18.5, CY, -48.4, 0xffb347, 'b'), c: mkLamp(25, CY, -84, 0xff7eb6, 'c') };
  // the sunflower lift (rises while Sun's light is on it) and the balcony above
  const SF = { x: 16.5, z: -89.5, y0: CY, y1: 35.5 };
  const lift = platform(world, colliders, { w: 2.6, h: 0.5, d: 2.6, material: mat(0xffc93a, { roughness: 0.5 }), x: SF.x, y: SF.y0 + 0.01, z: SF.z, safe: false });
  const stem = add(world, new THREE.CylinderGeometry(0.25, 0.3, 1, 10), mat(0x5aa04a), SF.x, CY, SF.z, { cast: false });
  const petals = new THREE.Group();
  for (let i = 0; i < 14; i++) { const a = (i / 14) * Math.PI * 2; const p = add(petals, new THREE.SphereGeometry(0.55, 10, 6), mat(0xffd84a, { roughness: 0.5 }), Math.cos(a) * 1.75, -0.2, Math.sin(a) * 1.75, { cast: false }); p.scale.set(1, 0.25, 0.5); p.rotation.y = -a; }
  world.add(petals);
  box(14, 24, -94, -91.4, 35.5, 34.8, wood, { col: { safe: true, surface: 'wood' } });
  sign(world, 18.6, -88.2, 0.3, ['Sunflower lift: it rises', 'in Sun\'s light ☀']).position.y = CY;
  // the night-jasmine bridge (grows while Moon's light is at its root) to the east island
  const JB = { x: 18.5, z0: -66, z1: -52 };
  const vineM = new THREE.MeshStandardMaterial({ color: 0x5a7ad0, emissive: 0x6a5aff, emissiveIntensity: 0.5, roughness: 0.6 });
  const bridgeMesh = add(world, rbox(2.2, 0.35, 1, 0.1), vineM, JB.x, CY - 0.17, JB.z0);
  const bridgeCol = { type: 'box', x0: JB.x - 1.1, x1: JB.x + 1.1, z0: JB.z0, z1: JB.z0, top: CY, bottom: CY - 0.35, disabled: true, surface: 'carpet' };
  colliders.push(bridgeCol);
  const blossoms = new THREE.InstancedMesh(new THREE.OctahedronGeometry(0.12, 0), new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 2.2, 2.4) }), 40);
  blossoms.userData.noHide = true; world.add(blossoms);
  const bo = new THREE.Object3D();
  sign(world, 22.4, -67.6, 0.2, ['Night jasmine grows', 'in Moon\'s light ☾']).position.y = CY;
  sign(world, 22, -80.5, -0.2, ['Light all three lamps:', '🟣 Moon · 🟡 Sun · 🩷 both at once']).position.y = CY;
  // the exit gate in the east wall
  const exitDoor = add(world, new THREE.BoxGeometry(0.6, 3, 6), mat(0x8a5ac0, { roughness: 0.5 }), 38.7, CY + 1.5, -83);
  const exitCol = { type: 'box', x0: 38.4, x1: 39, z0: -86, z1: -80, top: CY + 3, bottom: CY, noGrab: true };
  colliders.push(exitCol);
  // garden furniture: planters, flowers, a fountain
  const planter = (x, z) => { box(x - 1, x + 1, z - 0.6, z + 0.6, CY + 0.6, CY, mat(0xb07a5a), { col: { safe: true } }); };
  for (const [x, z] of [[14, -76], [14, -84.5], [30, -77], [34, -90], [29, -91]]) planter(x, z);
  if (nature.has('Flower_3_Group')) nature.scatter(world, 'Flower_3_Group', [[14, -76], [14, -84.5], [30, -77], [34, -90], [29, -91]].flatMap(([x, z]) => [-0.6, 0, 0.6].map((o) => ({ x: x + o, y: CY + 0.6, z, s: 0.32, rotY: x + o }))));
  // string lights over the garden
  for (let i = 0; i <= 40; i++) { const u = i / 40; bulbs.push([12 + u * 26, CY + 4.5 - Math.sin(u * Math.PI) * 1.2, -80 + Math.sin(u * 9) * 0.4, 0.09]); }
  {
    const im = new THREE.InstancedMesh(bulbGeo, stringMat, bulbs.length), o = new THREE.Object3D();
    bulbs.forEach(([x, y, z, r], i) => { o.position.set(x, y, z); o.scale.setScalar(r); o.updateMatrix(); im.setMatrixAt(i, o.matrix); });
    im.userData.noHide = true;
    world.add(im);
  }

  // ================================================================ 4. THE SHADOW RUN (rooftops)
  const roofs = [[39, 50, CY], [70, 79, CY], [99, 108, CY], [128, 138, CY]];   // all level: no drop to glide from
  for (const [x0, x1, y] of roofs) {
    add(world, new THREE.BoxGeometry(x1 - x0, y, 9), bodyM, (x0 + x1) / 2, y / 2 - 0.6, RZ - 1);
    floor(x0, x1, RZ - 2.2, RZ + 2.2, y, mat(0xc8b8d8, { roughness: 0.8 }), darkStone, { surface: 'concrete', noGrab: true });   // no ledge-grab rescue over the 20 m gaps
  }
  tilesX(RZ, 50, 70, CY, 'day', 6);          // 20 m gaps: more than Moon's longest glide (~17 m)
  tilesX(RZ, 79, 99, CY, 'night', 6);
  tilesX(RZ, 108, 128, CY, 'twilight', 6);
  // chimneys to dodge
  for (const [x, y] of [[74, CY], [102.5, CY], [104.8, CY]]) box(x - 0.5, x + 0.5, RZ - 0.4, RZ + 1.2, y + 1.3, y, mat(0x9a6a5a), { col: { noGrab: false } });
  // the shadow: a wall of dark mist with a violet edge
  const shadowM = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { time: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`uniform float time; varying vec2 vUv;
      float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f); return mix(mix(h(i), h(i + vec2(1,0)), f.x), mix(h(i + vec2(0,1)), h(i + vec2(1,1)), f.x), f.y); }
      void main(){
        float w = n(vUv * vec2(6.0, 10.0) + vec2(time * 0.3, -time * 0.8)) * 0.6 + n(vUv * vec2(14.0, 22.0) - time * 0.5) * 0.4;
        float edge = smoothstep(0.0, 0.08, vUv.x) * (1.0 - smoothstep(0.92, 1.0, vUv.x));
        float a = (0.78 + 0.2 * w) * edge * smoothstep(0.0, 0.1, vUv.y) * (1.0 - smoothstep(0.85, 1.0, vUv.y));
        vec3 c = mix(vec3(0.08, 0.04, 0.16), vec3(0.6, 0.25, 1.2), pow(w, 3.0));
        gl_FragColor = vec4(c, a);
      }`,
  });
  const shadow = new THREE.Group();
  const sp = new THREE.Mesh(new THREE.PlaneGeometry(26, 34), shadowM);
  sp.rotation.y = Math.PI / 2;
  shadow.add(sp);
  const sp2 = sp.clone(); sp2.position.x = -1.6; sp2.scale.set(1, 1.05, 1.1); shadow.add(sp2);
  shadow.position.set(36, 24, RZ);
  shadow.visible = false;
  shadow.userData.noHide = true;
  sp.userData.noHide = sp2.userData.noHide = true;
  world.add(shadow);
  sign(world, 42.5, RZ + 2.0, -0.3, ['Run! The shadow follows.', 'A flare pushes it back ✦']).position.y = CY;

  // ================================================================ 5. 7:13 PM
  for (let i = 0; i < 5; i++) {
    const x = 140.5 + i * 4, ph = i * 1.3;
    specs.push({ kind: 'twilight', x, y: PH.y, z: RZ, w: 2.4, d: 2.4, move: (s) => ({ x, y: PH.y, z: RZ + Math.sin(s / 1000 * 1.1 + ph) * 2.0 }) });
  }
  islandMeshes(world, PH.x, PH.z, PH.r, PH.y, 6, 0x9ad877, 0xd9a8a0, 0x7c6aa8);
  colliders.push({ type: 'cyl', x: PH.x, z: PH.z, r: PH.r - 0.05, top: PH.y, bottom: PH.y - 1.2, safe: true });
  const phone = retroPhone(world, PH.x + 1.2, PH.y, PH.z);
  phone.g.rotation.y = -Math.PI / 2;
  colliders.push({ type: 'box', x0: PH.x + 0.3, x1: PH.x + 2.1, z0: PH.z - 1.2, z1: PH.z + 1.2, top: PH.y + 1.6, bottom: PH.y });
  meadow(world, [{ x: PH.x, z: PH.z, r: PH.r, flowers: 50 }], [[PH.x + 1.2, PH.z, 2]], { flowerCols: [0xffffff, 0xc6b3ff, 0xffd27a, 0xff8fbf] });
  sign(world, 137.4, RZ + 2.0, -0.4, ['Pink tiles: both lights', 'at once. Hold hands? ♥']).position.y = CY;
  for (const [x, z, w] of [[60, -55, 8], [85, -110, 9], [130, -60, 7], [20, -40, 8]]) cloud(world, x, 10, z, w, w * 0.8, x * z);

  // the town below the rooftops (lit windows), for a full skyline
  {
    const im = new THREE.InstancedMesh(new THREE.BoxGeometry(1, 1, 1), bodyM, 26), o = new THREE.Object3D();
    for (let i = 0; i < 26; i++) {
      const x = 16 + (i % 13) * 11 + (i * 7 % 5), z = i < 13 ? -100 - (i * 3 % 7) : -62 + (i * 5 % 6), hh = 8 + (i * 13 % 11);
      o.position.set(x, hh / 2 - 0.6, z); o.scale.set(6, hh, 6); o.updateMatrix(); im.setMatrixAt(i, o.matrix);
    }
    im.receiveShadow = true;
    world.add(im);
  }

  const lit = createLights(world, colliders, specs);

  // ---------------------------------------------------------------- checkpoints & stars
  const cps = [
    checkpoint(world, { x: 0, y: 0, z: 5, sun: [SX, 0, 5.5], moon: [MX, 0, 5.5], yaw: 0, label: '' }),
    checkpoint(world, { x: -3.5, y: 3.0, z: -70.5, sun: [-1.2, 3.0, -71], moon: [1.2, 3.0, -71], yaw: 0, label: 'The clock tower' }),
    checkpoint(world, { x: 13.2, y: CY, z: -77, r: 3, sun: [13.4, CY, -80.8], moon: [13.4, CY, -79.2], yaw: -Math.PI / 2, label: 'The courtyard of flowers' }),
    checkpoint(world, { x: 41, y: CY, z: RZ - 1.6, r: 3, sun: [41, CY, RZ - 0.8], moon: [41, CY, RZ + 0.8], yaw: -Math.PI / 2, label: 'The shadow run' }),
    checkpoint(world, { x: 134.5, y: CY, z: RZ - 1.6, r: 3, sun: [134, CY, RZ - 0.8], moon: [134, CY, RZ + 0.8], yaw: -Math.PI / 2, label: '7:13 PM' }),
  ];
  stars.push(makeStar(world, 'c2-sun', -3.2, 3.6, -26, 0));               // on the crate stack
  stars.push(makeStar(world, 'c2-moon', MX, 4.6, -24, 1));                // over Moon's roof planks
  stars.push(makeStar(world, 'c2-tower', 7.2, 20.4, TZ, 2));              // above gear 2
  stars.push(makeStar(world, 'c2-flare', 14.6, 37.6, -92.6, 3));          // the balcony's corner
  stars.push(makeStar(world, 'c2-run', 102.5, CY + 2.8, RZ, 4));               // over the chimneys

  // ---------------------------------------------------------------- state
  let api = null, ringT = 0, doneT = -1;
  const st = { gate: false, door: false, exit: false, lamps: { a: false, b: false, c: false } };
  let liftY = SF.y0, bridgeK = 0, shadowX = 36, shadowOn = false, caughtT = 0, gateK = 0, doorK = 0, exitK = 0;
  const flareT = { sun: -1e9, moon: -1e9 };   // when each one last flared near lamp C
  const P = () => lit.state.P;
  const atPhone = (p) => p && Math.hypot(p.x - PH.x, p.z - PH.z) < 4.5 && p.y > PH.y - 1;
  const saveKey = (k, v) => api?.setSave(`ch2/d2/${k}`, v);
  function loadState(sv) {
    const d = sv?.ch2?.d2 || {};
    st.gate ||= !!d.gate; st.door ||= !!d.door; st.exit ||= !!d.exit;
    for (const k of ['a', 'b', 'c']) st.lamps[k] ||= !!d['lamp' + k];
  }

  return {
    id: 'ch2-day',
    title: 'Chapter 2 · 12 October — Night & Day',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(SX, 0, 5.5), moon: new THREE.Vector3(MX, 0, 5.5) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 10, cz: -50, r: 70, h: 30 },
    killY: -14,
    camZones: [{ x0: -9, x1: 4.6, z0: -66, z1: 10, y1: 12, yaw: 0, spread: 0.32, pitchMin: 0.42 }],
    lanes: [lane([-10.7, TZ], [10.7, TZ], { half: 5.6, y0: -2, y1: 40, dist: 14, pitch: 0.2 })],
    checkpoints: cps,
    portal: new THREE.Vector3(PH.x - 2.5, PH.y, PH.z),
    // the split street: never respawn next to the partner across the time wall
    respawnNearPartner: (pp) => !(pp && pp.z > -66 && pp.x > -12 && pp.x < 12 && pp.y < 6),
    killAt: (p) => (p.y < -1.2 && p.z > -74 && p.x < 11) || (p.x > 11.6 && p.y < 19),
    intro: { all: ['Chapter 2 · 12 October', 'Two hours apart: when the sun is still up for one, night has already come for the other.'], sun: 'Your Daylight makes the golden platforms solid ☀', moon: 'Your Nightfall makes the lilac platforms solid ☾' },
    abilities: lit.abilities,
    lights: lit,
    attach(a) { api = a; lit.attach(a); },   // saved puzzle state is read in story(), once the save has arrived
    onCheckpoint(i, sv) { loadState(sv); },
    debug: () => ({ st, gateK, doorK, exitK, liftY, bridgeK, shadowX, shadowOn }),
    story(ctx, t) {
      const sv = ctx.save.ch2 || {};
      if (sv.d2) loadState(ctx.save);
      if (!sv.day && atPhone(ctx.pos.sun) && atPhone(ctx.pos.moon)) ctx.setSave('ch2/day', true);
      if (sv.day && doneT < 0) {
        doneT = t;
        ctx.caption('12 October 2025 · 7:13 PM', 3000);
        setTimeout(() => ctx.caption('📞 Ring… ring…', 2600), 3100);
        setTimeout(() => ctx.finish(), 5900);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      const p = P();
      // 1. Moon's gate
      if (!st.gate && gatePlate.update(p)) {
        st.gate = true; saveKey('gate', true); api?.sound.play('shine');
        api?.caption('☾ Moon\'s gate is open!', 2400);
        api?.fx.sparks(new THREE.Vector3(MX, 2, -4), 0xb48cff, 40, 3);
      } else gatePlate.update(p);
      gateK = approach(gateK, st.gate ? 1 : 0, 0.8, dt);
      gate.position.y = 1.5 - gateK * 3.1;
      gateCol.disabled = gateK > 0.7;
      // 2. tower: gears turn, the clock hands sweep, the pendulum swings, the door opens on both plates
      for (const g of gears) g.gm.rotation.z = g.dir * (serverMs / 1000) * (Math.PI * 2) / g.period;
      minHand.rotation.z = -(serverMs / 1000) * 0.12;
      hourHand.rotation.z = -(serverMs / 1000) * 0.01 - 3.7;
      const th = Math.sin(serverMs / 1000 * (Math.PI * 2) / 4.6) * 0.7;
      rod.rotation.z = th;
      pend.set(pivot.x + Math.sin(th) * PL, pivot.y - Math.cos(th) * PL, TZ);
      const both = topSun.update(p) & topMoon.update(p);
      if (!st.door && both) { st.door = true; saveKey('door', true); api?.sound.play('star'); api?.caption('The door to the roof garden opens 🌻', 2600); }
      doorK = approach(doorK, st.door ? 1 : 0, 0.7, dt);
      door.position.y = CY + 1.6 + doorK * 3.4;
      doorCol.disabled = doorK > 0.6;
      // 3. courtyard: sunflower lift, jasmine bridge, lamps, exit
      const sunOnLift = lit.isLit('day', SF.x, SF.z, 0.6);
      liftY = approach(liftY, sunOnLift ? SF.y1 : SF.y0, sunOnLift ? 1.6 : 2.4, dt);
      lift.set(SF.x, liftY + 0.01, SF.z);
      stem.scale.y = Math.max(0.01, liftY - CY); stem.position.y = CY + (liftY - CY) / 2;
      petals.position.set(SF.x, liftY, SF.z); petals.rotation.y = t * 0.3;
      const moonAtRoot = lit.isLit('night', JB.x, JB.z0, 0.8);
      bridgeK = approach(bridgeK, moonAtRoot ? 1 : 0, moonAtRoot ? 0.9 : 0.5, dt);
      const bl = Math.max(0.01, (JB.z1 - JB.z0) * bridgeK + 0.4 * (bridgeK > 0 ? 1 : 0));
      bridgeMesh.scale.z = bl; bridgeMesh.position.z = JB.z0 + bl / 2;
      bridgeCol.z1 = JB.z0 + bl; bridgeCol.disabled = bridgeK < 0.05;
      vineM.emissiveIntensity = 0.3 + bridgeK * 0.8;
      for (let i = 0; i < 40; i++) {
        const u = (i + 0.5) / 40, on = u < bridgeK;
        bo.position.set(JB.x + Math.sin(i * 2.1) * 0.9, CY + 0.12, JB.z0 + u * (JB.z1 - JB.z0));
        bo.scale.setScalar(on ? 1 + Math.sin(t * 3 + i) * 0.2 : 0.001); bo.updateMatrix(); blossoms.setMatrixAt(i, bo.matrix);
      }
      blossoms.instanceMatrix.needsUpdate = true;
      // lamps light with the right flare nearby
      const L = lamps;
      if (!st.lamps.a && lit.flaringNear('moon', L.a.x, L.a.z, 3.5) && p.moon && p.moon.y > L.a.y - 1) { st.lamps.a = true; saveKey('lampa', true); }
      if (!st.lamps.b && lit.flaringNear('sun', L.b.x, L.b.z, 3.5)) { st.lamps.b = true; saveKey('lampb', true); }
      if (lit.flaringNear('sun', L.c.x, L.c.z, 4)) flareT.sun = t;
      if (lit.flaringNear('moon', L.c.x, L.c.z, 4)) flareT.moon = t;
      if (!st.lamps.c && t - flareT.sun < 3.2 && t - flareT.moon < 3.2) { st.lamps.c = true; saveKey('lampc', true); }
      let n = 0;
      for (const k of ['a', 'b', 'c']) {
        const lp = L[k], on = st.lamps[k];
        if (on && !lp.on) { lp.on = true; api?.sound.play('star'); api?.fx.sparks(new THREE.Vector3(lp.x, lp.y + 1.8, lp.z), lp.c, 30, 3); }
        lp.m.emissiveIntensity = on ? 3.2 + Math.sin(t * 2 + n) * 0.4 : 0.15 + Math.sin(t * 3) * 0.05;
        lp.pl.intensity = on ? 9 : 0;
        if (on) n++;
      }
      if (n === 3 && !st.exit) { st.exit = true; saveKey('exit', true); api?.caption('All three lamps are lit ✨ The gate opens!', 2800); }
      exitK = approach(exitK, st.exit ? 1 : 0, 0.7, dt);
      exitDoor.position.y = CY + 1.5 + exitK * 3.2;
      exitCol.disabled = exitK > 0.6;
      // 4. the shadow: starts when someone runs out of the garden, follows at a steady pace
      const mine = api ? api.mine() : [];
      const front = Math.max(p.sun?.x ?? -1e9, p.moon?.x ?? -1e9);
      if (!shadowOn && front > 44 && front < 136) { shadowOn = true; shadowX = 34; }
      if (shadowOn) {
        const solo = api?.kind === 'solo';
        const flaring = lit.flaringNear('sun', shadowX, RZ, 14) || lit.flaringNear('moon', shadowX, RZ, 14);
        shadowX += (flaring ? -7 : solo ? 1.7 : 3.0) * dt;
        const behind = Math.min(p.sun?.x ?? 1e9, p.moon?.x ?? 1e9);
        shadowX = Math.max(shadowX, Math.min(behind - 30, 133));   // never too far behind
        if (shadowX > 134 || front < 36) { shadowOn = false; }
        caughtT -= dt;
        for (const r of mine) {
          if (solo && r !== api.active) continue;
          const b = api.bodies[r].pos;
          if (b.x < shadowX + 0.6 && b.x > 38 && b.y > 20 && caughtT <= 0) {
            caughtT = 1.5;
            api.respawn?.(r);
            shadowX = Math.min(shadowX - 7, api.bodies[r].pos.x - 9);
            api.caption('The shadow caught you! Keep moving ✦', 1800);
          }
        }
      }
      shadow.visible = shadowOn;
      shadow.position.x = shadowX;
      shadowM.uniforms.time.value = t;
      // checkpoints glow once reached
      const cpi = api?.save?.cp?.l === 'ch2-day' ? api.save.cp.i : 0;
      cps.forEach((c, i) => c.setOn(i <= cpi, t));
      // 5. the phone rings in bursts
      ringT = (serverMs / 1000) % 2.4;
      const ringing = ringT < 1.0;
      phone.hs.position.y = 1.85 + (ringing ? Math.abs(Math.sin(t * 40)) * 0.12 : 0);
      phone.hs.rotation.z = ringing ? Math.sin(t * 45) * 0.08 : 0;
    },
  };
}
