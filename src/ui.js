// Lobby, connection panel, HUD texts and toasts.
import { ROLE_EMOJI, ROLE_NAME, otherRole, store } from './util.js';

const $ = (s) => document.querySelector(s);

export function createUI({ onJoin, onSolo, onStart, onRetry, onLeave, onResetStars, onToggleSound, onFullscreen, canFullscreen }) {
  const lobby = $('#lobby'), conn = $('#conn'), hud = $('#hud');
  let role = store.get('role', null);
  const wordEl = $('#word');
  wordEl.value = store.get('word', '');
  $('#ver').textContent = 'version ' + __BUILD__;

  // ---- room codes: the host makes one, the partner types it or just opens the invite link.
  // A code is simply the room's secret word, so progress is saved under it: keep using the same one.
  const hint = (m) => { const h = $('#code-hint'); h.textContent = m; h.hidden = !m; };
  const ABC = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';   // no 0/O, 1/I/L
  const newCode = () => { const a = new Uint32Array(6); crypto.getRandomValues(a); return [...a].map((n) => ABC[n % ABC.length]).join(''); };
  const inviteUrl = () => `${location.origin}${location.pathname}?room=${encodeURIComponent(wordEl.value.trim())}${role ? `&as=${otherRole(role)}` : ''}`;
  async function shareInvite() {
    const url = inviteUrl(), text = `Come play Eclipse with me ☀️🌙 Room code: ${wordEl.value.trim()}`;
    try {
      if (navigator.share) await navigator.share({ title: 'Eclipse', text, url });
      else { await navigator.clipboard.writeText(`${text}\n${url}`); toast('Invite copied: paste it to your partner'); }
    } catch { /* closed the share sheet */ }
  }
  const paintShare = () => { $('#code-share').hidden = wordEl.value.trim().length < 2; };
  $('#code-new').addEventListener('click', () => {
    if (wordEl.value.trim() && !confirm('Make a new room code? A new code starts a new story from the beginning. (Your old code keeps its progress.)')) return;
    wordEl.value = newCode();
    store.set('word', wordEl.value);
    paintShare();
    hint('Your code is ready. Send the invite to your partner, pick Sun or Moon, then "Play together".');
  });
  $('#code-share').addEventListener('click', shareInvite);
  $('#conn-share').addEventListener('click', shareInvite);
  wordEl.addEventListener('input', paintShare);
  {
    const q = new URLSearchParams(location.search), room = (q.get('room') || '').trim().slice(0, 40), as = q.get('as');
    if (room.length >= 2) {
      wordEl.value = room;
      store.set('word', room);
      if (!store.get('role', null) && (as === 'sun' || as === 'moon')) { role = as; store.set('role', as); }
      hint(`Invite code ${room} filled in ✓ Pick ${as === 'sun' ? 'Sun' : as === 'moon' ? 'Moon' : 'your character'} and press "Play together".`);
      history.replaceState(null, '', location.pathname);   // keep the code out of the address bar / screenshots
    }
  }
  paintShare();

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
    $('#conn-code').hidden = kind !== 'online' && kind !== 'local';
    $('#conn-code-val').textContent = wordEl.value.trim();
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
