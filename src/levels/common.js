// Shared building blocks for all levels: materials, rounded toy blocks, floating islands, trees,
// signs, clouds, sky dome and the sea of clouds below.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { starShape } from '../effects.js';
import { buildSky } from './sky.js';
import { timeU } from './hooks.js';

const mats = new Map();
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!mats.has(key)) mats.set(key, new THREE.MeshStandardMaterial({ color, roughness: 0.85, ...opts }));
  return mats.get(key);
}
export function add(parent, geo, material, x = 0, y = 0, z = 0, { cast = true, receive = true } = {}) {
  const m = new THREE.Mesh(geo, material);
  m.position.set(x, y, z);
  m.castShadow = cast;
  m.receiveShadow = receive;
  parent.add(m);
  return m;
}
export const rbox = (w, h, d, r = 0.12) => new RoundedBoxGeometry(w, h, d, 3, Math.min(r, w / 2 - 0.01, h / 2 - 0.01, d / 2 - 0.01));

// ---------- terrain ----------
export function islandMeshes(parent, cx, cz, R, top, depth, grass, dirtTop, dirtBottom) {
  const g = new THREE.Group();
  g.position.set(cx, top, cz);
  parent.add(g);
  // grass cap with a soft rounded rim (profile goes bottom → top so faces point outwards)
  const capPts = [
    [R * 0.985, -0.62], [R * 1.005, -0.36], [R * 0.99, -0.13], [R * 0.955, -0.02], [R * 0.9, 0], [0.001, 0],
  ].map(([x, y]) => new THREE.Vector2(x, y));
  const cap = add(g, new THREE.LatheGeometry(capPts, 64), grassMat(grass), 0, 0, 0, { cast: false });
  cap.receiveShadow = true;
  // rocky underside, jagged and low-poly
  const n = 9, pts = [];
  for (let i = 0; i <= n; i++) {
    const k = i / n;
    const y = -depth + k * (depth - 0.5);
    const r = 0.001 + (R * 0.98) * Math.pow(k, 0.6);
    pts.push(new THREE.Vector2(r, y));
  }
  const dirtGeo = new THREE.LatheGeometry(pts, 26);
  const p = dirtGeo.attributes.position, colors = [];
  const cTop = new THREE.Color(dirtTop), cBot = new THREE.Color(dirtBottom), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const a = Math.atan2(z, x);
    if (y < -0.55) {
      const nz = 1 + Math.sin(a * 5 + y * 1.7) * 0.07 + Math.sin(a * 13 - y * 2.3) * 0.05;
      p.setX(i, x * nz); p.setZ(i, z * nz);
      p.setY(i, y + Math.sin(a * 7) * 0.15);
    }
    c.copy(cBot).lerp(cTop, Math.min(1, Math.max(0, 1 + y / depth)));
    colors.push(c.r, c.g, c.b);
  }
  dirtGeo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
  dirtGeo.computeVertexNormals();
  add(g, dirtGeo, new THREE.MeshStandardMaterial({ vertexColors: true, flatShading: true, roughness: 0.95 }), 0, 0, 0);
  return g;
}

export function tree(parent, x, y, z, s = 1, tint = 0) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  parent.add(g);
  add(g, new THREE.CylinderGeometry(0.17, 0.26, 1.5, 10), mat(0xa8714f), 0, 0.75, 0);
  const greens = [0x7cc56b, 0x92d46e, 0x6bb86a, 0xa4dc7c];
  const leaf = new THREE.IcosahedronGeometry(1, 1);
  const blobs = [[0, 1.95, 0, 0.95], [0.45, 2.55, 0.1, 0.68], [-0.4, 2.45, -0.15, 0.62], [0.05, 2.95, -0.05, 0.5]];
  blobs.forEach(([bx, by, bz, bs], i) => {
    const m = add(g, leaf, mat(greens[(i + tint) % greens.length], { flatShading: true }), bx, by, bz);
    m.scale.setScalar(bs);
    m.rotation.set(i, i * 2, 0);
  });
  return g;
}

