// The "Our memories" gallery: unlock with the shared password, browse the photos.
import { unlockMemories, savedPassword, lockMemories } from './memories.js';

const $ = (s) => document.querySelector(s);

export function initMemoriesUI() {
  const screen = $('#mem'), view = $('#mem-view'), grid = $('#mem-grid'), lock = $('#mem-lock');
  const pw = $('#mem-pw'), err = $('#mem-err'), openBtn = $('#mem-open');
  const lockBtn = $('#mem-lockbtn');
  let back = null, items = [], idx = 0;

  function show(list) {
    items = list;
    lock.hidden = true;
    grid.hidden = false;
    lockBtn.hidden = false;
    grid.innerHTML = '';
    list.forEach((m, i) => {
      const b = document.createElement('button');
      const img = document.createElement('img');
      img.src = m.url; img.alt = m.title; img.loading = 'lazy';
      const t = document.createElement('span');
      t.textContent = m.title;
      b.append(img, t);
      b.addEventListener('click', () => openView(i));
      grid.appendChild(b);
    });
  }

  async function tryUnlock(password, quiet) {
    if (!password) return;
    openBtn.disabled = true;
    err.textContent = quiet ? '' : 'Unlocking…';
    try {
      show(await unlockMemories(password, quiet || $('#mem-remember').checked));
      pw.value = '';
      err.textContent = '';
    } catch (e) {
      const m = String(e.message);
      if (!quiet) err.textContent = m === 'wrong-password' ? "That's not the password." : m === 'unsupported' ? 'This browser can’t open them. Try Safari or Chrome.' : 'Couldn’t load the memories. Check the internet connection.';
    } finally { openBtn.disabled = false; }
  }

  function open(from) {
    back = from;
    if (from) from.hidden = true;
    screen.hidden = false;
    if (!items.length) {
      lock.hidden = false; grid.hidden = true;
      const saved = savedPassword();
      if (saved) tryUnlock(saved, true);
    }
  }
  function close() {
    screen.hidden = true;
    if (back) back.hidden = false;
  }
  function openView(i) {
    idx = (i + items.length) % items.length;
    const m = items[idx];
    $('#mem-img').src = m.url;
    $('#mem-title').textContent = m.title;
    $('#mem-caption').textContent = m.caption || '';
    view.hidden = false;
  }

  openBtn.addEventListener('click', () => tryUnlock(pw.value, false));
  pw.addEventListener('keydown', (e) => { if (e.key === 'Enter') tryUnlock(pw.value, false); });
  $('#mem-close').addEventListener('click', close);
  lockBtn.addEventListener('click', () => {
    lockMemories();
    items = []; grid.innerHTML = ''; $('#mem-img').removeAttribute('src');
    grid.hidden = true; view.hidden = true; lock.hidden = false; lockBtn.hidden = true;
    $('#mem-remember').checked = false;
    err.textContent = 'Locked. The password is no longer remembered on this device.';
  });
  $('#mem-x').addEventListener('click', () => { view.hidden = true; });
  $('#mem-prev').addEventListener('click', () => openView(idx - 1));
  $('#mem-next').addEventListener('click', () => openView(idx + 1));
  $('#lobby-mem').addEventListener('click', () => open($('#lobby')));
  $('#opt-mem').addEventListener('click', () => open($('#conn')));
}
