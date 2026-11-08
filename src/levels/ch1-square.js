// Chapter 1 · Syria Unfiltered · Part 1 "The Town Square".
// The Discord server as a floating evening plaza. Sun starts in #general, Moon in #gaming, each learning
// their new power (Megaphone / Reply pin). They meet in the noisy #politics square, among the debating
// crowd, and need each other to reach the door to #card-tables on top of the stage building.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, tree, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { createBubbles, bubbleAbilities } from './bubbles.js';
import { nature } from '../nature.js';

const SQ_R = 12;
const ROOF = 8;                       // stage building roof (the exit)
const SUN_X = -29, MOON_X = 29, ISL_R = 7;
// solo reach with double jump + ledge grab is ~5.1 m (Sun) / ~4.9 m (Moon); one bubble adds 1.25 m
const SUN_WALL = 5.8, MOON_WALL = 5.6;

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
function starPath(g, cx, cy, r) {
  g.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = -Math.PI / 2 + i * Math.PI / 5, rr = i % 2 ? r * 0.42 : r;
    g.lineTo(cx + Math.cos(a) * rr, cy + Math.sin(a) * rr);
  }
  g.closePath();
}
/** green-white-black with three red stars */
const flagTex = () => canvasTex(300, 200, (g, w, h) => {
  g.fillStyle = '#2f8f4e'; g.fillRect(0, 0, w, h / 3);
  g.fillStyle = '#ffffff'; g.fillRect(0, h / 3, w, h / 3);
  g.fillStyle = '#1b1b1b'; g.fillRect(0, (2 * h) / 3, w, h / 3);
  g.fillStyle = '#d93a3a';
  for (const x of [0.3, 0.5, 0.7]) { starPath(g, w * x, h / 2, h / 7.5); g.fill(); }
});
/** an original badge for the server: flag band, two speakers at podiums, sound waves */
const badgeTex = () => canvasTex(512, 512, (g, w) => {
  const c = w / 2;
  g.fillStyle = '#163d2e'; g.beginPath(); g.arc(c, c, c - 6, 0, Math.PI * 2); g.fill();
  g.lineWidth = 12; g.strokeStyle = '#e9f2e4'; g.beginPath(); g.arc(c, c, c - 14, 0, Math.PI * 2); g.stroke();
  g.save(); g.beginPath(); g.arc(c, c, c - 20, 0, Math.PI * 2); g.clip();
  g.fillStyle = '#2f8f4e'; g.fillRect(0, 70, w, 40);
  g.fillStyle = '#ffffff'; g.fillRect(0, 110, w, 40);
  g.fillStyle = '#111'; g.fillRect(0, 150, w, 40);
  g.fillStyle = '#d93a3a'; for (const x of [0.38, 0.5, 0.62]) { starPath(g, w * x, 130, 15); g.fill(); }
  g.restore();
  g.fillStyle = '#e9f2e4';
  for (const s of [-1, 1]) {
    const x = c + s * 105;
    g.beginPath(); g.arc(x, 250, 30, 0, Math.PI * 2); g.fill();               // head
    g.beginPath(); g.ellipse(x, 335, 48, 55, 0, Math.PI, 0); g.fill();        // shoulders
    g.fillRect(x - s * 10 - 40, 330, 80, 90);                                  // podium
    g.lineWidth = 9; g.strokeStyle = '#e9f2e4';
    for (let k = 1; k <= 3; k++) { g.beginPath(); g.arc(x, 250, 32 + k * 20, s > 0 ? Math.PI * 0.8 : -Math.PI * 0.2, s > 0 ? Math.PI * 1.2 : Math.PI * 0.2); g.stroke(); }
  }
  g.font = '900 44px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center';
  g.fillText('UNFILTERED', c, 470);
});
const plazaTex = () => {
  const t = canvasTex(512, 512, (g, w) => {
    const n = 8, s = w / n;
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
      g.fillStyle = (i + j) % 2 ? '#e8e1cf' : '#d6ccb4';
      g.fillRect(i * s, j * s, s, s);
      g.strokeStyle = 'rgba(120,100,80,0.25)'; g.lineWidth = 3; g.strokeRect(i * s + 1.5, j * s + 1.5, s - 3, s - 3);
    }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(4, 4);
  return t;
};
const faceTex = (mood) => canvasTex(128, 128, (g) => {
  g.fillStyle = '#ffffff';
  g.beginPath(); g.arc(64, 64, 62, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#2b2440';
  if (mood === 'angry') {
    g.lineWidth = 7; g.strokeStyle = '#2b2440';
    g.beginPath(); g.moveTo(30, 40); g.lineTo(54, 52); g.moveTo(98, 40); g.lineTo(74, 52); g.stroke();
  }
  g.beginPath(); g.arc(44, 58, 8, 0, Math.PI * 2); g.arc(84, 58, 8, 0, Math.PI * 2); g.fill();
  g.lineWidth = 7; g.strokeStyle = '#2b2440'; g.beginPath();
  if (mood === 'angry') g.arc(64, 98, 18, Math.PI * 1.15, Math.PI * 1.85);
  else if (mood === 'shock') { g.arc(64, 90, 10, 0, Math.PI * 2); }
  else g.arc(64, 74, 22, Math.PI * 0.15, Math.PI * 0.85);
  g.stroke();
});

function poster(parent, x, y, z, rotY, w, h, draw) {
  const m = add(parent, new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: canvasTex(Math.round(w * 128), Math.round(h * 128), draw), roughness: 0.8 }), x, y, z, { cast: false });
  m.rotation.y = rotY;
  return m;
}
const posterText = (bg, fg, lines, big = 64) => (g, w, h) => {
  g.fillStyle = bg; g.fillRect(0, 0, w, h);
  g.strokeStyle = fg; g.lineWidth = 8; g.strokeRect(10, 10, w - 20, h - 20);
  g.fillStyle = fg; g.textAlign = 'center'; g.textBaseline = 'middle';
  lines.forEach((l, i) => { g.font = `900 ${i ? big * 0.55 : big}px ui-rounded, system-ui, sans-serif`; g.fillText(l, w / 2, h / 2 + (i - (lines.length - 1) / 2) * big * 1.1, w - 40); });
};

