// Touch controls (floating joystick on the left, buttons on the right, drag anywhere else to look)
// plus keyboard + mouse for testing on a computer.
import { unlockAudio } from './sound.js';

export function createInput({ canvas, joyZone, joyBase, joyKnob, buttons }) {
  const st = {
    move: { x: 0, y: 0 },   // y = forward
    jumpHeld: false,
    pressed: new Set(),     // one-shot presses: jump, ability, heart, swap
    camDX: 0, camDY: 0,
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
  function camMove(e) {
    const c = cams.get(e.pointerId);
    if (!c) return;
    st.camDX += e.clientX - c.x;
    st.camDY += e.clientY - c.y;
    c.x = e.clientX; c.y = e.clientY;
  }
  function camEnd(e) { cams.delete(e.pointerId); }
  canvas.addEventListener('pointerdown', (e) => { e.preventDefault(); camStart(e); });
  canvas.addEventListener('pointermove', camMove);
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
    if (e.code === 'KeyQ') press('swap');
    keyMove();
  });
  window.addEventListener('keyup', (e) => {
    keys.delete(e.code);
    if (e.code === 'Space') st.jumpHeld = false;
    keyMove();
  });
  window.addEventListener('blur', () => { keys.clear(); st.jumpHeld = false; st.move.x = st.move.y = 0; });

  return {
    state: st,
    consume(name) { const had = st.pressed.has(name); st.pressed.delete(name); return had; },
    takeCam() { const d = { x: st.camDX, y: st.camDY }; st.camDX = 0; st.camDY = 0; return d; },
    setEnabled(v) { st.enabled = v; if (!v) { st.pressed.clear(); st.move.x = st.move.y = 0; st.jumpHeld = false; } },
  };
}
