'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './Lang';
import { a } from '@/lib/asset';
import { addTask, countUp, reduced } from '@/lib/motion';
import { hero, stats, heroImages, marquee, about, challenge, work, programmes, model, ui } from '@/data/site';

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

/* ---------- Hero: text on the left, complete (uncropped) photos on the right ---------- */
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
      <div className="grain" />
      <svg className="hero-arcs" viewBox="0 0 400 400" aria-hidden>
        {[0, 1, 2, 3, 4, 5, 6].map((k) => (
          <path key={k} style={{ ['--k' as string]: k }} d={`M ${400 - k * 6} 400 C ${360 - k * 40} ${300 - k * 24}, ${260 - k * 30} ${120 + k * 20}, ${60 + k * 10} ${10 + k * 28}`} />
        ))}
      </svg>
      <div className="wrap hero-in hero-grid">
        <div className="hero-copy">
          <div className="pill fade"><i />{t(hero.pill)}</div>
          <h1 className="h-xl" aria-label={t(hero.h1)}>
            {words.map((w, k) => (
              <span className="w" key={k} aria-hidden><span style={{ ['--i' as string]: k }}>{w}</span></span>
            ))}
          </h1>
          <p className="hero-sub fade" style={{ transitionDelay: '0.9s' }}>{t(hero.sub)}</p>
          <div className="hero-cta fade" style={{ transitionDelay: '1.1s' }}>
            <a className="btn pri" href="#programmes">{t(hero.primary)}</a>
            <a className="btn ghost" href="#help">{t(hero.secondary)}</a>
          </div>
        </div>
        <div className="hframe fade" style={{ transitionDelay: '0.7s' }}>
          {heroImages.map((src, k) => (
            <img key={src} src={a(src)} alt="" className={k === i ? 'on' : ''} loading={k === 0 ? 'eager' : 'lazy'} {...(k === 0 ? { fetchPriority: 'high' as const } : {})} />
          ))}
          <div className="ticks" aria-hidden>{heroImages.map((_, k) => <i key={k} className={k === i ? 'on' : ''} />)}</div>
        </div>
      </div>
      <div className="wrap">
        <div className="hero-stats fade" style={{ transitionDelay: '1.35s' }}>
          {stats.map((s, k) => (
            <div key={k}>
              <div className="num"><CountNum target={s.target} suffix={s.suffix} /></div>
              <div className="lbl">{t(s.label)}</div>
            </div>
          ))}
        </div>
      </div>
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

/* ---------- About: scroll-lit manifesto ---------- */
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

/* ---------- The need: sticky photo / scrolling list ---------- */
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
    <section className="sec mist" id="need">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(challenge.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(challenge.title)}</h2>
        <div className="split" style={{ marginTop: 48 }}>
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

/* ---------- Programmes: one short preview card each, full detail on its own page ---------- */
export function Programmes() {
  const { t } = useLang();
  return (
    <section className="sec" id="programmes">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(programmes.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(programmes.title)}</h2>
        <div className="pcards">
          {work.pillars.map((p, i) => (
            <article className="pcard" key={p.n} data-rv="up" data-d={i * 120}>
              <a className="pcard-img" href={a(p.href)} aria-label={t(p.title)}><img src={a(p.img)} alt="" loading="lazy" /></a>
              <div className="pcard-body">
                <span className="rnum">{p.n}</span>
                <h3>{t(p.title)}</h3>
                <p>{t(p.body)}</p>
                <ul className="facts dkfacts">{p.facts.slice(0, 2).map((f, k) => <li key={k}>{t(f)}</li>)}</ul>
                <a className="btn dk sm" href={a(p.href)}>{t(ui.learnMore)} <span aria-hidden>→</span></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stitching model: stacking step cards (Stitching Centre page) ---------- */
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
          {model.assurances.map((x, k) => (
            <div key={k} data-rv="up" data-d={k * 120}><h4>{t(x.title)}</h4><p>{t(x.body)}</p></div>
          ))}
        </div>
        <div className="notice" data-rv="up">{t(model.notice)}</div>
      </div>
    </section>
  );
}
