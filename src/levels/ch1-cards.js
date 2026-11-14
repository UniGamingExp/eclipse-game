// Chapter 1 · Syria Unfiltered · Part 2 "The Card Tables".
// #card-tables: a giant green-felt card table floating in the evening sky. Hop across flipping playing
// cards, build a bubble staircase up a giant deck of cards, and sit down on top of it for a real game of
// Trex as partners against two bots, like in the server. After the match, a card-door opens to part 3.
import * as THREE from 'three';
import { mat, add, rbox, islandMeshes, sign, cloud, sky, makeStar, spinStars, lights } from './common.js';
import { createBubbles, bubbleAbilities } from './bubbles.js';
import { createTrexTable } from '../trex-ui.js';
import { SUIT_SYM } from '../trex.js';
import { createMinigame, tilesGame, withMinigames } from './minigame.js';

const FELT_R = 11.5;
const DECK = { x0: -3.6, x1: 3.6, z0: -10, z1: -3.2, top: 7.2 };   // the giant deck the table stands on
const T = { x: 0, z: -6.6 };                                          // Trex table centre (on the deck)
const CARD_Z = [19.3, 15.9, 12.6];

function canvasTex(w, h, draw) {
  const cv = document.createElement('canvas');
  cv.width = w; cv.height = h;
  draw(cv.getContext('2d'), w, h);
  const t = new THREE.CanvasTexture(cv);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
/** a giant playing card face */
const cardFace = (rank, suit) => canvasTex(256, 360, (g, w, h) => {
  g.fillStyle = '#fffdf8'; g.fillRect(0, 0, w, h);
  g.strokeStyle = '#e2d8c8'; g.lineWidth = 8; g.strokeRect(8, 8, w - 16, h - 16);
  const red = suit === 'H' || suit === 'D';
  g.fillStyle = red ? '#d0343b' : '#232323';
  g.font = '900 64px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(rank, 46, 52); g.fillText(SUIT_SYM[suit], 46, 112);
  g.save(); g.translate(w - 46, h - 52); g.rotate(Math.PI); g.fillText(rank, 0, 0); g.fillText(SUIT_SYM[suit], 0, -60); g.restore();
  g.font = '150px ui-rounded, system-ui, sans-serif'; g.fillText(SUIT_SYM[suit], w / 2, h / 2 + 8);
});
const cardBack = () => canvasTex(256, 360, (g, w, h) => {
  g.fillStyle = '#fffdf8'; g.fillRect(0, 0, w, h);
  g.fillStyle = '#6b3fc4'; g.fillRect(14, 14, w - 28, h - 28);
  g.strokeStyle = '#a98af0'; g.lineWidth = 6;
  for (let i = -h; i < w + h; i += 22) { g.beginPath(); g.moveTo(i, 14); g.lineTo(i + h, h); g.stroke(); }
  g.fillStyle = '#fffdf8'; g.beginPath(); g.arc(w / 2, h / 2, 46, 0, Math.PI * 2); g.fill();
  g.fillStyle = '#6b3fc4'; g.font = '900 54px ui-rounded, system-ui, sans-serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText('☾☀', w / 2, h / 2 + 2);
});
const feltTex = () => {
  const t = canvasTex(256, 256, (g, w) => {
    g.fillStyle = '#2f8a5b'; g.fillRect(0, 0, w, w);
    for (let i = 0; i < 2200; i++) { g.fillStyle = `rgba(${Math.random() < 0.5 ? '0,0,0' : '255,255,255'},0.05)`; g.fillRect(Math.random() * w, Math.random() * w, 2, 2); }
  });
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(6, 6);
  return t;
};

function chipStack(parent, x, z, n, colors, colliders) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  parent.add(g);
  const geo = new THREE.CylinderGeometry(0.95, 0.95, 0.24, 28);
  for (let i = 0; i < n; i++) {
    const m = add(g, geo, mat(colors[i % colors.length], { roughness: 0.5 }), Math.sin(i * 2.1) * 0.04, 0.12 + i * 0.25, Math.cos(i * 1.7) * 0.04);
    m.rotation.y = i;
  }
  // white edge spots on the top chip
  const spot = new THREE.BoxGeometry(0.25, 0.25, 0.1);
  for (let k = 0; k < 6; k++) {
    const a = (k / 6) * Math.PI * 2;
    const s = add(g, spot, mat(0xffffff), Math.cos(a) * 0.93, 0.12 + (n - 1) * 0.25, Math.sin(a) * 0.93, { cast: false });
    s.rotation.y = -a;
  }
  colliders.push({ type: 'cyl', x, z, r: 0.95, top: n * 0.25, bottom: 0, surface: 'wood' });
  return n * 0.25;
}

