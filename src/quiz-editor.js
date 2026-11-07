// "Write your quiz": each player writes questions about themself (question + right answer, optional
// wrong answers for multiple choice). Saved to the shared room; the partner only sees how many.
import { ROLE_EMOJI, ROLE_NAME, otherRole } from './util.js';

const $ = (s) => document.querySelector(s);

// Pre-filled for Sun from what he told us (he can still edit them). No names, so fine in public code.
const SUN_DEFAULTS = [
  { q: 'What would be my dream vacation?', a: 'The longest road + sea trip around the world', w: 'A week at a luxury beach resort, Skiing in the Alps, A city trip to New York' },
  { q: "Which hobby of mine don't I do as often lately?", a: 'Photography (nature, no people)', w: 'Drawing, Playing guitar, Cooking' },
  { q: 'What is my favourite show?', a: 'Breaking Bad / Game of Thrones / Sherlock / Silo', w: 'Friends, The Office, Money Heist' },
  { q: 'What is my favourite anime?', a: 'Fullmetal Alchemist', w: 'Naruto, Attack on Titan, One Piece' },
];
const MIN = 3, MAX = 10;

export function initQuizUI({ getNet, getRole }) {
  const screen = $('#quiz-ed'), list = $('#qe-list'), msg = $('#qe-msg');
  let back = null, mine = null, partner = null;

  function row(item = { q: '', a: '', w: '' }) {
    const div = document.createElement('div');
    div.className = 'qe-item';
    div.innerHTML = `<span class="num"></span>
      <button class="del" aria-label="Remove">✕</button>
      <input class="q" maxlength="200" dir="auto" placeholder="Question, e.g. What's my favourite food?">
      <input class="ans" maxlength="200" dir="auto" placeholder="The right answer">
      <details><summary>Make it multiple choice (optional)</summary>
        <input class="w" maxlength="300" dir="auto" placeholder="Wrong answers, separated by commas">
      </details>`;
    div.querySelector('.q').value = item.q || '';
    div.querySelector('.ans').value = item.a || '';
    div.querySelector('.w').value = item.w || '';
    if (item.w) div.querySelector('details').open = true;
    div.querySelector('.del').addEventListener('click', () => { div.remove(); renumber(); });
    list.appendChild(div);
    renumber();
  }
  function renumber() {
    [...list.children].forEach((d, i) => { d.querySelector('.num').textContent = `Question ${i + 1}`; });
    $('#qe-add').hidden = list.children.length >= MAX;
  }
  function collect() {
    return [...list.children].map((d) => {
      const it = { q: d.querySelector('.q').value.trim(), a: d.querySelector('.ans').value.trim() };
      const w = d.querySelector('.w').value.trim();
      if (w) it.w = w;
      return it;
    }).filter((it) => it.q && it.a);
  }

  function open(from) {
    const role = getRole(), other = otherRole(role);
    back = from;
    if (from) from.hidden = true;
    screen.hidden = false;
    $('#qe-intro').textContent = `Write ${MIN}–${MAX} questions about yourself, with the right answers. ${ROLE_EMOJI[other]} ${ROLE_NAME[other]} will have to guess them later, and never sees your answers before that.`;
    list.innerHTML = '';
    const items = mine?.items?.length ? mine.items : role === 'sun' ? SUN_DEFAULTS : [];
    items.forEach(row);
    while (list.children.length < MIN) row();
    msg.textContent = mine ? `${mine.items.length} saved ✓` : '';
  }
  function close() { screen.hidden = true; if (back) back.hidden = false; }

  $('#qe-add').addEventListener('click', () => { row(); list.lastElementChild.querySelector('.q').focus(); });
  $('#qe-save').addEventListener('click', async () => {
    const items = collect();
    if (items.length < MIN) { msg.textContent = `Please write at least ${MIN} questions, each with an answer.`; return; }
    msg.textContent = 'Saving…';
    const net = getNet();
    const t = setTimeout(() => { msg.textContent = 'Waiting for the connection… it will save as soon as you are online.'; }, 2500);
    try {
      await net.saveQuiz(items);
      clearTimeout(t);
      msg.textContent = `${items.length} saved ✓`;
      setTimeout(close, 700);
    } catch (e) {
      clearTimeout(t);
      msg.textContent = 'Could not save: ' + (String(e?.code || e?.message || e).includes('PERMISSION') ? 'the database rules need updating.' : 'please try again.');
    }
  });
  $('#qe-close').addEventListener('click', close);
  $('#row-quiz').addEventListener('click', () => open($('#conn')));
  $('#opt-quiz').addEventListener('click', () => open($('#conn')));

  return {
    /** Update the connection-screen row with how many questions each of you has written. */
    update(m, p) {
      mine = m; partner = p;
      const role = getRole(), other = otherRole(role);
      const r = $('#row-quiz');
      r.hidden = false;
      const n = m?.items?.length || 0, pn = p?.items?.length || 0;
      r.classList.toggle('todo', n === 0);
      r.querySelector('b').textContent = n ? `Your quiz: ${n} questions ✓` : 'Before you play: write your quiz';
      r.querySelector('small').textContent = `${ROLE_EMOJI[other]} ${ROLE_NAME[other]} has written ${pn || 'no'} question${pn === 1 ? '' : 's'}${pn ? ' ✓' : ' yet'}`;
      r.querySelector('.ms').textContent = n ? 'Edit ›' : 'Write ›';
    },
  };
}
