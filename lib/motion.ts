// Hand-written motion engine. No animation libraries.
// One shared rAF ticker, one IntersectionObserver reveal system, parallax, count-up.

export const reduced = (): boolean =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Shared ticker: one rAF loop for everything scroll-linked ---------- */
type Task = (t: number) => void;
const tasks = new Set<Task>();
let raf = 0;
function loop(t: number) {
  tasks.forEach((fn) => fn(t));
  raf = tasks.size ? requestAnimationFrame(loop) : 0;
}
export function addTask(fn: Task): () => void {
  tasks.add(fn);
  if (!raf) raf = requestAnimationFrame(loop);
  return () => {
    tasks.delete(fn);
  };
}

/* ---------- Reveal on enter: data-rv="up|fade|left|right|scale", data-d="150" ---------- */
export function initReveal(): () => void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-rv]'));
  if (reduced()) {
    els.forEach((el) => el.classList.add('in'));
    return () => {};
  }
  els.forEach((el) => {
    const d = el.dataset.d;
    if (d) el.style.setProperty('--d', d + 'ms');
  });
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          (e.target as HTMLElement).classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px' }
  );
  els.forEach((el) => io.observe(el));

  // Safety net: anything already scrolled past gets force-revealed with no stagger.
  let timer: number | undefined;
  const sweep = () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>('[data-rv]:not(.in)').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight * 0.88) {
          el.style.setProperty('--d', '0ms');
          el.classList.add('in');
          io.unobserve(el);
        }
      });
    }, 160);
  };
  window.addEventListener('scroll', sweep, { passive: true });
  window.addEventListener('resize', sweep);
  sweep();
  return () => {
    io.disconnect();
    window.removeEventListener('scroll', sweep);
    window.removeEventListener('resize', sweep);
  };
}

/* ---------- Parallax: data-par="0.16" ---------- */
export function initParallax(): () => void {
  if (reduced()) return () => {};
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-par]'));
  const state = new Map<HTMLElement, number>();
  els.forEach((el) => state.set(el, 0));
  const stop = addTask(() => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const host = el.parentElement ?? el;
      const r = host.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const f = parseFloat(el.dataset.par || '0.16');
      const center = r.top + r.height / 2;
      const norm = Math.max(-1, Math.min(1, (center - vh / 2) / (vh / 2 + r.height / 2)));
      const target = norm * f * vh * -1;
      const cur = state.get(el) || 0;
      const next = cur + (target - cur) * 0.09;
      state.set(el, next);
      el.style.transform = `translate3d(0, ${next.toFixed(2)}px, 0)`;
    });
  });
  return stop;
}

/* ---------- Scroll progress through an element (0..1) ---------- */
export function progressThrough(el: HTMLElement): number {
  const r = el.getBoundingClientRect();
  const vh = window.innerHeight;
  const total = r.height + vh;
  return Math.max(0, Math.min(1, (vh - r.top) / total));
}

/* ---------- Count-up with ease-out cubic ---------- */
export function countUp(el: HTMLElement, target: number, ms = 1600, locale = 'en-US') {
  const fmt = (n: number) => Math.round(n).toLocaleString(locale);
  if (reduced()) {
    el.textContent = fmt(target);
    return;
  }
  const t0 = performance.now();
  const step = (now: number) => {
    const p = Math.min(1, (now - t0) / ms);
    const e = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt(target * e);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}
