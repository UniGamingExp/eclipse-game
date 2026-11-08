// Chapter 2 · 12 October · Part 2 "The Four-Hour Call".
// 7:13 PM → 11:10 PM along a giant curly phone cord through the night. A clock in the sky moves on at each
// checkpoint (shared progress save.ch2.call 0–4):
//   8:00  "Bad connection": cord pieces that cut out on a timer (shared clock), with static before they go
//   9:00  day and night platforms mixed on one path: stay close to light each other's way (hold hands!)
//   10:00 voice-wave bars bobbing up and down: ride them up to the next island
//   11:10 twilight platforms that need BOTH glows: cross together, then the call ends after 3:57
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, cloud, sky, makeStar, spinStars, lights, meadow, decorate } from './common.js';
import { createLights } from './light.js';

// checkpoint islands [x, z, r, top]
const CP = [[0, 0, 5, 0], [0, -32, 4.2, 0], [0, -59, 4.2, 0], [0, -84, 4.5, 6], [0, -110, 6, 6]];
const TIMES = [13, 60, 120, 180, 250];   // minutes after 7:00 PM shown on the clock at each checkpoint
const CAPS = [
  null,
  '8:00 PM · Still talking. Neither of you hung up.',
  '9:00 PM · "Okay, one last thing…" (it wasn\'t)',
  '10:00 PM · Battery at 12%. Who cares.',
  '11:10 PM · Almost four hours.',
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
const faceTex = () => canvasTex(512, 512, (g) => {
  g.fillStyle = '#fff6ec'; g.beginPath(); g.arc(256, 256, 250, 0, Math.PI * 2); g.fill();
  g.lineWidth = 18; g.strokeStyle = '#b06bff'; g.stroke();
  g.fillStyle = '#4a3070'; g.font = '900 54px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  for (let i = 1; i <= 12; i++) { const a = (i / 12) * Math.PI * 2; g.fillText(String(i), 256 + Math.sin(a) * 190, 256 - Math.cos(a) * 190); }
  g.font = '800 30px ui-rounded, system-ui, sans-serif'; g.fillStyle = '#b06bff'; g.fillText('12 October', 256, 340);
});
const screenTex = () => canvasTex(512, 320, (g, w, h) => {
  const gr = g.createLinearGradient(0, 0, 0, h); gr.addColorStop(0, '#3b2a73'); gr.addColorStop(1, '#7a4dc4');
  g.fillStyle = gr; g.fillRect(0, 0, w, h);
  g.fillStyle = '#fff'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = '800 40px ui-rounded, system-ui, sans-serif'; g.fillText('📞 Audio call', w / 2, 80);
  g.font = '900 96px ui-rounded, system-ui, sans-serif'; g.fillText('3:57:00', w / 2, 175);
  g.font = '700 34px ui-rounded, system-ui, sans-serif'; g.globalAlpha = 0.85; g.fillText('7:13 PM → 11:10 PM', w / 2, 260);
});
const staticTex = () => {
  const t = canvasTex(128, 128, (g) => { for (let i = 0; i < 2000; i++) { const v = Math.random() * 255 | 0; g.fillStyle = `rgb(${v},${v},${v})`; g.fillRect(Math.random() * 128, Math.random() * 128, 3, 3); } });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  return t;
};

export function buildCh2Call(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#4f4590'), 55, 230);
  sky(root, {
    top: '#0d1238', mid: '#3d3480', low: '#c98fc4', neb1: '#8a7bff', neb2: '#ff8fc0', stars: 1, nebula: 1, cloud: 0xa99ad8, far: false, cx: 0, cz: -55,
    lightDir: [0.3, 0.5, 1],
    planets: [['lilac', 0.15, 0.2, 240, 0.2, 1.6], ['ember', -0.6, 0.14, 230, 0.1, 1.5], ['giant', 1.0, 0.24, 300, 0.42], ['rose', -2.6, 0.22, 250, -0.5], ['ocean', 2.6, 0.14, 270, 0.3]],
  });
  lights(root, { sunColor: 0xd0c8ff, sunI: 1.9, hemiSky: 0xa49cff, hemiGround: 0xe0a8d0, hemiI: 1.55, pos: [12, 34, -40], target: [0, 0, -55], extent: 70 });

  // ---------- checkpoint islands with signal bars ----------
  const barMat = mat(0x9bf0c0, { emissive: 0x3fd08a, emissiveIntensity: 0.5 });
  CP.forEach(([x, z, r, top], i) => {
    islandMeshes(world, x, z, r, top, 5, i === 4 ? 0xa6d98a : 0x9ad8a8, 0xd9a8a0, 0x7c6aa8);
    colliders.push({ type: 'cyl', x, z, r: r - 0.05, top, bottom: top - (top > 0 ? 5 : 1.2), safe: true });
    if (i > 0 && i < 4) {
      for (let k = 0; k < 4; k++) add(world, rbox(0.32, 0.4 + k * 0.35, 0.32, 0.06), barMat, x + 2.2 + k * 0.42, top + (0.4 + k * 0.35) / 2, z + 1.6);
      colliders.push({ type: 'box', x0: x + 2, x1: x + 3.8, z0: z + 1.4, z1: z + 1.8, top: top + 1.5, bottom: top, noGrab: true });
    }
  });
  meadow(world, [{ x: 0, z: 0, r: 5, flowers: 30 }, { x: 0, z: -110, r: 6, y: 6, flowers: 50 }], [[0, -112, 2.2]], { flowerCols: [0xffffff, 0xc6b3ff, 0xff8fbf] });
  sign(world, -2.6, 1.4, 0.4, ['The Four-Hour Call', '7:13 PM…']);

  // ---------- the cord: decorative curly tube along the whole way ----------
  const cordPts = [];
  for (let i = 0; i <= 900; i++) {
    const u = i / 900, z = 4 - u * 116;
    const y = z > -84 ? -1.0 : 4.6;
    cordPts.push(new THREE.Vector3(Math.cos(u * 170) * 0.5 - 1.8, y + Math.sin(u * 170) * 0.5 + Math.sin(u * 9) * 0.4, z));
  }
  add(world, new THREE.TubeGeometry(new THREE.CatmullRomCurve3(cordPts), 1800, 0.09, 6), mat(0xb06bff, { roughness: 0.4 }), 0, 0, 0, { cast: false });

  // ---------- 8:00: bad connection ----------
  const cordMat = mat(0xd9b8ff, { roughness: 0.4 }), stTex = staticTex();
  const cables = [];
  const cableSeg = (z0, z1, flick) => {
    const len = z0 - z1, cz = (z0 + z1) / 2;
    const m = add(world, new THREE.CylinderGeometry(0.85, 0.85, len, 24).rotateX(Math.PI / 2), flick ? cordMat.clone() : cordMat, 0, -0.85, cz);
    const col = { type: 'box', x0: -0.95, x1: 0.95, z0: z1, z1: z0, top: 0, bottom: -1.7, safe: !flick, surface: 'carpet' };
    colliders.push(col);
    let noise = null;
    if (flick) {
      noise = add(world, new THREE.CylinderGeometry(0.9, 0.9, len, 24, 1, true).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ map: stTex, transparent: true, opacity: 0, depthWrite: false }), 0, -0.85, cz, { cast: false, receive: false });
      m.material.transparent = true;
    }
    cables.push({ m, col, flick, noise });
  };
  cableSeg(-4.7, -9.2, null);
  cableSeg(-9.8, -14.2, { on: 2600, off: 1300, off0: 0 });
  cableSeg(-14.8, -19.2, { on: 2600, off: 1300, off0: 1300 });
  cableSeg(-19.8, -23.2, null);
  cableSeg(-23.8, -28.0, { on: 2200, off: 1300, off0: 650 });
  sign(world, 2.0, -3.8, -0.3, ['Bad connection!', 'Cross while the cord is there']);
  stars.push(makeStar(world, 'c2-static', 0, 2.4, -17, 0));

  // ---------- 9:00 and 11:10: light platforms ----------
  const specs = [];
  const h2 = ['day', 'night', 'day', 'night', 'twilight', 'night', 'day'];
  h2.forEach((kind, i) => specs.push({ kind, x: 0, y: 0, z: -37 - i * 3.1, w: 2.6, d: 2.0 }));
  sign(world, 2.4, -34.4, -0.3, ['Stay close!', 'Pink needs you both ♥']);
  // 11:10: twilight steps from the 10:00 island down to the last island
  for (let i = 0; i < 5; i++) specs.push({ kind: 'twilight', x: Math.sin(i * 1.2) * 1.4, y: 6, z: -90.5 - i * 3.1, w: 2.4, d: 2.0 });
  const lit = createLights(world, colliders, specs);
  const sg = sign(world, -2.6, -87.4, 0.3, ['Twilight: only when', "you're both close. Hold hands ♥"]);
  sg.position.y = 6;
  stars.push(makeStar(world, 'c2-twilight', 3.2, 8.4, -96.7, 2));

  // ---------- 10:00: voice-wave bars ----------
  const waves = [];
  const waveMat = mat(0x9be8ff, { emissive: 0x3fb8ff, emissiveIntensity: 0.35, roughness: 0.4 });
  for (let i = 0; i < 6; i++) {
    const base = 0.4 + i * 1.1, z = -63.5 - i * 2.9;
    const m = add(world, rbox(2.2, 0.5, 2.2, 0.18), waveMat, 0, base, z);
    const col = { type: 'box', x0: -1.1, x1: 1.1, z0: z - 1.1, z1: z + 1.1, top: base, bottom: base - 0.5, dx: 0, dy: 0, dz: 0, surface: 'wood' };
    colliders.push(col);
    waves.push({ m, col, base, z, ph: i * 0.9, py: base });
  }
  sign(world, 2.4, -61.6, -0.3, ['Ride the voice waves', 'up to 10 PM']);
  stars.push(makeStar(world, 'c2-wave', -2.2, 9.0, -78.5, 1));

  // ---------- the clock in the sky ----------
  const clock = new THREE.Group();
  clock.position.set(13, 9, -50);
  clock.rotation.y = -Math.PI / 2 + 0.35;
  world.add(clock);
  add(clock, new THREE.CircleGeometry(4.2, 64), new THREE.MeshStandardMaterial({ map: faceTex(), roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.25 }), 0, 0, 0, { cast: false });
  add(clock, new THREE.TorusGeometry(4.25, 0.25, 12, 64), mat(0xb06bff), 0, 0, 0, { cast: false });
  const handMat = mat(0x3a2860);
  const hourH = new THREE.Group(), minH = new THREE.Group();
  clock.add(hourH, minH);
  add(hourH, rbox(0.36, 2.2, 0.12, 0.05), handMat, 0, 1.0, 0.1, { cast: false });
  add(minH, rbox(0.22, 3.4, 0.12, 0.05), handMat, 0, 1.6, 0.16, { cast: false });
  clock.userData.noHide = true;
  let shownMin = TIMES[0];

  // ---------- the end: call log screen ----------
  const scr = add(world, new THREE.PlaneGeometry(5.2, 3.25), new THREE.MeshStandardMaterial({ map: screenTex(), emissive: 0xffffff, emissiveIntensity: 0.35, roughness: 0.5 }), 0, 8.6, -114.5, { cast: false });
  scr.userData.noHide = true;
  add(world, rbox(5.6, 3.6, 0.3, 0.2), mat(0x2a2050), 0, 8.6, -114.7);

  for (const [x, z, w] of [[-14, -14, 5], [14, -36, 6], [-13, -60, 5], [14, -88, 4], [-12, -104, 6]]) cloud(world, x, -3, z, w, w * 0.8, x * z);

  // ---------- story ----------
  let api = null, lastK = -1, doneT = -1;
  const onIsland = (p, i) => p && Math.hypot(p.x - CP[i][0], p.z - CP[i][1]) < CP[i][2] && p.y > CP[i][3] - 1;

  return {
    id: 'ch2-call',
    title: 'Chapter 2 · 12 October — The Four-Hour Call',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1.2, 0, 2.5), moon: new THREE.Vector3(1.2, 0, 2.5) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: -55, r: 60, h: 24 },
    killY: -14,
    portal: new THREE.Vector3(0, 6, -111.5),   // where the end-of-part portal opens
    respawnNearPartner: true,
    intro: { all: ['Part 2 · The Four-Hour Call', '7:13 PM. "Call you here or on Discord?" "Doesn\'t matter."'] },
    abilities: lit.abilities,
    lights: lit,
    attach(a) { api = a; lit.attach(a); },
    story(ctx, t) {
      const st = ctx.save.ch2 || {};
      const k = st.call || 0;
      if (k !== lastK) { if (lastK >= 0 && CAPS[k]) ctx.caption(CAPS[k], 4200); lastK = k; }
      const a = ctx.pos.sun, b = ctx.pos.moon;
      if (k < 4 && [a, b].some((p) => onIsland(p, k + 1))) ctx.setSave('ch2/call', k + 1);
      if (k === 4 && !st.callDone && onIsland(a, 4) && onIsland(b, 4)) ctx.setSave('ch2/callDone', true);
      if (st.callDone && doneT < 0) {
        doneT = t;
        setTimeout(() => ctx.caption('Somewhere in those four hours, something changed…', 3800), 600);
        setTimeout(() => ctx.finish(), 4800);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      // flickering cord pieces
      for (const c of cables) {
        if (!c.flick) continue;
        const P = c.flick.on + c.flick.off, u = (((serverMs - c.flick.off0) % P) + P) % P;
        const on = u < c.flick.on, warn = on && u > c.flick.on - 600;
        c.col.disabled = !on;
        c.m.material.opacity = on ? (warn ? 0.55 + Math.sin(t * 40) * 0.3 : 1) : 0.08;
        c.noise.material.opacity = warn ? 0.5 : on ? 0 : 0.18;
        c.noise.material.map.offset.set(Math.random(), Math.random());
      }
      // voice waves (shared clock → identical on both phones)
      for (const w of waves) {
        const y = w.base + Math.sin(serverMs / 1000 * 1.6 + w.ph) * 0.9;
        w.col.dy = y - w.py; w.py = y;
        w.col.top = y; w.col.bottom = y - 0.5;
        w.m.position.y = y - 0.25;
      }
      // the clock eases to the time of the current checkpoint
      const k = Math.min(4, api?.save?.ch2?.call || 0);
      shownMin += (TIMES[k] - shownMin) * Math.min(1, dt * 1.2);
      minH.rotation.z = -(shownMin / 60) * Math.PI * 2;
      hourH.rotation.z = -((7 + shownMin / 60) / 12) * Math.PI * 2;
    },
  };
}
