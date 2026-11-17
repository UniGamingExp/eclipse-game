// Chapter 5: Damascus is only a pencil sketch, because they have never walked there together.
//  - every material in the level is drawn as graphite on paper, except where a paint mask says "coloured"
//  - walking TOGETHER (close to each other) paints the city in, around the middle between them
//  - "ghost" pieces of street are missing from the drawing: Moon sees their dotted outline (she knows the way),
//    and they become real once the two of them colour them in together
//  - Homesickness: grey wisps that rub the colour out again and make ghost pieces fade while they pass
import * as THREE from 'three';
import { add } from './common.js';

const VERT_HEAD = 'varying vec3 vSkW;\n';
const VERT_BODY = `#include <project_vertex>
{
  vec4 skW = vec4( transformed, 1.0 );
  #ifdef USE_BATCHING
    skW = batchingMatrix * skW;
  #endif
  #ifdef USE_INSTANCING
    skW = instanceMatrix * skW;
  #endif
  vSkW = ( modelMatrix * skW ).xyz;
}`;
const FRAG_HEAD = 'uniform sampler2D uSkMask;\nuniform vec4 uSkB;\nuniform float uSkAll;\nvarying vec3 vSkW;\n';
const FRAG_BODY = `#include <dithering_fragment>
{
  vec2 skUV = ( vSkW.xz - uSkB.xy ) / uSkB.zw;
  float skM = uSkAll;
  if ( skUV.x > 0.0 && skUV.x < 1.0 && skUV.y > 0.0 && skUV.y < 1.0 ) skM = max( skM, texture( uSkMask, skUV ).r );
  vec3 skC = gl_FragColor.rgb;
  float skL = dot( skC, vec3( 0.299, 0.587, 0.114 ) );
  float skTone = smoothstep( 0.03, 0.8, skL );
  float skP = ( vSkW.x + vSkW.z ) * 4.0 + vSkW.y * 4.0;
  float skFw = fwidth( skP );
  float skLine = ( 1.0 - smoothstep( 0.05, 0.15, abs( fract( skP ) - 0.5 ) * 2.0 ) ) * ( 1.0 - smoothstep( 0.35, 0.9, skFw ) );
  float skP2 = ( vSkW.x - vSkW.z ) * 4.0 + vSkW.y * 2.0;
  float skLine2 = ( 1.0 - smoothstep( 0.05, 0.15, abs( fract( skP2 ) - 0.5 ) * 2.0 ) ) * ( 1.0 - smoothstep( 0.35, 0.9, fwidth( skP2 ) ) );
  float skDark = 1.0 - skTone;
  vec3 skPaper = vec3( 0.96, 0.94, 0.9 );
  vec3 skS = skPaper * ( 0.66 + 0.34 * skTone );
  skS -= vec3( 0.2, 0.2, 0.22 ) * skLine * smoothstep( 0.3, 0.75, skDark );
  skS -= vec3( 0.16, 0.16, 0.18 ) * skLine2 * smoothstep( 0.55, 0.95, skDark );
  // the edge of the colour is a soft watercolour bleed
  float skK = smoothstep( 0.05, 0.95, skM );
  gl_FragColor.rgb = mix( skS, skC, skK );
}`;

/**
 * bounds: the xz area the paint mask covers. Call patch(root) once the level is built.
 * ghosts: [{ x0, x1, z0, z1, y, th? }]   (pieces of street that only exist once they've been coloured together)
 * wisps:  [{ pos: (sNow) => [x, z], y, r }]
 */
