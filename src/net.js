// Networking. Three flavours with the same interface:
//   FirebaseNet: the real thing (Firebase Realtime Database, europe-west1)
//   LocalNet:    two tabs on one computer (BroadcastChannel), with optional fake lag: ?net=local&lag=120
//   SoloNet:     practice alone
//
// Room layout in the database (rooms/<roomId>/…):
//   players/<role>/meta = { online, sid, seen, ping, v }   presence + measured ping
//   players/<role>/s    = { t, p:[x,y,z], v:[x,y,z], r, g, b? }   movement snapshot (~15/s)
//   ev/<pushId>         = { type, from, t, ... }          one-off events (hearts, abilities)
//   stars/<id>          = true                            shared collectibles
import { initializeApp } from 'firebase/app';
import {
  getDatabase, ref, set, update, remove, push, onValue, onChildAdded, onDisconnect, serverTimestamp, get, goOffline,
} from 'firebase/database';
import { firebaseConfig } from '../firebase-config.js';
import { otherRole, store } from './util.js';

const FRESH_MS = 12000; // presence older than this counts as gone

class Emitter {
  constructor() { this.h = {}; }
  on(ev, fn) { (this.h[ev] ||= []).push(fn); }
  emit(ev, ...a) { for (const fn of this.h[ev] || []) fn(...a); }
}

function median(a) {
  if (!a.length) return null;
  const s = [...a].sort((x, y) => x - y);
  return s[Math.floor(s.length / 2)];
}

const newSid = () => Math.random().toString(36).slice(2, 10);

// ------------------------------------------------------------------------------------------
export class FirebaseNet extends Emitter {
  constructor() {
    super();
    this.kind = 'online';
    this.offset = 0;
    this.status = { server: 'connecting', ping: null, partnerOnline: false, partnerPing: null, error: null, conflict: false };
    this.pings = [];
    this.sid = newSid();
    this.connected = false;
  }

  serverNow() { return Date.now() + this.offset; }

  join(roomId, role) {
    this.role = role;
    this.other = otherRole(role);
    const app = initializeApp(firebaseConfig);
    const db = (this.db = getDatabase(app));
    const base = (this.base = `rooms/${roomId}`);
    this.meRef = ref(db, `${base}/players/${role}/meta`);
    this.stateRef = ref(db, `${base}/players/${role}/s`);
    this.evRef = ref(db, `${base}/ev`);
    this.starsRef = ref(db, `${base}/stars`);
    this.joinedAt = Date.now();

    onValue(ref(db, '.info/serverTimeOffset'), (s) => { this.offset = s.val() || 0; });

    this.timeout = setTimeout(() => {
      if (!this.everConnected) {
        this.status.server = 'unreachable';
        this.emit('status', this.status);
      }
    }, 12000);

    onValue(ref(db, '.info/connected'), async (s) => {
      this.connected = !!s.val();
      if (this.connected) {
        this.everConnected = true;
        clearTimeout(this.timeout);
        this.status.server = 'ok';
        this.emit('status', this.status);
        await this._claim();
      } else if (this.everConnected) {
        this.status.server = 'reconnecting';
        this.emit('status', this.status);
      }
    }, (err) => this._fail(err));

    // partner presence & movement
    onValue(ref(db, `${base}/players/${this.other}/meta`), (s) => {
      const m = s.val();
      this.partnerMeta = m;
      this._updatePartner();
    }, (err) => this._fail(err));
    onValue(ref(db, `${base}/players/${this.other}/s`), (s) => {
      const v = s.val();
      if (v && v.p) this.emit('state', v);
    }, (err) => this._fail(err));

    // someone else grabbed my role later on?
    onValue(this.meRef, (s) => {
      const m = s.val();
      if (this.claimed && m && m.sid && m.sid !== this.sid && m.online) {
        this.status.conflict = true;
        this.emit('status', this.status);
      }
    });

    onChildAdded(this.evRef, (s) => {
      const e = s.val();
      if (!e || typeof e.t !== 'number') return;
      const age = this.serverNow() - e.t;
      if (age > 60000) { remove(s.ref).catch(() => {}); return; } // tidy up leftovers
      if (e.from === this.role || age > 5000) return;
      this.emit('event', e);
    }, (err) => this._fail(err));

    onValue(this.starsRef, (s) => this.emit('stars', s.val() || {}), (err) => this._fail(err));

    // quiz questions each player writes about themself
    this.quizMineRef = ref(db, `${base}/quiz/${role}`);
    onValue(this.quizMineRef, (s) => { this.quizMine = s.val(); this.quizLoaded = true; this._emitQuiz(); }, (err) => this._fail(err));
    onValue(ref(db, `${base}/quiz/${this.other}`), (s) => { this.quizPartner = s.val(); this._emitQuiz(); }, (err) => this._fail(err));

    this.hb = setInterval(() => this._heartbeat(), 1500);
    this.pt = setInterval(() => this._updatePartner(), 1000);
  }

