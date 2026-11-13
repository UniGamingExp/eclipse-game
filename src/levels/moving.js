// Chapter 3 powers: Sun's STRONGMAN and Moon's TAPE GUN.
//  • Sun picks up a moving box (ability near a box), carries it over his head and puts it down in front of him.
//    Boxes stack: put one down next to another and it lands on top. Stacks are how you climb high walls.
//  • Moon tapes glowing posts together (ability near a post). A "walk" tape becomes a sticky tape bridge
//    straight across a gap; a "zip" tape runs from a high post down to a low one: stand at the top and press
//    the ability ("Zip!") to slide down it, hanging on with both hands (jump lets go).
//  • Stacks taller than two boxes wobble: stand on the third box or higher and the stack crashes (the boxes go
//    back where they came from), unless Moon has taped the stack (ability next to it: "Tape stack").
// Shared state lives in the save (save.<key>.b.<boxId> = [x,y,z] | 'sun', save.<key>.t.<tapeId> = 1,
// save.<key>.tb.<boxId> = 1 for taped boxes);
// only Sun's phone moves boxes and only Moon's phone tapes, so the two phones never fight over a value.
import * as THREE from 'three';
import { add, rbox, mat } from './common.js';
import { MODE } from '../characters.js';

export const BOX = 1.1;            // box size (m)
const ZIP_SPEED = 9, HANG = 0.4;   // m/s along a zipline; hands above the head

function labelTex() {
  const cv = document.createElement('canvas');
  cv.width = 256; cv.height = 128;
  const g = cv.getContext('2d');
  g.fillStyle = '#f3dcb4'; g.fillRect(0, 0, 256, 128);
  g.strokeStyle = '#8a5a2b'; g.lineWidth = 6; g.strokeRect(6, 6, 244, 116);
  g.fillStyle = '#5a3a1e'; g.font = 'bold 46px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('HALLE ➜', 128, 54);
  g.font = 'bold 26px sans-serif'; g.fillStyle = '#c0392b'; g.fillText('♥ fragile ♥', 128, 98);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}
function tapeTex() {
  const cv = document.createElement('canvas');
  cv.width = 128; cv.height = 64;
  const g = cv.getContext('2d');
  g.fillStyle = '#c9a4ff'; g.fillRect(0, 0, 128, 64);
  g.fillStyle = '#e9dbff'; g.fillRect(0, 4, 128, 6); g.fillRect(0, 54, 128, 6);
  g.fillStyle = '#ff7eb6'; g.font = 'bold 30px sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('♥', 32, 33); g.fillStyle = '#fff6c0'; g.fillText('☾', 96, 33);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.wrapS = THREE.RepeatWrapping;
  return t;
}

/**
 * boxes: [{ id, x, y, z }] (y = bottom of the box)
 * tapes: [{ id, a: [x,y,z], b: [x,y,z], kind: 'walk' | 'zip' }]  (a, b = where the tape is fixed, at post tops;
 *         'walk' tapes must be level and run along x or z; 'zip' runs from the high end a to the low end b)
 */