// ---------------------------------------------------------------- crowd avatars
const MOODS = ['happy', 'angry', 'shock', 'happy', 'angry'];
const faces = {};
function avatar(parent, color, mood = 'happy') {
  faces[mood] ||= faceTex(mood);
  const g = new THREE.Group();
  parent.add(g);
  const body = add(g, new THREE.CapsuleGeometry(0.34, 0.45, 6, 14), mat(color, { roughness: 0.55 }), 0, 0.6, 0);
  const head = add(g, new THREE.SphereGeometry(0.36, 20, 14), mat(color, { roughness: 0.5 }), 0, 1.33, 0);
  const face = add(head, new THREE.CircleGeometry(0.27, 24), new THREE.MeshStandardMaterial({ map: faces[mood], roughness: 0.6 }), 0, 0.02, 0.33, { cast: false });
  face.rotation.x = -0.05;
  // headphones for a gamer look on some of them
  if (color % 3 === 0) {
    add(head, new THREE.TorusGeometry(0.37, 0.05, 8, 20, Math.PI), mat(0x333344), 0, 0.05, 0, { cast: false });
    for (const s of [-1, 1]) add(head, new THREE.CylinderGeometry(0.11, 0.11, 0.1, 12).rotateZ(Math.PI / 2), mat(0x333344), s * 0.37, 0, 0, { cast: false });
  }
  g.userData.parts = { body, head };
  return g;
}