export function createSketch(root, { key, x0, x1, z0, z1, res = 256, ghosts = [], wisps = [], ghostM = null }) {
  const W = res, H = res;
  const data = new Uint8Array(W * H);
  const tex = new THREE.DataTexture(data, W, H, THREE.RedFormat, THREE.UnsignedByteType);
  tex.magFilter = THREE.LinearFilter; tex.minFilter = THREE.LinearFilter; tex.needsUpdate = true;
  const U = { uSkMask: { value: tex }, uSkB: { value: new THREE.Vector4(x0, z0, x1 - x0, z1 - z0) }, uSkAll: { value: 0 } };
  let dirty = false, lastUp = 0, api = null;

  const px = (x) => ((x - x0) / (x1 - x0)) * W, pz = (z) => ((z - z0) / (z1 - z0)) * H;
  /** colour in a soft disc */
  function paint(x, z, r, k = 1) {
    const cx = px(x), cz = pz(z), rx = (r / (x1 - x0)) * W, rz = (r / (z1 - z0)) * H;
    const i0 = Math.max(0, Math.floor(cx - rx)), i1 = Math.min(W - 1, Math.ceil(cx + rx));
    const j0 = Math.max(0, Math.floor(cz - rz)), j1 = Math.min(H - 1, Math.ceil(cz + rz));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      const d = Math.hypot((i + 0.5 - cx) / rx, (j + 0.5 - cz) / rz);
      if (d >= 1) continue;
      const v = Math.round(255 * k * Math.min(1, (1 - d) * 2.2));
      const o = j * W + i;
      if (v > data[o]) { data[o] = v; dirty = true; }
    }
  }
  function rub(x, z, r, amt, floor = 40) {
    const cx = px(x), cz = pz(z), rx = (r / (x1 - x0)) * W, rz = (r / (z1 - z0)) * H;
    const i0 = Math.max(0, Math.floor(cx - rx)), i1 = Math.min(W - 1, Math.ceil(cx + rx));
    const j0 = Math.max(0, Math.floor(cz - rz)), j1 = Math.min(H - 1, Math.ceil(cz + rz));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) {
      if (Math.hypot((i + 0.5 - cx) / rx, (j + 0.5 - cz) / rz) >= 1) continue;
      const o = j * W + i;
      if (data[o] > floor) { data[o] = Math.max(floor, data[o] - amt); dirty = true; }
    }
  }
  function paintRect(a0, a1, b0, b1) {
    for (let x = a0; x <= a1; x += 1.5) for (let z = b0; z <= b1; z += 1.5) paint(x, z, 2.2);
  }
  const at = (x, z) => {
    const i = Math.floor(px(x)), j = Math.floor(pz(z));
    return i < 0 || j < 0 || i >= W || j >= H ? 0 : data[j * W + i] / 255;
  };

  // ---------------------------------------------------------------- the materials: graphite until coloured
  const cache = new Map();
  function sketchify(m) {
    if (!m || m.userData?.sketch) return m;
    if (!(m.isMeshStandardMaterial || m.isMeshBasicMaterial || m.isMeshLambertMaterial || m.isMeshPhongMaterial)) return m;
    let c = cache.get(m);
    if (c) return c;
    c = m.clone();
    c.userData = { ...m.userData, sketch: true };
    c.onBeforeCompile = (sh) => {
      Object.assign(sh.uniforms, U);
      sh.vertexShader = VERT_HEAD + sh.vertexShader.replace('#include <project_vertex>', VERT_BODY);
      sh.fragmentShader = FRAG_HEAD + sh.fragmentShader.replace('#include <dithering_fragment>', FRAG_BODY);
    };
    c.customProgramCacheKey = () => 'sketch1';
    cache.set(m, c);
    return c;
  }
  /** draw everything under obj in pencil (stops at anything marked userData.noSketch) */
  function patch(obj) {
    if (obj.userData.noSketch) return;
    if (obj.isMesh) obj.material = Array.isArray(obj.material) ? obj.material.map(sketchify) : sketchify(obj.material);
    for (const c of obj.children) patch(c);
  }

  // ---------------------------------------------------------------- pencil outlines for the big shapes
  const inkM = new THREE.LineBasicMaterial({ color: 0x4a4440, transparent: true, opacity: 0.55 });
  function ink(mesh, angle = 30) {
    const l = new THREE.LineSegments(new THREE.EdgesGeometry(mesh.geometry, angle), inkM);
    l.userData.noHide = true;
    mesh.add(l);
    return l;
  }

  // ---------------------------------------------------------------- ghost pieces of street
  const dashM = new THREE.LineDashedMaterial({ color: 0x9a6ad8, dashSize: 0.35, gapSize: 0.25, transparent: true, opacity: 0.9 });
  const G = ghosts.map((q, i) => {
    const th = q.th ?? 0.5, w = q.x1 - q.x0, d = q.z1 - q.z0;
    const geo = new THREE.BoxGeometry(w, th, d);
    const mesh = add(root, geo, ghostM, (q.x0 + q.x1) / 2, q.y - th / 2, (q.z0 + q.z1) / 2);
    mesh.visible = false; mesh.userData.noHide = true; mesh.scale.y = 0.01;
    ink(mesh);
    const outline = new THREE.LineSegments(new THREE.EdgesGeometry(geo), dashM);
    outline.computeLineDistances();
    outline.position.copy(mesh.position); outline.userData.noHide = true; outline.visible = false;
    root.add(outline);
    const col = { type: 'box', x0: q.x0, x1: q.x1, z0: q.z0, z1: q.z1, top: q.y, bottom: q.y - th, noGrab: !!q.noGrab, disabled: true, surface: 'concrete' };
    return { ...q, i, mesh, outline, col, on: false, k: 0, faded: false };
  });

  // ---------------------------------------------------------------- Homesickness
  const wispM = new THREE.MeshStandardMaterial({ color: 0x8a8a98, roughness: 1, transparent: true, opacity: 0.5, depthWrite: false });
  const WS = wisps.map((w) => {
    const g = new THREE.Group(); g.userData.noHide = true; root.add(g);
    for (let k = 0; k < 5; k++) {
      const m = add(g, new THREE.SphereGeometry(w.r * (0.45 + (k % 3) * 0.12), 14, 10), wispM, Math.cos(k * 1.3) * w.r * 0.5, 0.6 + (k % 2) * 0.5, Math.sin(k * 1.3) * w.r * 0.4, { cast: false, receive: false });
      m.userData.noSketch = true;
    }
    for (const dx of [-0.35, 0.35]) add(g, new THREE.SphereGeometry(0.13, 8, 6), new THREE.MeshBasicMaterial({ color: 0x3a3a48 }), dx * w.r, 1.0, w.r * 0.55, { cast: false }).userData.noSketch = true;
    return { ...w, g, x: 0, z: 0 };
  });
  const inWisp = (x, z, y, pad = 0) => WS.some((w) => Math.hypot(x - w.x, z - w.z) < w.r + pad && Math.abs(y - w.y) < 4);

  const authority = () => api && (api.kind === 'solo' || api.role === 'sun');
  const saved = (i) => !!api?.save?.[key]?.gh?.[i];
  const moonSees = () => api && (api.kind === 'solo' || api.role === 'moon');
  let together = false, all = false;

  function reveal(g, quiet = false) {
    if (g.on) return;
    g.on = true; g.mesh.visible = true;
    paintRect(g.x0, g.x1, g.z0, g.z1);
    if (!quiet) { api?.sound.play('pin'); api?.fx.sparks(new THREE.Vector3((g.x0 + g.x1) / 2, g.y + 0.3, (g.z0 + g.z1) / 2), 0xffc6e8, 14, 3); }
    if (authority() && !saved(g.i)) api.setSave(`${key}/gh/${g.i}`, 1);
  }

  return {
    colliders: G.map((g) => g.col),
    uniforms: U, paint, rub, at, patch, ink, ghosts: G, wisps: WS, inWisp,
    attach(a) { api = a; },
    together: () => together,
    /** colour everything (the ending), spreading from `from` */
    bloom(from) { all = { x: from.x, z: from.z, r: 0 }; },
    /** after a reload: colour the parts already walked */
    restore() { for (const g of G) if (saved(g.i)) reveal(g, true); },
    update(dt, sNow, t) {
      if (!api) return;
      const a = api.bodies.sun.pos, b = api.bodies.moon.pos;
      const d = a.distanceTo(b);
      together = d < 4.2;
      const hold = !!api.holding;
      if (together || hold) {
        const mx = (a.x + b.x) / 2, mz = (a.z + b.z) / 2, my = (a.y + b.y) / 2;
        const R = hold ? 6 : 4.4;
        if (!inWisp(mx, mz, my)) paint(mx, mz, R);
        for (const g of G) {
          if (g.on) continue;
          const nx = Math.max(g.x0, Math.min(g.x1, mx)), nz = Math.max(g.z0, Math.min(g.z1, mz));
          if (Math.hypot(nx - mx, nz - mz) < R * 0.8 && Math.abs(g.y - my) < 3.2 && !inWisp(nx, nz, g.y)) reveal(g);
        }
      }
      // (each player also leaves a faint trail of colour)
      for (const p of [a, b]) if (!inWisp(p.x, p.z, p.y)) paint(p.x, p.z, 1.3, 0.35);
      for (const g of G) {
        if (!g.on && saved(g.i)) reveal(g, true);
        g.outline.visible = !g.on && moonSees();
        if (g.outline.visible) g.outline.material.opacity = 0.6 + Math.sin(t * 4 + g.i) * 0.3;
        const fade = g.on && inWisp((g.x0 + g.x1) / 2, (g.z0 + g.z1) / 2, g.y, Math.max(g.x1 - g.x0, g.z1 - g.z0) * 0.4);
        g.col.disabled = !g.on || fade;
        g.k += ((g.on && !fade ? 1 : g.on ? 0.06 : 0) - g.k) * Math.min(1, dt * 7);
        g.mesh.scale.y = Math.max(0.01, g.k);
        g.mesh.visible = g.on && g.k > 0.03;
      }
      for (const w of WS) {
        const [x, z] = w.pos(sNow);
        w.x = x; w.z = z;
        w.g.position.set(x, w.y + Math.sin(t * 1.4 + w.r) * 0.25, z);
        w.g.rotation.y = Math.sin(t * 0.6) * 0.4;
        rub(x, z, w.r * 1.1, Math.round(dt * 160));
      }
      if (all) {
        all.r += dt * 26;
        paint(all.x, all.z, all.r);
        if (all.r > 260) { U.uSkAll.value = 1; all = false; }
      }
      if (dirty && t - lastUp > 0.08) { tex.needsUpdate = true; dirty = false; lastUp = t; }
    },
  };
}
