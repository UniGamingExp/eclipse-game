// Hidden minigames (like the ones in It Takes Two): a little duel stone somewhere off the main path. Both stand on
// their pads (☀ and ☾) → 3, 2, 1 → a short competitive game → the winner gets a crown and the tally on the stone
// goes up (kept in the save under mg/<id>: run {n, t0, seed}, res {n, sun, moon, win}, w {sun, moon}).
// Sun's phone (or practice) is the referee: it starts runs, keeps the score and writes the result; the other phone
// reports what its own player did with 'mg' events. Each game is a small object (see the three games below).
import * as THREE from 'three';
import { mat, add, rbox } from './common.js';

const ROLE = { sun: '☀ Sun', moon: '☾ Moon' };
const COL = { sun: 0xffc94d, moon: 0xa98bff };

// ---------------------------------------------------------------- the on-screen countdown and score bar
let hudEl = null;
function hud() {
  if (hudEl) return hudEl;
  const el = document.createElement('div');
  el.id = 'mg-hud';
  el.innerHTML = '<div class="mg-bar"><span class="mg-s">☀ 0</span><span class="mg-t"></span><span class="mg-m">0 ☾</span></div><div class="mg-big"></div>';
  const css = document.createElement('style');
  css.textContent = `#mg-hud{position:fixed;inset:0;pointer-events:none;z-index:40;font-family:Fredoka,ui-rounded,system-ui,sans-serif;display:none}
#mg-hud .mg-bar{position:absolute;top:max(14px,env(safe-area-inset-top));left:50%;transform:translateX(-50%);display:flex;gap:14px;align-items:center;
background:rgba(40,24,70,.72);color:#fff;border-radius:999px;padding:6px 18px;font-size:22px;font-weight:600;backdrop-filter:blur(6px)}
#mg-hud .mg-s{color:#ffd76a}#mg-hud .mg-m{color:#c9b4ff}#mg-hud .mg-t{font-size:16px;opacity:.85;min-width:44px;text-align:center}
#mg-hud .mg-big{position:absolute;top:34%;left:0;right:0;text-align:center;color:#fff;font-size:min(16vw,110px);font-weight:700;
text-shadow:0 4px 24px rgba(120,60,200,.8),0 0 4px #000;opacity:0;transition:opacity .2s}
#mg-hud .mg-big.small{font-size:min(9vw,56px)}`;
  document.head.appendChild(css);
  document.body.appendChild(el);
  hudEl = { el, s: el.querySelector('.mg-s'), m: el.querySelector('.mg-m'), t: el.querySelector('.mg-t'), big: el.querySelector('.mg-big'), owner: null };
  return hudEl;
}
function bigText(h, text, small = false) {
  h.big.textContent = text;
  h.big.classList.toggle('small', small);
  h.big.style.opacity = text ? 1 : 0;
}

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.redraw = () => { draw(cv.getContext('2d'), w, h); t.needsUpdate = true; };
  return t;
}
const rng = (seed) => () => ((seed = (seed * 16807) % 2147483647) / 2147483647);

/**
 * def: { id, title, rules: [line, line], at: {x, y, z}, face (yaw the stone faces), pads: {sun: [x, z], moon: [x, z]},
 *        dur (ms), game: { build?(g), start(run, c), update(dt, sNow, c), onEvent?(e, c), score() → {sun, moon},
 *        done?() → bool, end?(c) } }
 */
