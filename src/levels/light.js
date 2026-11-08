// Chapter 2 powers: Sun's DAYLIGHT and Moon's NIGHTFALL.
// Each of them carries a glow (radius R around them, measured flat on the ground, so it shines up and down).
// "Day" platforms are solid only inside Sun's glow, "night" platforms only inside Moon's, "twilight" ones
// need both glows at once. Tapping the ability button flares the glow to FLARE_R for 3 s (event 'flare').
// Lighting is computed on each phone from both players' positions; a short grace keeps a platform solid a
// moment after the light leaves it, so lag never drops anyone.
import * as THREE from 'three';
import { add, rbox } from './common.js';

export const R = 5, FLARE_R = 9, FLARE_MS = 3000, GRACE = 0.4;
const COL = {
  day: { lit: 0xffc94d, glow: 0xffa21f, ghost: 0xffe7a8 },
  night: { lit: 0xa98bff, glow: 0x7a4dff, ghost: 0xd8ccff },
  twilight: { lit: 0xff8fb8, glow: 0xff5f9e, ghost: 0xffd0e2 },
};

function auraMesh(color) {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.92, 1, 64).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.55, depthWrite: false }));
  const disc = new THREE.Mesh(new THREE.CircleGeometry(1, 64).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.07, depthWrite: false }));
  const light = new THREE.PointLight(color, 6, 9, 1.6);
  light.position.y = 1.6;
  g.add(ring, disc, light);
  g.userData.noHide = true;
  return { g, ring, disc, light };
}

/**
 * specs: [{ kind: 'day'|'night'|'twilight', x, y, z, w = 2.2, d = 2.2, h = 0.4, move? (sNow) → {x,y,z} }]
 */
export function createLights(world, colliders, specs) {
  const plats = specs.map((sp) => {
    const c = COL[sp.kind], w = sp.w ?? 2.2, d = sp.d ?? 2.2, h = sp.h ?? 0.4;
    const mat = new THREE.MeshStandardMaterial({ color: c.lit, emissive: c.glow, emissiveIntensity: 0.15, roughness: 0.45, transparent: true, opacity: 0.25 });
    const m = add(world, rbox(w, h, d, 0.14), mat, sp.x, sp.y - h / 2, sp.z);
    m.userData.noHide = true;
    // a small sun / moon / heart emblem on top so you can tell them apart even unlit
    const em = add(m, new THREE.CircleGeometry(Math.min(w, d) * 0.22, 24).rotateX(-Math.PI / 2), new THREE.MeshBasicMaterial({ color: c.glow, transparent: true, opacity: 0.6 }), 0, h / 2 + 0.01, 0, { cast: false, receive: false });
    const col = { type: 'box', x0: sp.x - w / 2, x1: sp.x + w / 2, z0: sp.z - d / 2, z1: sp.z + d / 2, top: sp.y, bottom: sp.y - h, disabled: true, dx: 0, dy: 0, dz: 0, surface: 'wood' };
    colliders.push(col);
    return { ...sp, w, d, h, m, mat, em, col, lit: 0, hold: 0, px: sp.x, py: sp.y, pz: sp.z };
  });
  const auras = { sun: auraMesh(0xffb347), moon: auraMesh(0xb08cff) };
  world.add(auras.sun.g, auras.moon.g);
  const flareUntil = { sun: 0, moon: 0 };
  let api = null, cd = { sun: 0, moon: 0 };
  const radius = (r, sNow) => (sNow < flareUntil[r] ? FLARE_R : R);
  const posOf = (r) => (api.mine().includes(r) ? api.bodies[r].pos : api.partnerPos(r === 'sun' ? 'moon' : 'sun'));

  const abilities = {
    label: (who) => (who === 'sun' ? 'Daylight' : 'Nightfall'),
    use(who) {
      const sNow = api.serverNow();
      if (cd[who] > 0) { api.sound.play('no'); return true; }
      cd[who] = 4.5;
      flareUntil[who] = sNow + FLARE_MS;
      api.sound.play(who === 'sun' ? 'shine' : 'tide');
      api.fx.sparks(api.bodies[who].pos.clone().setY(api.bodies[who].pos.y + 1), who === 'sun' ? 0xffc94d : 0xa98bff, 24, 3);
      api.send('flare', { r: who, t: Math.round(sNow) });
      return true;
    },
    onEvent(e) {
      if (e.type !== 'flare') return false;
      flareUntil[e.r] = (e.t || api.serverNow()) + FLARE_MS;
      api.sound.play(e.r === 'sun' ? 'shine' : 'tide', { vol: 0.6 });
      return true;
    },
    update(dt, sNow, t) {
      cd.sun -= dt; cd.moon -= dt;
      const P = { sun: posOf('sun'), moon: posOf('moon') };
      const rad = { sun: radius('sun', sNow), moon: radius('moon', sNow) };
      for (const r of ['sun', 'moon']) {
        const a = auras[r];
        a.g.visible = !!P[r];
        if (!P[r]) continue;
        a.g.position.set(P[r].x, P[r].y + 0.04, P[r].z);
        const cur = a.ring.scale.x || R, k = cur + (rad[r] - cur) * Math.min(1, dt * 8);
        a.ring.scale.setScalar(k); a.disc.scale.setScalar(k);
        a.ring.material.opacity = 0.4 + Math.sin(t * 3) * 0.12 + (rad[r] > R ? 0.25 : 0);
        a.light.intensity = rad[r] > R ? 14 : 6;
      }
      const inside = (r, p) => P[r] && Math.hypot(P[r].x - p.x, P[r].z - p.z) < rad[r] + Math.min(p.w, p.d) * 0.35;
      for (const p of plats) {
        if (p.move) {
          const q = p.move(sNow);
          p.col.dx = q.x - p.px; p.col.dy = q.y - p.py; p.col.dz = q.z - p.pz;
          p.px = q.x; p.py = q.y; p.pz = q.z;
          p.x = q.x; p.y = q.y; p.z = q.z;
          p.m.position.set(q.x, q.y - p.h / 2, q.z);
          Object.assign(p.col, { x0: q.x - p.w / 2, x1: q.x + p.w / 2, z0: q.z - p.d / 2, z1: q.z + p.d / 2, top: q.y, bottom: q.y - p.h });
        }
        const on = p.kind === 'day' ? inside('sun', p) : p.kind === 'night' ? inside('moon', p) : inside('sun', p) && inside('moon', p);
        p.hold = on ? GRACE : p.hold - dt;
        const solid = p.hold > 0;
        p.col.disabled = !solid;
        p.lit += ((solid ? 1 : 0) - p.lit) * Math.min(1, dt * 10);
        p.mat.opacity = 0.22 + p.lit * 0.78;
        p.mat.emissiveIntensity = 0.12 + p.lit * 0.55 + (solid && p.hold < GRACE ? Math.sin(t * 30) * 0.2 : 0);
        p.mat.transparent = p.lit < 0.98;
        p.mat.depthWrite = p.lit > 0.5;
        p.em.material.opacity = 0.35 + p.lit * 0.6;
      }
    },
  };
  return { abilities, attach(a) { api = a; }, plats, flareUntil };
}
