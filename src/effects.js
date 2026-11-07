// Little visual effects: hearts, shine burst, tide ripple, dust puffs, star sparkles, ambient fireflies.
import * as THREE from 'three';

export function heartShape(s = 1) {
  const h = new THREE.Shape();
  h.moveTo(0, -0.35 * s);
  h.bezierCurveTo(-0.15 * s, -0.22 * s, -0.5 * s, -0.02 * s, -0.5 * s, 0.2 * s);
  h.bezierCurveTo(-0.5 * s, 0.42 * s, -0.25 * s, 0.52 * s, 0, 0.32 * s);
  h.bezierCurveTo(0.25 * s, 0.52 * s, 0.5 * s, 0.42 * s, 0.5 * s, 0.2 * s);
  h.bezierCurveTo(0.5 * s, -0.02 * s, 0.15 * s, -0.22 * s, 0, -0.35 * s);
  return h;
}
export function starShape(outer = 0.5, inner = 0.22) {
  const s = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const a = Math.PI / 2 + (i / 10) * Math.PI * 2;
    const r = i % 2 ? inner : outer;
    if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r); else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  s.closePath();
  return s;
}

const heartGeo = new THREE.ShapeGeometry(heartShape(0.6), 12);
const puffGeo = new THREE.SphereGeometry(1, 10, 8);
const ringGeo = new THREE.RingGeometry(0.86, 1, 48);
ringGeo.rotateX(-Math.PI / 2);
const sparkGeo = new THREE.OctahedronGeometry(0.07, 0);

export class Effects {
  constructor(scene, camera) {
    this.scene = scene;
    this.camera = camera;
    this.items = [];
    this._initFireflies();
  }

  _add(obj, life, update) {
    this.scene.add(obj);
    this.items.push({ obj, life, age: 0, update });
  }

