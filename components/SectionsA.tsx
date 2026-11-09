'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './Lang';
import { a } from '@/lib/asset';
import { addTask, countUp, reduced } from '@/lib/motion';
import { hero, stats, heroImages, marquee, about, challenge, work, model, ui } from '@/data/site';

/* ---------- Count-up stat (triggers once on first view) ---------- */
export function CountNum({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const { locale } = useLang();
  const done = useRef(false);
  useEffect(() => {
    const el = ref.current!;
    el.textContent = (0).toLocaleString(locale);
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !done.current) {
        done.current = true;
        countUp(el, target, 1600, locale);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [target, locale]);
  return <><span ref={ref} />{suffix && <small>{suffix}</small>}</>;
}

/* ---------- Hero ---------- */
export function Hero() {
  const { t } = useLang();
  const [i, setI] = useState(0);
  useEffect(() => {
    document.documentElement.classList.add('ready');
    if (reduced()) return;
    const id = window.setInterval(() => setI((x) => (x + 1) % heroImages.length), 7000);
    return () => window.clearInterval(id);
  }, []);
  const words = t(hero.h1).split(' ');
  return (
    <section className="hero" id="top" data-dark>
      <div className="hero-bg">
        {heroImages.map((src, k) => (
          <img key={src} src={a(src)} alt="" className={k === i ? 'on' : ''} loading={k === 0 ? 'eager' : 'lazy'} {...(k === 0 ? { fetchPriority: 'high' as const } : {})} />
        ))}
      </div>
      <div className="hero-scrim" />
      <div className="grain" />
      <svg className="hero-arcs" viewBox="0 0 400 400" aria-hidden>
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <path key={k} style={{ ['--k' as string]: k }} d={`M ${400 - k * 6} 400 C ${360 - k * 40} ${300 - k * 24}, ${260 - k * 30} ${120 + k * 20}, ${60 + k * 10} ${10 + k * 28}`} />
        ))}
      </svg>
      <div className="ticks" aria-hidden>{heroImages.map((_, k) => <i key={k} className={k === i ? 'on' : ''} />)}</div>
      <div className="wrap hero-in">
        <div className="pill fade"><i />{t(hero.pill)}</div>
        <h1 className="h-xl" aria-label={t(hero.h1)}>
          {words.map((w, k) => (
            <span className="w" key={k} aria-hidden><span style={{ ['--i' as string]: k }}>{w}</span></span>
          ))}
        </h1>
        <p className="hero-sub fade" style={{ transitionDelay: '0.9s' }}>{t(hero.sub)}</p>
        <div className="hero-cta fade" style={{ transitionDelay: '1.1s' }}>
          <a className="btn pri" href="#work">{t(hero.primary)}</a>
          <a className="btn ghost" href="#support">{t(hero.secondary)}</a>
        </div>
        <div className="hero-stats fade" style={{ transitionDelay: '1.35s' }}>
          {stats.map((s, k) => (
            <div key={k}>
              <div className="num"><CountNum target={s.target} suffix={s.suffix} /></div>
              <div className="lbl">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="scroll-cue" aria-hidden>{t(ui.scroll)}<i /></div>
    </section>
  );
}

/* ---------- Marquee ---------- */
export function Marquee() {
  const { t } = useLang();
  const items = marquee.map((m) => t(m));
  return (
    <div className="marq" aria-label="Highlights">
      <div className="marq-track">
        {[...items, ...items].map((x, k) => <span key={k}>{x}</span>)}
      </div>
    </div>
  );
}

/* ---------- Scroll-lit manifesto ---------- */
export function Manifesto() {
  const { t } = useLang();
  const ref = useRef<HTMLParagraphElement>(null);
  const words = t(about.statement).split(/\s+/).filter(Boolean).map((w) => ({ w: w.replace(/\*/g, ''), acc: w.includes('*') }));
  useEffect(() => {
    const el = ref.current!;
    const spans = Array.from(el.querySelectorAll<HTMLElement>('.mw'));
    if (reduced()) { spans.forEach((s) => s.classList.add('lit')); return; }
    return addTask(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
      const n = Math.round(p * spans.length);
      spans.forEach((s, k) => s.classList.toggle('lit', k < n));
    });
  }, [words.length]);
  return (
    <section className="sec" id="about">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(about.eyebrow)}</div>
        <p className="manifesto" ref={ref}>
          {words.map((x, k) => <span key={k} className={'mw' + (x.acc ? ' acc' : '')}>{x.w}{' '}</span>)}
        </p>
      </div>
    </section>
  );
}

