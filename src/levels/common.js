// Shared building blocks for all levels: materials, rounded toy blocks, floating islands, trees,
// signs, clouds, sky dome and the sea of clouds below.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { starShape } from '../effects.js';

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
  const cap = add(g, new THREE.LatheGeometry(capPts, 64), mat(grass), 0, 0, 0, { cast: false });
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
export function sky(scene, opts = {}) {
  const pal = { top: '#7d8fe6', mid: '#ffc9dc', low: '#ffe7cf', cloud: 0xffd9e8, far: true, cx: 8, ...opts };
  const geo = new THREE.SphereGeometry(400, 32, 16);
  const m = new THREE.Mesh(geo, new THREE.ShaderMaterial({
    side: THREE.BackSide, depthWrite: false, fog: false,
    uniforms: {
      top: { value: new THREE.Color(pal.top) },
      mid: { value: new THREE.Color(pal.mid) },
      low: { value: new THREE.Color(pal.low) },
    },
    vertexShader: 'varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
    fragmentShader: `uniform vec3 top; uniform vec3 mid; uniform vec3 low; varying vec3 vP;
      void main(){ float h = vP.y; vec3 c = h > 0.0 ? mix(mid, top, smoothstep(0.02, 0.55, h)) : mix(mid, low, smoothstep(0.0, -0.35, h));
      gl_FragColor = vec4(c, 1.0);
      #include <colorspace_fragment>
      }`,
  }));
  m.renderOrder = -10;
  m.frustumCulled = false;
  scene.add(m);

  // sea of clouds far below
  const puff = new THREE.SphereGeometry(1, 14, 10);
  const n = 150;
  const im = new THREE.InstancedMesh(puff, new THREE.MeshStandardMaterial({ color: 0xffffff, emissive: pal.cloud, emissiveIntensity: 0.35, roughness: 1 }), n);
  const o = new THREE.Object3D();
  for (let i = 0; i < n; i++) {
    const a = Math.random() * Math.PI * 2, r = 10 + Math.pow(Math.random(), 0.7) * 150;
    o.position.set(Math.cos(a) * r + pal.cx, -13 - Math.random() * 4, Math.sin(a) * r);
    const s = 4 + Math.random() * 7;
    o.scale.set(s * 1.4, s * 0.5, s);
    o.updateMatrix();
    im.setMatrixAt(i, o.matrix);
  }
  scene.add(im);

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

/** Scatter instanced flowers and grass tufts on round islands, avoiding [x, z, r] spots. */
export function meadow(parent, islands, avoid, { flowerCols = [0xff9ec4, 0xffffff, 0xffe27a, 0xc6b3ff, 0xff8a8a], tuftColor = 0x7cc964 } = {}) {
  const okSpot = (x, z) => avoid.every(([ax, az, r]) => (x - ax) ** 2 + (z - az) ** 2 > r * r);
  const maxF = 260, maxT = 420;
  const flowers = new THREE.InstancedMesh(new THREE.SphereGeometry(0.085, 8, 6), new THREE.MeshStandardMaterial({ roughness: 0.7 }), maxF);
  const tufts = new THREE.InstancedMesh(new THREE.ConeGeometry(0.07, 0.3, 4), new THREE.MeshStandardMaterial({ color: tuftColor, roughness: 0.9, flatShading: true }), maxT);
  const o = new THREE.Object3D(), col = new THREE.Color();
  let fi = 0, ti = 0;
  for (const { x: cx, z: cz, r: R, y = 0, flowers: nf = 100, tufts: nt = 160 } of islands) {
    let placed = 0, tries = 0;
    while (placed < nf + nt && tries++ < (nf + nt) * 10) {
      const a = Math.random() * Math.PI * 2, rr = Math.sqrt(Math.random()) * (R - 0.6);
      const x = cx + Math.cos(a) * rr, z = cz + Math.sin(a) * rr;
      if (!okSpot(x, z)) continue;
      if (placed < nf && fi < maxF) {
        o.position.set(x, y + 0.09, z); o.scale.setScalar(0.8 + Math.random() * 0.6); o.rotation.set(0, 0, 0); o.updateMatrix();
        flowers.setMatrixAt(fi, o.matrix); flowers.setColorAt(fi, col.setHex(flowerCols[fi % flowerCols.length])); fi++;
      } else if (ti < maxT) {
        o.position.set(x, y + 0.12, z); o.scale.set(1, 0.7 + Math.random() * 0.8, 1); o.rotation.set((Math.random() - 0.5) * 0.4, 0, (Math.random() - 0.5) * 0.4); o.updateMatrix();
        tufts.setMatrixAt(ti++, o.matrix);
      }
      placed++;
    }
  }
  flowers.count = fi; tufts.count = ti;
  flowers.receiveShadow = true; tufts.receiveShadow = true;
  parent.add(flowers, tufts);
}