  hearts(pos, color = 0xff5fa2) {
    for (let i = 0; i < 4; i++) {
      const m = new THREE.Mesh(heartGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(2.2), transparent: true, side: THREE.DoubleSide, depthWrite: false }));
      const ox = (Math.random() - 0.5) * 0.7, oz = (Math.random() - 0.5) * 0.7, delay = i * 0.14;
      m.position.copy(pos).add(new THREE.Vector3(ox, 1.1, oz));
      m.scale.setScalar(0.001);
      const base = m.position.clone();
      this._add(m, 1.8 + delay, (it, dt) => {
        const a = Math.max(0, it.age - delay);
        const s = Math.min(1, a * 5) * (0.55 + i * 0.12);
        m.scale.setScalar(Math.max(0.001, s));
        m.position.set(base.x + Math.sin(a * 6 + i) * 0.15, base.y + a * 1.2, base.z);
        m.quaternion.copy(this.camera.quaternion);
        m.material.opacity = Math.min(1, (it.life - it.age) * 2);
      });
    }
  }

  shine(char) {
    char.glow.intensity = 40;
    const m = new THREE.Mesh(puffGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.15, 0.4), transparent: true, opacity: 0.5, depthWrite: false, blending: THREE.AdditiveBlending }));
    m.position.copy(char.root.position).add(new THREE.Vector3(0, 0.55, 0));
    this._add(m, 0.7, (it) => {
      const k = it.age / it.life;
      m.scale.setScalar(0.5 + k * 3.2);
      m.material.opacity = 0.45 * (1 - k);
    });
    this.sparks(char.root.position, 0xffd060, 14, 1.2);
  }

  tide(char) {
    char.glow.intensity = 25;
    for (let i = 0; i < 3; i++) {
      const m = new THREE.Mesh(ringGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(0.6, 0.75, 2.0), transparent: true, depthWrite: false, side: THREE.DoubleSide }));
      m.position.copy(char.root.position).add(new THREE.Vector3(0, 0.06, 0));
      const delay = i * 0.18;
      m.scale.setScalar(0.001);
      this._add(m, 1.1 + delay, (it) => {
        const a = Math.max(0, it.age - delay), k = Math.min(1, a / 1.1);
        m.scale.setScalar(0.3 + k * 3.5);
        m.material.opacity = a > 0 ? 0.9 * (1 - k) : 0;
      });
    }
  }

  dust(pos, n = 6) {
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(puffGeo, new THREE.MeshStandardMaterial({ color: 0xffffff, transparent: true, opacity: 0.8, roughness: 1, depthWrite: false }));
      const a = (i / n) * Math.PI * 2 + Math.random();
      const v = new THREE.Vector3(Math.cos(a) * 1.6, 0.4 + Math.random() * 0.4, Math.sin(a) * 1.6);
      m.position.copy(pos).add(new THREE.Vector3(0, 0.08, 0));
      this._add(m, 0.45, (it, dt) => {
        m.position.addScaledVector(v, dt);
        v.multiplyScalar(0.9);
        const k = it.age / it.life;
        m.scale.setScalar(0.08 + k * 0.14);
        m.material.opacity = 0.8 * (1 - k);
      });
    }
  }

  sparks(pos, color = 0xffe27a, n = 18, speed = 2.5) {
    for (let i = 0; i < n; i++) {
      const m = new THREE.Mesh(sparkGeo, new THREE.MeshBasicMaterial({ color: new THREE.Color(color).multiplyScalar(2.5), transparent: true, depthWrite: false }));
      const dir = new THREE.Vector3(Math.random() - 0.5, Math.random() * 0.9 + 0.2, Math.random() - 0.5).normalize().multiplyScalar(speed * (0.6 + Math.random() * 0.6));
      m.position.copy(pos).add(new THREE.Vector3(0, 0.6, 0));
      this._add(m, 0.9, (it, dt) => {
        m.position.addScaledVector(dir, dt);
        dir.y -= 4 * dt;
        m.rotation.x += dt * 8; m.rotation.y += dt * 6;
        m.material.opacity = 1 - it.age / it.life;
      });
    }
  }

  _initFireflies() {
    const n = 90, pos = new Float32Array(n * 3);
    this.ffSeed = [];
    for (let i = 0; i < n; i++) {
      const a = Math.random() * Math.PI * 2, r = 2 + Math.random() * 24;
      this.ffSeed.push({ x: Math.cos(a) * r + 6, y: 0.6 + Math.random() * 6, z: Math.sin(a) * r - 2, p: Math.random() * 10 });
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    const tex = (() => {
      const c = document.createElement('canvas'); c.width = c.height = 64;
      const x = c.getContext('2d');
      const grd = x.createRadialGradient(32, 32, 0, 32, 32, 32);
      grd.addColorStop(0, 'rgba(255,255,255,1)'); grd.addColorStop(0.3, 'rgba(255,240,200,0.8)'); grd.addColorStop(1, 'rgba(255,220,180,0)');
      x.fillStyle = grd; x.fillRect(0, 0, 64, 64);
      return new THREE.CanvasTexture(c);
    })();
    this.fireflies = new THREE.Points(g, new THREE.PointsMaterial({ size: 0.28, map: tex, color: new THREE.Color(1.8, 1.5, 1.0), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    this.fireflies.frustumCulled = false;
    this.scene.add(this.fireflies);
  }

  update(dt, t) {
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      it.age += dt;
      if (it.age >= it.life) {
        this.scene.remove(it.obj);
        it.obj.material?.dispose();
        this.items.splice(i, 1);
        continue;
      }
      it.update(it, dt);
    }
    const p = this.fireflies.geometry.attributes.position;
    for (let i = 0; i < this.ffSeed.length; i++) {
      const s = this.ffSeed[i];
      p.setXYZ(i, s.x + Math.sin(t * 0.3 + s.p) * 1.2, s.y + Math.sin(t * 0.7 + s.p * 2) * 0.5, s.z + Math.cos(t * 0.25 + s.p) * 1.2);
    }
    p.needsUpdate = true;
  }
}
