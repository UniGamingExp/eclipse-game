// Trex (Trix), the Syrian/Lebanese card game, as a short partnership match: Sun (south) and Moon (north)
// against two bots (west, east). Two "avoid" contracts are played in a row:
//   · King of Hearts: whoever wins the trick with K♥ in it loses 75. You can't lead ♥ unless you only have ♥.
//     The deal ends as soon as the king is taken.
//   · Diamonds: −10 for every ♦ in the tricks you win. Ends once all 13 diamonds are taken.
// Pure logic: the whole match is a function of (seed, human plays in order). Bots are deterministic, so
// both phones replay the same match from the shared save without sending the bots' moves.
export const SUITS = ['S', 'H', 'D', 'C'];
export const SUIT_SYM = { S: '♠', H: '♥', D: '♦', C: '♣' };
export const RANKS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
export const SEATS = ['south', 'west', 'north', 'east'];
export const CONTRACTS = {
  king: { name: 'King of Hearts', short: 'K♥', rule: "Don't take the K♥ (−75). No leading ♥ unless you only have ♥." },
  diamonds: { name: 'Diamonds', short: '♦', rule: '−10 for every ♦ in the tricks you take.' },
};
export const MATCH = ['king', 'diamonds'];

export const suitOf = (c) => c[c.length - 1];
export const rankOf = (c) => c.slice(0, -1);
export const valueOf = (c) => RANKS.indexOf(rankOf(c)) + 2;
export const label = (c) => rankOf(c) + SUIT_SYM[suitOf(c)];

