// Touch controls (floating joystick on the left, buttons on the right, drag anywhere else to look)
// plus keyboard + mouse for testing on a computer.
import { unlockAudio } from './sound.js';

export function createInput({ canvas, joyZone, joyBase, joyKnob, buttons }) {
  const st = {
    move: { x: 0, y: 0 },   // y = forward
    jumpHeld: false,
    pressed: new Set(),     // one-shot presses: jump, ability, heart, swap
    camDX: 0, camDY: 0,
    zoom: 1,                // multiplied into the camera distance (pinch / mouse wheel)
    enabled: false,
    lastUse: 0,
  };
  const press = (name) => { if (st.enabled) st.pressed.add(name); };

  // unlock audio on the first real tap anywhere
  const unlock = () => unlockAudio();
  window.addEventListener('pointerdown', unlock, { passive: true });
  window.addEventListener('touchend', unlock, { passive: true });
  window.addEventListener('keydown', unlock);

  // stop iOS pinch/double-tap zoom
  for (const ev of ['gesturestart', 'gesturechange', 'dblclick']) document.addEventListener(ev, (e) => e.preventDefault(), { passive: false });

  // ---- joystick ----
  const R = 52;
  let joyId = null, jx = 0, jy = 0;
  joyZone.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse') { camStart(e); return; }
    if (joyId !== null) return;
    e.preventDefault();
    joyId = e.pointerId;
    joyZone.setPointerCapture(e.pointerId);
    const rect = joyZone.getBoundingClientRect();
    jx = e.clientX; jy = e.clientY;
    joyBase.hidden = false;
    joyBase.style.transform = `translate(${jx - rect.left}px, ${jy - rect.top}px)`;
    joyBase.dataset.ox = rect.left; joyBase.dataset.oy = rect.top;
    joyKnob.style.transform = 'translate(0px, 0px)';
    joyZone.classList.add('active');
    st.lastUse = performance.now();
  });
  joyZone.addEventListener('pointermove', (e) => {
    if (e.pointerId === joyId) {
      const ox = +joyBase.dataset.ox, oy = +joyBase.dataset.oy;
      // joystick math in client coords, base positioned relative to the zone
      let dx = e.clientX - jx, dy = e.clientY - jy;
      const d = Math.hypot(dx, dy);
      if (d > R) { const k = (d - R) / d; jx += dx * k; jy += dy * k; dx = e.clientX - jx; dy = e.clientY - jy; }
      joyBase.style.transform = `translate(${jx - ox}px, ${jy - oy}px)`;
      joyKnob.style.transform = `translate(${dx}px, ${dy}px)`;
      let mx = dx / R, my = -dy / R;
      if (Math.hypot(mx, my) < 0.12) { mx = 0; my = 0; }
      st.move.x = mx; st.move.y = my;
    } else camMove(e);
  });
  const joyEnd = (e) => {
    if (e.pointerId !== joyId) { camEnd(e); return; }
    joyId = null;
    st.move.x = 0; st.move.y = 0;
    joyBase.hidden = true;
    joyZone.classList.remove('active');
  };
  joyZone.addEventListener('pointerup', joyEnd);
  joyZone.addEventListener('pointercancel', joyEnd);

  // ---- camera drag ----
  const cams = new Map();
  function camStart(e) {
    cams.set(e.pointerId, { x: e.clientX, y: e.clientY });
    try { e.target.setPointerCapture(e.pointerId); } catch { /* ok */ }
  }
  let pinchD = 0;
  const pinchDist = () => { const [a, b] = [...cams.values()]; return Math.hypot(a.x - b.x, a.y - b.y); };
  function camMove(e) {
    const c = cams.get(e.pointerId);
    if (!c) return;
    if (cams.size >= 2) {
      // two fingers on the screen: pinch to zoom the camera in or out
      c.x = e.clientX; c.y = e.clientY;
      const d = pinchDist();
      if (pinchD > 1 && d > 1) st.zoom *= pinchD / d;
      pinchD = d;
      return;
    }
    st.camDX += e.clientX - c.x;
    st.camDY += e.clientY - c.y;
    c.x = e.clientX; c.y = e.clientY;
  }
  function camEnd(e) { cams.delete(e.pointerId); pinchD = 0; }
  canvas.addEventListener('wheel', (e) => { e.preventDefault(); st.zoom *= Math.exp(e.deltaY * 0.001); }, { passive: false });
  canvas.addEventListener('pointerdown', (e) => { e.preventDefault(); camStart(e); });
  canvas.addEventListener('pointermove', (e) => { if (document.pointerLockElement !== canvas) camMove(e); });

  // ---- laptop: once a real mouse moves, click the game to steer the camera with it (Esc gives it back).
  // Touch always wins: the first finger on the screen switches back to the phone layout, so a phone
  // (even one with a stylus) can never get stuck in laptop mode.
  let fine = false;
  const setDesktop = (v) => {
    if (fine === v) return;
    fine = v; st.desktop = v;
    document.body.classList.toggle('desktop', v);
    if (!v && document.pointerLockElement) document.exitPointerLock?.();
  };
  window.addEventListener('pointerdown', (e) => { if (e.pointerType === 'touch' || e.pointerType === 'pen') setDesktop(false); }, { capture: true, passive: true });
  window.addEventListener('touchstart', () => setDesktop(false), { capture: true, passive: true });
  window.addEventListener('pointermove', (e) => { if (e.pointerType === 'mouse' && (e.movementX || e.movementY)) setDesktop(true); }, { passive: true });
  canvas.addEventListener('pointerup', (e) => {
    if (e.pointerType !== 'mouse' || !fine || !st.enabled || document.pointerLockElement === canvas) return;
    try { const r = canvas.requestPointerLock?.(); r?.catch?.(() => {}); } catch { /* not allowed here */ }
  });
  document.addEventListener('mousemove', (e) => {
    if (document.pointerLockElement !== canvas) return;
    st.camDX += e.movementX * 0.7; st.camDY += e.movementY * 0.7;
  });
  document.addEventListener('pointerlockchange', () => document.body.classList.toggle('mouselook', document.pointerLockElement === canvas));
  // mouse buttons while the mouse is locked: left = power, right = lift / throw
  canvas.addEventListener('mousedown', (e) => {
    if (document.pointerLockElement !== canvas) return;
    if (e.button === 0) press('ability');
    if (e.button === 2) press('lift');
  });
  canvas.addEventListener('contextmenu', (e) => { if (fine) e.preventDefault(); });

  canvas.addEventListener('pointerup', camEnd);
  canvas.addEventListener('pointercancel', camEnd);

  // ---- buttons ----
  for (const [name, el] of Object.entries(buttons)) {
    el.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      try { el.setPointerCapture(e.pointerId); } catch { /* ok */ }
      el.classList.add('pressed');
      press(name);
      if (name === 'jump') st.jumpHeld = true;
    });
    const up = () => { el.classList.remove('pressed'); if (name === 'jump') st.jumpHeld = false; };
    el.addEventListener('pointerup', up);
    el.addEventListener('pointercancel', up);
    el.addEventListener('lostpointercapture', up);
    el.addEventListener('contextmenu', (e) => e.preventDefault());
  }

  // ---- keyboard ----
  const keys = new Set();
  const keyMove = () => {
    if (joyId !== null) return;
    let x = 0, y = 0;
    if (keys.has('KeyA') || keys.has('ArrowLeft')) x -= 1;
    if (keys.has('KeyD') || keys.has('ArrowRight')) x += 1;
    if (keys.has('KeyW') || keys.has('ArrowUp')) y += 1;
    if (keys.has('KeyS') || keys.has('ArrowDown')) y -= 1;
    const m = Math.hypot(x, y) || 1;
    st.move.x = x / m; st.move.y = y / m;
  };
  window.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    if (e.repeat) return;
    keys.add(e.code);
    if (e.code === 'Space') { press('jump'); st.jumpHeld = true; e.preventDefault(); }
    if (e.code === 'KeyE') press('ability');
    if (e.code === 'KeyH') press('heart');
    if (e.code === 'KeyF') press('ability');
    if (e.code === 'KeyQ') press('swap');
    if (e.code === 'KeyR') press('lift');
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight' || e.code === 'KeyK') press('dash');
    keyMove();
  });
  window.addEventListener('keyup', (e) => {
    keys.delete(e.code);
    if (e.code === 'Space') st.jumpHeld = false;
    keyMove();
  });
  window.addEventListener('blur', () => { keys.clear(); st.jumpHeld = false; st.move.x = st.move.y = 0; });

  // ---- controller (Xbox / PlayStation / any "standard" gamepad), polled every frame ----
  // left stick / d-pad move · right stick camera · A jump · X or RT power · B or LT dash · Y lift · RB heart ·
  // LB switch (practice) · Start menu. In menus: d-pad / stick moves a highlight, A presses it, B goes back.
  const PAD = { jump: 0, dash: 1, ability: 2, lift: 3, swap: 4, heart: 5, dash2: 6, ability2: 7, back: 8, start: 9, up: 12, down: 13, left: 14, right: 15 };
  let padOn = false, padMoved = false, prev = [], navHeld = 0, focusEl = null;
  const dead = (v, d = 0.18) => (Math.abs(v) < d ? 0 : (v - Math.sign(v) * d) / (1 - d));
  const setPad = (v, gp) => {
    if (padOn === v) return;
    padOn = v; st.gamepad = v;
    document.body.classList.toggle('gamepad', v);
    if (v) {
      const id = gp?.id || '', ps = /dualsense|dualshock|054c|playstation|wireless controller/i.test(id) && !/xbox|xinput|045e/i.test(id);
      document.body.classList.toggle('pad-ps', ps);
      if (document.pointerLockElement) document.exitPointerLock?.();
    } else setFocus(null);
  };
  function setFocus(el) {
    if (focusEl === el) return;
    focusEl?.classList.remove('pad-focus');
    focusEl = el;
    el?.classList.add('pad-focus');
    el?.scrollIntoView?.({ block: 'nearest', inline: 'nearest' });
  }
  const visible = (el) => {
    if (el.disabled || el.hidden || el.closest('[hidden]') || el.classList.contains('act')) return false;
    const r = el.getBoundingClientRect();
    if (r.width < 8 || r.height < 8) return false;
    const cs = getComputedStyle(el);
    if (cs.visibility === 'hidden' || cs.pointerEvents === 'none' || +cs.opacity < 0.05) return false;
    const top = document.elementFromPoint(Math.min(innerWidth - 1, Math.max(0, r.left + r.width / 2)), Math.min(innerHeight - 1, Math.max(0, r.top + r.height / 2)));
    return !!top && (el === top || el.contains(top) || top.contains(el));
  };
  const targets = () => [...document.querySelectorAll('button, [role=button], .role, a[href], input, select, .sb-part, .sb-ch')].filter(visible);
  function nav(dx, dy) {
    const list = targets();
    if (!list.length) return;
    if (!focusEl || !list.includes(focusEl)) { setFocus(list[0]); return; }
    const a = focusEl.getBoundingClientRect(), ax = a.left + a.width / 2, ay = a.top + a.height / 2;
    let best = null, bs = 1e9;
    for (const el of list) {
      if (el === focusEl) continue;
      const r = el.getBoundingClientRect(), x = r.left + r.width / 2 - ax, y = r.top + r.height / 2 - ay;
      const along = x * dx + y * dy, across = Math.abs(x * dy) + Math.abs(y * dx);
      if (along < 4) continue;
      const score = along + across * 2.5;
      if (score < bs) { bs = score; best = el; }
    }
    if (best) setFocus(best);
  }
  function poll(dt) {
    const pads = navigator.getGamepads ? [...navigator.getGamepads()].filter((g) => g && g.connected && g.buttons.length >= 10) : [];
    const gp = pads.find((g) => g.mapping === 'standard') || pads[0];
    if (!gp) { if (padOn) { setPad(false); if (padMoved) { st.move.x = st.move.y = 0; padMoved = false; } st.jumpHeld = false; } return; }
    const B = gp.buttons.map((b) => b.pressed || b.value > 0.5);
    const hit = (i) => B[i] && !prev[i];
    let lx = dead(gp.axes[0] || 0), ly = dead(gp.axes[1] || 0);
    const rx = dead(gp.axes[2] || 0, 0.14), ry = dead(gp.axes[3] || 0, 0.14);
    if (B[PAD.left]) lx = -1; if (B[PAD.right]) lx = 1; if (B[PAD.up]) ly = -1; if (B[PAD.down]) ly = 1;
    const any = B.some(Boolean) || lx || ly || rx || ry;
    if (any && !padOn) { setPad(true, gp); setDesktop(false); unlockAudio(); }
    if (!padOn) { prev = B; return; }
    if (st.enabled) {
      setFocus(null);
      const m = Math.hypot(lx, ly);
      if (m > 0) { const k = Math.min(1, m) / m; st.move.x = lx * k; st.move.y = -ly * k; padMoved = true; }
      else if (padMoved) { st.move.x = st.move.y = 0; padMoved = false; }
      // the stick turns faster the further it's pushed (finer aim near the centre)
      st.camDX += Math.sign(rx) * rx * rx * 520 * dt;
      st.camDY += Math.sign(ry) * ry * ry * 300 * dt;
      if (hit(PAD.jump)) press('jump');
      st.jumpHeld = B[PAD.jump];
      if (hit(PAD.ability) || hit(PAD.ability2)) press('ability');
      if (hit(PAD.dash) || hit(PAD.dash2)) press('dash');
      if (hit(PAD.lift)) press('lift');
      if (hit(PAD.heart)) press('heart');
      if (hit(PAD.swap)) press('swap');
      if (hit(PAD.start)) document.querySelector('#menu-btn')?.click();
    } else {
      // menus, the lobby, the storybook, films: move a highlight and press it
      if (padMoved) { st.move.x = st.move.y = 0; padMoved = false; }
      st.jumpHeld = false;
      const dx = Math.abs(lx) > 0.5 ? Math.sign(lx) : 0, dy = Math.abs(ly) > 0.5 ? Math.sign(ly) : 0;
      if (dx || dy) { navHeld -= dt; if (navHeld <= 0) { nav(dx, dx ? 0 : dy); navHeld = navHeld < -0.5 ? 0.34 : 0.2; } } else navHeld = -1;
      if (hit(PAD.jump)) { const list = targets(); if (focusEl && list.includes(focusEl)) { if (focusEl.tagName === 'INPUT') focusEl.focus(); else focusEl.click(); } else if (list.length) setFocus(list[0]); }
      if (hit(PAD.dash) || hit(PAD.start)) {
        const back = ['#intro-skip', '#sb-close', '[data-pad-back]', '.close', '#conn-start'].map((q) => document.querySelector(q)).find((el) => el && visible(el));
        if (back) back.click();
      }
    }
    prev = B;
  }
  window.addEventListener('gamepaddisconnected', () => poll(0));
  // keyboard, mouse or touch take over again
  window.addEventListener('keydown', () => setPad(false));
  window.addEventListener('pointerdown', () => setPad(false), { capture: true, passive: true });

  return {
    poll,
    state: st,
    consume(name) { const had = st.pressed.has(name); st.pressed.delete(name); return had; },
    takeZoom() { const z = st.zoom; st.zoom = 1; return z; },
    takeCam() { const d = { x: st.camDX, y: st.camDY }; st.camDX = 0; st.camDY = 0; return d; },
    setEnabled(v) { st.enabled = v; if (!v) { st.pressed.clear(); st.move.x = st.move.y = 0; st.jumpHeld = false; } },
  };
}