export function createMinigame(parent, colliders, def) {
  const { id, at, game } = def;
  const g = new THREE.Group();
  parent.add(g);
  g.userData.noHide = true;
  // ---- the duel stone: a pedestal with a half-sun / half-moon disc, the title and the tally above
  const stone = new THREE.Group();
  stone.position.set(at.x, at.y, at.z);
  stone.rotation.y = def.face || 0;
  g.add(stone);
  add(stone, new THREE.CylinderGeometry(0.55, 0.7, 1.1, 16), mat(0xe9dcf2, { roughness: 0.7 }), 0, 0.55, 0);
  colliders.push({ type: 'cyl', x: at.x, z: at.z, r: 0.65, top: at.y + 1.1, bottom: at.y, noGrab: true });
  const disc = new THREE.Group();
  disc.position.y = 1.75;
  stone.add(disc);
  for (const [r, c] of [['sun', 0], ['moon', Math.PI]]) {
    const half = add(disc, new THREE.CylinderGeometry(0.55, 0.55, 0.14, 24, 1, false, c, Math.PI).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ color: COL[r], emissive: COL[r], emissiveIntensity: 0.6, roughness: 0.4 }), 0, 0, 0, { cast: false });
    half.rotation.z = Math.PI / 2;
  }
  const board = canvasTex(512, 256, (x, w, h) => {
    const S = save(), W = S.w || {};
    x.clearRect(0, 0, w, h);
    x.fillStyle = 'rgba(40,24,70,0.82)';
    x.beginPath(); x.roundRect(8, 8, w - 16, h - 16, 40); x.fill();
    x.textAlign = 'center'; x.textBaseline = 'middle';
    x.fillStyle = '#fff'; x.font = '600 50px Fredoka, ui-rounded, sans-serif';
    x.fillText(def.title, w / 2, 72);
    x.font = '500 30px Fredoka, ui-rounded, sans-serif'; x.fillStyle = '#e8dcff';
    x.fillText(def.rules[0], w / 2, 128);
    if (def.rules[1]) x.fillText(def.rules[1], w / 2, 164);
    x.font = '600 36px Fredoka, ui-rounded, sans-serif';
    x.fillStyle = '#ffd76a'; x.fillText(`☀ ${W.sun || 0}`, w / 2 - 70, 212);
    x.fillStyle = '#fff'; x.fillText(':', w / 2, 210);
    x.fillStyle = '#c9b4ff'; x.fillText(`${W.moon || 0} ☾`, w / 2 + 70, 212);
  });
  const boardM = new THREE.MeshBasicMaterial({ map: board, transparent: true, depthWrite: false, side: THREE.DoubleSide });
  const boardMesh = add(stone, new THREE.PlaneGeometry(2.6, 1.3), boardM, 0, 3.0, 0, { cast: false, receive: false });
  boardMesh.userData.noHide = true;
  // ---- the two pads
  const pads = {};
  for (const r of ['sun', 'moon']) {
    const [x, z] = def.pads[r];
    add(g, new THREE.CylinderGeometry(0.95, 1.05, 0.12, 32), mat(COL[r], { emissive: COL[r], emissiveIntensity: 0.2 }), x, at.y + 0.06, z);
    const ring = add(g, new THREE.TorusGeometry(1.0, 0.06, 8, 40).rotateX(Math.PI / 2), new THREE.MeshBasicMaterial({ color: new THREE.Color(COL[r]).multiplyScalar(1.6), transparent: true, opacity: 0.5 }), x, at.y + 0.14, z, { cast: false, receive: false });
    ring.userData.noHide = true;
    pads[r] = { x, z, ring };
  }
  game.build?.(g, colliders);
  // ---- a crown for the winner
  const crown = new THREE.Group();
  const gold = new THREE.MeshStandardMaterial({ color: 0xffd25a, emissive: 0xffa21f, emissiveIntensity: 0.6, roughness: 0.3, metalness: 0.6 });
  add(crown, new THREE.CylinderGeometry(0.22, 0.2, 0.14, 16, 1, true), gold, 0, 0, 0, { cast: false });
  for (let i = 0; i < 5; i++) { const a = (i / 5) * Math.PI * 2; add(crown, new THREE.ConeGeometry(0.06, 0.16, 6), gold, Math.cos(a) * 0.2, 0.13, Math.sin(a) * 0.2, { cast: false }); }
  crown.visible = false;
  crown.userData.noHide = true;
  g.add(crown);

  let api = null, padT = 0, seenRun = 0, announced = 0, shown = { sun: 0, moon: 0 }, sendT = 0, lastSent = '', goT = 0, crownT = 0, crownRole = null, hintT = -1, boardKey = '', armed = true;
  const save = () => api?.save?.mg?.[id] || {};
  board.redraw();
  const auth = () => api && (api.kind === 'solo' || api.role === 'sun');
  const posOf = (r) => (api.mine().includes(r) ? api.bodies[r].pos : api.partnerPos(api.role === 'sun' ? 'sun' : 'moon'));
  const c = {
    get api() { return api; }, get auth() { return auth(); }, posOf, run: null, id,
    /** tell the referee something my player did (the referee applies it right away) */
    report(k, data = {}) {
      if (auth()) game.onEvent?.({ ...data, k, from: data.from || api.role }, c);
      else api.send('mg', { ...data, id, k });
    },
    /** referee → the other phone */
    broadcast(k, data = {}) { if (api.kind !== 'solo') api.send('mg', { ...data, id, k }); },
    /** put one of my bodies back on its pad */
    toPad(r) {
      const p = pads[r], b = api.bodies[r];
      b.pos.set(p.x, at.y + 0.2, p.z); b.vel.set(0, 0, 0);
      api.ctls[r].safe?.set(p.x, at.y + 0.2, p.z);
    },
    pads, at,
  };
  const near = (p, x, z, r) => p && Math.hypot(p.x - x, p.z - z) < r && Math.abs(p.y - at.y) < 1.6;

  function phase(sNow) {
    const S = save(), run = S.run, res = S.res;
    if (!run || (res && res.n >= run.n)) return 'idle';
    if (sNow < run.t0) return 'count';
    if (sNow < run.t0 + def.dur && !(auth() && game.done?.())) return 'play';
    return 'over';
  }

  return {
    get playing() { return api ? phase(api.serverNow()) === 'play' : false; },
    attach(a) { api = a; },
    onEvent(e) {
      if (e.type !== 'mg' || e.id !== id) return false;
      if (e.k === 'score') { shown = { sun: e.s[0], moon: e.s[1] }; return true; }
      game.onEvent?.(e, c);
      return true;
    },
    update(dt, sNow, t) {
      disc.rotation.y = t * 0.8;
      if (!api) return;
      const S = save();
      const key = JSON.stringify(S.w || {});
      if (key !== boardKey) { boardKey = key; board.redraw(); }
      const ph = phase(sNow), h = hud();
      const P = { sun: posOf('sun'), moon: posOf('moon') };
      for (const r of ['sun', 'moon']) pads[r].ring.material.opacity = near(P[r], pads[r].x, pads[r].z, 1.2) ? 0.95 : 0.35 + Math.sin(t * 3) * 0.1;
      // a hint the first time someone comes close
      if (ph === 'idle' && hintT < 0 && ['sun', 'moon'].some((r) => near(P[r], at.x, at.z, 5))) { hintT = t; api.toast(`🎮 ${def.title}: both stand on your pads to play!`); }
      // start: both on their pads for a moment
      if (ph === 'idle' && auth()) {
        const onS = near(P.sun, pads.sun.x, pads.sun.z, 1.2), onM = near(P.moon, pads.moon.x, pads.moon.z, 1.2);
        if (!onS && !onM) armed = true;   // after a game, step off the pads before the next one
        padT = armed && onS && onM ? padT + dt : 0;
        if (padT > 0.8) {
          armed = false; padT = 0; api.setSave(`mg/${id}/run`, { n: (S.run?.n || 0) + 1, t0: Math.round(sNow + 3300), seed: 1 + Math.floor(Math.random() * 2e9) }); }
      }
      // a new run seen here: set up
      if (S.run && S.run.n !== seenRun && (ph === 'count' || ph === 'play')) {
        seenRun = S.run.n; c.run = S.run; shown = { sun: 0, moon: 0 }; lastSent = '';
        crown.visible = false;
        game.start(S.run, c);
        for (const r of api.mine()) c.toPad(r);
        h.el.style.display = 'block'; h.owner = id;
      }
      if (ph === 'count') {
        const n = Math.ceil((S.run.t0 - sNow) / 1000);
        bigText(h, n > 3 ? def.title : String(n), n > 3);
        goT = 0.7;
      } else if (ph === 'play') {
        if (goT > 0) { goT -= dt; bigText(h, goT > 0 ? 'GO!' : ''); }
        game.update(dt, sNow, c);
        if (auth()) {
          const sc = game.score();
          shown = sc;
          sendT -= dt;
          const k = `${sc.sun}:${sc.moon}`;
          if (k !== lastSent && sendT <= 0) { lastSent = k; sendT = 0.2; c.broadcast('score', { s: [sc.sun, sc.moon] }); }
        }
      } else if (ph === 'over' && auth() && S.run) {
        const sc = S.run.n === seenRun ? game.score() : { sun: 0, moon: 0 }, win = sc.sun > sc.moon ? 'sun' : sc.moon > sc.sun ? 'moon' : 'tie';
        c.broadcast('score', { s: [sc.sun, sc.moon] });
        api.setSave(`mg/${id}/res`, { n: S.run.n, sun: sc.sun, moon: sc.moon, win });
        if (win !== 'tie') api.setSave(`mg/${id}/w/${win}`, ((S.w || {})[win] || 0) + 1);
      }
      if (h.owner === id && (ph === 'count' || ph === 'play' || ph === 'over')) {
        h.el.style.display = 'block';
        h.s.textContent = `☀ ${shown.sun}`; h.m.textContent = `${shown.moon} ☾`;
        h.t.textContent = ph === 'play' ? `${Math.max(0, Math.ceil((S.run.t0 + def.dur - sNow) / 1000))}s` : '';
      }
      // the result
      const res = S.res;
      if (res && res.n === seenRun && announced !== res.n) {
        announced = res.n;
        armed = false;
        shown = { sun: res.sun, moon: res.moon };
        h.s.textContent = `☀ ${res.sun}`; h.m.textContent = `${res.moon} ☾`; h.t.textContent = '';
        bigText(h, res.win === 'tie' ? 'A tie! 💞' : `${ROLE[res.win]} wins! 👑`, true);
        api.sound.play('star');
        if (res.win !== 'tie') { crownRole = res.win; crownT = 12; const p = posOf(res.win); if (p) api.fx.sparks(p.clone().setY(p.y + 1.6), COL[res.win], 40, 4); }
        game.end?.(c);
        setTimeout(() => { if (h.owner === id) { bigText(h, ''); h.el.style.display = 'none'; h.owner = null; } }, 3200);
      }
      // the crown floats over the winner's head for a while
      crownT -= dt;
      const cp = crownRole && crownT > 0 ? posOf(crownRole) : null;
      crown.visible = !!cp;
      if (cp) { crown.position.set(cp.x, cp.y + api.sizeOf(crownRole).h + 0.35 + Math.sin(t * 3) * 0.05, cp.z); crown.rotation.y = t; }
    },
  };
}