export function createMoving(world, colliders, { boxes = [], tapes = [], key = 'ch3', killY = -20, wobble = false } = {}) {
  let api = null;
  const st = () => (api?.save?.[key]) || {};
  const label = labelTex(), tapeT = tapeTex();
  const cardboard = mat(0xd09a5e, { roughness: 0.85 }), stripe = mat(0xe8c983, { roughness: 0.5 });
  const labelM = new THREE.MeshStandardMaterial({ map: label, roughness: 0.8 });
  const tapeBandM = new THREE.MeshStandardMaterial({ map: tapeT, roughness: 0.35, emissive: 0x5a3aa0, emissiveIntensity: 0.3 });

  // ---------- boxes ----------
  const B = boxes.map((b) => {
    const g = new THREE.Group();
    add(g, rbox(BOX, BOX, BOX, 0.06), cardboard, 0, BOX / 2, 0);
    add(g, new THREE.BoxGeometry(BOX + 0.01, 0.02, 0.22), stripe, 0, BOX + 0.002, 0, { cast: false });
    for (const s of [1, -1]) {
      add(g, new THREE.BoxGeometry(BOX + 0.01, 0.22, 0.02), stripe, 0, BOX - 0.11, s * (BOX / 2 + 0.003), { cast: false });
      const l = add(g, new THREE.PlaneGeometry(0.62, 0.31), labelM, 0, BOX * 0.45, s * (BOX / 2 + 0.006), { cast: false });
      if (s < 0) l.rotation.y = Math.PI;
    }
    // a box that won't close: two lid flaps that keep popping up until Moon tapes it shut
    const flaps = [];
    if (b.open) {
      for (const sd of [1, -1]) {
        const hinge = new THREE.Group();
        hinge.position.set(0, BOX, sd * BOX / 2);
        add(hinge, new THREE.BoxGeometry(BOX - 0.02, 0.03, BOX / 2).translate(0, 0, -sd * BOX / 4), cardboard, 0, 0, 0, { cast: false });
        hinge.userData.sd = sd;
        g.add(hinge);
        flaps.push(hinge);
      }
    }
    const shutTape = b.open ? add(g, new THREE.BoxGeometry(0.24, 0.025, BOX + 0.04), tapeBandM, 0, BOX + 0.02, 0, { cast: false }) : null;
    if (shutTape) shutTape.visible = false;
    const band = new THREE.Group();   // Moon's tape, wrapped round the box when the stack is taped
    for (const r of [0, Math.PI / 2]) { const m = add(band, new THREE.BoxGeometry(0.2, BOX + 0.03, BOX + 0.03), tapeBandM, 0, BOX / 2, 0, { cast: false }); m.rotation.y = r; }
    band.visible = false;
    g.add(band);
    g.position.set(b.x, b.y, b.z);
    world.add(g);
    const col = { type: 'box', x0: 0, x1: 0, z0: 0, z1: 0, top: 0, bottom: 0, surface: 'wood', box: true };
    colliders.push(col);
    const o = { id: b.id, home: new THREE.Vector3(b.x, b.y, b.z), rest: new THREE.Vector3(b.x, b.y, b.z), by: null, g, col, shownY: b.y, pend: null, band, tpend: 0, open: !!b.open, flaps, shutTape, spend: 0 };
    setCol(o);
    return o;
  });
  function setCol(o) {
    const h = BOX / 2;
    Object.assign(o.col, { x0: o.rest.x - h, x1: o.rest.x + h, z0: o.rest.z - h, z1: o.rest.z + h, bottom: o.rest.y, top: o.rest.y + BOX, disabled: !!o.by });
  }
  const boxState = (o) => (o.pend && performance.now() - o.pend.t < 2500 ? o.pend.v : st().b?.[o.id]);
  const setBox = (o, v) => { o.pend = { v, t: performance.now() }; api.setSave(`${key}/b/${o.id}`, v); };

  // ---------- tapes ----------
  const postM = mat(0x8a6bd0, { roughness: 0.5 }), ringM = new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.2, 2.4), transparent: true, opacity: 0.8 });
  const bandM = new THREE.MeshStandardMaterial({ map: tapeT, roughness: 0.35, emissive: 0x5a3aa0, emissiveIntensity: 0.25, side: THREE.DoubleSide });
  const T = tapes.map((tp) => {
    const a = new THREE.Vector3(...tp.a), b = new THREE.Vector3(...tp.b);
    // posts: where they stand (base) and how tall; zip posts hold the line at their top, walk-tape posts stand beside it
    const ph = tp.ph ?? (tp.kind === 'zip' ? 2.0 : 1.3);
    const bases = [tp.pa, tp.pb].map((q, i) => (q ? new THREE.Vector3(...q) : (i ? b : a).clone().setY((i ? b : a).y - (tp.kind === 'zip' ? ph : 0))));
    const posts = bases.map((p) => {
      const g = new THREE.Group();
      g.position.set(p.x, p.y, p.z);
      add(g, new THREE.CylinderGeometry(0.09, 0.12, ph, 10), postM, 0, ph / 2, 0);
      add(g, new THREE.TorusGeometry(0.18, 0.07, 8, 20), mat(0xc9a4ff), 0, ph + 0.06, 0).rotation.x = Math.PI / 2;
      const ring = add(g, new THREE.TorusGeometry(0.34, 0.035, 6, 32), ringM.clone(), 0, ph + 0.06, 0, { cast: false });
      ring.rotation.x = Math.PI / 2;
      g.userData.noHide = true;
      world.add(g);
      colliders.push({ type: 'cyl', x: p.x, z: p.z, r: 0.12, top: p.y + ph + 0.1, bottom: p.y, noGrab: true, noStep: true, noCam: true });
      return { g, ring, base: p };
    });
    // the tape itself, built along +x from a, then turned toward b; grows when it is stuck on
    const len = a.distanceTo(b);
    const g = new THREE.Group();
    g.position.copy(a);
    world.add(g);
    g.userData.noHide = true;
    let col = null;
    if (tp.kind === 'walk') {
      const geo = new THREE.BoxGeometry(len, 0.05, 1.3).translate(len / 2, -0.03, 0);
      const uv = geo.attributes.uv;
      for (let i = 0; i < uv.count; i++) uv.setX(i, uv.getX(i) * len / 1.3);
      const m = new THREE.Mesh(geo, bandM);
      m.receiveShadow = true;
      g.add(m);
      const alongX = Math.abs(b.x - a.x) > Math.abs(b.z - a.z);
      col = alongX
        ? { type: 'box', x0: Math.min(a.x, b.x), x1: Math.max(a.x, b.x), z0: a.z - 0.65, z1: a.z + 0.65, top: a.y, bottom: a.y - 0.3, surface: 'carpet', disabled: true, safe: false }
        : { type: 'box', x0: a.x - 0.65, x1: a.x + 0.65, z0: Math.min(a.z, b.z), z1: Math.max(a.z, b.z), top: a.y, bottom: a.y - 0.3, surface: 'carpet', disabled: true, safe: false };
      colliders.push(col);
    } else {
      const pts = [];
      for (let i = 0; i <= 24; i++) { const u = i / 24; pts.push(new THREE.Vector3(u * len, -4 * 0.5 * u * (1 - u), 0)); }
      g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 48, 0.06, 6), bandM));
    }
    // aim the +x axis from a to b
    const dir = b.clone().sub(a).normalize();
    g.quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), dir);
    if (tp.kind === 'zip') {
      // keep the sag pointing down: roll the group so its local -y is as close to world down as possible
      const up = new THREE.Vector3(0, 1, 0).applyQuaternion(g.quaternion);
      const want = new THREE.Vector3(0, 1, 0).sub(dir.clone().multiplyScalar(dir.y)).normalize();
      const roll = Math.atan2(new THREE.Vector3().crossVectors(up, want).dot(dir), up.dot(want));
      g.quaternion.premultiply(new THREE.Quaternion().setFromAxisAngle(dir, roll));
    }
    g.scale.set(0.001, 1, 1);
    g.visible = false;
    return { ...tp, a, b, len, g, col, posts, on: false, grow: 0 };
  });
  const tapeOn = (t) => !!st().t?.[t.id] || (t.pend && performance.now() - t.pend < 2500);

  // ---------- helpers ----------
  const posOf = (r) => (api.mine().includes(r) ? api.bodies[r].pos : api.partnerPos(r));
  const flat = (p, q) => Math.hypot(p.x - q.x, p.z - q.z);
  const restingBoxes = () => B.filter((o) => !o.by);
  const boxOnTop = (o) => restingBoxes().some((q) => q !== o && Math.abs(q.rest.x - o.rest.x) < 0.6 && Math.abs(q.rest.z - o.rest.z) < 0.6 && Math.abs(q.rest.y - (o.rest.y + BOX)) < 0.2);
  function nearBox(P) {
    let best = null, bd = 1e9;
    for (const o of restingBoxes()) {
      const d = flat(P, o.rest);
      const standingOn = d < BOX / 2 + 0.1 && Math.abs(P.y - (o.rest.y + BOX)) < 0.2;
      if (standingOn || d > BOX / 2 + 0.95 || o.rest.y < P.y - BOX - 0.35 || o.rest.y > P.y + 0.7 || boxOnTop(o)) continue;
      if (d < bd) { bd = d; best = o; }
    }
    return best;
  }
  const carried = () => B.find((o) => o.by === 'sun');
  const isShut = (o) => !o.open || !!st().shut?.[o.id] || performance.now() - o.spend < 2500;
  function nearOpen(P) {
    for (const o of restingBoxes()) if (!isShut(o) && flat(P, o.rest) < BOX / 2 + 1.4 && Math.abs(P.y - o.rest.y) < 1.8) return o;
    return null;
  }
  const taped = (o) => !!st().tb?.[o.id] || performance.now() - o.tpend < 2500;
  /** the boxes standing in the same column as o, bottom first */
  const column = (o) => restingBoxes().filter((q) => Math.abs(q.rest.x - o.rest.x) < 0.3 && Math.abs(q.rest.z - o.rest.z) < 0.3).sort((a, b) => a.rest.y - b.rest.y);
  function nearStack(P) {
    let best = null, bd = 1e9;
    for (const o of restingBoxes()) {
      const col = column(o);
      if (col.length < 2 || col[0] !== o || col.every(taped)) continue;
      const d = flat(P, o.rest);
      if (d > BOX / 2 + 1.4 || P.y < o.rest.y - 1.0 || P.y > col[col.length - 1].rest.y + BOX + 0.6) continue;
      if (d < bd) { bd = d; best = col; }
    }
    return best;
  }
  let crashCd = 0;
  function nearPost(P) {
    for (const t of T) {
      if (tapeOn(t)) continue;
      for (const p of t.posts) if (flat(P, p.base) < 2.3 && P.y > p.base.y - 1.0 && P.y < p.base.y + 1.6) return t;
    }
    return null;
  }
  function nearZip(P) {
    for (const t of T) if (t.kind === 'zip' && tapeOn(t) && t.grow > 0.95 && flat(P, t.posts[0].base) < 1.9 && Math.abs(P.y - t.posts[0].base.y) < 1.0) return t;
    return null;
  }
  /** where a box put down at x,z (bottom no higher than maxY) would land; null if blocked */
  function landing(x, z, maxY, ignore) {
    // stack: snap onto a nearby column
    for (const o of restingBoxes()) {
      if (o === ignore || Math.abs(o.rest.x - x) > 0.75 || Math.abs(o.rest.z - z) > 0.75) continue;
      x = o.rest.x; z = o.rest.z;
      break;
    }
    const h = BOX / 2 - 0.12;
    let y = -Infinity;
    for (const c of colliders) {
      if (c.disabled || c === ignore?.col) continue;
      const top = c.top;
      if (top > maxY + 0.01) continue;
      const hit = c.type === 'box' ? (x + h > c.x0 && x - h < c.x1 && z + h > c.z0 && z - h < c.z1) : Math.hypot(x - c.x, z - c.z) < c.r + h;
      if (hit && top > y) y = top;
    }
    // something solid in the way of the box itself?
    for (const c of colliders) {
      if (c.disabled || c === ignore?.col || c.top <= y + 0.05 || c.bottom >= y + BOX - 0.05) continue;
      const hit = c.type === 'box' ? (x + h > c.x0 && x - h < c.x1 && z + h > c.z0 && z - h < c.z1) : Math.hypot(x - c.x, z - c.z) < c.r + h - 0.05;
      if (hit) return null;
    }
    return { x, y, z };
  }

  const abilities = {
    /** true when this power should answer the ability button before the usual Lift */
    first(who) {
      const P = api.bodies[who].pos;
      if (who === 'sun') return !!carried() || !!nearZip(P) || !!nearBox(P);
      return !!nearPost(P) || !!nearZip(P) || !!nearStack(P) || !!nearOpen(P);
    },
    label(who) {
      const P = api.bodies[who].pos;
      if (who === 'sun') { const nb = nearBox(P); return carried() ? 'Put down' : nearZip(P) ? 'Zip!' : nb ? (isShut(nb) ? 'Pick up' : 'Won\'t close!') : 'Strongman'; }
      return nearZip(P) ? 'Zip!' : nearPost(P) ? 'Tape!' : nearOpen(P) ? 'Tape shut' : nearStack(P) ? 'Tape stack' : 'Tape gun';
    },
    use(who) {
      const ctl = api.ctls[who], P = api.bodies[who].pos;
      if (who === 'sun') {
        const c = carried();
        if (c) {
          const yaw = api.chars.sun.yaw;
          for (const d of [1.2, 0.85, 1.6]) {
            const L = landing(P.x + Math.sin(yaw) * d, P.z + Math.cos(yaw) * d, P.y + 1.25, c);
            if (!L) continue;
            if (L.y < killY) {   // over the river: it floats back home
              setBox(c, null);
              api.toast('Splash! 📦 The box floated back to where it was');
              api.sound.play('bounce');
              return true;
            }
            setBox(c, [+L.x.toFixed(2), +L.y.toFixed(2), +L.z.toFixed(2)]);
            api.sound.play('land');
            api.fx.sparks(new THREE.Vector3(L.x, L.y + 0.2, L.z), 0xe8c983, 10, 2);
            return true;
          }
          api.sound.play('no');
          return true;
        }
      }
      const z = nearZip(P);
      if (z && ctl.state === 'free') {
        ctl.state = 'ride'; ctl.rideId = z.id; ctl.rideU = 0;
        ctl.anim = MODE.hang;
        api.sound.play('dash');
        return true;
      }
      if (who === 'sun') {
        const o = nearBox(P);
        if (!o) return false;
        if (!isShut(o)) { api.sound.play('no'); api.toast('It won\'t close! 📦 Moon: tape it shut ✦'); return true; }
        setBox(o, 'sun');
        if (st().tb?.[o.id]) api.setSave(`${key}/tb/${o.id}`, null);   // picked up: its tape comes off
        api.sound.play('jump2');
        return true;
      }
      const t = nearPost(P);
      const ob = !t && nearOpen(P);
      if (ob) {
        ob.spend = performance.now();
        api.setSave(`${key}/shut/${ob.id}`, 1);
        api.sound.play('pin');
        api.fx.sparks(new THREE.Vector3(ob.rest.x, ob.rest.y + BOX, ob.rest.z), 0xc9a4ff, 16, 2.5);
        return true;
      }
      if (!t) {
        const col = nearStack(P);
        if (col) {
          for (const o of col) { o.tpend = performance.now(); api.setSave(`${key}/tb/${o.id}`, 1); }
          api.sound.play('pin');
          api.fx.sparks(new THREE.Vector3(col[0].rest.x, col[0].rest.y + col.length * BOX * 0.5, col[0].rest.z), 0xc9a4ff, 22, 3);
          api.toast('Taped! 💜 This stack won\'t wobble now');
          return true;
        }
        api.sound.play('no'); return true;
      }
      t.pend = performance.now();
      api.setSave(`${key}/t/${t.id}`, 1);
      api.sound.play('pin');
      return true;
    },
    onEvent(e) {
      if (e.type !== 'crash') return false;
      api.sound.play('bounce');
      api.toast('Wobble… CRASH! 📦 Stacks of 3 or more need Moon\'s tape');
      return true;
    },
        /** drives a body that is sliding down a zipline (called from control() while state === 'ride') */
    ride(ctl, dt, wantJump) {
      const t = T.find((x) => x.id === ctl.rideId), b = ctl.body;
      if (!t) { ctl.state = 'free'; return; }
      ctl.rideU = Math.min(1, ctl.rideU + (ZIP_SPEED * dt) / t.len);
      const u = ctl.rideU;
      const p = t.a.clone().lerp(t.b, u);
      p.y -= 4 * 0.5 * u * (1 - u) + b.h + HANG;
      const v = p.clone().sub(b.pos).divideScalar(Math.max(dt, 1e-3));
      b.pos.copy(p); b.vel.copy(v); b.grounded = false; b.ground = null;
      ctl.anim = MODE.hang;
      api.chars[ctl.role].setYaw(Math.atan2(t.b.x - t.a.x, t.b.z - t.a.z));
      if (u >= 1 || wantJump) {
        const d = t.b.clone().sub(t.a).setY(0).normalize();
        api.launch(ctl.role, wantJump && u < 1 ? 4 : 5, d.x * 4.5, d.z * 4.5);
      }
    },
    update(dt, sNow, t) {
      const s = st();
      // boxes
      for (const o of B) {
        const v = boxState(o);
        if (o.pend && JSON.stringify(st().b?.[o.id] ?? null) === JSON.stringify(o.pend.v ?? null)) o.pend = null;
        const was = o.by;
        if (v === 'sun') o.by = 'sun';
        else {
          o.by = null;
          if (Array.isArray(v)) o.rest.set(v[0], v[1], v[2]); else o.rest.copy(o.home);
        }
        if (was !== o.by || !o.by) setCol(o);
        if (o.by) {
          const p = posOf('sun');
          if (p) { o.g.position.set(p.x, p.y + api.sizeOf('sun').h + 0.12, p.z); o.g.rotation.y = api.chars.sun.yaw; }
          o.shownY = o.g.position.y;
        } else {
          // drop with a little fall
          o.shownY = o.shownY > o.rest.y ? Math.max(o.rest.y, o.shownY - dt * 9) : o.rest.y;
          o.g.position.set(o.rest.x, o.shownY, o.rest.z);
          o.g.rotation.y = 0;
        }
      }
      if (api.mine().includes('sun')) api.ctls.sun.boxCarry = !!carried();
      for (const o of B) {
        o.band.visible = !o.by && taped(o);
        if (!o.open) continue;
        const shut = isShut(o);
        if (o.shutTape) o.shutTape.visible = shut;
        o.flaps.forEach((f, i) => { const want = shut ? 0 : f.userData.sd * (0.9 + Math.sin(t * 6 + i * 2 + o.home.x) * 0.5); f.rotation.x += (want - f.rotation.x) * Math.min(1, dt * 10); });
      }
      // tall untaped stacks wobble and crash when someone stands on the third box or higher (Sun's phone decides)
      crashCd -= dt;
      if (wobble && api.mine().includes('sun') && crashCd <= 0) {
        for (const r of ['sun', 'moon']) {
          const P = posOf(r);
          if (!P) continue;
          const under = restingBoxes().find((o) => flat(P, o.rest) < BOX / 2 + 0.15 && Math.abs(P.y - (o.rest.y + BOX)) < 0.3);
          if (!under) continue;
          const col = column(under), lvl = col.indexOf(under);
          if (lvl < 2 || taped(under)) continue;
          crashCd = 1.2;
          for (const o of col.slice(1)) setBox(o, null);
          api.sound.play('bounce');
          api.fx.sparks(new THREE.Vector3(under.rest.x, under.rest.y + BOX, under.rest.z), 0xd09a5e, 24, 4);
          api.send?.('crash', {});
          api.toast('Wobble… CRASH! 📦 Stacks of 3 or more need Moon\'s tape');
          break;
        }
      }
      // tapes
      for (const tp of T) {
        const on = tapeOn(tp);
        if (on && !tp.on) { api.fx.sparks(tp.a.clone(), 0xc9a4ff, 18, 3); if (!api.mine().includes('moon')) api.sound.play('pin', { vol: 0.6 }); }
        tp.on = on;
        tp.grow = on ? Math.min(1, tp.grow + dt * 2.2) : 0;
        tp.g.visible = tp.grow > 0;
        tp.g.scale.x = Math.max(0.001, tp.grow);
        if (tp.col) tp.col.disabled = tp.grow < 0.98;
        for (const p of tp.posts) {
          p.ring.material.opacity = on ? 0.25 : 0.55 + Math.sin(t * 4) * 0.3;
          p.ring.scale.setScalar(on ? 1 : 1 + Math.sin(t * 4) * 0.12);
        }
      }
      void s; void sNow;
    },
  };
  return { abilities, attach(a) { api = a; }, boxes: B, tapes: T };
}