function die(parent, x, z, s, rotY, colliders) {
  const g = add(parent, rbox(s, s, s, s * 0.18), mat(0xfffaf0, { roughness: 0.35 }), x, s / 2, z);
  g.rotation.y = rotY;
  const pip = new THREE.SphereGeometry(s * 0.085, 12, 8);
  const pm = mat(0x2b2440);
  const faces = [
    [[0, 0]], [[-1, -1], [1, 1]], [[-1, -1], [0, 0], [1, 1]],
    [[-1, -1], [1, -1], [-1, 1], [1, 1]], [[-1, -1], [1, -1], [0, 0], [-1, 1], [1, 1]], [[-1, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [1, 1]],
  ];
  const d = s * 0.5, o = s * 0.24;
  const put = (pts, f) => pts.forEach(([a, b]) => { const p = f(a * o, b * o); const m = add(g, pip, pm, p[0], p[1], p[2], { cast: false }); m.scale.setScalar(1); });
  put(faces[0], (a, b) => [a, d, b]);              // top: 1
  put(faces[5], (a, b) => [a, -d, b]);
  put(faces[1], (a, b) => [d, a, b]);
  put(faces[4], (a, b) => [-d, a, b]);
  put(faces[2], (a, b) => [a, b, d]);
  put(faces[3], (a, b) => [a, b, -d]);
  const r = s * 0.62;
  colliders.push({ type: 'box', x0: x - r, x1: x + r, z0: z - r, z1: z + r, top: s, bottom: 0 });
}

export function buildCh1Cards(root, scene) {
  const colliders = [];
  const stars = [];
  const anims = [];
  const world = new THREE.Group();
  root.add(world);

  scene.fog = new THREE.Fog(new THREE.Color('#8f78b5'), 60, 230);
  sky(root, {
    top: '#16204e', mid: '#7b62ad', low: '#f0a2b6', neb1: '#7d6bff', neb2: '#ff8fc0', stars: 1, nebula: 0.8, cloud: 0xd9b8e8, far: false, cx: 0,
    lightDir: [0.3, 0.4, 1],
    planets: [['giant', -0.4, 0.17, 300, 0.42], ['lilac', 0.9, 0.12, 230, 0.2, 1.4], ['ember', -1.7, 0.14, 230, 0.1, 1.8], ['rose', 2.6, 0.2, 250, -0.5], ['ocean', 3.6, 0.12, 270, 0.3]],
  });
  lights(root, { sunColor: 0xffe0c8, sunI: 2.1, hemiSky: 0xbab2ff, hemiGround: 0xffc8b4, hemiI: 1.45, pos: [-12, 30, 20], target: [0, 0, 0], extent: 40 });

  // ---------- entry pad ----------
  islandMeshes(world, 0, 26, 5, 0, 5, 0x9ad877, 0xe0a67c, 0x8f6c9c);
  colliders.push({ type: 'cyl', x: 0, z: 26, r: 4.95, top: 0, bottom: -1.2, safe: true });
  sign(world, -2.6, 23.2, 0.3, ['# card-tables', 'deal us in 🃏']);

  // ---------- flipping card bridge ----------
  const back = cardBack();
  const faceCards = [['A', 'S'], ['K', 'H'], ['7', 'D']];
  const flippers = CARD_Z.map((z, i) => {
    const pivot = new THREE.Group();
    pivot.position.set(0, -0.06, z);
    world.add(pivot);
    const front = add(pivot, new THREE.PlaneGeometry(2.3, 3.2).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: cardFace(...faceCards[i]), roughness: 0.6 }), 0, 0.045, 0, { cast: false });
    add(pivot, new THREE.PlaneGeometry(2.3, 3.2).rotateX(Math.PI / 2), new THREE.MeshStandardMaterial({ map: back, roughness: 0.6 }), 0, -0.045, 0, { cast: false });
    add(pivot, new THREE.BoxGeometry(2.3, 0.08, 3.2), mat(0xf1ebdf), 0, 0, 0, { receive: false });
    front.receiveShadow = true;
    const col = { type: 'box', x0: -1.15, x1: 1.15, z0: z - 1.6, z1: z + 1.6, top: 0, bottom: -0.3, surface: 'wood' };
    colliders.push(col);
    return { pivot, col, off: i * 1100 };
  });
  // a card rests flat for a while, then flips over (about its long side); you can only stand on it while flat
  const FLIP_P = 3400, FLIP_T = 900;
  const flipAngle = (ms, off) => {
    const u = (((ms - off) % FLIP_P) + FLIP_P) % FLIP_P;
    if (u < FLIP_P - FLIP_T - 450) return 0;
    if (u < FLIP_P - FLIP_T) return Math.sin(u * 0.06) * 0.045;   // a little shiver before it flips
    const k = (u - (FLIP_P - FLIP_T)) / FLIP_T;
    return Math.PI * (k * k * (3 - 2 * k));
  };
  stars.push(makeStar(world, 'c1-card', 0, 2.3, CARD_Z[1], 0));
  sign(world, 2.6, 22.6, -0.3, ['Cards flip!', 'cross while they lie flat']);

  // ---------- the felt table ----------
  islandMeshes(world, 0, 0, FELT_R, 0, 7, 0x2f8a5b, 0xb07a52, 0x6e4d7a);
  colliders.push({ type: 'cyl', x: 0, z: 0, r: FELT_R - 0.05, top: 0, bottom: -1.2, safe: true, surface: 'carpet' });
  const felt = add(world, new THREE.CylinderGeometry(FELT_R - 0.35, FELT_R - 0.35, 0.05, 64), new THREE.MeshStandardMaterial({ map: feltTex(), roughness: 0.95 }), 0, 0.03, 0, { cast: false });
  felt.receiveShadow = true;
  const rim = add(world, new THREE.TorusGeometry(FELT_R - 0.1, 0.32, 14, 96), mat(0x8a5634, { roughness: 0.45 }), 0, 0.12, 0, { receive: false });
  rim.rotation.x = Math.PI / 2;

  // chips and dice
  const chipCols = [[0xd94b4b, 0xf2efe6], [0x3d6fd9, 0xf2efe6], [0x2b2b2b, 0xf2efe6], [0x9b59d9, 0xf2efe6]];
  const tall = chipStack(world, 7.4, 3.6, 22, chipCols[3], colliders);              // 5.5 m: shout a bubble next to it
  stars.push(makeStar(world, 'c1-chips', 7.4, tall + 1.0, 3.6, 1));
  chipStack(world, -6.6, 2.2, 6, chipCols[0], colliders);
  chipStack(world, -7.4, -1.6, 10, chipCols[1], colliders);
  chipStack(world, 4.4, 7.2, 4, chipCols[2], colliders);
  die(world, -4.6, 6.4, 1.6, 0.5, colliders);
  die(world, 8.2, -1.4, 1.2, -0.3, colliders);

  // the giant deck of cards with the Trex table on top
  const deckW = DECK.x1 - DECK.x0, deckD = DECK.z1 - DECK.z0, layers = 36;
  const deck = new THREE.Group();
  world.add(deck);
  const sheet = new THREE.BoxGeometry(deckW, DECK.top / layers * 0.92, deckD);
  const sheetMat = mat(0xf7f2e8, { roughness: 0.7 }), sheetMat2 = mat(0xe9e2d4, { roughness: 0.7 });
  for (let i = 0; i < layers; i++) {
    const m = add(deck, sheet, i % 2 ? sheetMat : sheetMat2, (DECK.x0 + DECK.x1) / 2 + Math.sin(i * 1.7) * 0.07, (i + 0.5) * DECK.top / layers, (DECK.z0 + DECK.z1) / 2 + Math.cos(i * 1.3) * 0.07);
    m.rotation.y = Math.sin(i * 2.3) * 0.012;
  }
  add(deck, new THREE.PlaneGeometry(deckW, deckD).rotateX(-Math.PI / 2), new THREE.MeshStandardMaterial({ map: back, roughness: 0.6 }), (DECK.x0 + DECK.x1) / 2, DECK.top + 0.01, (DECK.z0 + DECK.z1) / 2, { cast: false }).receiveShadow = true;
  colliders.push({ type: 'box', ...DECK, bottom: 0, safe: true, surface: 'wood' });
  sign(world, 2.2, -1.8, 0.35, ['The table is up there.', 'Build a staircase together!']);

  // Trex corner on top of the deck: a low table, four cushions, two bots
  const TY = DECK.top;
  const tableG = new THREE.Group();
  tableG.position.set(T.x, TY, T.z);
  world.add(tableG);
  add(tableG, new THREE.CylinderGeometry(0.95, 0.95, 0.08, 32), mat(0x2f8a5b), 0, 0.62, 0);
  add(tableG, new THREE.TorusGeometry(0.95, 0.05, 8, 32).rotateX(Math.PI / 2), mat(0x8a5634), 0, 0.64, 0);
  add(tableG, new THREE.CylinderGeometry(0.12, 0.2, 0.6, 12), mat(0x8a5634), 0, 0.3, 0);
  colliders.push({ type: 'cyl', x: T.x, z: T.z, r: 0.95, top: TY + 0.66, bottom: TY, noGrab: true });
  // a few cards on the table
  const tc = new THREE.PlaneGeometry(0.22, 0.32).rotateX(-Math.PI / 2);
  for (let i = 0; i < 4; i++) { const m = add(tableG, tc, new THREE.MeshStandardMaterial({ map: cardFace(['Q', 'J', 'K', '9'][i], ['H', 'S', 'D', 'C'][i]) }), Math.sin(i * 1.6) * 0.25, 0.67 + i * 0.003, Math.cos(i * 1.6) * 0.25, { cast: false }); m.rotation.y = i * 0.8; }
  const seats = { sun: new THREE.Vector3(T.x, TY, T.z + 1.65), moon: new THREE.Vector3(T.x, TY, T.z - 1.65) };
  const cushions = [];
  for (const [k, p, col] of [['sun', seats.sun, 0xffb36b], ['moon', seats.moon, 0xb48cff], ['w', new THREE.Vector3(T.x - 1.65, TY, T.z), 0x8fc9a8], ['e', new THREE.Vector3(T.x + 1.65, TY, T.z), 0x9fb8f0]]) {
    const c = add(world, new THREE.CylinderGeometry(0.55, 0.6, 0.22, 24), mat(col, { roughness: 0.8 }), p.x, TY + 0.11, p.z);
    cushions.push({ k, c, p });
  }
  // the bots (simple round avatars with little card fans)
  const botG = [];
  for (const [x, col] of [[-1.75, 0x8fc9a8], [1.75, 0x9fb8f0]]) {
    const g = new THREE.Group();
    g.position.set(T.x + x, TY + 0.22, T.z);
    g.rotation.y = x < 0 ? Math.PI / 2 : -Math.PI / 2;
    world.add(g);
    add(g, new THREE.CapsuleGeometry(0.3, 0.35, 6, 12), mat(col), 0, 0.5, 0);
    add(g, new THREE.SphereGeometry(0.32, 18, 12), mat(col), 0, 1.1, 0);
    for (const s of [-1, 1]) add(g, new THREE.SphereGeometry(0.06, 10, 8), mat(0x2b2440), s * 0.11, 1.15, 0.28, { cast: false });
    add(g, new THREE.BoxGeometry(0.06, 0.25, 0.06), mat(0xcccccc), 0, 1.5, 0); // antenna
    add(g, new THREE.SphereGeometry(0.07, 10, 8), mat(0xff5f6d, { emissive: 0xff5f6d, emissiveIntensity: 1 }), 0, 1.65, 0, { cast: false });
    for (let i = 0; i < 4; i++) { const m = add(g, new THREE.PlaneGeometry(0.16, 0.23), new THREE.MeshStandardMaterial({ map: back, side: THREE.DoubleSide }), -0.12 + i * 0.08, 0.75, 0.32, { cast: false }); m.rotation.z = 0.3 - i * 0.2; }
    botG.push(g);
  }
  // the prize: a star floating over the table, earned by winning a match
  const prize = makeStar(world, 'c1-trex', T.x, TY + 2.6, T.z, 2);
  prize.prize = true;
  prize.mesh.scale.setScalar(1.4);
  stars.push(prize);
  const seatSign = sign(world, T.x + 2.4, T.z + 2.2, 0.6, ['Sit on your cushion', 'to play Trex 🃏', 'win the ⭐']);
  seatSign.position.y = TY;

  // the card door to part 3 (opens after a match)
  const doorPivot = new THREE.Group();
  doorPivot.position.set(DECK.x0 + 0.6, TY, DECK.z0 + 0.5);
  world.add(doorPivot);
  const doorCard = new THREE.Group();
  doorPivot.add(doorCard);
  add(doorCard, new THREE.BoxGeometry(2.2, 3.1, 0.08), mat(0xf7f2e8), 1.1, 1.55, 0);
  add(doorCard, new THREE.PlaneGeometry(2.2, 3.1), new THREE.MeshStandardMaterial({ map: cardFace('A', 'H') }), 1.1, 1.55, 0.045, { cast: false });
  const glow = add(doorPivot, new THREE.PlaneGeometry(1.9, 2.9), new THREE.MeshBasicMaterial({ color: new THREE.Color(1.6, 1.3, 2.2), transparent: true, opacity: 0, side: THREE.DoubleSide }), 1.1, 1.5, -0.08, { cast: false, receive: false });
  doorPivot.userData.noHide = true;
  let doorOpen = 0;

  for (const [x, z, w] of [[-18, 12, 5], [17, -14, 4], [-8, -22, 6], [14, 20, 5]]) cloud(world, x, -2.5, z, w, w * 0.8, x - z);

  // ---------- 🎮 hidden minigame: Chip Flip, on a side table east of the felt (three card steps lead over) ----------
  const CH = { x: 22, z: 0, r: 7.5 };
  islandMeshes(world, CH.x, CH.z, CH.r, 0, 6, 0x8a3b4a, 0xb07a52, 0x6e4d7a);
  colliders.push({ type: 'cyl', x: CH.x, z: CH.z, r: CH.r - 0.05, top: 0, bottom: -1.2, safe: true, surface: 'carpet' });
  for (const [i, x] of [12.3, 13.6, 14.6].entries()) {
    const c = add(world, rbox(1.5, 0.12, 2.2, 0.05), mat([0xffffff, 0xf4efe6, 0xffffff][i]), x, -0.06, (i - 1) * 0.5);
    c.rotation.y = (i - 1) * 0.25;
    colliders.push({ type: 'box', x0: x - 0.8, x1: x + 0.8, z0: -1.4, z1: 1.4, top: 0, bottom: -0.12, surface: 'wood' });
  }
  const mgChips = createMinigame(world, colliders, {
    id: 'c1chip', title: 'Chip Flip', rules: ['Run over the chips to flip them', 'to your colour. Most in 30 s!'],
    at: { x: 28.2, y: 0, z: 0 }, face: -Math.PI / 2, pads: { sun: [26.6, -2.8], moon: [26.6, 2.8] }, dur: 30000,
    game: tilesGame({ cx: 21, cz: 0, y: 0, n: 4, size: 2.2 }),
  });
  stars.push(makeStar(world, 'c1-side', 17.2, 1.4, -4.6, 3));

  // ---------- abilities (same as the rest of Chapter 1) ----------
  const bub = createBubbles(world, colliders);
  const ab = bubbleAbilities(bub);
  let api = null;

  // ---------- Trex ----------
  const matchOf = () => {
    const t = api?.save?.ch1?.trex;
    if (!t || !t.seed) return null;
    const p = t.p || {};
    const plays = Object.keys(p).map(Number).sort((a, b) => a - b).map((k) => p[k]);
    return { seed: t.seed, plays };
  };
  let table = null, seatedBefore = false, finishedT = 0;
  let seatT = 0, lastT = null, opened = false, replayHint = false;
  function newMatch() { api.setSave('ch1/trex', { seed: 1 + Math.floor(Math.random() * 1e9), p: null }); api.sound.play('shuffle'); }
  let tableKind = null, practiceSeat = 0;
  function ensureTable() {
    if (table && tableKind === api.kind + api.role) return table;
    table?.destroy();
    tableKind = api.kind + api.role;
    const solo = api.kind === 'solo';
    table = createTrexTable({
      // practice: you play both Sun's and Moon's hands (the view turns to whoever's turn it is)
      mySeat: solo ? (r) => (r.current && [0, 2].includes(r.current.waiting) ? (practiceSeat = r.current.waiting) : practiceSeat) : api.role === 'sun' ? 0 : 2,
      humanSeats: [0, 2],
      getMatch: matchOf,
      play(card) { const m = matchOf(); if (m) api.setSave(`ch1/trex/p/${m.plays.length}`, card); },
      newMatch,
      onFinish({ won }) {
        if (won) api.collectStar('c1-trex');
        if (!api.save?.ch1?.cards) api.setSave('ch1/cards', true);
      },
      onClose() { api.setInput(true); api.setMusic(null); },
      onOpen() { api.setMusic('hideout'); },
    });
    return table;
  }
  const near = (p, q, r = 0.75) => p && Math.hypot(p.x - q.x, p.z - q.z) < r && Math.abs(p.y - q.y) < 0.6;

  // ---------- story ----------
  let shownUp = false, doneT = -1, cardsShown = false;
  const atDoor = (p) => p && p.y > TY - 0.4 && Math.hypot(p.x - (DECK.x0 + 1.7), p.z - (DECK.z0 + 0.6)) < 1.6;

  return {
    id: 'ch1-cards',
    title: 'Chapter 1 · Syria Unfiltered — The Card Tables',
    colliders,
    stars,
    movers: {},
    spawn: { sun: new THREE.Vector3(-1.2, 0, 27.5), moon: new THREE.Vector3(1.2, 0, 27.5) },
    camYaw: { sun: 0, moon: 0 },
    lobbyCam: { cx: 0, cz: 4, r: 34, h: 14 },
    killY: -14,
    portal: new THREE.Vector3(-2.2, DECK.top, -8.9),   // where the end-of-part portal opens
    intro: { all: ['Part 2 · The Card Tables', 'Late nights in #card-tables: Trex, as partners.'] },
    abilities: withMinigames(ab.abilities, [mgChips]),
    bubbles: bub,
    trex: { matchOf, newMatch, open: () => { ensureTable().open(); } },
    attach(a) { api = a; ab.attach(a); mgChips.attach(a); },
    story(ctx, t) {
      const st = ctx.save.ch1 || {};
      const a = ctx.pos.sun, b = ctx.pos.moon;
      if (!shownUp && ((a && a.y > TY - 0.5) || (b && b.y > TY - 0.5))) { shownUp = true; ctx.caption('Sit on your cushions to deal the cards 🃏', 4000); }
      // both seated (in practice: Sun alone) → open the table
      const solo = api.kind === 'solo';
      const seated = solo ? near(api.bodies.sun.pos, seats.sun) : near(a, seats.sun) && near(b, seats.moon);
      // the first time it opens straight away; after the game is won, only if you stay seated a moment
      // (so walking over the cushions doesn't pop the results up again)
      seatT = seated ? seatT + (t - (lastT ?? t)) : 0;
      lastT = t;
      const replay = !!st.cards;
      if (seated && !seatedBefore && replay && !replayHint) { replayHint = true; ctx.caption('Stay on your cushion to play again 🃏', 2600); }
      if (seated && !opened && (!replay || seatT > 1.4)) {
        opened = true;
        if (!matchOf() && (solo || api.role === 'sun')) newMatch();
        api.setInput(false);
        ensureTable().open();
      }
      if (!seated) opened = false;
      seatedBefore = seated;
      if (st.cards && !cardsShown) { cardsShown = true; ctx.caption('The ace of hearts swings open: a paper plane is waiting… ✈️', 4500); }
      if (st.cards && atDoor(a) && atDoor(b) && doneT < 0) {
        doneT = t;
        ctx.caption('On to 8 October.', 2600);
        setTimeout(() => ctx.finish(), 2800);
      }
    },
    update(serverMs, t, dt) {
      spinStars(stars, t);
      for (const a of anims) a(t, dt);
      mgChips.update(dt, serverMs, t);
      for (const f of flippers) {
        const ang = flipAngle(serverMs, f.off);
        f.pivot.rotation.z = ang;
        const flat = Math.min(ang, Math.PI - ang) < 0.3;
        f.col.disabled = !flat;
      }
      botG.forEach((g, i) => { g.children[1].rotation.z = Math.sin(t * 1.3 + i * 2) * 0.12; });
      const open = !!api?.save?.ch1?.cards;
      doorOpen += ((open ? 1 : 0) - doorOpen) * Math.min(1, dt * 2);
      doorCard.rotation.y = -doorOpen * 1.7;
      glow.material.opacity = doorOpen * (0.65 + Math.sin(t * 2.4) * 0.2);
    },
  };
}
