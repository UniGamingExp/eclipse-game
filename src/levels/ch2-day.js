// Chapter 2 · 12 October · Part 1 "Night & Day".
// Two lanes side by side, split by a shimmering time line ("2 hours apart"): Sun walks on the day side,
// Moon on the night side. Gaps in each lane are bridged by light platforms: golden DAY ones (solid only
// near Sun) and lilac NIGHT ones (solid only near Moon). After a tutorial gap each, they light the way for
// each other, cross together, and use a flare (tap the ability) for the long gap. At the end the lanes
// meet at a ringing phone: 12 October, 7:13 PM.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { createLights } from './light.js';
import { nature } from '../nature.js';

const SX = -2.2, MX = 2.2, LANE_W = 3.2, WALL_END = -72;
// solid floor segments [zFrom, zTo] and light gaps [zFrom, zTo, kind, count] per lane
const SUN = {
  floor: [[7, -6], [-12, -30], [-40, -43], [-53, -57], [-67, WALL_END]],
  gaps: [[-6, -12, 'day', 2], [-30, -40, 'night', 3], [-43, -53, 'night', 3], [-57, -67, 'night', 3]],
};
const MOON = {
  floor: [[7, -6], [-12, -14], [-24, -43], [-53, -57], [-67, WALL_END]],
  gaps: [[-6, -12, 'night', 2], [-14, -24, 'day', 3], [-43, -53, 'day', 3], [-57, -67, 'day', 3]],
};
const END = { x: 0, z: -79, r: 6.5 };

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
/** a clock face with the hour hand at `h` (0–12) and minute hand at `m` */
const clockTex = (h, m, night) => canvasTex(256, 256, (g) => {
  g.fillStyle = night ? '#2f2a66' : '#fff6e0'; g.beginPath(); g.arc(128, 128, 122, 0, Math.PI * 2); g.fill();
  g.lineWidth = 10; g.strokeStyle = night ? '#b9a6ff' : '#e0a040'; g.stroke();
  g.fillStyle = night ? '#d8ccff' : '#7a5020';
  for (let i = 0; i < 12; i++) { const a = (i / 12) * Math.PI * 2; g.beginPath(); g.arc(128 + Math.sin(a) * 100, 128 - Math.cos(a) * 100, i % 3 ? 5 : 9, 0, Math.PI * 2); g.fill(); }
  const hand = (a, len, w) => { g.lineWidth = w; g.lineCap = 'round'; g.strokeStyle = night ? '#ffffff' : '#3a2810'; g.beginPath(); g.moveTo(128, 128); g.lineTo(128 + Math.sin(a) * len, 128 - Math.cos(a) * len); g.stroke(); };
  hand(((h % 12) + m / 60) / 12 * Math.PI * 2, 58, 12);
  hand(m / 60 * Math.PI * 2, 88, 7);
  g.fillStyle = night ? '#ffffff' : '#3a2810'; g.beginPath(); g.arc(128, 128, 9, 0, Math.PI * 2); g.fill();
});

function retroPhone(parent, x, z) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
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
  // the handset, which jumps while ringing
  const hs = new THREE.Group();
  hs.position.set(0, 1.85, -0.2);
  g.add(hs);
  add(hs, new THREE.CapsuleGeometry(0.2, 1.5, 6, 14).rotateZ(Math.PI / 2), body, 0, 0, 0);
  for (const s of [-1, 1]) add(hs, new THREE.CylinderGeometry(0.32, 0.28, 0.3, 20), body, s * 0.85, -0.12, 0);
  // the curly cord
  const pts = [];
  for (let i = 0; i <= 120; i++) { const u = i / 120; pts.push(new THREE.Vector3(-1.2 - Math.sin(u * Math.PI) * 0.6 + Math.cos(u * 60) * 0.08, 0.5 + u * 1.2 + Math.sin(u * 60) * 0.08, -0.6 + u * 0.3)); }
  add(g, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 240, 0.035, 6), dark, 0, 0, 0, { cast: false });
  return { g, hs };
}