// ================================================================ the games

/** 2.1 · Day & Night Tiles: paint the square in your colour by running over it; most tiles after 30 s wins */
export function tilesGame({ cx, cz, y, n = 5, size = 2.2, bubbles = false }) {
  // bubbles: a sheet of bubble wrap instead: every bubble pops once, for whoever steps on it first
  const owner = new Array(n * n).fill(0), tiles = [];
  const code = { sun: 1, moon: 2 };
  const mats = [mat(0xded2c4, { roughness: 0.8 }), mat(0xffc94d, { emissive: 0xffa21f, emissiveIntensity: 0.55, roughness: 0.5 }), mat(0xa98bff, { emissive: 0x7a4dff, emissiveIntensity: 0.6, roughness: 0.5 })];
  const x0 = cx - (n * size) / 2, z0 = cz - (n * size) / 2;
  const idx = (p) => {
    const i = Math.floor((p.x - x0) / size), j = Math.floor((p.z - z0) / size);
    return i >= 0 && j >= 0 && i < n && j < n && Math.abs(p.y - y) < 0.4 ? j * n + i : -1;
  };
  const paint = (i, v, force = false) => {
    if (owner[i] === v || (bubbles && v && owner[i] && !force)) return;
    owner[i] = v; tiles[i].material = bubbles ? bubM[v] : mats[v];
    if (bubbles) tiles[i].scale.y = v ? 0.12 : 1; else tiles[i].scale.y = 2.2;
  };
  const bubM = [new THREE.MeshStandardMaterial({ color: 0xe8f4ff, roughness: 0.05, metalness: 0, transparent: true, opacity: 0.55 }), mats[1], mats[2]];
  let sendT = 0;
  return {
    build(g) {
      for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) {
        const m = bubbles
          ? add(g, new THREE.SphereGeometry(size * 0.42, 16, 8, 0, Math.PI * 2, 0, Math.PI / 2), bubM[0], x0 + (i + 0.5) * size, y + 0.02, z0 + (j + 0.5) * size, { cast: false })
          : add(g, rbox(size - 0.16, 0.07, size - 0.16, 0.03), mats[0], x0 + (i + 0.5) * size, y + 0.04, z0 + (j + 0.5) * size, { cast: false });
        m.userData.noHide = true;
        tiles.push(m);
      }
    },
    start() { owner.forEach((_, i) => paint(i, 0)); },
    update(dt, sNow, c) {
      for (const r of c.api.mine()) {
        const i = idx(c.api.bodies[r].pos);
        if (i >= 0 && owner[i] !== code[r] && !(bubbles && owner[i])) { paint(i, code[r]); c.report('paint', { i, from: r }); if (bubbles) c.api.sound.play('pop', { vol: 0.5 }); }
      }
      if (!bubbles) tiles.forEach((m) => { m.scale.y += (1 - m.scale.y) * Math.min(1, dt * 8); });
      if (c.auth) { sendT -= dt; if (sendT <= 0) { sendT = 0.25; c.broadcast('st', { o: owner.join('') }); } }
    },
    onEvent(e, c) {
      if (e.k === 'paint' && c.auth && e.i >= 0 && e.i < owner.length) paint(e.i, code[e.from] || 0);
      if (e.k === 'st' && !c.auth && typeof e.o === 'string') [...e.o].forEach((v, i) => paint(i, +v, true));
    },
    score() { let s = 0, m = 0; for (const v of owner) { if (v === 1) s++; else if (v === 2) m++; } return { sun: s, moon: m }; },
  };
}

