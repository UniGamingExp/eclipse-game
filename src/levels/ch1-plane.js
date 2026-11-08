// Chapter 1 · Syria Unfiltered · Part 3 "8 October".
// The first private message, a little paper plane, flies out of the server and the two chase it through
// the night: stepping-stone chat messages (some moving), a gap only a pinned bubble bridge can cross, the
// notification tower (Sun throws Moon up, then shouts himself up), and a glide down to the inbox.
// The plane waits at each checkpoint for one of them; progress is shared (save.ch1.plane), so it stays in sync.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { createBubbles, bubbleAbilities } from './bubbles.js';

const P1 = { x0: -3, x1: 3, z0: -29, z1: -25, top: 3.2 };      // before the bubble bridge
// after it: 9.8 m up, above anyone's reach from one bubble (4.45 + 5.2 with a ledge grab) but within reach
// from a second (5.7 + 5.2). Sun can only shout that second bubble from a PINNED first one.
const P2 = { x0: -3, x1: 3, z0: -41.5, z1: -37.5, top: 9.8 };
const TOWER = { x0: -2.2, x1: 2.2, z0: -47.5, z1: -41.5, top: 15.4 };
const INBOX = { x: 0, z: -62, r: 6.5 };
// where the plane waits (index = shared progress)
const WAY = [
  new THREE.Vector3(0, 2.4, -4.5),
  new THREE.Vector3(0, 5.6, -23.2),
  new THREE.Vector3(0, 12.2, -39.5),
  new THREE.Vector3(0, 17.4, -44.5),
  new THREE.Vector3(0, 1.4, -62.5),
];

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
/** a chat message card: avatar dot + a few lines of "text" */
const msgTex = (hue, seed) => canvasTex(256, 180, (g, w, h) => {
  g.fillStyle = '#fbf8ff'; g.fillRect(0, 0, w, h);
  g.fillStyle = `hsl(${hue},60%,70%)`; g.beginPath(); g.arc(34, 36, 20, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#4a3f66'; g.fillRect(64, 24, 70 + (seed % 3) * 20, 14);
  g.fillStyle = '#b9b0d0';
  for (let i = 0; i < 3; i++) g.fillRect(64, 56 + i * 30, 150 - ((seed + i) % 4) * 26, 12);
});

function paperPlane() {
  const g = new THREE.Group();
  const pos = new Float32Array([
    // left wing, right wing (folded slightly up), keel
    0, 0, 0.9, -0.62, 0.05, -0.55, 0, 0.02, -0.5,
    0, 0, 0.9, 0, 0.02, -0.5, 0.62, 0.05, -0.55,
    0, 0, 0.9, 0, 0.02, -0.5, 0, -0.18, -0.4,
  ]);
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.computeVertexNormals();
  const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: 0xffffff, side: THREE.DoubleSide, roughness: 0.6, emissive: 0xfff0f8, emissiveIntensity: 0.45 }));
  m.castShadow = true;
  g.add(m);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(0.9, 16, 10), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.2, 0.9, 1.4), transparent: true, opacity: 0.18, depthWrite: false }));
  g.add(halo);
  g.scale.setScalar(1.15);
  return g;
}

