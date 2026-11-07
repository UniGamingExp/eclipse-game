// The two dolls: Sun (big, red hoodie, beard, glasses) and Moon (small, elegant, purple dress, lilac
// jacket, long wavy hair). Built from simple shapes, animated procedurally. Model faces +z; root = feet.
import * as THREE from 'three';
import { damp } from './util.js';

export const MODE = { normal: 0, hang: 1, wall: 2, carried: 3, carry: 4, glide: 5, climb: 6, dash: 7 };
export const SIZES = { sun: { r: 0.4, h: 1.45 }, moon: { r: 0.32, h: 1.2 } };
export const KID_SIZES = { sun: { r: 0.3, h: 1.05 }, moon: { r: 0.28, h: 0.95 } };
const KID_SCALE = { sun: 0.72, moon: 0.79 };

const sphere = new THREE.SphereGeometry(1, 28, 20);
const lowSphere = new THREE.SphereGeometry(1, 14, 10);
const capsule = (r, len) => new THREE.CapsuleGeometry(r, len, 6, 14);
const mat = (color, o = {}) => new THREE.MeshStandardMaterial({ color, roughness: 0.75, ...o });

function add(parent, geo, material, x = 0, y = 0, z = 0, sx = 1, sy = sx, sz = sx, cast = true) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.scale.set(sx, sy, sz);
  m.castShadow = cast;
  parent.add(m);
  return m;
}
function group(parent, x = 0, y = 0, z = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

/** A rounded-rectangle glasses frame (ring), as an extruded shape. */
function frameGeo(w, h, t, r) {
  const s = new THREE.Shape();
  const rr = (shape, W, H, R) => {
    shape.moveTo(-W / 2 + R, -H / 2);
    shape.lineTo(W / 2 - R, -H / 2); shape.quadraticCurveTo(W / 2, -H / 2, W / 2, -H / 2 + R);
    shape.lineTo(W / 2, H / 2 - R); shape.quadraticCurveTo(W / 2, H / 2, W / 2 - R, H / 2);
    shape.lineTo(-W / 2 + R, H / 2); shape.quadraticCurveTo(-W / 2, H / 2, -W / 2, H / 2 - R);
    shape.lineTo(-W / 2, -H / 2 + R); shape.quadraticCurveTo(-W / 2, -H / 2, -W / 2 + R, -H / 2);
  };
  rr(s, w, h, r);
  const hole = new THREE.Path();
  rr(hole, w - t * 2, h - t * 2, Math.max(0.002, r - t));
  s.holes.push(hole);
  return new THREE.ExtrudeGeometry(s, { depth: 0.012, bevelEnabled: false, curveSegments: 4 });
}

function sunEmblemTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const x = c.getContext('2d');
  x.translate(64, 64);
  x.fillStyle = '#ffd34d';
  for (let i = 0; i < 10; i++) {
    x.rotate(Math.PI / 5);
    x.beginPath(); x.moveTo(-9, -34); x.lineTo(0, -58); x.lineTo(9, -34); x.fill();
  }
  x.beginPath(); x.arc(0, 0, 30, 0, Math.PI * 2); x.fill();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

/** Builds limbs on a body. Returns { lArm, rArm, lLeg, rLeg, lHand, rHand }. */
function limbs(torso, hipsParent, o) {
  const out = {};
  for (const side of [-1, 1]) {
    // arm: pivot at the shoulder, hangs down -y
    const arm = group(torso, side * o.shoulderX, o.shoulderY, 0);
    add(arm, capsule(o.armR, o.armLen), o.sleeveMat, 0, -(o.armLen / 2 + o.armR * 0.6), 0);
    const hand = add(arm, lowSphere, o.skinMat, 0, -(o.armLen + o.armR * 1.6), 0.01, o.handR, o.handR * 1.05, o.handR);
    // leg: pivot at the hip
    const leg = group(hipsParent, side * o.hipX, o.hipY, 0);
    add(leg, capsule(o.legR, o.legLen), o.legMat, 0, -(o.legLen / 2 + o.legR), 0);
    add(leg, new THREE.BoxGeometry(o.shoe[0], o.shoe[1], o.shoe[2]), o.shoeMat, 0, -(o.hipY - o.shoe[1] / 2), o.shoe[2] * 0.22);
    out[side < 0 ? 'lArm' : 'rArm'] = arm;
    out[side < 0 ? 'lHand' : 'rHand'] = hand;
    out[side < 0 ? 'lLeg' : 'rLeg'] = leg;
  }
  return out;
}

function buildSun(pivot, kid = false) {
  const skin = mat(0xf7dccb, { roughness: 0.6 });
  // grown-up: red hoodie; as a kid: the yellow sleeveless top and denim shorts from his photo
  const hoodie = kid ? mat(0xf4d23c, { roughness: 0.85 }) : mat(0xd8433d, { roughness: 0.9, emissive: 0x7a1408, emissiveIntensity: 0.12 });
  const hoodieDark = kid ? mat(0xe2bd28, { roughness: 0.85 }) : mat(0xb5332f, { roughness: 0.9 });
  const pants = kid ? mat(0x6f8fc4, { roughness: 0.9 }) : mat(0x34405e, { roughness: 0.9 });
  const shoes = mat(0x2a2a33, { roughness: 0.6 });
  const beard = mat(0x2a1d16, { roughness: 1 });
  const hair = mat(0x4b3a2e, { roughness: 1 });
  const tort = mat(0x7b4a25, { roughness: 0.35, metalness: 0.1 });

  const hips = group(pivot, 0, 0, 0);
  const torso = group(pivot, 0, 0.42, 0);
  // hoodie body
  add(torso, capsule(0.32, 0.12), hoodie, 0, 0.27, 0, 1.0, 0.76, 0.82);
  if (!kid) {
    add(torso, capsule(0.15, 0.2), hoodieDark, 0, 0.13, 0.2, 1, 0.5, 0.35); // front pocket
    const hood = add(torso, new THREE.TorusGeometry(0.19, 0.075, 10, 24), hoodieDark, 0, 0.53, -0.06);
    hood.rotation.x = Math.PI / 2 - 0.25;
    for (const s of [-1, 1]) add(torso, new THREE.CylinderGeometry(0.012, 0.012, 0.16, 6), mat(0xffffff), s * 0.06, 0.4, 0.25);
  } else {
    add(torso, capsule(0.16, 0.06), pants, 0, 0.0, 0, 1.75, 0.55, 1.35); // shorts
  }
  const emblem = add(torso, new THREE.PlaneGeometry(0.2, 0.2), new THREE.MeshStandardMaterial({ map: sunEmblemTexture(), transparent: true, emissive: 0xffb300, emissiveMap: null, emissiveIntensity: 0.9, roughness: 0.6 }), 0.1, 0.33, 0.265, 1, 1, 1, false);
  emblem.material.emissiveMap = emblem.material.map;

  const L = limbs(torso, hips, {
    shoulderX: 0.37, shoulderY: 0.46, armR: 0.095, armLen: 0.22, handR: 0.088,
    hipX: 0.14, hipY: 0.42, legR: 0.115, legLen: 0.2, shoe: [0.21, 0.1, 0.32],
    skinMat: skin, sleeveMat: kid ? skin : hoodie, legMat: kid ? skin : pants, shoeMat: kid ? mat(0x8a6a52) : shoes,
  });

  // head
  const neck = group(torso, 0, 0.55, 0);
  const head = group(neck, 0, 0.25, 0);
  if (kid) head.scale.setScalar(1.18);
  add(head, sphere, skin, 0, 0, 0, 0.27, 0.28, 0.27);
  if (kid) {
    const kidHair = mat(0x6b4a32, { roughness: 0.9 });
    const cap = add(head, new THREE.SphereGeometry(0.283, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.5), kidHair, 0, 0.01, -0.01);
    cap.rotation.x = -0.12;
    const fringe = add(head, lowSphere, kidHair, 0.02, 0.17, 0.2, 0.2, 0.07, 0.08);
    fringe.rotation.x = -0.5;
  } else {
    const cap = add(head, new THREE.SphereGeometry(0.278, 24, 12, 0, Math.PI * 2, 0, Math.PI * 0.4), hair, 0, 0.01, -0.02);
    cap.rotation.x = -0.32;
    add(head, sphere, beard, 0, -0.09, 0.06, 0.288, 0.2, 0.235); // full beard around the jaw (front half only)
    add(head, sphere, beard, 0, -0.17, 0.12, 0.17, 0.12, 0.15); // chin
    const must = add(head, capsule(0.03, 0.11), beard, 0, -0.03, 0.262);
    must.rotation.z = Math.PI / 2;
  }
  add(head, lowSphere, skin, 0, 0.0, 0.272, 0.042, 0.04, 0.035, false); // nose
  const smile = add(head, new THREE.TorusGeometry(0.032, 0.009, 6, 14, Math.PI), mat(0xc77068), 0, kid ? -0.1 : -0.07, kid ? 0.258 : 0.288, 1, 0.8, 1, false);
  smile.rotation.z = Math.PI;
  for (const s of [-1, 1]) {
    add(head, lowSphere, skin, s * 0.27, 0, 0, 0.045, 0.07, 0.04); // ears
    const brow = add(head, capsule(0.016, 0.07), kid ? mat(0x6b4a32) : beard, s * 0.1, 0.115, 0.25, 1, 1, 1, false);
    brow.rotation.z = Math.PI / 2 + s * 0.12;
  }
  const eyes = [];
  for (const s of [-1, 1]) eyes.push(add(head, capsule(0.026, 0.035), mat(0x1d1720, { roughness: 0.3 }), s * 0.095, 0.035, 0.252, 1, 1, 1, false));
  // tortoiseshell glasses
  const fg = frameGeo(0.14, 0.095, 0.018, 0.025);
  for (const s of [-1, 1]) {
    add(head, fg, tort, s * 0.098, 0.035, 0.262, 1, 1, 1, false);
    add(head, new THREE.PlaneGeometry(0.11, 0.065), new THREE.MeshStandardMaterial({ color: 0xcfe6ff, transparent: true, opacity: 0.18, roughness: 0.1 }), s * 0.098, 0.035, 0.27, 1, 1, 1, false);
    const temple = add(head, new THREE.BoxGeometry(0.012, 0.014, 0.24), tort, s * 0.168, 0.05, 0.15, 1, 1, 1, false);
    temple.rotation.y = s * 0.12;
  }
  add(head, new THREE.BoxGeometry(0.06, 0.014, 0.014), tort, 0, 0.055, 0.272, 1, 1, 1, false);

  return { hips, torso, neck, head, eyes, ...L, extra: {} };
}

function buildMoon(pivot, kid = false) {
  const skin = mat(0xf2cfb9, { roughness: 0.55 });
  const dress = new THREE.MeshPhysicalMaterial({ color: kid ? 0xc9a6e8 : 0x4a1f78, roughness: 0.5, sheen: 1, sheenColor: new THREE.Color(0x9b6bd6), sheenRoughness: 0.4 });
  const jacket = new THREE.MeshPhysicalMaterial({ color: 0xb79be0, roughness: 0.35, metalness: 0.15, sheen: 1, sheenColor: new THREE.Color(0xffe0ff), iridescence: 0.4 });
  const hairM = mat(0x1a1216, { roughness: 0.5 });
  const shoes = mat(0x1f1a24, { roughness: 0.35 });

  const hips = group(pivot, 0, 0, 0);
  // bell-shaped skirt (profile goes bottom → top so the faces point outwards)
  const prof = [[0.31, 0.16], [0.33, 0.19], [0.3, 0.28], [0.24, 0.4], [0.19, 0.5], [0.17, 0.56]].map(([x, y]) => new THREE.Vector2(x, y));
  const skirt = add(hips, new THREE.LatheGeometry(prof, 28), dress, 0, 0, 0);
  skirt.material.side = THREE.DoubleSide;

  const torso = group(pivot, 0, 0.5, 0);
  add(torso, capsule(0.19, 0.12), dress, 0, 0.17, 0, 1, 0.85, 0.8);
  // lilac jacket: back + sides and lapels
  if (!kid) {
    const back = add(torso, new THREE.CylinderGeometry(0.205, 0.2, 0.3, 20, 1, true, Math.PI * 0.24, Math.PI * 1.52), jacket, 0, 0.17, 0, 1, 1, 0.84);
    back.material.side = THREE.DoubleSide;
  } else {
    for (const s of [-1, 1]) add(torso, lowSphere, dress, s * 0.2, 0.28, 0, 0.09, 0.08, 0.09); // little puff sleeves
  }

  const L = limbs(torso, hips, {
    shoulderX: 0.24, shoulderY: 0.3, armR: 0.062, armLen: 0.2, handR: 0.058,
    hipX: 0.08, hipY: 0.3, legR: 0.07, legLen: 0.14, shoe: [0.11, 0.07, 0.2],
    skinMat: skin, sleeveMat: kid ? skin : jacket, legMat: skin, shoeMat: kid ? mat(0xffffff, { roughness: 0.5 }) : shoes,
  });
  const bracelet = add(L.rHand.parent, new THREE.TorusGeometry(0.055, 0.012, 8, 20), mat(0xdfe3ea, { metalness: 1, roughness: 0.25 }), 0, -0.235, 0, 1, 1, 1, false);
  bracelet.rotation.x = Math.PI / 2;
  bracelet.visible = !kid;

  const neck = group(torso, 0, 0.33, 0);
  add(neck, capsule(0.05, 0.05), skin, 0, 0.02, 0);
  const head = group(neck, 0, 0.21, 0);
  if (kid) head.scale.setScalar(1.14);
  add(head, sphere, skin, 0, 0, 0, 0.235, 0.245, 0.235);
  // hair: cap, side-swept bangs, long wavy back, side locks
  const cap = add(head, new THREE.SphereGeometry(0.252, 26, 14, 0, Math.PI * 2, 0, Math.PI * 0.52), hairM, 0, 0.01, -0.012);
  cap.rotation.x = -0.18;
  const bang = add(head, lowSphere, hairM, -0.05, 0.14, 0.15, 0.2, 0.075, 0.1);
  bang.rotation.z = 0.35; bang.rotation.x = -0.4;
  const backHair = group(head, 0, 0, 0);
  if (kid) {
    // a little bob with straight bangs, under a lilac sun hat
    add(backHair, sphere, hairM, 0, -0.06, -0.04, 0.27, 0.22, 0.25);
    add(head, lowSphere, hairM, 0, 0.12, 0.17, 0.2, 0.07, 0.08).rotation.x = -0.35;
    const hatM = mat(0xc9a6e8, { roughness: 0.8 });
    add(head, new THREE.CylinderGeometry(0.42, 0.44, 0.03, 32), hatM, 0, 0.2, 0.0);
    add(head, new THREE.SphereGeometry(0.26, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2), hatM, 0, 0.19, -0.01);
    add(head, new THREE.TorusGeometry(0.255, 0.025, 8, 28), mat(0xf6e8ff), 0, 0.22, -0.01).rotation.x = Math.PI / 2;
  }
  if (!kid) add(backHair, capsule(0.2, 0.26), hairM, 0, -0.16, -0.1, 1.15, 1, 0.68);
  const waves = [[-0.16, -0.38, -0.1], [0.16, -0.38, -0.1], [0, -0.43, -0.15]];
  if (!kid) for (const [x, y, z] of waves) add(backHair, lowSphere, hairM, x, y, z, 0.075, 0.08, 0.065);
  for (const s of (kid ? [] : [-1, 1])) {
    const lock = add(head, capsule(0.05, 0.26), hairM, s * 0.2, -0.16, 0.02, 1, 1, 0.8);
    lock.rotation.z = s * 0.1;
    const curl = add(head, lowSphere, hairM, s * 0.215, -0.33, 0.035, 0.06, 0.055, 0.05);
    curl.rotation.z = s * 0.4;
  }
  // face
  const eyes = [];
  for (const s of [-1, 1]) {
    eyes.push(add(head, capsule(0.028, 0.03), mat(0x2a1612, { roughness: 0.25 }), s * 0.085, 0.02, 0.222, 1, 1, 1, false));
    add(head, lowSphere, mat(0xffffff, { emissive: 0xffffff, emissiveIntensity: 0.4 }), s * 0.085 + 0.01, 0.035, 0.248, 0.009, 0.009, 0.006, false);
    const brow = add(head, capsule(0.012, 0.06), hairM, s * 0.088, 0.085, 0.215, 1, 1, 1, false);
    brow.rotation.z = Math.PI / 2 - s * 0.18;
    const lash = add(head, lowSphere, hairM, s * 0.115, 0.04, 0.21, 0.022, 0.008, 0.01, false);
    lash.rotation.z = s * 0.4;
    add(head, lowSphere, mat(0xff8fa3, { transparent: true, opacity: 0.75 }), s * 0.14, -0.05, 0.19, 0.045, 0.028, 0.02, false);
  }
  add(head, lowSphere, skin, 0, -0.025, 0.236, 0.024, 0.026, 0.02, false); // nose
  const lips = add(head, new THREE.TorusGeometry(0.03, 0.011, 6, 14, Math.PI), mat(kid ? 0xe0727e : 0xb0182a, { roughness: 0.35 }), 0, -0.088, 0.226, 1, 0.75, 1, false);
  lips.rotation.z = Math.PI;
  // jasmine flower and a little golden moon clip
  const jas = group(head, -0.17, 0.14, 0.12);
  jas.visible = !kid;
  jas.rotation.set(0.3, -0.6, 0);
  const petal = mat(0xffffff, { emissive: 0xfff6e8, emissiveIntensity: 0.35 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    add(jas, lowSphere, petal, Math.cos(a) * 0.028, Math.sin(a) * 0.028, 0, 0.026, 0.016, 0.008, false);
  }
  add(jas, lowSphere, mat(0xffd54a), 0, 0, 0.006, 0.012, 0.012, 0.008, false);
  const clip = add(head, new THREE.TorusGeometry(0.04, 0.011, 8, 18, Math.PI * 1.25), mat(0xffd77a, { emissive: 0xffb300, emissiveIntensity: 1.1, metalness: 0.4 }), 0.19, 0.12, 0.09, 1, 1, 1, false);
  clip.rotation.set(0, 0.7, 0.4);
  clip.visible = !kid;

  return { hips, torso, neck, head, eyes, ...L, extra: { skirt, backHair } };
}

export function makeCharacter(kind, { kid = false } = {}) {
  const root = new THREE.Group();
  const flip = new THREE.Group(); // double-jump flips/twirls
  root.add(flip);
  flip.position.y = 0;
  const pivot = new THREE.Group(); // squash & stretch around the feet
  flip.add(pivot);
  const isSun = kind === 'sun';
  const P = isSun ? buildSun(pivot, kid) : buildMoon(pivot, kid);
  if (kid) flip.scale.setScalar(KID_SCALE[kind]);
  const H = (kid ? KID_SIZES : SIZES)[kind].h;

  const glow = new THREE.PointLight(isSun ? 0xff8a5c : 0xb08cff, 0, 7, 2);
  glow.position.set(0, H * 0.6, 0);
  root.add(glow);

  // smoothed joint angles
  const J = { lax: 0, laz: 0, rax: 0, raz: 0, llx: 0, rlx: 0, lean: 0, headX: 0 };
  let phase = 0, squash = 0, t = 0, blink = 2 + Math.random() * 3, yaw = 0, wasGrounded = true;
  let spinT = 0, throwT = 0;
  const armSign = 1;

  return {
    root, kind, glow, height: H, kid,
    get yaw() { return yaw; },
    setYaw(y) { yaw = y; root.rotation.y = y; },
    land(impact = 8) { squash = Math.max(squash, Math.min(1, impact / 16)); },
    spin() { spinT = 0.42; },
    throwAnim() { throwT = 0.3; },
    /** st: { speed, grounded, vy, mode } */
    animate(dt, st) {
      t += dt;
      const { speed, grounded, vy } = st;
      const mode = st.mode || 0;
      if (grounded && !wasGrounded) squash = Math.max(squash, 0.45);
      wasGrounded = grounded;
      const run = Math.min(1, speed / 5.2);
      phase += dt * (5 + speed * 2.1);
      squash = damp(squash, 0, 9, dt);

      // targets
      let lax = 0, rax = 0, laz = -0.14, raz = 0.14, llx = 0, rlx = 0, lean = 0, headX = 0;
      const s = Math.sin(phase);
      if (mode === MODE.hang) {
        lax = rax = -2.95; laz = -0.22; raz = 0.22;
        llx = Math.sin(t * 2.2) * 0.12; rlx = -llx; lean = 0.05; headX = -0.25;
      } else if (mode === MODE.climb) {
        lax = rax = -1.2; laz = -0.3; raz = 0.3; llx = 1.1; rlx = 0.3; lean = 0.45;
      } else if (mode === MODE.wall) {
        lax = -2.2; rax = -1.6; laz = -0.4; raz = 0.5; llx = 0.6; rlx = 0.2; lean = -0.1;
      } else if (mode === MODE.carry) {
        lax = rax = -2.9; laz = -0.38; raz = 0.38;
        if (grounded) { llx = s * 0.7 * run; rlx = -llx; }
        headX = -0.15;
      } else if (mode === MODE.carried) {
        lax = rax = -0.4; laz = -1.1; raz = 1.1; llx = 1.25; rlx = 1.05; lean = -0.15;
      } else if (mode === MODE.dash) {
        lax = rax = 0.95; laz = -0.35; raz = 0.35; llx = -0.7; rlx = 0.5; lean = 0.55; headX = -0.25;
      } else if (mode === MODE.glide) {
        lax = rax = 0; laz = -1.45 + Math.sin(t * 6) * 0.08; raz = 1.45 - Math.sin(t * 6) * 0.08;
        llx = -0.15; rlx = -0.25; lean = 0.18;
      } else if (!grounded) {
        if (vy > 0) { lax = -0.6; rax = -0.6; laz = -1.0; raz = 1.0; llx = 0.75; rlx = -0.35; }
        else { laz = -1.7 + Math.sin(t * 14) * 0.15; raz = 1.7 - Math.sin(t * 14) * 0.15; lax = rax = -0.2; llx = 0.35; rlx = -0.2; }
        lean = 0.08;
      } else {
        // walk / run / idle
        llx = s * 0.85 * run; rlx = -llx;
        lax = -s * 0.75 * run * armSign; rax = s * 0.75 * run * armSign;
        const idle = 1 - run;
        laz = -0.14 - Math.sin(t * 1.8) * 0.03 * idle; raz = 0.14 + Math.sin(t * 1.8) * 0.03 * idle;
        lean = run * 0.18;
        headX = Math.sin(t * 0.9) * 0.04 * idle;
      }
      if (st.hold && mode === MODE.normal) { // reach out to hold the partner's hand
        if (st.hold < 0) { laz = -1.0; lax = -0.35; } else { raz = 1.0; rax = -0.35; }
      }
      if (throwT > 0) { throwT -= dt; const k = throwT / 0.3; lax = rax = -2.9 * k - 0.6 * (1 - k); laz = -0.3; raz = 0.3; }

      const R = 16;
      J.lax = damp(J.lax, lax, R, dt); J.rax = damp(J.rax, rax, R, dt);
      J.laz = damp(J.laz, laz, R, dt); J.raz = damp(J.raz, raz, R, dt);
      J.llx = damp(J.llx, llx, R, dt); J.rlx = damp(J.rlx, rlx, R, dt);
      J.lean = damp(J.lean, lean, 10, dt); J.headX = damp(J.headX, headX, 8, dt);
      P.lArm.rotation.set(J.lax, 0, J.laz);
      P.rArm.rotation.set(J.rax, 0, J.raz);
      P.lLeg.rotation.x = J.llx;
      P.rLeg.rotation.x = J.rlx;
      P.torso.rotation.x = J.lean;
      P.head.rotation.x = J.headX;

      // body bob + squash/stretch
      const bob = grounded && mode !== MODE.carried ? Math.abs(Math.sin(phase)) * 0.05 * run : 0;
      pivot.position.y = bob;
      let sy = 1 + Math.sin(t * 2.4) * 0.015 * (1 - run);
      if (!grounded && mode === MODE.normal) sy += Math.max(-0.06, Math.min(0.1, vy * 0.01));
      sy -= squash * 0.25;
      const sxz = 1 / Math.sqrt(Math.max(0.5, sy));
      pivot.scale.set(sxz, sy, sxz);

      // skirt/hair sway (Moon)
      if (P.extra.skirt) {
        const flare = mode === MODE.glide ? 1.18 : !grounded ? 1.08 : 1 + run * 0.04;
        const f = damp(P.extra.skirt.scale.x, flare, 8, dt);
        P.extra.skirt.scale.set(f, 1, f);
        P.extra.backHair.rotation.x = damp(P.extra.backHair.rotation.x, run * 0.25 + (!grounded ? -0.15 : 0), 6, dt);
      }

      // double-jump flourish: Sun does a front flip, Moon an elegant twirl
      if (spinT > 0) {
        spinT = Math.max(0, spinT - dt);
        const k = 1 - spinT / 0.42;
        const e = k * k * (3 - 2 * k);
        if (isSun) { flip.position.y = H * 0.5; pivot.position.y -= (H * 0.5) / flip.scale.y; flip.rotation.x = e * Math.PI * 2; }
        else flip.rotation.y = e * Math.PI * 2;
      } else {
        flip.rotation.set(0, 0, 0);
        flip.position.y = 0;
      }

      blink -= dt;
      const closed = blink < 0.12;
      for (const e of P.eyes) e.scale.y = closed ? 0.15 : 1;
      if (blink < 0) blink = 2.5 + Math.random() * 3.5;
      glow.intensity = damp(glow.intensity, 0, 3, dt);
    },
  };
}