function rng(seed) {
  let s = (seed >>> 0) || 1;
  return () => { s ^= s << 13; s >>>= 0; s ^= s >>> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
}
const sortHand = (h) => h.sort((a, b) => SUITS.indexOf(suitOf(a)) - SUITS.indexOf(suitOf(b)) || valueOf(a) - valueOf(b));

export function deal(seed) {
  const deck = [];
  for (const s of SUITS) for (const r of RANKS) deck.push(r + s);
  const R = rng(seed);
  for (let i = deck.length - 1; i > 0; i--) { const j = Math.floor(R() * (i + 1)); [deck[i], deck[j]] = [deck[j], deck[i]]; }
  return [0, 1, 2, 3].map((p) => sortHand(deck.slice(p * 13, p * 13 + 13)));
}

/** Cards `hand` may play now. */
export function legal(hand, trick, contract) {
  if (trick.length) {
    const led = suitOf(trick[0].card);
    const follow = hand.filter((c) => suitOf(c) === led);
    return follow.length ? follow : hand.slice();
  }
  if (contract === 'king') {
    const nonH = hand.filter((c) => suitOf(c) !== 'H');
    if (nonH.length) return nonH;
  }
  return hand.slice();
}

export function trickWinner(trick) {
  const led = suitOf(trick[0].card);
  let best = trick[0];
  for (const t of trick) if (suitOf(t.card) === led && valueOf(t.card) > valueOf(best.card)) best = t;
  return best.seat;
}

const penaltyOf = (cards, contract) =>
  contract === 'king' ? (cards.includes('KH') ? -75 : 0) : -10 * cards.filter((c) => suitOf(c) === 'D').length;

/** How bad a card is to be stuck with in this contract (for bots discarding). */
function danger(c, contract) {
  let d = valueOf(c);
  if (contract === 'king' && c === 'KH') d += 100;
  if (contract === 'king' && suitOf(c) === 'H' && valueOf(c) > 13) d += 30;  // A♥ protects the king… still risky
  if (contract === 'diamonds' && suitOf(c) === 'D') d += 20;
  return d;
}

/** Deterministic bot: duck under the current winner when possible, dump dangerous cards when void. */
export function botPlay(hand, trick, contract) {
  const ok = legal(hand, trick, contract);
  if (ok.length === 1) return ok[0];
  if (!trick.length) {
    // lead: a low card from the suit we hold most of (but not the penalty suit if we can help it)
    const bySuit = {};
    for (const c of ok) (bySuit[suitOf(c)] ||= []).push(c);
    const pen = contract === 'king' ? 'H' : 'D';
    const suits = Object.keys(bySuit).sort((a, b) => (a === pen) - (b === pen) || bySuit[b].length - bySuit[a].length || SUITS.indexOf(a) - SUITS.indexOf(b));
    return bySuit[suits[0]].sort((a, b) => valueOf(a) - valueOf(b))[0];
  }
  const led = suitOf(trick[0].card);
  const following = suitOf(ok[0]) === led;
  if (!following) return ok.slice().sort((a, b) => danger(b, contract) - danger(a, contract) || SUITS.indexOf(suitOf(a)) - SUITS.indexOf(suitOf(b)))[0];
  const win = Math.max(...trick.filter((t) => suitOf(t.card) === led).map((t) => valueOf(t.card)));
  const under = ok.filter((c) => valueOf(c) < win).sort((a, b) => valueOf(b) - valueOf(a));
  const trickHasPenalty = trick.some((t) => penaltyOf([t.card], contract) < 0);
  if (under.length) {
    // in King, slip the K♥ under a higher heart
    if (contract === 'king' && under.includes('KH')) return 'KH';
    return under[0];
  }
  // we'll win this trick anyway: last to play → take it with the highest card; otherwise lowest
  const sorted = ok.slice().sort((a, b) => valueOf(a) - valueOf(b));
  if (trick.length === 3 && !trickHasPenalty) {
    const safe = sorted.filter((c) => !(contract === 'king' && c === 'KH') && !(contract === 'diamonds' && suitOf(c) === 'D'));
    return (safe.length ? safe : sorted)[(safe.length ? safe : sorted).length - 1];
  }
  return sorted.find((c) => c !== 'KH') || sorted[0];
}

/**
 * Replays the match. humanSeats: seats played by people (e.g. [0, 2]); plays: their cards in order.
 * Returns everything the table needs to draw itself, plus `waiting` = the seat whose (human) turn it is.
 */
export function replay(seed, humanSeats, plays) {
  const events = [];           // every card played, in order: { round, seat, card, trickEnd? }
  const roundScores = [];
  let hp = 0;
  let state = null;
  for (let r = 0; r < MATCH.length; r++) {
    const contract = MATCH[r];
    const hands = deal(seed + r * 7919);
    const taken = [[], [], [], []];
    let leader = r % 4, trick = [], trickNo = 0, done = false;
    while (!done) {
      const seat = (leader + trick.length) % 4;
      let card;
      if (humanSeats.includes(seat)) {
        card = plays[hp];
        if (card === undefined) {
          state = { round: r, contract, hands, trick, taken, leader, waiting: seat, trickNo };
          break;
        }
        if (!legal(hands[seat], trick, contract).includes(card)) { hp++; continue; } // ignore a bad record
        hp++;
      } else card = botPlay(hands[seat], trick, contract);
      hands[seat].splice(hands[seat].indexOf(card), 1);
      trick.push({ seat, card });
      const ev = { round: r, seat, card };
      events.push(ev);
      if (trick.length === 4) {
        const w = trickWinner(trick);
        taken[w].push(...trick.map((t) => t.card));
        ev.trickEnd = { winner: w, cards: trick.map((t) => t.card) };
        trick = []; leader = w; trickNo++;
        const all = taken.flat();
        if ((contract === 'king' && all.includes('KH')) || (contract === 'diamonds' && all.filter((c) => suitOf(c) === 'D').length === 13) || trickNo === 13) done = true;
      }
    }
    if (state) break;
    roundScores.push(taken.map((t) => penaltyOf(t, contract)));
  }
  const team = (sc) => ({ us: sc[0] + sc[2], them: sc[1] + sc[3] });
  const totals = roundScores.reduce((a, sc) => { const t = team(sc); return { us: a.us + t.us, them: a.them + t.them }; }, { us: 0, them: 0 });
  return { events, roundScores: roundScores.map(team), totals, current: state, finished: !state, humansPlayed: hp };
}
