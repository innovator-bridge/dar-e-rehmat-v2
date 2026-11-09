'use client';
import { useEffect, useRef, useState, FormEvent } from 'react';
import { useLang } from './Lang';
import { a } from '@/lib/asset';
import { CountNum } from './SectionsA';
import { addTask, reduced } from '@/lib/motion';
import { cues } from '@/data/teacher';
import {
  proof, bandImage, team, school, gallery, support, location, contact, footer, nav, brand, ui,
  MAPS_URL, CONTACT, contactImage,
} from '@/data/site';

/* ---------- Proof: parallax band, KPIs, timeline ---------- */
export function Proof() {
  const { t } = useLang();
  const tl = useRef<HTMLDivElement>(null);
  const fill = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const box = tl.current!, f = fill.current!;
    const items = Array.from(box.querySelectorAll<HTMLElement>('.tl-item'));
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.target.classList.toggle('on', e.isIntersecting || e.boundingClientRect.top < 0)),
      { rootMargin: '-40% 0px -45% 0px' }
    );
    items.forEach((i) => io.observe(i));
    if (reduced()) { items.forEach((i) => i.classList.add('on')); f.style.height = 'calc(100% - 16px)'; return () => io.disconnect(); }
    const stop = addTask(() => {
      const r = box.getBoundingClientRect(), vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, (vh * 0.6 - r.top) / r.height));
      f.style.height = `calc((100% - 16px) * ${p.toFixed(3)})`;
    });
    return () => { io.disconnect(); stop(); };
  }, []);
  return (
    <>
      <section className="band" data-dark>
        <div className="band-bg"><img data-par="0.16" src={a(bandImage)} alt="" loading="lazy" style={{ height: '100%' }} /></div>
        <div className="wrap">
          <div className="eyebrow" data-rv="up">{t(proof.eyebrow)}</div>
          <h2 className="h-xl" data-rv="up" data-d="80" style={{ maxWidth: '16ch' }}>{t(proof.title)}</h2>
          <p className="lede" data-rv="up" data-d="180" style={{ marginTop: 22 }}>{t(proof.body)}</p>
        </div>
      </section>
      <section className="sec" style={{ paddingBlock: 0 }}>
        <div className="wrap">
          <div className="kpis">
            {proof.kpis.map((k, i) => (
              <div className="kpi" key={i} data-rv="up" data-d={i * 120}>
                <div className="num"><CountNum target={k.target} suffix={k.suffix} /></div>
                <div className="ul" /><p>{t(k.label)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="sec">
        <div className="wrap">
          <h2 className="h-lg" data-rv="up" style={{ marginBottom: 56, maxWidth: '16ch' }}>{t(proof.timelineTitle)}</h2>
          <div className="split">
            <div className="tl" ref={tl}>
              <div className="tl-line" /><div className="tl-fill" ref={fill} />
              {proof.timeline.map((x, i) => (
                <div className="tl-item" key={i}>
                  <div className="tl-when">{t(x.when)}</div>
                  <h4>{t(x.title)}</h4><p>{t(x.body)}</p>
                </div>
              ))}
            </div>
            <div className="photos-s">
              <img src={a("/img/langar/2789.jpg")} alt="" loading="lazy" data-rv="right" />
              <img src={a("/img/langar/2784.jpg")} alt="" loading="lazy" data-rv="right" data-d="150" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ---------- Team ---------- */
export function Team() {
  const { t } = useLang();
  return (
    <section className="sec mist" id="team">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(team.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(team.title)}</h2>
        <p className="lede" data-rv="up" data-d="160" style={{ marginTop: 20 }}>{t(team.lede)}</p>
        <div className="team-grid">
          {team.people.map((p, i) => (
            <article className="person" key={i} data-rv="up" data-d={(i % 4) * 90}>
              <div className="pimg"><img src={a(p.img)} alt={`${t(p.name)}, ${t(p.role)}`} loading="lazy" /></div>
              <div className="pb">
                <h3>{t(p.name)}</h3>
                <span className="role">{t(p.role)}</span>
                <p>{t(p.note)}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- School: teacher video with live English captions + transcript, plus clips ---------- */
const CLIPS = ['2822', '2823', '2828', '2829', '2830', '2836', '2847', '2853', '2854', '2893', '2901', '2902', '2920', '2926', '2927'];

function AutoClip({ id }: { id: string }) {
  const v = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const el = v.current!;
    if (reduced()) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.play().catch(() => {}); else el.pause(); }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <video ref={v} src={a(`/video/school-${id}.mp4`)} poster={a(`/video/poster-${id}.jpg`)} muted loop playsInline preload="none" />;
}

export function School() {
  const { t } = useLang();
  const vid = useRef<HTMLVideoElement>(null);
  const trRef = useRef<HTMLDivElement>(null);
  const [now, setNow] = useState(-1);
  const [capOn, setCapOn] = useState(true);

  useEffect(() => {
    const v = vid.current!;
    const on = () => {
      const ct = v.currentTime;
      const k = cues.findIndex((c) => ct >= c.s && ct < c.e);
      setNow(k);
    };
    v.addEventListener('timeupdate', on);
    return () => v.removeEventListener('timeupdate', on);
  }, []);
  useEffect(() => {
    if (now < 0) return;
    const box = trRef.current, el = box?.children[now] as HTMLElement | undefined;
    if (box && el) box.scrollTo({ top: el.offsetTop - box.clientHeight / 3, behavior: reduced() ? 'auto' : 'smooth' });
  }, [now]);

  const seek = (s: number) => { const v = vid.current!; v.currentTime = s + 0.01; v.play().catch(() => {}); };
  return (
    <section className="sec dark" id="school" data-dark>
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(school.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '20ch' }}>{t(school.title)}</h2>
        <p className="lede" data-rv="up" data-d="160" style={{ marginTop: 20 }}>{t(school.lede)}</p>

        <div className="teach">
          <div className="vwrap" data-rv="scale">
            <video ref={vid} src={a("/video/teacher.mp4")} poster={a("/img/teacher.jpg")} controls playsInline preload="metadata" />
            {cues.length > 0 && (
              <div className="vbar">
                <button className="chip" aria-pressed={capOn} onClick={() => setCapOn(!capOn)}>{t(ui.captions)} · EN</button>
              </div>
            )}
            {capOn && now >= 0 && <div className="cap" aria-live="polite"><span>{cues[now].en}</span></div>}
          </div>
          <div data-rv="up" data-d="100">
            <div className="tname">{t(school.teacherName)}</div>
            <div className="trole">{t(school.teacherRole)}</div>
            {cues.length === 0 && <p style={{ marginTop: 18, opacity: 0.8, maxWidth: '44ch' }}>{t(ui.soon)}</p>}
            {cues.length > 0 && <p style={{ marginTop: 14, opacity: 0.7, fontSize: '0.9rem' }}>{t(ui.inHerWords)} · {t(ui.original)} / {t(ui.english)}</p>}
            <div className="tr" ref={trRef}>
              {cues.map((c, k) => (
                <button key={k} className={'cue' + (k === now ? ' on' : '')} onClick={() => seek(c.s)}>
                  <span className="u" lang="ur">{c.ur}</span>
                  <span className="e" lang="en">{c.en}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <h3 className="h-md" style={{ marginTop: 90 }} data-rv="up">{t(school.clipsTitle)}</h3>
        <div className="clips">
          {CLIPS.map((id) => <div className="clip" key={id} data-rv="up"><AutoClip id={id} /></div>)}
        </div>
        <p style={{ marginTop: 26, opacity: 0.65, fontSize: '0.9rem' }}>{t(school.garmentsNote)}</p>
      </div>
    </section>
  );
}

/* ---------- Gallery ---------- */
export function Gallery() {
  const { t } = useLang();
  return (
    <section className="sec" id="gallery">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(gallery.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(gallery.title)}</h2>
        <div className="gal">
          {gallery.items.map((g, i) => (
            <figure key={i} data-rv="up" data-d={(i % 4) * 80}><img src={a(g.src)} alt={t(g.alt)} loading="lazy" /></figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Support ---------- */
export function Support() {
  const { t } = useLang();
  return (
    <section className="sec dark" id="support" data-dark>
      <div className="wrap split">
        <div className="split-l">
          <div className="eyebrow">{t(support.eyebrow)}</div>
          <h2 className="h-lg" style={{ maxWidth: '14ch' }}>{t(support.title)}</h2>
          <p className="lede" style={{ marginTop: 20 }}>{t(support.body)}</p>
          <a className="btn pri" href="#contact">{t(support.cta)}</a>
        </div>
        <div>
          {support.steps.map((s, i) => (
            <div className="snum" key={i} data-rv="up">
              <b>{(i + 1).toString().padStart(2, '0')}</b>
              <div><h3>{t(s.title)}</h3><p>{t(s.body)}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Location (single site, so a drawn pin instead of a globe) ---------- */
export function Location() {
  const { t } = useLang();
  return (
    <section className="sec mist">
      <div className="wrap loc">
        <div data-rv="up">
          <div className="eyebrow">{t(location.eyebrow)}</div>
          <h2 className="h-lg">{t(location.title)}</h2>
          <p className="lede" style={{ margin: '18px 0 28px' }}>{t(location.body)}</p>
          <a className="btn dk" href={MAPS_URL} target="_blank" rel="noopener noreferrer">{t(ui.openMap)}</a>
        </div>
        <a className="map" href={MAPS_URL} target="_blank" rel="noopener noreferrer" aria-label={t(ui.openMap)} data-rv="scale" data-hot>
          <svg viewBox="0 0 640 440" role="img" aria-label="Map pin">
            <defs>
              <pattern id="g" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.07)" /></pattern>
            </defs>
            <rect width="640" height="440" fill="url(#g)" />
            <path d="M-20 300 C 140 250, 220 340, 330 290 S 520 230, 660 270" fill="none" stroke="rgba(227,167,47,0.35)" strokeWidth="10" strokeLinecap="round" />
            <path d="M120 -10 C 160 120, 260 160, 290 460" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="6" strokeLinecap="round" />
            <path d="M-10 120 C 180 150, 400 90, 660 160" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" strokeLinecap="round" />
            <g transform="translate(330 232)">
              <circle className="ring" r="18" fill="none" stroke="#E3A72F" strokeWidth="2" />
              <circle className="ring b" r="18" fill="none" stroke="#E3A72F" strokeWidth="2" />
              <circle r="9" fill="#E3A72F" />
              <circle r="3.5" fill="#0a241c" />
            </g>
            <text x="330" y="292" textAnchor="middle" fill="#fff" fontSize="22" fontWeight="800" fontFamily="Manrope, sans-serif">{t(brand.name)}</text>
          </svg>
        </a>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
export function Contact() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => {
    e.preventDefault();
    // TODO before public launch: wire a real endpoint here (Netlify Forms, Formspree or an API route).
    // A static export has no backend, so this demo only shows the success message.
    setSent(true);
  };
  const f = contact.form;
  return (
    <section className="contact sec" id="contact" data-dark>
      <div className="contact-bg"><img data-par="0.12" src={a(contactImage)} alt="" loading="lazy" /></div>
      <div className="wrap cgrid">
        <div>
          <div className="eyebrow" data-rv="up">{t(contact.eyebrow)}</div>
          <h2 className="h-lg" data-rv="up" data-d="80">{t(contact.title)}</h2>
          <p className="lede" data-rv="up" data-d="160" style={{ marginTop: 18 }}>{t(contact.body)}</p>
          {/* PLACEHOLDER contact details: replace in data/site.ts */}
          <a className="clink" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          <a className="clink" href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
          <div className="tags">{contact.tags.map((x, i) => <span key={i}>{t(x)}</span>)}</div>
        </div>
        <form className="form" onSubmit={submit} data-rv="up" data-d="120">
          <label>{t(f.name)}<input required name="name" autoComplete="name" /></label>
          <label>{t(f.org)}<input name="org" autoComplete="organization" /></label>
          <label>{t(f.email)}<input required type="email" name="email" autoComplete="email" /></label>
          <label>{t(f.topic)}
            <select name="topic">{f.topics.map((x, i) => <option key={i}>{t(x)}</option>)}</select>
          </label>
          <label>{t(f.message)}<textarea required name="message" /></label>
          <button className="btn pri" type="submit">{t(f.send)}</button>
          {sent && <div className="ok" role="status">{t(f.thanks)}</div>}
        </form>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
export function Footer() {
  const { t } = useLang();
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="fgrid">
          <div>
            <div className="logo" style={{ color: '#fff', marginBottom: 14 }}>
              <span className="logo-mark"><img src={a("/logo-light.svg")} alt="" width={38} height={38} style={{ opacity: 1 }} /></span>
              <span>{t(brand.name)}</span>
            </div>
            <p style={{ maxWidth: '38ch' }}>{t(footer.line)}</p>
            <p style={{ marginTop: 10, color: 'var(--gold)' }}>{t(brand.tagline)}</p>
          </div>
          <div>
            <h4>{t(ui.menu)}</h4>
            {nav.map((n) => <a key={n.id} href={'#' + n.id}>{t(n.label)}</a>)}
          </div>
          <div>
            <h4>{t(ui.cta)}</h4>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} style={{ direction: 'ltr' }}>{CONTACT.phone}</a>
            <a href="#contact" className="btn pri sm" style={{ display: 'inline-flex', marginTop: 14 }}>{t(ui.cta)}</a>
          </div>
        </div>
        <div className="fbar"><span>© {new Date().getFullYear()} {t(footer.rights)}</span><span>{t(footer.disclaimer)}</span></div>
      </div>
    </footer>
  );
}
