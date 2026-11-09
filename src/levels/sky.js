// The sky: a gradient dome with twinkling stars and soft nebula clouds, big pastel planets (one with
// rings, little moons in orbit), the odd shooting star, and the sea of clouds far below.
// All of it is procedural (no image files), so it stays light for phones.
import * as THREE from 'three';
import { onFrame, timeU } from './hooks.js';

// ---------------------------------------------------------------- dome
const NOISE = /* glsl */`
  float h31(vec3 p){ p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
  float vnoise(vec3 x){
    vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
    return mix(mix(mix(h31(i), h31(i + vec3(1,0,0)), f.x), mix(h31(i + vec3(0,1,0)), h31(i + vec3(1,1,0)), f.x), f.y),
               mix(mix(h31(i + vec3(0,0,1)), h31(i + vec3(1,0,1)), f.x), mix(h31(i + vec3(0,1,1)), h31(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 4; i++){ s += a * vnoise(p); p = p * 2.03 + 7.1; a *= 0.5; } return s; }
`;

function dome(root, pal) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(450, 40, 20), new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(pal.top) },
      mid: { value: new THREE.Color(pal.mid) },
      low: { value: new THREE.Color(pal.low) },
      neb1: { value: new THREE.Color(pal.neb1) },
      neb2: { value: new THREE.Color(pal.neb2) },
      starAmt: { value: pal.stars },
      nebAmt: { value: pal.nebula },
      time: timeU,
      sunDir: { value: new THREE.Vector3(0, 0.3, -1).normalize() },   // set per level by gfx.js
      sunCol: { value: new THREE.Color(1, 0.9, 0.8) },
      sunAmt: { value: 0 },
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`
      uniform vec3 top, mid, low, neb1, neb2, sunDir, sunCol; uniform float starAmt, nebAmt, time, sunAmt; varying vec3 vP;
      ${NOISE}
      void main(){
        vec3 d = normalize(vP); float h = d.y;
        vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.6, h)) : mix(mid, low, smoothstep(0.0, -0.35, h));
        float up = smoothstep(0.02, 0.45, h);
        // nebula: two soft coloured veils
        float n1 = fbm(d * 2.6 + vec3(0.0, 0.0, time * 0.004));
        float n2 = fbm(d * 4.1 + vec3(5.2, 1.3, -time * 0.003));
        float band = smoothstep(0.45, 0.85, n1) * up;
        c = mix(c, c + neb1 * 0.55, band * nebAmt);
        c = mix(c, c + neb2 * 0.45, smoothstep(0.55, 0.9, n2) * up * nebAmt);
        // stars: one jittered star per grid cell, three layers of size
        float s = 0.0;
        for (int L = 0; L < 3; L++) {
          float sc = 55.0 + float(L) * 45.0;
          vec3 p = d * sc; vec3 id = floor(p);
          float r = h31(id + float(L) * 13.0);
          if (r > 0.55) {
            vec3 o = vec3(h31(id + 1.7), h31(id + 4.3), h31(id + 9.1));
            float dist = length(fract(p) - o);
            float tw = 0.65 + 0.35 * sin(time * (1.5 + r * 3.0) + r * 40.0);
            float size = 0.07 + 0.1 * (r - 0.55) / 0.45 - float(L) * 0.015;
            s += smoothstep(size, 0.0, dist) * tw * (0.6 + (r - 0.55) * 2.0);
          }
        }
        c += vec3(1.0, 0.96, 0.9) * s * starAmt * up * 2.2;
        // the sun (or the moon, on night levels): a bright disc in a wide warm glow
        float sd = max(dot(d, sunDir), 0.0);
        vec3 glow = sunCol * (pow(sd, 5.0) * 0.22 + pow(sd, 48.0) * 0.4 + pow(sd, 900.0) * 1.4);
        c += (glow + sunCol * smoothstep(0.99935, 0.99965, sd) * 3.0) * sunAmt;
        gl_FragColor = vec4(c, 1.0);
        #include <colorspace_fragment>
      }`,
  }));
  m.renderOrder = -10;
  m.frustumCulled = false;
  m.userData.skyDome = true;
  root.add(m);
  return m;
}