/** 2.2 · Falling Stars: stars fall on the balcony; catch the most (big golden ones count 3) */
export function starsGame({ cx, cz, y, half = 5, every = 520, fall = 2400, count = 64 }) {
  const pool = [], marks = [];
  let list = [], caught = new Map(), score = { sun: 0, moon: 0 };
  const starGeo = (() => {
    const s = new THREE.Shape();
    for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 + Math.PI / 2, r = i % 2 ? 0.2 : 0.46; s[i ? 'lineTo' : 'moveTo'](Math.cos(a) * r, Math.sin(a) * r); }
    return new THREE.ExtrudeGeometry(s, { depth: 0.14, bevelEnabled: true, bevelSize: 0.04, bevelThickness: 0.04, bevelSegments: 2 }).center();
  })();
  const smallM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.2, 1.9, 1.0) });
  const bigM = new THREE.MeshBasicMaterial({ color: new THREE.Color(2.6, 1.5, 0.5) });
  const markM = new THREE.MeshBasicMaterial({ color: 0xffe27a, transparent: true, opacity: 0.5, depthWrite: false });
  const posAt = (s, sNow) => { const u = (sNow - s.t) / fall; return u < 0 || u > 1 ? null : new THREE.Vector3(s.x, y + 0.5 + (1 - u) * 11, s.z); };
  return {
    build(g) {
      for (let i = 0; i < 12; i++) {
        const m = add(g, starGeo, smallM, 0, -99, 0, { cast: false, receive: false });
        m.userData.noHide = true; m.visible = false; pool.push(m);
        const k = add(g, new THREE.RingGeometry(0.35, 0.5, 24).rotateX(-Math.PI / 2), markM.clone(), 0, y + 0.04, 0, { cast: false, receive: false });
        k.userData.noHide = true; k.visible = false; marks.push(k);
      }
    },
    start(run) {
      const R = rng(run.seed);
      list = [];
      for (let k = 0; k < count; k++) list.push({ k, t: run.t0 + 300 + k * every, x: cx + (R() * 2 - 1) * half, z: cz + (R() * 2 - 1) * half, big: k % 7 === 6 });
      caught = new Map(); score = { sun: 0, moon: 0 };
    },
    update(dt, sNow, c) {
      let pi = 0;
      for (const s of list) {
        if (caught.has(s.k)) continue;
        const p = posAt(s, sNow);
        if (!p) continue;
        for (const r of c.api.mine()) {
          const b = c.api.bodies[r].pos;
          if (Math.hypot(b.x - p.x, b.z - p.z) < 1.15 && p.y > b.y - 0.3 && p.y < b.y + c.api.sizeOf(r).h + 0.6) {
            caught.set(s.k, r);
            c.api.fx.sparks(p, s.big ? 0xffb340 : 0xffe27a, s.big ? 26 : 12, 3);
            c.api.sound.play('star', { vol: s.big ? 0.7 : 0.4 });
            if (c.auth) { s.scored = true; score[r] += s.big ? 3 : 1; c.broadcast('c', { s: s.k, r }); } else c.report('catch', { s: s.k, from: r });
            break;
          }
        }
        if (caught.has(s.k) || pi >= pool.length) continue;
        const m = pool[pi], mk = marks[pi++];
        m.visible = true; m.material = s.big ? bigM : smallM; m.scale.setScalar(s.big ? 1.5 : 1);
        m.position.copy(p); m.rotation.set(0, sNow / 300 + s.k, 0);
        mk.visible = true; mk.position.set(s.x, y + 0.04, s.z); mk.material.opacity = 0.25 + (1 - (p.y - y) / 11.5) * 0.6;
      }
      for (; pi < pool.length; pi++) { pool[pi].visible = false; marks[pi].visible = false; }
    },
    onEvent(e, c) {
      if (e.k === 'catch' && c.auth) {   // the referee: first come, first served
        const s = list[e.s];
        if (!s || s.scored) return;
        if (!caught.has(e.s)) caught.set(e.s, e.from);
        if (caught.get(e.s) === e.from) { s.scored = true; score[e.from] += s.big ? 3 : 1; c.broadcast('c', { s: e.s, r: e.from }); }
      }
      if (e.k === 'c' && !c.auth) caught.set(e.s, e.r);
    },
    score() { return { ...score }; },
    end() { pool.forEach((m) => { m.visible = false; }); marks.forEach((m) => { m.visible = false; }); },
  };
}

