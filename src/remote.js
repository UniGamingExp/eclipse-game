// Smooth display of the partner: buffer their snapshots and play them back slightly in the past,
// with an adaptive delay that follows the real network delay (Germany ↔ Syria: ~60–300 ms).
// All timing here uses *this phone's* clock (Date.now()) against the sender's timestamps, so any
// clock difference between the phones is folded into the measured delay and cancels out.
import { Vector3 } from 'three';
import { angleDiff, clamp } from './util.js';

const _a = new Vector3(), _b = new Vector3(), _base = new Vector3();

export class RemoteTrack {
  constructor() {
    this.buf = [];
    this.lat = [];          // recent one-way delays (ms)
    this.delay = null;      // playback delay (ms, includes clock difference)
    this.pos = new Vector3();
    this.vel = new Vector3();
    this.yaw = 0;
    this.grounded = true;
    this.mode = 0;
    this.has = false;
    this.lastRecv = 0;
  }

  push(s, localNow) {
    const last = this.buf[this.buf.length - 1];
    if (last && s.t <= last.t) return;
    if (last && s.t - last.t > 2500) this.buf.length = 0; // long silence: don't slide across the gap
    this.buf.push(s);
    if (s.l) this.level = s.l;
    if (this.buf.length > 60) this.buf.shift();
    this.lat.push(localNow - s.t);
    if (this.lat.length > 40) this.lat.shift();
    this.lastRecv = performance.now();
  }

  /** Jump straight to the newest snapshot (e.g. after a respawn teleport). */
  snap() { this.buf.splice(0, this.buf.length - 1); }

  targetDelay() {
    const s = [...this.lat].sort((a, b) => a - b);
    const p90 = s[Math.min(s.length - 1, Math.floor(s.length * 0.9))];
    return p90 + 45;
  }

  /** Network jitter estimate (ms) for the debug view. */
  jitter() {
    if (this.lat.length < 2) return 0;
    const s = [...this.lat].sort((a, b) => a - b);
    return Math.round(s[Math.floor(s.length * 0.9)] - s[0]);
  }

  /** resolveBase(id, out) -> Vector3|null gives the world position of what they stand on. */
  sample(localNow, dt, resolveBase) {
    if (!this.buf.length) return false;
    const target = this.targetDelay();
    if (this.delay === null || Math.abs(target - this.delay) > 1000) this.delay = target;
    else this.delay += (target - this.delay) * Math.min(1, dt * 1.5);
    const rt = localNow - this.delay;
    const buf = this.buf;

    const world = (s, out) => {
      out.set(s.p[0], s.p[1], s.p[2]);
      if (s.b) {
        const b = resolveBase(s.b, _base);
        if (!b) return null;
        out.add(b);
      }
      return out;
    };

    // drop snapshots we have fully passed (keep one before rt)
    while (buf.length > 2 && buf[1].t <= rt) buf.shift();

    const a = buf[0];
    const b = buf[1];
    if (b && rt >= a.t && rt <= b.t) {
      const u = (rt - a.t) / Math.max(1, b.t - a.t);
      const pa = world(a, _a), pb = world(b, _b);
      if (pa && pb) {
        if (!a.b && !b.b && a.b === b.b) {
          // Hermite curve using velocities: smooth arcs for jumps
          const T = (b.t - a.t) / 1000;
          const u2 = u * u, u3 = u2 * u;
          const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
          const cap = T < 0.25; // only trust velocities for closely spaced snapshots
          for (const k of ['x', 'y', 'z']) {
            const i = k === 'x' ? 0 : k === 'y' ? 1 : 2;
            const lin = pa[k] + (pb[k] - pa[k]) * u;
            const her = h00 * pa[k] + h10 * T * a.v[i] + h01 * pb[k] + h11 * T * b.v[i];
            this.pos[k] = cap ? her : lin;
          }
          if ((a.g || b.g) && cap) this.pos.y = pa.y + (pb.y - pa.y) * u;
        } else {
          this.pos.lerpVectors(pa, pb, u);
        }
        this.vel.set(a.v[0] + (b.v[0] - a.v[0]) * u, a.v[1] + (b.v[1] - a.v[1]) * u, a.v[2] + (b.v[2] - a.v[2]) * u);
        this.yaw = a.r + angleDiff(a.r, b.r) * u;
        this.grounded = u < 0.5 ? !!a.g : !!b.g;
        this.mode = (u < 0.5 ? a.m : b.m) || 0;
        this.has = true;
        return true;
      }
    }
    // past the newest snapshot (or before the first): extrapolate a little, then hold
    const last = rt < a.t ? a : buf[buf.length - 1];
    const p = world(last, _a);
    if (!p) return this.has;
    const ex = clamp((rt - last.t) / 1000, 0, 0.25);
    const moving = Math.hypot(last.v[0], last.v[2]) > 0.05 || !last.g;
    this.pos.set(p.x + (moving ? last.v[0] * ex : 0), p.y + (!last.g ? last.v[1] * ex : 0), p.z + (moving ? last.v[2] * ex : 0));
    if (last.g) this.pos.y = p.y;
    this.vel.set(last.v[0], last.v[1], last.v[2]);
    this.yaw = last.r;
    this.grounded = !!last.g;
    this.mode = last.m || 0;
    this.has = true;
    return true;
  }
}