// ---------------------------------------------------------------- planets
function rng(seed) { let k = seed * 9301 + 49297; return () => ((k = (k * 16807) % 2147483647) / 2147483647); }

function noiseField(seed) {
  const R = rng(seed), P = new Float32Array(512);
  for (let i = 0; i < 512; i++) P[i] = R();
  const v = (x, y) => {
    const xi = Math.floor(x), yi = Math.floor(y), xf = x - xi, yf = y - yi;
    const h = (a, b) => P[((a & 15) * 31 + (b & 15) * 17) & 511];
    const u = xf * xf * (3 - 2 * xf), w = yf * yf * (3 - 2 * yf);
    return (h(xi, yi) * (1 - u) + h(xi + 1, yi) * u) * (1 - w) + (h(xi, yi + 1) * (1 - u) + h(xi + 1, yi + 1) * u) * w;
  };
  return (x, y) => v(x, y) * 0.55 + v(x * 2.1 + 3, y * 2.1) * 0.3 + v(x * 4.3, y * 4.3 + 5) * 0.15;
}

/** Equirect planet texture. kind: 'bands' (gas giant), 'rock' (craters), 'ocean' (sea, land and clouds). */
function planetTexture(kind, cols, seed) {
  const W = 256, H = 128;
  const cv = document.createElement('canvas'); cv.width = W; cv.height = H;
  const cx = cv.getContext('2d');
  const img = cx.createImageData(W, H), px = img.data;
  const N = noiseField(seed), R = rng(seed + 3);
  const C = cols.map((c) => new THREE.Color(c));
  const out = new THREE.Color();
  const craters = [];
  if (kind === 'rock') for (let i = 0; i < 26; i++) craters.push([R() * W, 14 + R() * (H - 28), 3 + R() * 11]);
  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const u = x / W * 16, v = y / H * 8; // tile the noise around the planet (period 16)
      let t;
      if (kind === 'bands') {
        const warp = N(u * 0.5, v * 0.9) * 1.8;
        t = 0.5 + 0.5 * Math.sin(y / H * 19 + warp * 1.7 + N(u * 2, v * 3) * 0.6);
        const k = t * (C.length - 1), i = Math.min(C.length - 2, Math.floor(k));
        out.copy(C[i]).lerp(C[i + 1], k - i);
      } else if (kind === 'rock') {
        t = N(u, v);
        out.copy(C[0]).lerp(C[1], t);
        for (const [cxp, cyp, r] of craters) {
          const dx = Math.min(Math.abs(x - cxp), W - Math.abs(x - cxp)), dy = y - cyp, d = Math.hypot(dx, dy) / r;
          if (d < 1) out.lerp(C[2], 0.55 * (1 - d * d));
          else if (d < 1.25) out.lerp(C[3] || C[1], 0.35 * (1 - (d - 1) / 0.25));
        }
      } else {
        t = N(u * 0.8, v * 0.8);
        if (t > 0.56) out.copy(C[1]).lerp(C[2], Math.min(1, (t - 0.56) * 4)); else out.copy(C[0]).lerp(new THREE.Color(C[0]).multiplyScalar(0.8), t);
        const cl = N(u * 1.4 + 9, v * 2.2);
        if (cl > 0.55) out.lerp(new THREE.Color(0xffffff), Math.min(0.85, (cl - 0.55) * 3.5));
      }
      const o = (y * W + x) * 4;
      px[o] = out.r * 255; px[o + 1] = out.g * 255; px[o + 2] = out.b * 255; px[o + 3] = 255;
    }
  }
  cx.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  return tex;
}