export function buildCh2Day(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#9c7fc0'), 60, 240);
  sky(root, {
    top: '#2a2f7a', mid: '#f5a4a6', low: '#ffd7a8', neb1: '#8a7bff', neb2: '#ff9a7a', stars: 0.75, nebula: 0.6, cloud: 0xf3c2c8, far: false, cx: 0, cz: -36,
    lightDir: [-0.5, 0.4, 1],
    planets: [['ember', -0.9, 0.12, 230, 0.1, 2.2], ['lilac', 0.9, 0.14, 230, 0.2, 1.8], ['giant', 0.05, 0.26, 300, 0.42], ['rose', 2.8, 0.2, 250, -0.5], ['mint', -2.6, 0.3, 220, 0.3]],
  });
  lights(root, { sunColor: 0xffd9b8, sunI: 2.0, hemiSky: 0xb0a8ff, hemiGround: 0xffc8a8, hemiI: 1.5, pos: [-14, 30, -20], target: [0, 0, -36], extent: 52 });

  // ---------- the two lanes ----------
  const dayTop = mat(0xffe0a0, { roughness: 0.8 }), daySide = mat(0xe8a868, { roughness: 0.85 });
  const nightTop = mat(0x4a4592, { roughness: 0.7 }), nightSide = mat(0x2f2b66, { roughness: 0.8 });
  const specs = [];
  const starDots = [];
  for (const [L, x, top, side, isSun] of [[SUN, SX, dayTop, daySide, true], [MOON, MX, nightTop, nightSide, false]]) {
    for (const [a, b] of L.floor) {
      const len = a - b, cz = (a + b) / 2;
      add(world, rbox(LANE_W, 1.4, len, 0.15), side, x, -0.7, cz);
      const t = add(world, rbox(LANE_W - 0.1, 0.12, len - 0.1, 0.05), top, x, 0.0, cz, { cast: false });
      t.receiveShadow = true;
      colliders.push({ type: 'box', x0: x - LANE_W / 2, x1: x + LANE_W / 2, z0: b, z1: a, top: 0.06, bottom: -1.4, safe: true, surface: isSun ? 'wood' : 'carpet' });
      if (!isSun) for (let k = 0; k < len * 1.6; k++) starDots.push([x + (Math.random() - 0.5) * (LANE_W - 0.5), 0.075, b + Math.random() * len]);
    }
    for (const [a, b, kind, n] of L.gaps) {
      const step = (a - b) / n;
      for (let i = 0; i < n; i++) specs.push({ kind, x, y: 0.06, z: a - step * (i + 0.5), w: 2.4, d: Math.min(2.2, step - 1.0) });
    }
  }
  // twinkly dots on the night lane
  const dots = new THREE.InstancedMesh(new THREE.SphereGeometry(0.035, 6, 4), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.5, 2.2) }), starDots.length);
  const o = new THREE.Object3D();
  starDots.forEach((p, i) => { o.position.set(...p); o.updateMatrix(); dots.setMatrixAt(i, o.matrix); });
  dots.userData.noHide = true;
  world.add(dots);
  const lit = createLights(world, colliders, specs);

  // ---------- the time line between them ----------
  const wallLen = 7 - WALL_END, wallZ = (7 + WALL_END) / 2;
  const wallMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { time: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`uniform float time; varying vec2 vUv;
      void main(){
        vec3 day = vec3(1.0, 0.78, 0.45), night = vec3(0.55, 0.45, 1.0);
        float band = 0.5 + 0.5 * sin(vUv.x * 120.0 - time * 1.5);
        float shimmer = 0.5 + 0.5 * sin(vUv.y * 40.0 + vUv.x * 30.0 + time * 2.0);
        vec3 c = mix(day, night, 0.5 + 0.5 * sin(vUv.x * 6.0 + time * 0.3));
        float a = (0.12 + 0.1 * band * shimmer) * smoothstep(0.0, 0.15, vUv.y) * (1.0 - smoothstep(0.75, 1.0, vUv.y));
        gl_FragColor = vec4(c * 1.4, a);
      }`,
  });
  const wall = new THREE.Mesh(new THREE.PlaneGeometry(wallLen, 12), wallMat);
  wall.rotation.y = Math.PI / 2;
  wall.position.set(0, 3, wallZ);
  wall.userData.noHide = true;
  wall.renderOrder = 2;
  world.add(wall);
  anims.push((t) => { wallMat.uniforms.time.value = t; });
  colliders.push({ type: 'box', x0: -0.12, x1: 0.12, z0: WALL_END, z1: 7, top: 40, bottom: -30, noGrab: true, noCam: true });
  // the two clocks: two hours apart
  for (const [x, rot, h, night, label] of [[SX - 1.9, Math.PI / 2, 5, false, 'Halle'], [MX + 1.9, -Math.PI / 2, 7, true, 'Damascus']]) {
    const c = add(world, new THREE.CircleGeometry(0.9, 40), new THREE.MeshStandardMaterial({ map: clockTex(h, 13, night), roughness: 0.6, emissive: night ? 0x2a2060 : 0x000000 }), x, 2.6, 3.2, { cast: false });
    c.rotation.y = rot;
    add(world, new THREE.CylinderGeometry(0.06, 0.08, 2.0, 8), mat(0xdddde6), x, 1.0, 3.2);
    colliders.push({ type: 'cyl', x, z: 3.2, r: 0.1, top: 2.2, bottom: 0, noStep: true, noGrab: true });
    sign(world, x + (x < 0 ? 0.9 : -0.9), 1.0, rot, [label]).scale.setScalar(0.7);
  }
  sign(world, SX - 0.4, -4.6, 0.25, ['☀ Golden platforms are', 'solid near Sun']);
  sign(world, MX + 0.4, -4.6, -0.25, ['☾ Lilac platforms are', 'solid near Moon']);
  sign(world, SX - 0.2, -27.6, 0.2, ['Walk beside each other:', 'light her way, she lights yours']);
  sign(world, SX - 0.2, -55.2, 0.2, ['Too far? Tap Daylight /', 'Nightfall: a big flare for 3 s']);

  // night lanterns and day flowers along the lanes
  const lanternMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.8, 1.4, 2.4) });
  for (const z of [4, -10, -20, -30, -36, -48, -60, -70]) {
    add(world, new THREE.CylinderGeometry(0.04, 0.05, 1.4, 6), mat(0x22204a), MX + 1.45, 0.7, z);
    add(world, new THREE.SphereGeometry(0.16, 12, 8), lanternMat, MX + 1.45, 1.5, z, { cast: false });
  }
  if (nature.has('Flower_3_Group')) {
    const items = [];
    for (const [a, b] of SUN.floor) for (let z = a - 0.8; z > b + 0.5; z -= 2.6) items.push({ x: SX - 1.25, y: 0.06, z, s: 0.32, rotY: z });
    nature.scatter(world, 'Flower_3_Group', items);
  }
  stars.push(makeStar(world, 'c2-sun', SX, 2.4, -35, 0));
  stars.push(makeStar(world, 'c2-moon', MX, 2.4, -19, 1));
  stars.push(makeStar(world, 'c2-flare', MX, 2.0, -62, 2));

  // ---------- start + end islands ----------
  islandMeshes(world, 0, 10.5, 5, 0, 5, 0xffd9a0, 0xe0a67c, 0x8f6c9c);
  colliders.push({ type: 'cyl', x: 0, z: 10.5, r: 4.95, top: 0, bottom: -1.2, safe: true });
  islandMeshes(world, END.x, END.z, END.r, 0, 6, 0x9ad877, 0xd9a8a0, 0x7c6aa8);
  colliders.push({ type: 'cyl', x: END.x, z: END.z, r: END.r - 0.05, top: 0, bottom: -1.2, safe: true });
  const phone = retroPhone(world, END.x, END.z - 1.6);
  colliders.push({ type: 'box', x0: END.x - 1.2, x1: END.x + 1.2, z0: END.z - 2.5, z1: END.z - 0.7, top: 1.6, bottom: 0 });
  meadow(world, [{ x: END.x, z: END.z, r: END.r, flowers: 50 }], [[END.x, END.z - 1.6, 2]], { flowerCols: [0xffffff, 0xc6b3ff, 0xffd27a, 0xff8fbf] });
  decorate(world, [{ x: END.x, z: END.z, r: END.r, n: 0.6 }], [[END.x, END.z - 1.6, 2.4], [-1.6, 1.6, END.z + 2, END.z + 7]], { seed: 31, mushrooms: false });
  for (const [x, z, w] of [[-14, -16, 5], [13, -40, 6], [-12, -62, 5], [14, -6, 4]]) cloud(world, x, -3, z, w, w * 0.8, x * z);

  // ---------- story ----------
  let api = null, ringT = 0, doneT = -1;
  const atPhone = (p) => p && Math.hypot(p.x - END.x, p.z - END.z) < 4 && p.y > -1;

  return {
    id: 'ch2-day',
    title: 'Chapter 2 · 12 October — Night & Day',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(SX, 0, 5.5), moon: new THREE.Vector3(MX, 0, 5.5) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: -36, r: 50, h: 20 },
    killY: -14,
    portal: new THREE.Vector3(-3, 0, -79),   // where the end-of-part portal opens
    intro: { all: ['Chapter 2 · 12 October', 'Two hours apart: when the sun is still up for one, night has already come for the other.'], sun: 'Your Daylight makes the golden platforms solid ☀', moon: 'Your Nightfall makes the lilac platforms solid ☾' },
    abilities: lit.abilities,
    lights: lit,
    attach(a) { api = a; lit.attach(a); },
    story(ctx, t) {
      const st = ctx.save.ch2 || {};
      if (!st.day && atPhone(ctx.pos.sun) && atPhone(ctx.pos.moon)) ctx.setSave('ch2/day', true);
      if (st.day && doneT < 0) {
        doneT = t;
        ctx.caption('12 October 2025 · 7:13 PM', 3000);
        setTimeout(() => ctx.caption('📞 Ring… ring…', 2600), 3100);
        setTimeout(() => ctx.finish(), 5900);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      // the phone rings in bursts
      ringT = (serverMs / 1000) % 2.4;
      const ringing = ringT < 1.0;
      phone.hs.position.y = 1.85 + (ringing ? Math.abs(Math.sin(t * 40)) * 0.12 : 0);
      phone.hs.rotation.z = ringing ? Math.sin(t * 45) * 0.08 : 0;
      phone.g.rotation.z = ringing ? Math.sin(t * 50) * 0.015 : 0;
    },
  };
}