export function buildCh1Plane(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#5c4f8f'), 55, 220);
  sky(root, {
    top: '#0f1640', mid: '#4d3f86', low: '#d98fb0', neb1: '#8a7bff', neb2: '#ff8fc0', stars: 1, nebula: 1, cloud: 0xb8a6e0, far: false, cx: 0, cz: -32,
    lightDir: [0.2, 0.5, 1],
    planets: [['lilac', 0.1, 0.16, 240, 0.2, 1.6], ['giant', -0.9, 0.2, 300, 0.42], ['ember', 0.9, 0.12, 230, 0.1, 1.6], ['rose', 2.8, 0.24, 250, -0.5], ['mint', -2.4, 0.3, 220, 0.3]],
  });
  lights(root, { sunColor: 0xd9d0ff, sunI: 2.0, hemiSky: 0xa9a2ff, hemiGround: 0xf0b0c8, hemiI: 1.5, pos: [8, 30, -10], target: [0, 0, -32], extent: 48 });

  // ---------- start: a little island off #card-tables ----------
  islandMeshes(world, 0, 0, 6, 0, 5, 0x9ad877, 0xe0a67c, 0x8f6c9c);
  colliders.push({ type: 'cyl', x: 0, z: 0, r: 5.95, top: 0, bottom: -1.2, safe: true });
  sign(world, -2.8, 1.6, 0.4, ['8 October 2025', 'a private message…']);
  meadow(world, [{ x: 0, z: 0, r: 6, flowers: 40 }], [[0, 3, 1.4], [-2.8, 1.6, 0.7], [0, -4.5, 1.6]]);
  decorate(world, [{ x: 0, z: 0, r: 6, n: 0.6 }], [[0, 3, 1.6], [-2.8, 1.6, 0.9], [-1.5, -6, 1.5, 6], [-2, 2, -6, -2]], { seed: 21, mushrooms: false });

  // ---------- section A: chat messages as stepping stones ----------
  const cards = [
    { x: 0, y: 0.6, z: -9.6, hue: 30 },
    { x: 2.2, y: 1.3, z: -12.9, hue: 280 },
    { x: 0, y: 2.0, z: -16.2, hue: 150, slide: 2.4, period: 4200 },
    { x: -2.2, y: 2.6, z: -19.5, hue: 330, bob: 0.6, period: 3600 },
    { x: 0, y: P1.top, z: -22.6, hue: 210 },
  ];
  const cardGeo = rbox(2.8, 0.34, 2.0, 0.14);
  const msgs = cards.map((c, i) => {
    const g = new THREE.Group();
    world.add(g);
    add(g, cardGeo, mat(0xfbf8ff, { roughness: 0.5 }), 0, -0.17, 0);
    const face = add(g, new THREE.PlaneGeometry(2.6, 1.8).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: msgTex(c.hue, i), roughness: 0.6 }), 0, 0.005, 0, { cast: false });
    face.receiveShadow = true;
    const col = { type: 'box', x0: 0, x1: 0, z0: 0, z1: 0, top: 0, bottom: 0, dx: 0, dy: 0, dz: 0, safe: !c.slide && !c.bob, surface: 'carpet' };
    colliders.push(col);
    return { ...c, g, col, px: c.x, py: c.y };
  });
  stars.push(makeStar(world, 'c1-msg', 0, 3.3, -16.2, 0));
  // P1: a wide message, the last stone before the gap
  const pad = (P, hue, seed) => {
    const w = P.x1 - P.x0, d = P.z1 - P.z0;
    add(world, rbox(w, 0.5, d, 0.2), mat(0xfbf8ff, { roughness: 0.5 }), (P.x0 + P.x1) / 2, P.top - 0.25, (P.z0 + P.z1) / 2);
    const f = add(world, new THREE.PlaneGeometry(w - 0.3, d - 0.3).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: msgTex(hue, seed), roughness: 0.6 }), (P.x0 + P.x1) / 2, P.top + 0.005, (P.z0 + P.z1) / 2, { cast: false });
    f.receiveShadow = true;
    colliders.push({ type: 'box', x0: P.x0, x1: P.x1, z0: P.z0, z1: P.z1, top: P.top, bottom: P.top - 0.5, safe: true, surface: 'carpet' });
  };
  pad(P1, 40, 5);
  const s1 = sign(world, 2.2, -26, 0.25, ['Too far and too high!', 'Shout, pin, climb on,', 'shout again ↗']);
  s1.position.y = P1.top;

  // ---------- section B: the gap, and a star hanging in it ----------
  stars.push(makeStar(world, 'c1-bridge', 2.6, 7.6, -33.0, 1));
  pad(P2, 300, 7);

  // ---------- section C: the notification tower ----------
  const tw = TOWER.x1 - TOWER.x0, td = TOWER.z1 - TOWER.z0, th = TOWER.top - P2.top;
  add(world, rbox(tw, th, td, 0.2), mat(0xff8fa8, { roughness: 0.55 }), 0, P2.top + th / 2, (TOWER.z0 + TOWER.z1) / 2);
  colliders.push({ type: 'box', x0: TOWER.x0, x1: TOWER.x1, z0: TOWER.z0, z1: TOWER.z1, top: TOWER.top, bottom: P2.top - 0.5, safe: true });
  // a big red notification badge on its face
  const badge = add(world, new THREE.CircleGeometry(1.1, 32), new THREE.MeshStandardMaterial({
    map: canvasTex(256, 256, (g) => { g.fillStyle = '#ff3b4d'; g.beginPath(); g.arc(128, 128, 124, 0, Math.PI * 2); g.fill(); g.fillStyle = '#fff'; g.font = '900 150px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText('1', 128, 138); }),
    emissive: 0xff3b4d, emissiveIntensity: 0.3,
  }), 0, P2.top + th * 0.62, TOWER.z1 + 0.02, { cast: false });
  anims.push((t) => badge.scale.setScalar(1 + Math.max(0, Math.sin(t * 3)) * 0.08));
  const s2 = sign(world, -2.2, -38.6, -0.3, ['Sun: Lift Moon,', 'then Throw her up!', '(then shout yourself up)']);
  s2.position.y = P2.top;
  stars.push(makeStar(world, 'c1-tower', 1.6, TOWER.top + 0.9, -46.7, 2));

  // ---------- the inbox ----------
  islandMeshes(world, INBOX.x, INBOX.z, INBOX.r, 0, 5, 0xa6d98a, 0xd9a8a0, 0x7c6aa8);
  colliders.push({ type: 'cyl', x: INBOX.x, z: INBOX.z, r: INBOX.r - 0.05, top: 0, bottom: -1.2, safe: true });
  // a big envelope
  const env = new THREE.Group();
  env.position.set(INBOX.x + 2.6, 0, INBOX.z - 2.4);
  env.rotation.y = -0.5;
  world.add(env);
  add(env, rbox(2.6, 1.7, 0.3, 0.08), mat(0xfff5e8), 0, 0.85, 0);
  const flap = add(env, new THREE.ConeGeometry(1.25, 0.9, 4, 1).rotateY(Math.PI / 4).rotateX(Math.PI), mat(0xffe6cf), 0, 1.25, 0.17);
  flap.scale.set(1.04, 1, 0.08);
  add(env, new THREE.CylinderGeometry(0.22, 0.22, 0.06, 20).rotateX(Math.PI / 2), mat(0xd94b6a, { emissive: 0xd94b6a, emissiveIntensity: 0.3 }), 0, 1.0, 0.2);
  colliders.push({ type: 'cyl', x: env.position.x, z: env.position.z, r: 1.2, top: 1.7, bottom: 0, noStep: true });
  meadow(world, [{ x: INBOX.x, z: INBOX.z, r: INBOX.r, flowers: 60 }], [[env.position.x, env.position.z, 1.6], [INBOX.x, INBOX.z + 4, 1.2]], { flowerCols: [0xffffff, 0xc6b3ff, 0xff8fbf] });
  decorate(world, [{ x: INBOX.x, z: INBOX.z, r: INBOX.r, n: 0.7 }], [[env.position.x, env.position.z, 1.8], [INBOX.x, INBOX.z, 1.8]], { seed: 23, mushrooms: false });

  for (const [x, z, w] of [[-14, -10, 5], [13, -30, 6], [-12, -50, 5], [12, -70, 4], [-6, -36, 3]]) cloud(world, x, -3, z, w, w * 0.8, x * z);

  // ---------- the paper plane ----------
  const plane = paperPlane();
  plane.position.copy(WAY[0]);
  world.add(plane);
  plane.userData.noHide = true;
  let fromP = WAY[0].clone(), toIdx = 0, flyT = 1, sparkT = 0;

  // ---------- abilities ----------
  const bub = createBubbles(world, colliders);
  const ab = bubbleAbilities(bub);
  let api = null;

  // ---------- story ----------
  let introDone = false, doneT = -1, lastK = -1;
  const near = (p, w, r = 3.5) => p && Math.hypot(p.x - w.x, p.z - w.z) < r && p.y > w.y - 5.5;

  return {
    id: 'ch1-plane',
    title: 'Chapter 1 · Syria Unfiltered — 8 October',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1.2, 0, 3.2), moon: new THREE.Vector3(1.2, 0, 3.2) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: -32, r: 46, h: 18 },
    killY: -14,
    portal: new THREE.Vector3(-2.4, 0, -63.5),   // where the end-of-part portal opens
    intro: { all: ['Part 3 · 8 October', 'Out of all the noise… a paper plane. A private message. Catch it!'] },
    abilities: ab.abilities,
    bubbles: bub,
    attach(a) { api = a; ab.attach(a); },
    story(ctx, t) {
      const st = ctx.save.ch1 || {};
      const k = st.plane || 0;
      if (k !== lastK) { // the plane flies on to the next place
        if (lastK >= 0 || k > 0) { fromP = plane.position.clone(); flyT = 0; }
        else plane.position.copy(WAY[k]);
        toIdx = Math.min(k, WAY.length - 1);
        lastK = k;
        if (k === 2) ctx.caption('It keeps flying… Nearly there.', 3000);
        if (k === 4) ctx.caption('It landed by the inbox. Reach it together!', 3500);
      }
      const a = ctx.pos.sun, b = ctx.pos.moon;
      if (k < WAY.length - 1 && flyT >= 1 && [a, b].some((p) => near(p, WAY[k]))) ctx.setSave('ch1/plane', k + 1);
      if (k === WAY.length - 1 && !st.planeDone && near(a, WAY[k], 3.2) && near(b, WAY[k], 3.2)) ctx.setSave('ch1/planeDone', true);
      if (st.planeDone && doneT < 0) {
        doneT = t;
        ctx.caption('8 October 2025 · 💬 the first private message.', 3600);
        setTimeout(() => ctx.caption('…the first of thousands.', 3200), 3800);
        setTimeout(() => ctx.caption('Chapter 1 complete ✨', 2800), 7200);
        setTimeout(() => ctx.finish(), 9800);
      }
      if (!introDone) introDone = true;
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      // moving chat messages (from the shared clock, so they match on both phones)
      for (const m of msgs) {
        let x = m.x, y = m.y;
        if (m.slide) x = m.x + Math.sin((serverMs / m.period) * Math.PI * 2) * m.slide;
        if (m.bob) y = m.y + Math.sin((serverMs / m.period) * Math.PI * 2) * m.bob;
        m.g.position.set(x, y, m.z);
        const c = m.col;
        c.dx = x - m.px; c.dy = y - m.py; c.dz = 0;
        m.px = x; m.py = y;
        c.x0 = x - 1.4; c.x1 = x + 1.4; c.z0 = m.z - 1.0; c.z1 = m.z + 1.0; c.top = y; c.bottom = y - 0.34;
      }
      // the plane: fly along an arc to the next waypoint, then hover and wait
      const to = WAY[toIdx];
      if (flyT < 1) {
        flyT = Math.min(1, flyT + dt / 2.2);
        const k = flyT * flyT * (3 - 2 * flyT);
        const p = fromP.clone().lerp(to, k);
        p.y += Math.sin(k * Math.PI) * 3;
        const dir = p.clone().sub(plane.position);
        plane.position.copy(p);
        if (dir.lengthSq() > 1e-5) {
          plane.rotation.y = Math.atan2(dir.x, dir.z);
          plane.rotation.x = -Math.atan2(dir.y, Math.hypot(dir.x, dir.z)) * 0.8;
        }
        plane.rotation.z = Math.sin(k * Math.PI * 2) * 0.35;
        if ((sparkT -= dt) < 0 && api) { sparkT = 0.08; api.fx.sparks(plane.position.clone(), 0xffd6f0, 3, 0.6); }
      } else {
        plane.position.set(to.x + Math.sin(t * 1.3) * 0.3, to.y + Math.sin(t * 2.1) * 0.25, to.z);
        plane.rotation.z = Math.sin(t * 1.6) * 0.2;
        plane.rotation.x = 0;
        plane.rotation.y = Math.PI + Math.sin(t * 0.8) * 0.4;   // looks back at them, waiting
      }
    },
  };
}