/** 2.3 · Cloud Sumo: dash into the other one to push them off the cloud; first to 2 wins */
export function sumoGame({ cx, cz, y, R = 4.6, to = 2 }) {
  let pts = { sun: 0, moon: 0 }, round = 0, fell = {}, shoveCd = 0, ended = false;
  const newRound = (c, r) => { round = r; fell = {}; for (const role of c.api.mine()) c.toPad(role); };
  return {
    start(run, c) { pts = { sun: 0, moon: 0 }; ended = false; newRound(c, 1); },
    update(dt, sNow, c) {
      const api = c.api;
      shoveCd -= dt;
      // no lifting in a sumo match
      if (api.mine().includes('sun') && api.ctls.sun.carrying) api.ctls.sun.carrying = false;
      if (api.mine().includes('moon') && api.ctls.moon.state === 'carried') { api.ctls.moon.state = 'free'; api.launch('moon', 5); }
      for (const r of api.mine()) {
        const me = api.bodies[r].pos, other = r === 'sun' ? 'moon' : 'sun', op = c.posOf(other);
        // a dash into the other one shoves them hard
        if (api.ctls[r].dashT > 0 && op && shoveCd <= 0 && Math.hypot(op.x - me.x, op.z - me.z) < 1.35 && Math.abs(op.y - me.y) < 1.2) {
          const d = Math.hypot(op.x - me.x, op.z - me.z) || 1, vx = ((op.x - me.x) / d) * 11, vz = ((op.z - me.z) / d) * 11;
          shoveCd = 0.6;
          api.sound.play('bounce');
          api.fx.sparks(op.clone().setY(op.y + 1), 0xffffff, 16, 3);
          if (api.mine().includes(other)) api.launch(other, 6, vx, vz);
          else api.send('mg', { id: c.id, k: 'shove', v: [vx, 6, vz] });
        }
        // off the cloud?
        if (me.y < y - 1.6 && !fell[r]) { fell[r] = true; c.report('fall', { from: r, rd: round }); }
      }
    },
    onEvent(e, c) {
      const api = c.api;
      if (e.k === 'shove' && Array.isArray(e.v)) { const r = api.role; if (api.mine().includes(r)) api.launch(r, e.v[1], e.v[0], e.v[2]); }
      if (e.k === 'fall' && c.auth && (e.rd ?? round) === round && !ended) {
        const winner = e.from === 'sun' ? 'moon' : 'sun';
        pts[winner]++;
        api.caption?.(`${winner === 'sun' ? '☀ Sun' : '☾ Moon'} pushes ${e.from === 'sun' ? 'Sun' : 'Moon'} off! (${pts.sun} : ${pts.moon})`, 1800);
        if (pts[winner] >= to) { ended = true; for (const r of api.mine()) if (api.bodies[r].pos.y < y - 1) c.toPad(r); return; }
        c.broadcast('rd', { r: round + 1 });
        newRound(c, round + 1);
      }
      if (e.k === 'rd' && !c.auth) newRound(c, e.r);
    },
    done: () => ended,
    score() { return { ...pts }; },
    end(c) { for (const r of c.api.mine()) if (c.api.bodies[r].pos.y < y - 1) c.toPad(r); },
  };
}

