// The Trex table overlay: your hand at the bottom, partner on top, the two bots left and right,
// the trick in the middle, a scoreboard, and gentle animation of the bots' cards.
import { replay, legal, label, suitOf, CONTRACTS, MATCH, deal as dealCards } from './trex.js';
import { sound } from './sound.js';

const NAMES = ['Sun ☀️', 'Rami 🤖', 'Moon 🌙', 'Lina 🤖'];
const POS = ['bottom', 'left', 'top', 'right'];

function el(tag, cls, html) { const e = document.createElement(tag); if (cls) e.className = cls; if (html != null) e.innerHTML = html; return e; }
function cardEl(c, extra = '') {
  const red = 'HD'.includes(suitOf(c));
  const e = el('div', `tcard ${red ? 'red' : ''} ${extra}`, `<b>${label(c).slice(0, -1)}</b><i>${label(c).slice(-1)}</i>`);
  e.dataset.card = c;
  return e;
}

/**
 * opts: { mySeat (a seat, or a function(replay) → seat, e.g. in practice where you play both hands), humanSeats, getMatch() → { seed, plays[] }, play(card), newMatch(), onFinish({ us, them, won }), onClose() }
 */
export function createTrexTable(opts) {
  const root = el('div', 'screen trex');
  root.hidden = true;
  root.innerHTML = `
    <div class="t-top"><div class="t-contract"></div><div class="t-score"></div><button class="t-close" aria-label="Close">✕</button></div>
    <div class="t-table">
      <div class="t-seat top"><span class="t-name"></span><div class="t-backs"></div></div>
      <div class="t-seat left"><span class="t-name"></span><div class="t-backs"></div></div>
      <div class="t-seat right"><span class="t-name"></span><div class="t-backs"></div></div>
      <div class="t-trick"></div>
      <div class="t-msg"></div>
    </div>
    <div class="t-hand"></div>
    <div class="t-end" hidden><h3></h3><p></p><div class="btns"><button class="primary t-again">Play again</button><button class="t-done">Continue</button></div></div>`;
  document.body.appendChild(root);
  const $ = (s) => root.querySelector(s);
  $('.t-close').onclick = () => close();
  $('.t-again').onclick = () => { opts.newMatch(); shown = 0; finishedShown = false; $('.t-end').hidden = true; };
  $('.t-done').onclick = () => close();

  let shown = 0, nextAt = 0, timer = null, lastKey = '', finishedShown = false, holdTrick = null;
  let me = typeof opts.mySeat === 'function' ? 0 : opts.mySeat;
  const view = (seat) => POS[(seat - me + 4) % 4];

  function open() { opts.onOpen?.(); root.hidden = false; shown = 0; nextAt = 0; finishedShown = false; holdTrick = null; tick(); timer = setInterval(tick, 120); }
  function close() { root.hidden = true; clearInterval(timer); timer = null; opts.onClose?.(); }

  function tick() {
    const m = opts.getMatch();
    if (!m) return;
    const r = replay(m.seed, opts.humanSeats, m.plays);
    const now = performance.now();
    // reveal one event at a time (bots' cards with a little delay so you can follow)
    if (shown > r.events.length) shown = 0;
    if (shown < r.events.length && now >= nextAt) {
      const ev = r.events[shown];
      shown++;
      sound.play('card');
      if (ev.trickEnd) setTimeout(() => sound.play('trick'), 700 * (window.__trexSpeed ?? 1));
      const k = window.__trexSpeed ?? 1;   // tests speed this up
      nextAt = now + k * (ev.trickEnd ? 1100 : opts.humanSeats.includes(r.events[shown]?.seat) ? 150 : 520);
      if (ev.trickEnd) holdTrick = { until: now + 1000 * k, ev };
    }
    draw(r, now);
  }

  function draw(r, now) {
    const evs = r.events.slice(0, shown);
    const caughtUp = shown === r.events.length;
    if (typeof opts.mySeat === 'function' && caughtUp) { const s = opts.mySeat(r); if (s !== me) { me = s; lastKey = '__'; } }
    const last = evs[evs.length - 1];
    // the round on the table: the round of the next card to show, else the one waiting for a human
    const round = !caughtUp ? r.events[shown].round : r.current ? r.current.round : last ? last.round : 0;
    const contract = MATCH[round];
    $('.t-contract').innerHTML = `<b>${round + 1}/${MATCH.length} · ${CONTRACTS[contract].name}</b><small>${CONTRACTS[contract].rule}</small>`;
    // scores of the rounds whose cards have all been shown
    let us = 0, them = 0;
    r.roundScores.forEach((sc, i) => {
      let lastIdx = -1;
      r.events.forEach((e, k) => { if (e.round === i) lastIdx = k; });
      if (lastIdx < shown) { us += sc.us; them += sc.them; }
    });
    $('.t-score').innerHTML = `<span class="us">☀️🌙 ${us}</span><span class="them">🤖🤖 ${them}</span>`;

    // the cards on the table right now: the current (partial) trick from the shown events
    const trickBox = $('.t-trick');
    let trick = [];
    for (let i = evs.length - 1; i >= 0; i--) {
      const e = evs[i];
      if (e.trickEnd) { if (i === evs.length - 1 && holdTrick && now < holdTrick.until) trick = e.trickEnd.cards.map((c, k) => ({ card: c, seat: (r.events[i - 3 + k].seat) })); break; }
      if (e.round !== round) break;
      trick.unshift(e);
    }
    const key = trick.map((t) => t.seat + t.card).join();
    if (key !== lastKey) {
      lastKey = key;
      trickBox.innerHTML = '';
      for (const t of trick) trickBox.appendChild(cardEl(t.card, `at-${view(t.seat)}`));
    }

    // hands: rebuild my hand from the deal minus what I've shown being played
    const myCards = handAt(r, me, round, evs);
    const myTurn = caughtUp && r.current && r.current.waiting === me;
    const okSet = myTurn ? new Set(legal(r.current.hands[me], r.current.trick, r.current.contract)) : new Set();
    const hand = $('.t-hand');
    const hkey = myCards.join() + '|' + [...okSet].join();
    if (hand.dataset.k !== hkey) {
      hand.dataset.k = hkey;
      hand.innerHTML = '';
      for (const c of myCards) {
        const e = cardEl(c, okSet.has(c) ? 'ok' : myTurn ? 'no' : '');
        if (okSet.has(c)) e.onclick = () => { if (!root.hidden) opts.play(c); };
        hand.appendChild(e);
      }
    }
    for (let s = 0; s < 4; s++) {
      if (s === me) continue;
      const box = root.querySelector(`.t-seat.${view(s)}`);
      box.querySelector('.t-name').textContent = NAMES[s];
      const n = handAt(r, s, round, evs).length;
      const backs = box.querySelector('.t-backs');
      if (backs.childElementCount !== n) backs.innerHTML = '<div class="tback"></div>'.repeat(n);
      box.classList.toggle('turn', caughtUp && r.current?.waiting === s);
    }
    // message
    let msg = '';
    if (holdTrick && now < holdTrick.until) msg = `${NAMES[holdTrick.ev.trickEnd.winner]} takes the trick`;
    else if (!caughtUp) msg = '…';
    else if (r.finished) msg = '';
    else if (myTurn) msg = typeof opts.mySeat === 'function' ? `${NAMES[me]}'s turn: tap a raised card` : 'Your turn: tap a raised card';
    else msg = `${NAMES[r.current.waiting]} is thinking…`;
    $('.t-msg').textContent = msg;
    root.classList.toggle('myturn', !!myTurn);

    if (r.finished && caughtUp && !finishedShown && !(holdTrick && now < holdTrick.until)) {
      finishedShown = true;
      const won = r.totals.us > r.totals.them, tie = r.totals.us === r.totals.them;
      $('.t-end h3').textContent = won ? 'You two win! 🏆' : tie ? "It's a draw 🤝" : 'The bots win this time 🤖';
      $('.t-end p').innerHTML = r.roundScores.map((s, i) => `${CONTRACTS[MATCH[i]].name}: ☀️🌙 ${s.us} · 🤖 ${s.them}`).join('<br>') + `<br><b>Total: ☀️🌙 ${r.totals.us} · 🤖 ${r.totals.them}</b>`;
      $('.t-end').hidden = false;
      sound.play(won ? 'win' : 'respawn');
      opts.onFinish?.({ ...r.totals, won });
    }
  }

  // a seat's hand at the time of the last shown event
  function handAt(r, seat, round, evs) {
    const { deal } = cache;
    const seed = opts.getMatch().seed;
    const k = seed + ':' + round;
    if (!deal[k]) deal[k] = dealFor(seed, round);
    const played = new Set(evs.filter((e) => e.round === round && e.seat === seat).map((e) => e.card));
    return deal[k][seat].filter((c) => !played.has(c));
  }
  const cache = { deal: {} };
  function dealFor(seed, round) { return dealCards(seed + round * 7919); }

  return { open, close, destroy() { clearInterval(timer); root.remove(); }, get isOpen() { return !root.hidden; } };
}