  async _claim() {
    try {
      if (!this.claimed) {
        const cur = (await get(this.meRef)).val();
        if (cur && cur.online && cur.sid !== this.sid && this.serverNow() - (cur.seen || 0) < FRESH_MS) {
          this.status.conflict = true;
          this.emit('status', this.status);
          return;
        }
      }
      await onDisconnect(this.meRef).update({ online: false });
      await update(this.meRef, { online: true, sid: this.sid, seen: serverTimestamp(), ping: Math.round(this.status.ping || 0), v: __BUILD__ });
      this.claimed = true;
      this._heartbeat();
    } catch (err) { this._fail(err); }
  }

  _heartbeat() {
    if (!this.connected || !this.claimed || this.status.conflict) return;
    const t0 = performance.now();
    update(this.meRef, { online: true, sid: this.sid, seen: serverTimestamp(), ping: Math.round(this.status.ping || 0) })
      .then(() => {
        const rtt = performance.now() - t0;
        this.pings.push(rtt);
        if (this.pings.length > 7) this.pings.shift();
        this.status.ping = median(this.pings);
        this.emit('status', this.status);
      })
      .catch((err) => this._fail(err));
  }

  _updatePartner() {
    const m = this.partnerMeta;
    const online = !!(m && m.online && this.serverNow() - (m.seen || 0) < FRESH_MS);
    const changed = online !== this.status.partnerOnline;
    this.status.partnerOnline = online;
    this.status.partnerPing = online && m.ping ? m.ping : null;
    if (changed) this.emit('partner', online);
    this.emit('status', this.status);
  }

  _fail(err) {
    console.warn('[net]', err);
    const msg = String(err && (err.code || err.message || err));
    this.status.error = /permission/i.test(msg) ? 'rules' : msg;
    this.emit('status', this.status);
  }

  sendState(s) {
    if (!this.connected || !this.claimed || this.status.conflict) return;
    set(this.stateRef, s).catch(() => {});
  }

  sendEvent(type, data = {}) {
    if (!this.connected || !this.claimed) return;
    const r = push(this.evRef);
    set(r, { ...data, type, from: this.role, t: serverTimestamp() }).catch(() => {});
    setTimeout(() => remove(r).catch(() => {}), 15000);
  }

  collectStar(id) { set(ref(this.db, `${this.base}/stars/${id}`), true).catch(() => {}); }
  _emitQuiz() { this.emit('quiz', this.quizMine || null, this.quizPartner || null); }
  saveQuiz(items) { return items.length ? set(this.quizMineRef, { t: serverTimestamp(), items }) : remove(this.quizMineRef); }
  resetStars() { remove(this.starsRef).catch(() => {}); }

  leave() {
    clearInterval(this.hb); clearInterval(this.pt);
    if (this.claimed) return update(this.meRef, { online: false }).catch(() => {}).finally(() => goOffline(this.db));
    try { goOffline(this.db); } catch { /* ignore */ }
    return Promise.resolve();
  }
}