// ---------------------------------------------------------------- level
export function buildCh1Square(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#9a7fb8'), 60, 230);
  sky(root, {
    top: '#1a2456', mid: '#8a6bb0', low: '#f3a9b8', neb1: '#7d6bff', neb2: '#ff8fc0', stars: 0.9, nebula: 0.7, cloud: 0xd9b8e8, far: false, cx: 0,
    lightDir: [-0.3, 0.4, 1],
    planets: [
      ['giant', 0.35, 0.16, 300, 0.42], ['lilac', 1.5, 0.12, 230, 0.2, 1.3], ['ember', -1.5, 0.12, 230, 0.1, 1.8],
      ['ocean', 2.7, 0.14, 270, 0.3], ['mint', -2.5, 0.3, 220, 0.3], ['rose', -0.5, 0.36, 250, -0.5],
    ],
  });
  lights(root, { sunColor: 0xffd9c2, sunI: 2.1, hemiSky: 0xb9b2ff, hemiGround: 0xffc2b0, hemiI: 1.45, pos: [10, 30, 22], target: [0, 0, 0], extent: 46 });

  // ---------- the square ----------
  islandMeshes(world, 0, 0, SQ_R, 0, 8, 0x86c98f, 0xd9a58a, 0x7d6aa6);
  colliders.push({ type: 'cyl', x: 0, z: 0, r: SQ_R - 0.05, top: 0, bottom: -1.2, safe: true, surface: 'concrete' });
  const floor = add(world, new THREE.CylinderGeometry(SQ_R - 0.9, SQ_R - 0.9, 0.06, 64), new THREE.MeshStandardMaterial({ map: plazaTex(), roughness: 0.85 }), 0, 0.03, 0, { cast: false });
  floor.receiveShadow = true;

  // stage building with the exit door on its roof
  const bx0 = -5, bx1 = 5, bz0 = -16.5, bz1 = -10.8;
  add(world, rbox(bx1 - bx0, ROOF, bz1 - bz0, 0.2), mat(0x2d5e4a), 0, ROOF / 2, (bz0 + bz1) / 2);
  add(world, rbox(bx1 - bx0 + 0.3, 0.3, bz1 - bz0 + 0.3, 0.12), mat(0xe9e2cf), 0, ROOF, (bz0 + bz1) / 2);
  colliders.push({ type: 'box', x0: bx0, x1: bx1, z0: bz0, z1: bz1, top: ROOF + 0.15, bottom: 0, safe: true, surface: 'concrete' });
  const badge = add(world, new THREE.CircleGeometry(2.4, 48), new THREE.MeshStandardMaterial({ map: badgeTex(), roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.06 }), 0, 4.4, bz1 + 0.02, { cast: false });
  badge.receiveShadow = true;
  for (const x of [-3.6, 3.6]) add(world, rbox(0.9, ROOF - 0.4, 0.3, 0.1), mat(0x24503e), x, ROOF / 2, bz1 + 0.1); // pilasters
  // the door: a glowing arch on the roof
  const door = new THREE.Group();
  door.position.set(0, ROOF + 0.15, -14.6);
  world.add(door);
  for (const s of [-1, 1]) add(door, rbox(0.35, 2.4, 0.35, 0.08), mat(0xf4efe6), s * 1.05, 1.2, 0);
  add(door, new THREE.TorusGeometry(1.05, 0.17, 10, 30, Math.PI), mat(0xf4efe6), 0, 2.4, 0);
  const portal = add(door, new THREE.CircleGeometry(1.0, 32, 0, Math.PI), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.4, 1.1, 2.0), transparent: true, opacity: 0.8, side: THREE.DoubleSide }), 0, 2.4, 0, { cast: false, receive: false });
  add(door, new THREE.PlaneGeometry(2.0, 2.4), portal.material, 0, 1.2, 0, { cast: false, receive: false });
  door.userData.noHide = true;
  const ds = sign(world, 2.8, -12.4, 0.25, ['# card-tables', '→ through the door']);
  ds.position.y = ROOF + 0.15;
  anims.push((t) => { portal.material.opacity = 0.6 + Math.sin(t * 2.4) * 0.2; });

  // the debate stage in the middle with two podiums
  const stage = add(world, new THREE.CylinderGeometry(3.2, 3.4, 0.35, 40), mat(0xb7a6d9), 0, 0.175, 3);
  colliders.push({ type: 'cyl', x: 0, z: 3, r: 3.3, top: 0.35, bottom: 0 });
  const podiums = [];
  for (const s of [-1, 1]) {
    const p = add(world, rbox(0.9, 1.1, 0.6, 0.1), mat(s < 0 ? 0x2d5e4a : 0x8a3a3a), s * 1.9, 0.9, 3);
    p.rotation.y = s * Math.PI / 2;
    colliders.push({ type: 'box', x0: s * 1.9 - 0.45, x1: s * 1.9 + 0.45, z0: 2.55, z1: 3.45, top: 1.45, bottom: 0, noStep: true });
    const speaker = avatar(world, s < 0 ? 0x7fc9a0 : 0xf2a07a, 'angry');
    speaker.position.set(s * 2.6, 0.35, 3);
    speaker.rotation.y = -s * Math.PI / 2;
    podiums.push(speaker);
  }
  const ps = sign(world, 0, 6.6, Math.PI, ['# politics', 'everyone talks at once']);
  ps.position.y = 0.35;

  // flags of the revolution and string lights around the square
  const flagMat = new THREE.MeshStandardMaterial({ map: flagTex(), side: THREE.DoubleSide, roughness: 0.8 });
  const flags = [];
  const poles = [[-9, -6], [9, -6], [-10.2, 3.5], [10.2, 3.5], [-6, 9.5], [6, 9.5]];
  for (const [x, z] of poles) {
    add(world, new THREE.CylinderGeometry(0.06, 0.08, 4.4, 8), mat(0xdddde6, { metalness: 0.5, roughness: 0.35 }), x, 2.2, z);
    colliders.push({ type: 'cyl', x, z, r: 0.12, top: 4.4, bottom: 0, noStep: true, noGrab: true });
    const geo = new THREE.PlaneGeometry(1.5, 1.0, 12, 6);
    geo.translate(0.75, 0, 0);
    const f = add(world, geo, flagMat, x + 0.06, 3.85, z, { receive: false });
    f.rotation.y = Math.atan2(-x, -z) + Math.PI / 2;
    flags.push({ f, base: geo.attributes.position.array.slice(), ph: x + z });
  }
  anims.push((t) => {
    for (const { f, base, ph } of flags) {
      const p = f.geometry.attributes.position.array;
      for (let i = 0; i < p.length; i += 3) {
        const x = base[i];
        p[i + 2] = Math.sin(x * 3.2 - t * 4 + ph) * 0.12 * x;
        p[i + 1] = base[i + 1] + Math.sin(x * 2 - t * 3 + ph) * 0.03 * x;
      }
      f.geometry.attributes.position.needsUpdate = true;
      f.geometry.computeVertexNormals();
    }
  });
  const bulbGeo = new THREE.SphereGeometry(0.09, 10, 8);
  const bulbs = new THREE.InstancedMesh(bulbGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.7, 1.1) }), 200);
  let bi = 0;
  const o = new THREE.Object3D();
  for (let k = 0; k < poles.length; k++) {
    const [x0, z0] = poles[k], [x1, z1] = poles[(k + 1) % poles.length];
    if (Math.hypot(x1 - x0, z1 - z0) > 16) continue;
    for (let i = 1; i < 16 && bi < 200; i++) {
      const u = i / 16;
      o.position.set(x0 + (x1 - x0) * u, 4.2 - Math.sin(u * Math.PI) * 0.9, z0 + (z1 - z0) * u);
      o.updateMatrix(); bulbs.setMatrixAt(bi++, o.matrix);
      bulbs.setColorAt(bi - 1, new THREE.Color().setHSL((i * 0.13) % 1, 0.6, 0.75).multiplyScalar(1.8));
    }
  }
  bulbs.count = bi;
  bulbs.userData.noHide = true;
  world.add(bulbs);

  // the crowd: wandering avatars (positions come from the shared clock, so both phones see the same crowd)
  const crowdCols = [0x9fd3f5, 0xf5b8d0, 0xb8e0a8, 0xffd59a, 0xc9b8f5, 0xa8e6dc, 0xf7c6a3, 0xd0d0e8, 0xffb3a8, 0xb3c7ff];
  const crowd = crowdCols.map((c, i) => {
    const g = avatar(world, c, MOODS[i % MOODS.length]);
    const r0 = 5.2 + (i % 4) * 1.3, sp = (i % 2 ? 1 : -1) * (0.09 + (i % 3) * 0.03), a0 = i * 0.63;
    // they're solid: you bump into them (the collider follows them every frame)
    const col = { type: 'cyl', x: 0, z: 0, r: 0.42, top: 1.75, bottom: 0, noGrab: true, noStep: true, noCam: true };
    colliders.push(col);
    return { g, r0, sp, a0, ph: i * 1.7, col };
  });
  const crowdPos = (c, sNow, out) => {
    const s = sNow / 1000;
    let a = c.a0 + s * c.sp, r = c.r0 + Math.sin(s * 0.3 + c.ph) * 0.8;
    // keep the stage building's front clear
    let x = Math.sin(a) * r, z = Math.cos(a) * r;
    if (z < -6.5 && Math.abs(x) < 7.5) z = -6.5;
    return out.set(x, 0, z);
  };

  // channel signs
  sign(world, 0, 10.2, Math.PI + 0.2, ['# politics', 'be nice 🙂']);

  // ---------- Sun's island: #general ----------
  islandMeshes(world, SUN_X, 0, ISL_R, 0, 6, 0x8fd16e, 0xe0a67c, 0x8f6c9c);
  colliders.push({ type: 'cyl', x: SUN_X, z: 0, r: ISL_R - 0.05, top: 0, bottom: -1.2, safe: true });
  const sw0 = SUN_X + 4.4, sw1 = SUN_X + 6.4;  // the wall
  add(world, rbox(sw1 - sw0, SUN_WALL, 9.2, 0.15), mat(0xe9dcc6), (sw0 + sw1) / 2, SUN_WALL / 2, 0);
  add(world, rbox(sw1 - sw0 + 0.1, 0.18, 9.3, 0.06), mat(0x6fb85f), (sw0 + sw1) / 2, SUN_WALL, 0);
  colliders.push({ type: 'box', x0: sw0, x1: sw1, z0: -4.6, z1: 4.6, top: SUN_WALL + 0.09, bottom: 0, safe: true });
  // the walkway to the square
  add(world, rbox(-10.5 - sw1, 0.4, 3, 0.1), mat(0xd8cfe6), (sw1 + -10.5) / 2, SUN_WALL - 0.2, 0);
  colliders.push({ type: 'box', x0: sw1, x1: -10.5, z0: -1.5, z1: 1.5, top: SUN_WALL, bottom: SUN_WALL - 0.4, safe: true });
  sign(world, SUN_X - 1.2, 2.4, -Math.PI / 2 + 0.35, ['# general', 'welcome, new member!']);
  // posters on the #general wall (facing the island, -x)
  poster(world, sw0 - 0.02, 3.4, -2.4, -Math.PI / 2, 2.2, 1.4, posterText('#2d5e4a', '#f4efe6', ['# general', 'say hi 👋'], 70));
  poster(world, sw0 - 0.02, 2.6, 2.3, -Math.PI / 2, 1.8, 1.8, posterText('#f4efe6', '#c4452d', ['📣', 'speak up!'], 80));
  sign(world, SUN_X + 2.6, -2.2, -Math.PI / 2 - 0.25, ['📣 Tap Shout:', 'words become platforms!']);
  // a pillar with a star: shout a bubble next to it
  add(world, new THREE.CylinderGeometry(0.9, 1.0, 5.8, 20), mat(0xc9b8e8), SUN_X, 2.9, -4.2);
  colliders.push({ type: 'cyl', x: SUN_X, z: -4.2, r: 0.95, top: 5.8, bottom: 0 });
  stars.push(makeStar(world, 'c1-sun', SUN_X, 6.8, -4.2, 0));
  tree(world, SUN_X - 3.2, 0, -3.4, 0.8, 0);
  colliders.push({ type: 'cyl', x: SUN_X - 3.2, z: -3.4, r: 0.25, top: 3, bottom: 0, noStep: true });

  // ---------- Moon's island: #gaming ----------
  islandMeshes(world, MOON_X, 0, ISL_R, 0, 6, 0xa6d98a, 0xd9a8a0, 0x7c6aa8);
  colliders.push({ type: 'cyl', x: MOON_X, z: 0, r: ISL_R - 0.05, top: 0, bottom: -1.2, safe: true });
  const mw1 = MOON_X - 4.4, mw0 = MOON_X - 6.4;
  add(world, rbox(mw1 - mw0, MOON_WALL, 9.2, 0.15), mat(0xe2d6f0), (mw0 + mw1) / 2, MOON_WALL / 2, 0);
  add(world, rbox(mw1 - mw0 + 0.1, 0.18, 9.3, 0.06), mat(0xb79be0), (mw0 + mw1) / 2, MOON_WALL, 0);
  colliders.push({ type: 'box', x0: mw0, x1: mw1, z0: -4.6, z1: 4.6, top: MOON_WALL + 0.09, bottom: 0, safe: true });
  add(world, rbox(mw0 - 10.5, 0.4, 3, 0.1), mat(0xd8cfe6), (mw0 + 10.5) / 2, MOON_WALL - 0.2, 0);
  colliders.push({ type: 'box', x0: 10.5, x1: mw0, z0: -1.5, z1: 1.5, top: MOON_WALL, bottom: MOON_WALL - 0.4, safe: true });
  sign(world, MOON_X + 1.2, -2.4, Math.PI / 2 + 0.35, ['# gaming', 'gg, welcome!']);
  poster(world, mw1 + 0.02, 3.9, 0, Math.PI / 2, 2.2, 1.4, posterText('#3b2a63', '#e9dcff', ['# gaming', 'tonight: Trex 🃏'], 70));
  poster(world, mw1 + 0.02, 2.3, -3.6, Math.PI / 2, 1.4, 1.4, posterText('#e9dcff', '#3b2a63', ['🎮', 'GG'], 80));
  sign(world, MOON_X - 2.4, 2.6, Math.PI / 2 - 0.3, ['📌 Tap Pin to stop', "someone's bubble. Climb!"]);
  // two gamers by the wall, chatting: their bubbles float up the wall
  const gamers = [];
  for (const z of [-2, 2]) {
    const a = avatar(world, z < 0 ? 0xc9b8f5 : 0x9fd3f5, 'happy');
    a.position.set(mw1 + 1.6, 0, z);
    a.rotation.y = -Math.PI / 2;
    gamers.push(a);
    colliders.push({ type: 'cyl', x: mw1 + 1.6, z, r: 0.42, top: 1.75, bottom: 0, noGrab: true, noStep: true, noCam: true });
  }
  // a tall pillar with a star, and a pinned bubble at its foot: pop it to fly
  add(world, new THREE.CylinderGeometry(0.9, 1.0, 7.6, 20), mat(0xc9b8e8), MOON_X + 0.5, 3.8, 4.4);
  colliders.push({ type: 'cyl', x: MOON_X + 0.5, z: 4.4, r: 0.95, top: 7.6, bottom: 0 });
  stars.push(makeStar(world, 'c1-moon', MOON_X + 0.5, 8.6, 4.4, 1));
  sign(world, MOON_X + 2.8, 2.2, Math.PI / 2 + 0.6, ['On a pinned bubble?', 'Tap Pop to fly up!']);
  if (nature.has('Bush_Common_Flowers')) for (const [x, z] of [[MOON_X + 3.5, -3.8], [MOON_X - 1, -4.6]]) nature.place(world, 'Bush_Common_Flowers', x, 0, z, { s: 0.7, rotY: x });

  // the debate star, high above the stage: pin the speakers' bubbles to get there
  stars.push(makeStar(world, 'c1-debate', 0, 7.2, 3, 2));

  // greenery
  meadow(world, [
    { x: SUN_X, z: 0, r: ISL_R, flowers: 60 }, { x: MOON_X, z: 0, r: ISL_R, flowers: 60, tint: 0x9ad877 },
  ], [[sw0 - 0.5, 0, 1.2], [SUN_X, -4.2, 1.2], [mw1 + 0.5, 0, 1.2], [MOON_X + 0.5, 4.4, 1.2], [SUN_X - 3.2, -3.4, 1], [mw1 + 1.6, -2, 0.8], [mw1 + 1.6, 2, 0.8]], { tuftColor: 0x86cc66 });
  const clear = (x0, x1) => [[x0, x1, -4.8, 4.8]];
  decorate(world, [{ x: SUN_X, z: 0, r: ISL_R, n: 0.8 }], [...clear(sw0 - 0.6, sw1), [SUN_X, -4.2, 1.3], [SUN_X - 3.2, -3.4, 1.3], [SUN_X - 1.2, 2.4, 0.8], [SUN_X + 2.6, -2.2, 0.8], [SUN_X - 3.5, 0, 1.2]], { seed: 11, mushrooms: false });
  decorate(world, [{ x: MOON_X, z: 0, r: ISL_R, n: 0.8 }], [...clear(mw0, mw1 + 2.6), [MOON_X + 0.5, 4.4, 2.4], [MOON_X + 1.2, -2.4, 0.8], [MOON_X + 2.8, 2.2, 0.8], [MOON_X + 3.5, 0, 1.2], [MOON_X + 3.5, -3.8, 1.2], [MOON_X - 1, -4.6, 1.2]], { seed: 12, mushrooms: false });
  for (const [x, z, w] of [[-20, 14, 5], [22, -13, 4], [-6, -24, 6], [8, 22, 5]]) cloud(world, x, -2.5, z, w, w * 0.8, x + z);

  // ---------- the bubbles ----------
  const bub = createBubbles(world, colliders);
  // crowd / speaker / gamer chatter: [x, z, y0, rise speed, period ms, offset ms, source]
  const emitters = [
    { at: () => gamers[0].position, y0: 1.3, speed: 0.9, period: 3000, off: 0, maxY: 4.6 },
    { at: () => gamers[1].position, y0: 1.3, speed: 0.9, period: 3000, off: 1500, maxY: 4.6 },
    { at: () => podiums[0].position, y0: 2.2, speed: 1.15, period: 2600, off: 300, dx: 0.9, maxY: 9.5 },
    { at: () => podiums[1].position, y0: 2.2, speed: 1.15, period: 2600, off: 1600, dx: -0.9, maxY: 9.5 },
    ...crowd.filter((_, i) => i % 3 === 0).map((c, i) => ({ crowd: c, y0: 1.9, speed: 0.9, period: 4200, off: 700 * i, maxY: 4.4 })),
  ];
  // gamers' bubbles float up beside the wall
  emitters[0].dx = -1.15; emitters[1].dx = -1.15;
  const _e = new THREE.Vector3();
  function runEmitters(sNow, firstTime) {
    emitters.forEach((e, ei) => {
      const n = Math.floor((sNow - e.off) / e.period);
      for (let k = firstTime ? n - 2 : n; k <= n; k++) {
        const born = e.off + k * e.period, id = `n${ei}_${k}`;
        if (bub.get(id)) continue;
        if (e.crowd) crowdPos(e.crowd, born, _e); else _e.copy(e.at());
        const x = _e.x + (e.dx || 0), z = _e.z, y0 = e.y0 + (e.crowd ? 0 : _e.y), sp = e.speed;
        if ((sNow - born) / 1000 > bub.LIFE * 1.6) continue;
        // someone pinned this speaker's last bubble right above: they wait for a reply instead of talking over it
        if (bub.slots.some((q) => q.active && q.pinned && Math.hypot(q.pos.x - x, q.pos.z - z) < 1.6 && q.pos.y > y0 - 1 && q.pos.y < y0 + 3)) continue;
        bub.spawn({ id, kind: 'npc', born, maxY: e.maxY, p: new THREE.Vector3(x, y0, z), path: (now, out) => out.set(x, y0 + Math.max(0, now - born) / 1000 * sp, z) });
      }
    });
  }
  // Moon's always-there pinned bubble at the foot of the star pillar (comes back a few seconds after a pop)
  const FIXED = { id: 'mpop', p: [MOON_X - 1.3, 1.2, 4.4] };
  let fixedBackAt = 0;

  // ---------- abilities (shared by all of Chapter 1) ----------
  let firstEmit = true;
  const ab = bubbleAbilities(bub, {
    update(sNow) {
      runEmitters(sNow, firstEmit);
      firstEmit = false;
      if (!bub.get(FIXED.id) && sNow > fixedBackAt) bub.pin(FIXED.id, FIXED.p, sNow, 'npc', true);
    },
    onPop(id, sNow) { if (id === FIXED.id) fixedBackAt = sNow + 3000; },
  });
  const abilities = ab.abilities;

  // ---------- story ----------
  let metShown = false, entered = { sun: false, moon: false }, doneT = -1, hintAt = 0;
  const inSquare = (p) => p && p.y < 3 && Math.hypot(p.x, p.z) < SQ_R;
  const onRoof = (p) => p && p.y > ROOF - 0.4 && Math.abs(p.x) < 3 && p.z < -12 && p.z > -16.5;

  return {
    id: 'ch1-square',
    title: 'Chapter 1 · Syria Unfiltered — The Town Square',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(SUN_X - 3.5, 0, 0), moon: new THREE.Vector3(MOON_X + 3.5, 0, 0) },
    camYaw: { sun: -Math.PI / 2, moon: Math.PI / 2 },
    lobbyCam: { cx: 0, cz: -2, r: 40, h: 15 },
    killY: -14,
    portal: new THREE.Vector3(0, ROOF + 0.15, -14.4),   // where the end-of-part portal opens
    intro: { all: ['Chapter 1 · Syria Unfiltered', 'October 2025. A Syrian server: politics, games… and a lot of shouting.'], sun: 'Sun joined #general', moon: 'Moon joined #gaming' },
    abilities,
    bubbles: bub,   // for tests
    attach(a) { ab.attach(a); },
    story(ctx, t) {
      const st = ctx.save.ch1 || {};
      for (const r of ctx.roles) {
        if (!entered[r] && inSquare(ctx.pos[r])) {
          entered[r] = true;
          ctx.caption('#politics: everyone shouting at once. Somewhere in this crowd…', 4200);
        }
      }
      const a = ctx.pos.sun, b = ctx.pos.moon;
      if (a && b && !st.met && inSquare(a) && inSquare(b) && a.distanceTo(b) < 4) ctx.setSave('ch1/met', true);
      if (st.met && !metShown) {
        metShown = true;
        ctx.caption('…two people noticed each other. 👋', 3400);
        setTimeout(() => ctx.caption('The door to #card-tables is up on the stage roof. You will need each other.', 5200), 3600);
      }
      if (st.met && !onRoof(a) && !onRoof(b) && t > hintAt && (inSquare(a) || inSquare(b))) {
        hintAt = t + 45;
        if (st.hinted) ctx.caption('Tip: Sun shouts a bubble by the wall, Moon pins it… and pops it with someone on top!', 5200);
        else ctx.setSave('ch1/hinted', true);
      }
      if (onRoof(a) && onRoof(b) && !st.square) ctx.setSave('ch1/square', true);
      if (st.square && doneT < 0) {
        doneT = t;
        ctx.caption('Up and through, together.', 2800);
        setTimeout(() => ctx.finish(), 3000);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      // crowd walks and bobs
      for (const c of crowd) {
        const prev = c.g.position.clone();
        crowdPos(c, serverMs, c.g.position);
        c.col.x = c.g.position.x; c.col.z = c.g.position.z;
        const d = c.g.position.clone().sub(prev);
        if (d.lengthSq() > 1e-6) c.g.rotation.y = Math.atan2(d.x, d.z);
        c.g.userData.parts.body.position.y = 0.6 + Math.abs(Math.sin(t * 6 + c.ph)) * 0.06;
      }
      for (const [i, s] of podiums.entries()) s.userData.parts.head.rotation.z = Math.sin(t * 5 + i * 2) * 0.15;
    },
  };
}
