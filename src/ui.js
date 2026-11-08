// Lobby, connection panel, HUD texts and toasts.
import { ROLE_EMOJI, ROLE_NAME, otherRole, store } from './util.js';

const $ = (s) => document.querySelector(s);

export function createUI({ onJoin, onSolo, onStart, onRetry, onLeave, onResetStars, onToggleSound, onFullscreen, canFullscreen }) {
  const lobby = $('#lobby'), conn = $('#conn'), hud = $('#hud');
  let role = store.get('role', null);
  const wordEl = $('#word');
  wordEl.value = store.get('word', '');
  $('#ver').textContent = 'version ' + __BUILD__;

  const roleBtns = [...document.querySelectorAll('.role')];
  const paintRoles = () => roleBtns.forEach((b) => b.classList.toggle('sel', b.dataset.role === role));
  paintRoles();
  roleBtns.forEach((b) => b.addEventListener('click', () => { role = b.dataset.role; store.set('role', role); paintRoles(); lobbyErr(''); }));

  const lobbyErr = (m) => { $('#lobby-err').textContent = m; };
  $('#join').addEventListener('click', () => {
    const word = wordEl.value.trim();
    if (!role) return lobbyErr('Pick Sun or Moon first.');
    if (word.length < 2) return lobbyErr('Type a secret word (you both use the same one).');
    store.set('word', word);
    wordEl.blur();
    onJoin(role, word);
  });
  wordEl.addEventListener('keydown', (e) => { if (e.key === 'Enter') $('#join').click(); });
  $('#solo').addEventListener('click', () => { wordEl.blur(); onSolo(role || 'sun'); });

  $('#conn-start').addEventListener('click', () => onStart());
  $('#conn-retry').addEventListener('click', () => onRetry());
  $('#conn-leave').addEventListener('click', () => onLeave());
  $('#opt-stars').addEventListener('click', () => { onResetStars(); toast('Stars reset'); });
  const soundBtn = $('#opt-sound');
  const paintSound = (on) => { soundBtn.textContent = on ? '🔊 Sound on' : '🔈 Sound off'; };
  soundBtn.addEventListener('click', () => paintSound(onToggleSound()));
  $('#opt-full').hidden = !canFullscreen;
  $('#opt-full').addEventListener('click', () => onFullscreen());

  let connMode = 'join';
  function row(id, cls, title, sub, ms = '') {
    const r = $(id);
    const ic = r.querySelector('.ic');
    ic.className = 'ic ' + cls;
    ic.textContent = cls === 'good' ? '✓' : cls === 'bad' ? '✕' : cls === 'ok' ? '!' : '';
    r.querySelector('b').textContent = title;
    r.querySelector('small').textContent = sub;
    r.querySelector('.ms').textContent = ms;
  }

  const quality = (ms) => (ms < 120 ? ['good', 'Great'] : ms < 220 ? ['good', 'Good'] : ms < 400 ? ['ok', 'OK'] : ['bad', 'Laggy']);

  function renderStatus(st, myRole, kind) {
    const other = otherRole(myRole);
    const P = `${ROLE_EMOJI[other]} ${ROLE_NAME[other]}`;
    $('#conn-who').textContent = kind === 'solo'
      ? 'Practice alone: you control both.'
      : `You are ${ROLE_EMOJI[myRole]} ${ROLE_NAME[myRole]}` + (kind === 'local' ? ' (two-tab test)' : '');

    let msg = '', canStart = false, retry = false;
    if (kind === 'solo') {
      row('#row-server', 'good', 'Practice mode', 'No internet needed');
      canStart = true;
    } else if (kind === 'local') {
      row('#row-server', 'good', 'Test mode', 'Two tabs on this computer', st.ping ? `${st.ping} ms fake lag` : '');
      canStart = true;
    } else if (st.error === 'rules') {
      row('#row-server', 'bad', 'Game server said no', 'The database rules need to be set');
      msg = 'The database is still locked. Paste the rules from database.rules.json into Firebase → Realtime Database → Rules, then tap Try again.';
      retry = true;
    } else if (st.server === 'ok') {
      const p = st.ping != null ? Math.round(st.ping) : null;
      row('#row-server', p == null ? 'good' : quality(p)[0], 'Game server', p == null ? 'Connected, measuring…' : `Connected · ${quality(p)[1]}`, p == null ? '' : `${p} ms`);
      canStart = true;
    } else if (st.server === 'reconnecting') {
      row('#row-server', 'wait', 'Game server', 'Connection lost, reconnecting…');
      canStart = connMode === 'menu';
    } else if (st.server === 'unreachable') {
      row('#row-server', 'bad', 'Game server', "Can't reach it from this network");
      msg = "Couldn't reach the game server. Check the internet connection and tap Try again. If it keeps failing, a VPN is the backup plan.";
      retry = true;
    } else {
      row('#row-server', 'wait', 'Game server', 'Connecting…');
    }

    if (kind === 'solo') {
      row('#row-partner', 'good', 'Both characters', 'Tap ⇄ to switch who you control');
    } else if (st.conflict) {
      row('#row-partner', 'bad', `${ROLE_NAME[myRole]} is taken`, `Someone is already ${ROLE_NAME[myRole]} with this word`);
      msg = `Someone is already playing as ${ROLE_NAME[myRole]} with this secret word. Tap Leave and pick ${ROLE_NAME[other]}.`;
      canStart = false;
    } else if (st.partnerOnline) {
      row('#row-partner', st.partnerPing ? quality(st.partnerPing)[0] : 'good', `${P} is here`, st.partnerPing ? `Their connection · ${quality(st.partnerPing)[1]}` : 'Connected', st.partnerPing ? `${Math.round(st.partnerPing)} ms` : '');
    } else {
      row('#row-partner', 'wait', `Waiting for ${P}…`, `Same secret word, pick ${ROLE_NAME[other]}`);
    }

    const showDelay = kind !== 'solo' && st.partnerOnline && st.ping != null && st.partnerPing != null;
    $('#row-delay').hidden = !showDelay;
    if (showDelay) {
      const d = Math.round((st.ping + st.partnerPing) / 2);
      const [c, label] = quality(d);
      row('#row-delay', c, 'Delay between you', label, `≈ ${d} ms`);
    }

    $('#conn-msg').textContent = msg;
    const startBtn = $('#conn-start');
    startBtn.disabled = !canStart;
    startBtn.textContent = connMode === 'menu' ? 'Back to game'
      : kind !== 'solo' && !st.partnerOnline && canStart ? `Start (${ROLE_NAME[other]} can join any time)` : 'Start playing';
    $('#conn-retry').hidden = !retry;

    // HUD pill
    const dot = $('#status-pill .dot');
    let dc = 'good', txt = '';
    if (kind === 'solo') txt = 'Practice';
    else if (st.server !== 'ok' && kind !== 'local') { dc = st.server === 'unreachable' || st.error ? 'bad' : 'ok'; txt = st.server === 'reconnecting' ? 'Reconnecting…' : 'Offline'; }
    else {
      const p = st.ping != null ? Math.round(st.ping) : null;
      if (p != null) dc = quality(p)[0];
      txt = `${p != null ? p + ' ms' : '…'} · ${ROLE_EMOJI[other]} ${st.partnerOnline ? 'here' : 'away'}`;
    }
    dot.className = 'dot ' + dc;
    $('#status-text').textContent = txt;
  }

  function toast(m) {
    // a new "Now playing …" replaces the last one instead of stacking (quick switching in practice)
    if (m.startsWith('Now playing')) for (const o of [...$('#toasts').children]) if (o.textContent.startsWith('Now playing')) o.remove();
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = m;
    $('#toasts').appendChild(el);
    setTimeout(() => el.remove(), 2900);
    const all = $('#toasts').children;
    if (all.length > 3) all[0].remove();
  }

  return {
    toast,
    renderStatus,
    paintSound,
    showLobby() { lobby.hidden = false; conn.hidden = true; hud.hidden = true; },
    showConn(mode) {
      connMode = mode;
      lobby.hidden = true; conn.hidden = false;
      $('#conn-title').textContent = mode === 'menu' ? 'Menu' : 'Connection';
      $('#conn-extras').hidden = mode !== 'menu';
      $('#level-chips').hidden = mode !== 'menu';
    },
    showHud() { lobby.hidden = true; conn.hidden = true; hud.hidden = false; },
    setStars(n, total) { $('#star-count').textContent = n; $('#star-total').textContent = total; },
    get connOpen() { return !conn.hidden; },
  };
}