const planetMat = (map, lightDir, glow) => new THREE.ShaderMaterial({
  fog: false,
  uniforms: { map: { value: map }, lightDir: { value: lightDir }, glow: { value: new THREE.Color(glow) } },
  vertexShader: /* glsl */`varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){ vUv = uv; vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0);
      vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
  fragmentShader: /* glsl */`uniform sampler2D map; uniform vec3 lightDir; uniform vec3 glow; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
    void main(){
      vec3 base = texture2D(map, vUv).rgb;
      float l = dot(normalize(vN), normalize(lightDir));
      float lit = smoothstep(-0.25, 0.6, l);
      vec3 c = base * (0.42 + 0.8 * lit);
      float rim = pow(1.0 - max(dot(normalize(vN), vV), 0.0), 2.5);
      c += glow * rim * (0.35 + 0.65 * lit);
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
    }`,
});

const haloMat = (color, strength) => new THREE.ShaderMaterial({
  fog: false, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.BackSide,
  uniforms: { color: { value: new THREE.Color(color) }, k: { value: strength } },
  vertexShader: /* glsl */`varying vec3 vN; varying vec3 vV;
    void main(){ vN = normalize(mat3(modelMatrix) * normal); vec4 wp = modelMatrix * vec4(position, 1.0);
      vV = normalize(cameraPosition - wp.xyz); gl_Position = projectionMatrix * viewMatrix * wp; }`,
  fragmentShader: /* glsl */`uniform vec3 color; uniform float k; varying vec3 vN; varying vec3 vV;
    void main(){ float f = 1.0 - abs(dot(normalize(vN), vV)); float a = pow(smoothstep(0.0, 1.0, 1.0 - f), 3.0) * k;
      gl_FragColor = vec4(color * a, a); }`,
});

function ringMesh(inner, outer, cols, opacity = 0.85) {
  const geo = new THREE.RingGeometry(inner, outer, 128, 1);
  const m = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    fog: false, transparent: true, depthWrite: false, side: THREE.DoubleSide,
    uniforms: { a: { value: new THREE.Color(cols[0]) }, b: { value: new THREE.Color(cols[1]) }, inner: { value: inner }, outer: { value: outer }, op: { value: opacity } },
    vertexShader: 'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: /* glsl */`uniform vec3 a, b; uniform float inner, outer, op; varying vec3 vP;
      void main(){ float r = (length(vP.xy) - inner) / (outer - inner);
        float bands = 0.5 + 0.5 * sin(r * 46.0) * sin(r * 17.0 + 1.3);
        float gap = smoothstep(0.52, 0.55, r) * (1.0 - smoothstep(0.6, 0.63, r));
        float edge = smoothstep(0.0, 0.08, r) * (1.0 - smoothstep(0.9, 1.0, r));
        vec3 c = mix(a, b, bands);
        gl_FragColor = vec4(c, op * edge * (0.55 + 0.45 * bands) * (1.0 - gap * 0.85));
        #include <colorspace_fragment>
      }`,
  }));
  m.rotation.x = -Math.PI / 2;
  return m;
}

/** Point on the sky at azimuth `az` (radians, 0 = -z) and elevation `el`, `dist` away from (cx, 0, cz). */
function skyPos(cx, cz, az, el, dist) {
  return new THREE.Vector3(cx + Math.sin(az) * Math.cos(el) * dist, Math.sin(el) * dist, cz - Math.cos(az) * Math.cos(el) * dist);
}

// planet presets: kind, texture colours, glow, radius, ring
const PLANETS = {
  giant: { kind: 'bands', cols: [0xffd9b8, 0xf7a8a0, 0xffe9cf, 0xe7a6c9, 0xffd0a6], glow: 0xffc9e0, r: 34, ring: [0xffe6cc, 0xd9a6d9] },
  lilac: { kind: 'rock', cols: [0xc7b3f0, 0xa58ee0, 0x8a72c9, 0xe3d6ff], glow: 0xd9c8ff, r: 15 },
  ocean: { kind: 'ocean', cols: [0x6ec3e6, 0x9fdc93, 0xe8e0a6], glow: 0xbfe8ff, r: 19 },
  ember: { kind: 'bands', cols: [0xff8f73, 0xe0605a, 0xffb38a, 0xd65a6a], glow: 0xffb0a0, r: 9 },
  mint: { kind: 'rock', cols: [0xbfe8d4, 0x9fd6c0, 0x7fbfa6, 0xe0fff2], glow: 0xd8fff0, r: 6 },
  rose: { kind: 'bands', cols: [0xffc2d8, 0xf59ac0, 0xffe0ec], glow: 0xffd6e8, r: 11, ring: [0xffffff, 0xffc2d8] },
};

function planet(root, preset, pos, lightDir, seed, tilt = 0.4, scale = 1) {
  const P = { ...PLANETS[preset] };
  P.r *= scale;
  const g = new THREE.Group();
  g.position.copy(pos);
  root.add(g);
  const body = new THREE.Mesh(new THREE.SphereGeometry(P.r, 48, 32), planetMat(planetTexture(P.kind, P.cols, seed), lightDir, P.glow));
  body.rotation.z = tilt * 0.4;
  g.add(body);
  const halo = new THREE.Mesh(new THREE.SphereGeometry(P.r * 1.22, 32, 20), haloMat(P.glow, 0.55));
  g.add(halo);
  let ring = null;
  if (P.ring) {
    ring = ringMesh(P.r * 1.35, P.r * 2.3, P.ring);
    const holder = new THREE.Group();
    holder.rotation.set(tilt, 0, tilt * 0.6);
    holder.add(ring);
    g.add(holder);
  }
  for (const o of g.children) { o.frustumCulled = false; o.renderOrder = -8; }
  return { g, body, ring, r: P.r };
}

// ---------------------------------------------------------------- shooting stars
function shootingStars(root, cx, cz) {
  const geo = new THREE.PlaneGeometry(1, 1);
  geo.translate(-0.5, 0, 0);
  const mtl = new THREE.ShaderMaterial({
    fog: false, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    uniforms: { a: { value: 0 } },
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: 'uniform float a; varying vec2 vUv; void main(){ float k = pow(vUv.x, 2.5) * (1.0 - abs(vUv.y - 0.5) * 2.0); gl_FragColor = vec4(vec3(1.0, 0.95, 0.85) * k * a * 2.0, k * a); }',
  });
  const m = new THREE.Mesh(geo, mtl);
  m.frustumCulled = false;
  m.renderOrder = -7;
  m.visible = false;
  root.add(m);
  let next = 3 + Math.random() * 5, t0 = 0, dur = 0.9;
  const from = new THREE.Vector3(), dir = new THREE.Vector3(), cam = new THREE.Vector3(), by = new THREE.Vector3(), bz = new THREE.Vector3(), basis = new THREE.Matrix4();
  onFrame((t, dt, camera) => {
    if (!m.visible && t > next) {
      // start somewhere in the upper sky in front-ish of the camera
      camera.getWorldDirection(cam);
      const az = Math.atan2(cam.x, -cam.z) + (Math.random() - 0.5) * 1.6;
      from.copy(skyPos(camera.position.x, camera.position.z, az, 0.35 + Math.random() * 0.45, 300));
      const side = Math.random() < 0.5 ? -1 : 1;
      dir.set(Math.cos(az) * side, -0.35 - Math.random() * 0.25, Math.sin(az) * side).normalize();
      t0 = t; dur = 0.7 + Math.random() * 0.5; m.visible = true;
    }
    if (m.visible) {
      const k = (t - t0) / dur;
      if (k >= 1) { m.visible = false; next = t + 4 + Math.random() * 9; return; }
      m.position.copy(from).addScaledVector(dir, k * 140);
      // local x along the travel direction, local z facing the camera
      bz.copy(camera.position).sub(m.position).normalize();
      by.crossVectors(bz, dir);
      if (by.lengthSq() < 1e-6) { m.visible = false; next = t + 3; return; }   // flying straight at the camera: skip it
      by.normalize();
      bz.crossVectors(dir, by);
      m.quaternion.setFromRotationMatrix(basis.makeBasis(dir, by, bz));
      m.scale.set(Math.max(0.05, 34 * Math.sin(k * Math.PI)), 0.9, 1);
      mtl.uniforms.a.value = Math.sin(k * Math.PI);
    }
  });
}

// ---------------------------------------------------------------- cloud sea
function cloudSea(root, pal) {
  const puff = new THREE.IcosahedronGeometry(1, 2);
  const n = 190;
  const im = new THREE.InstancedMesh(puff, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: pal.cloud, emissiveIntensity: 0.4, roughness: 1 }), n);
  const o = new THREE.Object3D();
  const R = rng(7);
  for (let i = 0; i < n; i++) {
    const a = R() * Math.PI * 2, r = 12 + Math.pow(R(), 0.7) * 170;
    o.position.set(Math.cos(a) * r + pal.cx, (pal.seaY ?? -13) - R() * 5, Math.sin(a) * r + (pal.seaZ ?? 0));
    const s = 4 + R() * 8;
    o.scale.set(s * 1.5, s * 0.5, s);
    o.rotation.y = R() * 3;
    o.updateMatrix();
    im.setMatrixAt(i, o.matrix);
  }
  im.receiveShadow = false;
  root.add(im);
  const base = im.position.clone();
  onFrame((t) => { im.position.x = base.x + Math.sin(t * 0.03) * 3; im.position.z = base.z + Math.cos(t * 0.025) * 2; });
}

/**
 * Build the whole sky. opts: top/mid/low (gradient), neb1/neb2 (nebula tints), stars (0..1), nebula (0..1),
 * cloud (cloud-sea glow), cx/cz (level centre), planets (array of [preset, azimuth, elevation, distance, tilt, scale?]) or false,
 * lightDir (direction the planets are lit from), seaY / seaZ (height and z of the cloud sea, default -13 / 0).
 */
export function buildSky(root, opts = {}) {
  const pal = {
    top: '#7d8fe6', mid: '#ffc9dc', low: '#ffe7cf', neb1: '#b38cff', neb2: '#ff8fc8', stars: 0.35, nebula: 0.35, cloud: 0xffd9e8, cx: 8, cz: 0,
    lightDir: [0.6, 0.5, 0.4],
    planets: [
      ['giant', -0.55, 0.15, 290, 0.42],
      ['lilac', 0.9, 0.2, 240, 0.2],
      ['ocean', 2.5, 0.1, 270, 0.3],
      ['ember', -2.1, 0.26, 230, 0.1],
      ['mint', 1.6, 0.36, 220, 0.3],
      ['rose', 3.7, 0.18, 250, -0.5],
    ],
    ...opts,
  };
  dome(root, pal);
  const light = new THREE.Vector3(...pal.lightDir).normalize();
  const list = [];
  (pal.planets || []).forEach(([preset, az, el, dist, tilt, scale], i) => list.push(planet(root, preset, skyPos(pal.cx, pal.cz, az, el, dist), light, 11 + i * 7, tilt, scale)));
  // little moons orbiting the two biggest planets
  const orbiters = [];
  for (const p of list.slice(0, 2)) {
    const mm = new THREE.Mesh(new THREE.SphereGeometry(p.r * 0.14, 20, 14), planetMat(planetTexture('rock', [0xf2ecff, 0xd8cff0, 0xbdb2dd], 99 + orbiters.length), light, 0xffffff));
    mm.frustumCulled = false; mm.renderOrder = -8;
    p.g.add(mm);
    orbiters.push({ mm, R: p.r * (p.ring ? 2.8 : 1.9), ph: orbiters.length * 2.3, sp: 0.05 + orbiters.length * 0.03 });
  }
  onFrame((t) => {
    for (const p of list) { p.body.rotation.y = t * 0.012 * (30 / p.r); if (p.ring) p.ring.rotation.z = t * 0.01; }
    for (const o of orbiters) { const a = t * o.sp + o.ph; o.mm.position.set(Math.cos(a) * o.R, Math.sin(a) * o.R * 0.25, Math.sin(a) * o.R); }
  });
  if (pal.stars > 0.2) shootingStars(root, pal.cx, pal.cz);
  cloudSea(root, pal);
  return { planets: list };
}
