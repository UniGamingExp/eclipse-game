// Cheap houses for the edges of a town: one instanced box with a painted facade and one instanced roof.
// The kit houses cost about 30,000 triangles each; these cost 20. Use them wherever nobody walks right up to.
import * as THREE from 'three';

let facadeT = null;
function facade() {
  if (facadeT) return facadeT;
  const cv = document.createElement('canvas');
  cv.width = 256; cv.height = 256;
  const g = cv.getContext('2d');
  g.fillStyle = '#ffffff'; g.fillRect(0, 0, 256, 256);
  // timber frame
  g.strokeStyle = '#6a4a38'; g.lineWidth = 7;
  g.strokeRect(3, 3, 250, 250);
  for (const y of [86, 170]) { g.beginPath(); g.moveTo(0, y); g.lineTo(256, y); g.stroke(); }
  for (const x of [86, 170]) { g.beginPath(); g.moveTo(x, 0); g.lineTo(x, 256); g.stroke(); }
  // windows with shutters, a door bottom-middle
  for (let j = 0; j < 3; j++) for (let i = 0; i < 3; i++) {
    const x = i * 85 + 26, y = j * 85 + 20;
    if (j === 2 && i === 1) { g.fillStyle = '#6a4a38'; g.fillRect(x + 2, y + 2, 34, 62); continue; }
    g.fillStyle = '#7a5a48'; g.fillRect(x - 9, y, 9, 46); g.fillRect(x + 36, y, 9, 46);
    g.fillStyle = (i + j) % 3 ? '#3a4466' : '#ffd08a'; g.fillRect(x, y, 36, 46);
    g.strokeStyle = '#f4efe6'; g.lineWidth = 3; g.strokeRect(x, y, 36, 46); g.beginPath(); g.moveTo(x + 18, y); g.lineTo(x + 18, y + 46); g.stroke();
    g.strokeStyle = '#6a4a38'; g.lineWidth = 7;
  }
  facadeT = new THREE.CanvasTexture(cv);
  facadeT.colorSpace = THREE.SRGBColorSpace;
  facadeT.anisotropy = 4;
  return facadeT;
}

const TINTS = [0xf2e6d2, 0xe8d8c0, 0xf4dcc8, 0xe2d4c4, 0xd8c8b8, 0xf0e0b8];
const ROOFS = [0xc8553a, 0xb84a34, 0xd0603e, 0xa84a3a];

/** list: [{ x, z, w, d, h, rotY }]  (w across the front, d deep, h to the eaves) */
export function backdropHouses(parent, list) {
  if (!list.length) return null;
  const box = new THREE.BoxGeometry(1, 1, 1).translate(0, 0.5, 0);
  // a roof prism: ridge along x, 1 wide, 1 deep, 1 high
  const roof = new THREE.BufferGeometry();
  const P = [[-0.5, 0, 0.5], [0.5, 0, 0.5], [0.5, 0, -0.5], [-0.5, 0, -0.5], [-0.5, 1, 0], [0.5, 1, 0]];
  const F = [[0, 1, 5], [0, 5, 4], [2, 3, 4], [2, 4, 5], [3, 0, 4], [1, 2, 5]];
  const pos = [];
  for (const f of F) for (const i of f) pos.push(...P[i]);
  roof.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  roof.computeVertexNormals();
  const bm = new THREE.InstancedMesh(box, new THREE.MeshStandardMaterial({ map: facade(), roughness: 0.95 }), list.length);
  const rm = new THREE.InstancedMesh(roof, new THREE.MeshStandardMaterial({ roughness: 0.9 }), list.length);
  const o = new THREE.Object3D(), c = new THREE.Color();
  list.forEach((q, i) => {
    o.position.set(q.x, 0, q.z); o.rotation.set(0, q.rotY || 0, 0); o.scale.set(q.w, q.h, q.d); o.updateMatrix();
    bm.setMatrixAt(i, o.matrix); bm.setColorAt(i, c.setHex(TINTS[(i * 7 + Math.round(q.x)) % TINTS.length < 0 ? 0 : Math.abs(i * 7 + Math.round(q.x)) % TINTS.length]));
    o.position.set(q.x, q.h, q.z); o.scale.set(q.w + 0.8, 3.2, q.d + 0.8); o.updateMatrix();
    rm.setMatrixAt(i, o.matrix); rm.setColorAt(i, c.setHex(ROOFS[Math.abs(i * 5 + Math.round(q.z)) % ROOFS.length]));
  });
  for (const m of [bm, rm]) { m.castShadow = true; m.receiveShadow = true; m.userData.noHide = true; m.frustumCulled = false; parent.add(m); }
  return { bm, rm };
}