/* ---------- Challenge: sticky image / scrolling list ---------- */
export function Challenge() {
  const { t } = useLang();
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.k)); }),
      { rootMargin: '-30% 0px -30% 0px' }
    );
    refs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section className="sec mist">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(challenge.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(challenge.title)}</h2>
        <div className="split" style={{ marginTop: 56 }}>
          <div className="split-l">
            <div className="stack" data-hot>
              {challenge.items.map((it, k) => (
                <img key={k} src={a(it.img)} alt={t(it.title)} className={k === active ? 'on' : ''} loading="lazy" />
              ))}
            </div>
          </div>
          <div>
            {challenge.items.map((it, k) => (
              <div key={k} className={'pain' + (k === active ? ' on' : '')} data-k={k} ref={(el) => { refs.current[k] = el; }}>
                <b>{(k + 1).toString().padStart(2, '0')}</b>
                <div><h3>{t(it.title)}</h3><p>{t(it.body)}</p></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Pillars: horizontally pinned rail ---------- */
const Icon = ({ k }: { k: string }) => {
  const p = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  if (k === 'bowl') return <svg {...p}><path d="M3 11h18a8 8 0 0 1-8 8h-2a8 8 0 0 1-8-8z" /><path d="M8 7c0-1.5 1.5-1.5 1.5-3M12 7c0-1.5 1.5-1.5 1.5-3M16 7c0-1.5 1.5-1.5 1.5-3" /></svg>;
  if (k === 'needle') return <svg {...p}><path d="M20 3 8 15" /><circle cx="19" cy="4" r="1.6" /><path d="M8 15c-3 1-4 3-5 6 3-1 5-2 6-5" /><path d="M4 21c1-6 6-6 8-4" strokeDasharray="2 2.4" /></svg>;
  return <svg {...p}><path d="M3 16V11l2-5h12l3 5v5" /><circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" /><path d="M3 11h17M12 6v5" /></svg>;
};

export function WorkRail() {
  const { t } = useLang();
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLElement>(null);
  useEffect(() => {
    const s = sec.current!, tr = track.current!, b = bar.current as HTMLElement;
    let extra = 0;
    const size = () => {
      if (window.innerWidth <= 900) { s.style.height = ''; tr.style.transform = ''; extra = 0; return; }
      extra = Math.max(0, tr.scrollWidth - window.innerWidth);
      s.style.height = window.innerHeight + extra + 'px';
    };
    size();
    window.addEventListener('resize', size);
    const stop = addTask(() => {
      if (!extra) return;
      const r = s.getBoundingClientRect();
      const p = Math.max(0, Math.min(1, -r.top / (s.offsetHeight - window.innerHeight)));
      tr.style.transform = `translate3d(${(-p * extra).toFixed(1)}px,0,0)`;
      b.style.transform = `scaleX(${p})`;
    });
    const late = window.setTimeout(size, 600); // after images/fonts settle
    return () => { window.removeEventListener('resize', size); stop(); window.clearTimeout(late); };
  }, []);
  return (
    <section className="pin" id="work" ref={sec} data-dark>
      <div className="pin-stick">
        <div className="wrap pin-head">
          <div className="eyebrow" style={{ color: 'var(--gold)' }}>{t(work.eyebrow)}</div>
          <h2 className="h-lg" style={{ maxWidth: '20ch' }}>{t(work.title)}</h2>
        </div>
        <div className="pin-track" ref={track}>
          {work.pillars.map((p) => (
            <article className="rcard" key={p.n}>
              <div className="ph">{p.img ? <img src={a(p.img)} alt="" loading="lazy" /> : <div className="ph-empty"><Icon k={p.icon} /><span>{t(ui.comingSoon)}</span></div>}</div>
              <div className="rbody">
                <div className="rtop"><span className="rnum">{p.n}</span><span className="ricon"><Icon k={p.icon} /></span></div>
                <h3>{t(p.title)}</h3>
                <p>{t(p.body)}</p>
                <ul className="facts">{p.facts.map((f, k) => <li key={k}>{t(f)}</li>)}</ul>
                <a className="more" href={a(p.href)}>{t(ui.learnMore)} <span aria-hidden>→</span></a>
              </div>
            </article>
          ))}
        </div>
        <div className="pin-bar"><i ref={bar as never} /></div>
      </div>
    </section>
  );
}

/* ---------- Sewing model: stacking cards ---------- */
export function Model() {
  const { t } = useLang();
  return (
    <section className="sec" id="model">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(model.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(model.title)}</h2>
        <p className="lede" data-rv="up" data-d="160" style={{ marginTop: 20 }}>{t(model.lede)}</p>
        <div className="cards">
          {model.steps.map((s, k) => (
            <article key={s.n} className={'scard' + (k === model.steps.length - 1 ? ' final' : '')} style={{ ['--k' as string]: k }}>
              <div className="big" aria-hidden>{s.n}</div>
              <div><h3>{t(s.title)}</h3><p>{t(s.body)}</p></div>
              <div className="sph"><img src={a(s.img)} alt={t(s.title)} loading="lazy" /><span className="stag">{t(s.tag)}</span></div>
            </article>
          ))}
        </div>
        <div className="assure">
          {model.assurances.map((a, k) => (
            <div key={k} data-rv="up" data-d={k * 120}><h4>{t(a.title)}</h4><p>{t(a.body)}</p></div>
          ))}
        </div>
        <div className="notice" data-rv="up">{t(model.notice)}</div>
      </div>
    </section>
  );
}