export function sign(parent, x, z, rotY, lines) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = rotY;
  parent.add(g);
  add(g, new THREE.CylinderGeometry(0.07, 0.08, 1.2, 8), mat(0x9a6a4b), 0, 0.6, 0);
  add(g, rbox(1.9, 0.82, 0.12, 0.08), mat(0xe8b98a), 0, 1.25, 0);
  const cv = document.createElement('canvas');
  cv.width = 512; cv.height = 220;
  const cx = cv.getContext('2d');
  cx.fillStyle = '#f6dcbc'; cx.fillRect(0, 0, 512, 220);
  cx.fillStyle = '#4a3352';
  cx.textAlign = 'center'; cx.textBaseline = 'middle';
  const size = lines.length > 1 ? 58 : 76;
  cx.font = `800 ${size}px ui-rounded, "SF Pro Rounded", system-ui, sans-serif`;
  lines.forEach((l, i) => cx.fillText(l, 256, 110 + (i - (lines.length - 1) / 2) * (size * 1.15), 490));
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const face = add(g, new THREE.PlaneGeometry(1.76, 0.7), new THREE.MeshStandardMaterial({ map: tex, roughness: 0.9 }), 0, 1.25, 0.065, { cast: false });
  face.receiveShadow = true;
  return g;
}

export function cloud(parent, x, y, z, w, d, seed = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  const white = mat(0xffffff, { roughness: 1, emissive: 0xffe9f2, emissiveIntensity: 0.18 });
  add(g, rbox(w, 0.42, d, 0.2), white, 0, -0.21, 0);
  const puff = new THREE.SphereGeometry(1, 18, 12);
  let k = seed;
  const rnd = () => ((k = (k * 16807) % 2147483647) / 2147483647);
  const n = Math.round((w + d) * 2.2);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const px = Math.cos(a) * (w / 2 - 0.15), pz = Math.sin(a) * (d / 2 - 0.15);
    const m = add(g, puff, white, px, -0.22 + rnd() * 0.08, pz);
    m.scale.set(0.32 + rnd() * 0.15, 0.25 + rnd() * 0.12, 0.32 + rnd() * 0.15);
  }
  for (let i = 0; i < 3; i++) {
    const m = add(g, puff, white, (rnd() - 0.5) * w * 0.7, -0.45, (rnd() - 0.5) * d * 0.7);
    m.scale.set(w * 0.35, 0.3, d * 0.35);
  }
  return g;
}

// ---------- sky & backdrop ----------
/** Sky dome, planets, shooting stars and the cloud sea (see sky.js), plus a few distant islands. */
export function sky(scene, opts = {}) {
  const pal = { far: true, cx: 8, ...opts };
  const m = buildSky(scene, pal);
  if (!pal.far) return m;
  // distant little islands
  const far = [[-38, 4, -40, 3], [52, -2, -55, 4], [-60, 7, 10, 3.5], [45, 9, 40, 2.6], [-20, -5, 60, 4.5], [85, 3, -10, 3]];
  for (const [x, y, z, r] of far) {
    islandMeshes(scene, x, z, r, y, r * 1.4, 0x9bd57a, 0xd9a582, 0x9a7aa8);
    tree(scene, x + r * 0.2, y, z - r * 0.1, r * 0.35);
  }
}


/** A spinning golden star to collect. Returns the star record used by the game loop. */
const starGeo = new THREE.ExtrudeGeometry(starShape(0.34, 0.15), { depth: 0.1, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 });
starGeo.center();
const starMat = new THREE.MeshStandardMaterial({ color: 0xffd34d, emissive: 0xffb300, emissiveIntensity: 1.3, roughness: 0.3, metalness: 0.1 });
export function makeStar(parent, id, x, y, z, i = 0) {
  const m = add(parent, starGeo, starMat, x, y, z, { receive: false });
  m.userData.noHide = true;
  return { id, mesh: m, pos: new THREE.Vector3(x, y, z), collected: false, phase: i * 2 };
}
export function spinStars(stars, t) {
  for (const s of stars) {
    s.mesh.visible = !s.collected;
    s.mesh.rotation.y = t * 1.8 + s.phase;
    s.mesh.position.y = s.pos.y + Math.sin(t * 2.2 + s.phase) * 0.12;
  }
}