// ------------------------------------------------------------------------------------------
export class LocalNet extends Emitter {
  constructor(lag = 0) {
    super();
    this.kind = 'local';
    this.lag = lag;
    this.status = { server: 'ok', ping: lag * 2, partnerOnline: false, partnerPing: null, error: null, conflict: false };
    this.stars = {};
    this.sid = newSid();
    this.partnerSeen = 0;
  }
  serverNow() { return Date.now(); }
  join(roomId, role) {
    this.role = role;
    this.other = otherRole(role);
    this.bc = new BroadcastChannel('eclipse-' + roomId);
    this.bc.onmessage = (e) => {
      const d = e.data;
      if (!d || d.from === this.role) return;
      const deliver = () => this._recv(d);
      if (this.lag) setTimeout(deliver, this.lag * (0.75 + Math.random() * 0.5)); else deliver();
    };
    this.room = roomId;
    this.quizMine = store.get(`quiz.${roomId}.${role}`, null);
    this.quizPartner = store.get(`quiz.${roomId}.${this.other}`, null);
    this.quizLoaded = true;
    setTimeout(() => this._emitQuiz(), 0);
    const hello = () => this._send({ k: 'meta', ping: this.lag * 2 });
    hello();
    this._send({ k: 'hello' });
    this.hb = setInterval(() => { hello(); this._check(); }, 1000);
    setTimeout(() => this.emit('status', this.status), 0);
  }
  _send(m) { this.bc.postMessage({ ...m, from: this.role }); }
  _recv(d) {
    if (d.k === 'meta') { this.partnerSeen = Date.now(); this.status.partnerPing = d.ping; this._check(); }
    else if (d.k === 'hello') { this._send({ k: 'meta', ping: this.lag * 2 }); this._send({ k: 'stars', stars: this.stars }); }
    else if (d.k === 'state') { this.partnerSeen = Date.now(); this._check(); this.emit('state', d.s); }
    else if (d.k === 'ev') this.emit('event', d.e);
    else if (d.k === 'stars') { Object.assign(this.stars, d.stars); if (d.reset) this.stars = {}; this.emit('stars', { ...this.stars }); }
    else if (d.k === 'bye') { this.partnerSeen = 0; this._check(); }
    else if (d.k === 'quiz') { this.quizPartner = d.v; this._emitQuiz(); }
  }
  _check() {
    const online = Date.now() - this.partnerSeen < 4000;
    if (online !== this.status.partnerOnline) { this.status.partnerOnline = online; this.emit('partner', online); }
    this.emit('status', this.status);
  }
  sendState(s) { this._send({ k: 'state', s }); }
  sendEvent(type, data = {}) { this._send({ k: 'ev', e: { ...data, type, from: this.role, t: Date.now() } }); }
  collectStar(id) { this.stars[id] = true; this._send({ k: 'stars', stars: { [id]: true } }); this.emit('stars', { ...this.stars }); }
  resetStars() { this.stars = {}; this._send({ k: 'stars', stars: {}, reset: true }); this.emit('stars', {}); }
  _emitQuiz() { this.emit('quiz', this.quizMine, this.quizPartner); }
  saveQuiz(items) {
    const v = items.length ? { t: Date.now(), items } : null;
    store.set(`quiz.${this.room}.${this.role}`, v);
    this.quizMine = v;
    this._send({ k: 'quiz', v });
    this._emitQuiz();
    return Promise.resolve();
  }
  leave() { this._send({ k: 'bye' }); clearInterval(this.hb); this.bc.close(); return Promise.resolve(); }
}

// ------------------------------------------------------------------------------------------
export class SoloNet extends Emitter {
  constructor() {
    super();
    this.kind = 'solo';
    this.status = { server: 'solo', ping: null, partnerOnline: true, partnerPing: null, error: null, conflict: false };
    this.stars = {};
  }
  serverNow() { return Date.now(); }
  join(roomId, role) {
    this.role = role; this.other = otherRole(role);
    this.quizMine = store.get(`quiz.solo.${role}`, null); this.quizLoaded = true;
    setTimeout(() => this.emit('quiz', this.quizMine, null), 0);
  }
  saveQuiz(items) {
    this.quizMine = items.length ? { t: Date.now(), items } : null;
    store.set(`quiz.solo.${this.role}`, this.quizMine);
    this.emit('quiz', this.quizMine, null);
    return Promise.resolve();
  }
  sendState() {}
  sendEvent() {}
  collectStar(id) { this.stars[id] = true; this.emit('stars', { ...this.stars }); }
  resetStars() { this.stars = {}; this.emit('stars', {}); }
  leave() { return Promise.resolve(); }
}