/** 3.1 · Eddy Race: hop the spinning rafts to your buoy; first one there wins (fall in → back to your pad) */
export function raceGame({ finish, y, fallY, r = 1.4 }) {
  let winner = null, sent = {};
  return {
    start() { winner = null; sent = {}; },
    update(dt, sNow, c) {
      for (const role of c.api.mine()) {
        const p = c.api.bodies[role].pos, f = finish[role];
        if (p.y < fallY) { c.toPad(role); c.api.sound.play('bounce'); continue; }
        if (!sent[role] && Math.hypot(p.x - f[0], p.z - f[1]) < r && Math.abs(p.y - y) < 1.2) {
          sent[role] = true;
          c.api.fx.sparks(p.clone().setY(p.y + 1), 0xffffff, 24, 4);
          c.report('fin', { from: role });
        }
      }
    },
    onEvent(e, c) { if (e.k === 'fin' && c.auth && !winner) winner = e.from; },
    done: () => !!winner,
    score() { return { sun: winner === 'sun' ? 1 : 0, moon: winner === 'moon' ? 1 : 0 }; },
  };
}

/** a level's abilities with the minigame(s) listening to 'mg' events first */
export function withMinigames(abilities, games) {
  // everything else (label, use, update, ride, first…) comes from the level's own abilities
  const w = Object.create(abilities);
  w.onEvent = (e) => games.some((g) => g.onEvent(e)) || !!abilities.onEvent?.(e);
  return w;
}