/** Soft key light with shadows + sky/ground fill. */
export function lights(parent, { sunColor = 0xfff1df, sunI = 2.6, hemiSky = 0xdfe6ff, hemiGround = 0xffd2b8, hemiI = 1.4, pos = [18, 26, 14], target = [9, 0, -2], extent = 26 } = {}) {
  const hemi = new THREE.HemisphereLight(hemiSky, hemiGround, hemiI);
  parent.add(hemi);
  const sun = new THREE.DirectionalLight(sunColor, sunI);
  sun.position.set(...pos);
  sun.target.position.set(...target);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -extent; sc.right = extent; sc.top = extent * 0.8; sc.bottom = -extent * 0.8; sc.near = 1; sc.far = 90;
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  sun.shadow.radius = 3;
  parent.add(sun, sun.target);
  return { hemi, sun };
}

/** Grass ground: soft light/dark patches and a hint of yellow, from world-space noise (no texture). */
const grassMats = new Map();
export function grassMat(color) {
  if (grassMats.has(color)) return grassMats.get(color);
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.95 });
  m.onBeforeCompile = (sh) => {
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nvarying vec3 vGW;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvGW = (modelMatrix * vec4(transformed, 1.0)).xyz;');
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', `#include <common>
      varying vec3 vGW;
      float gh(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float gn(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
        return mix(mix(gh(i), gh(i + vec2(1, 0)), f.x), mix(gh(i + vec2(0, 1)), gh(i + vec2(1, 1)), f.x), f.y); }`)
      .replace('#include <color_fragment>', `#include <color_fragment>
      { float n = gn(vGW.xz * 0.35) * 0.6 + gn(vGW.xz * 1.3) * 0.3 + gn(vGW.xz * 5.0) * 0.1;
        diffuseColor.rgb *= mix(0.84, 1.13, n);
        diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(1.12, 1.08, 0.78), smoothstep(0.62, 0.8, gn(vGW.xz * 0.18 + 3.0)) * 0.6); }`);
  };
  grassMats.set(color, m);
  return m;
}

/** One clump of three bent grass blades; normals point up so the clump is lit like the ground. */
function bladeClump() {
  const pos = [], col = [], idx = [];
  const H = 0.34, W = 0.05;
  for (let b = 0; b < 3; b++) {
    const a = b * 2.1 + 0.3, ca = Math.cos(a), sa = Math.sin(a);
    const lean = 0.06 + b * 0.025, h = H * (0.8 + b * 0.15), base = pos.length / 3;
    const ox = ca * 0.04, oz = sa * 0.04;
    // 5 vertices: two pairs and the tip
    const rows = [[0, W], [0.5, W * 0.7], [1, 0]];
    for (const [k, w] of rows) {
      const bend = lean * k * k;
      const cx = ox + ca * bend, cz = oz + sa * bend, y = h * k;
      if (w > 0) { pos.push(cx - sa * w, y, cz + ca * w, cx + sa * w, y, cz - ca * w); col.push(k, k, k, k, k, k); } else { pos.push(cx, y, cz); col.push(1, 1, 1); }
    }
    idx.push(base, base + 1, base + 2, base + 1, base + 3, base + 2, base + 2, base + 3, base + 4);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setAttribute('normal', new THREE.Float32BufferAttribute(pos.map((_, i) => (i % 3 === 1 ? 1 : 0)), 3));
  g.setAttribute('shade', new THREE.Float32BufferAttribute(col.filter((_, i) => i % 3 === 0), 1));
  g.setIndex(idx);
  return g;
}

/** Swaying grass: instanced clumps, darker at the root, light at the tip, waving in a soft wind. */
export function grassMaterial(color) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: 0.9, side: THREE.DoubleSide });
  m.onBeforeCompile = (sh) => {
    sh.uniforms.time = timeU;
    sh.vertexShader = sh.vertexShader.replace('#include <common>', '#include <common>\nuniform float time; attribute float shade; varying float vShade;')
      .replace('#include <begin_vertex>', `#include <begin_vertex>
        vShade = shade;
        #ifdef USE_INSTANCING
          vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
        #else
          vec3 ip = vec3(0.0);
        #endif
        vec3 wp0 = (modelMatrix * vec4(ip, 1.0)).xyz;
        float k = position.y / 0.34; k *= k;
        float w = sin(time * 1.9 + wp0.x * 0.55 + wp0.z * 0.35) + 0.5 * sin(time * 3.1 + wp0.x * 1.7 - wp0.z * 1.1);
        transformed.x += w * 0.05 * k;
        transformed.z += cos(time * 1.4 + wp0.z * 0.6 - wp0.x * 0.3) * 0.035 * k;`);
    sh.fragmentShader = sh.fragmentShader.replace('#include <common>', '#include <common>\nvarying float vShade;')
      .replace('#include <color_fragment>', '#include <color_fragment>\ndiffuseColor.rgb *= mix(0.55, 1.18, vShade);')
      // both sides of a blade use the same (upward) normal, so the back side isn't dark
      .replace('#include <normal_fragment_begin>', '#include <normal_fragment_begin>\nnormal = normalize(vNormal);');
  };
  return m;
}

/** Scatter instanced flowers and swaying grass on round islands, avoiding [x, z, r] spots. */
export function meadow(parent, islands, avoid, { flowerCols = [0xff9ec4, 0xffffff, 0xffe27a, 0xc6b3ff, 0xff8a8a], tuftColor = 0x7cc964 } = {}) {
  const okSpot = (x, z) => avoid.every(([ax, az, r]) => (x - ax) ** 2 + (z - az) ** 2 > r * r);
  let maxF = 0, maxT = 0;
  for (const i of islands) { maxF += i.flowers ?? 100; maxT += i.grass ?? Math.round(i.r * i.r * 9); }
  const petal = new THREE.IcosahedronGeometry(0.09, 1);
  petal.scale(1, 0.75, 1);
  const flowers = new THREE.InstancedMesh(petal, new THREE.MeshStandardMaterial({ roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.06 }), maxF);
  const stems = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.012, 0.016, 0.2, 4).translate(0, 0.1, 0), new THREE.MeshStandardMaterial({ color: 0x5fae55, roughness: 0.9 }), maxF);
  const blades = new THREE.InstancedMesh(bladeClump(), grassMaterial(tuftColor), maxT);
  const o = new THREE.Object3D(), col = new THREE.Color();
  let fi = 0, ti = 0;
  for (const { x: cx, z: cz, r: R, y = 0, flowers: nf = 100, grass, tint } of islands) {
    const nt = grass ?? Math.round(R * R * 9);
    let placed = 0, tries = 0;
    while (placed < nf + nt && tries++ < (nf + nt) * 10) {
      const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * (R - 0.45);
      const x = cx + Math.cos(a) * rr, z = cz + Math.sin(a) * rr;
      if (!okSpot(x, z)) continue;
      if (placed < nf) {
        const s = 0.8 + Math.random() * 0.6, hgt = 0.12 + Math.random() * 0.12;
        o.position.set(x, y, z); o.rotation.set(0, 0, 0); o.scale.set(1, hgt / 0.2, 1); o.updateMatrix();
        stems.setMatrixAt(fi, o.matrix);
        o.position.set(x, y + hgt, z); o.scale.setScalar(s); o.rotation.set(0, Math.random() * 3, 0); o.updateMatrix();
        flowers.setMatrixAt(fi, o.matrix); flowers.setColorAt(fi, col.setHex(flowerCols[fi % flowerCols.length])); fi++;
      } else {
        o.position.set(x, y, z); o.rotation.set(0, Math.random() * Math.PI * 2, 0);
        const s = 0.7 + Math.random() * 0.7; o.scale.set(s, s * (0.8 + Math.random() * 0.5), s); o.updateMatrix();
        blades.setMatrixAt(ti, o.matrix);
        col.setHex(tint ?? tuftColor).offsetHSL((Math.random() - 0.5) * 0.04, 0, (Math.random() - 0.5) * 0.08);
        blades.setColorAt(ti++, col);
      }
      placed++;
    }
  }
  flowers.count = fi; stems.count = fi; blades.count = ti;
  for (const m of [flowers, stems, blades]) { m.receiveShadow = true; m.castShadow = false; m.userData.noHide = true; }
  parent.add(flowers, stems, blades);
}
