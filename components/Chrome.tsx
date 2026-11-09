'use client';
import { useEffect, useRef, useState } from 'react';
import { useLang } from './Lang';
import { a } from '@/lib/asset';
import { usePathname } from 'next/navigation';
import { LANGS, nav, brand, ui } from '@/data/site';
import { addTask, reduced } from '@/lib/motion';

export function Preloader() {
  const [done, setDone] = useState(false);
  const { t } = useLang();
  useEffect(() => {
    const id = window.setTimeout(() => setDone(true), reduced() ? 0 : 1250);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <div className={'pre' + (done ? ' done' : '')} aria-hidden={done}>
      <div className="pre-in">
        <div className="pre-name">{t(brand.name)}</div>
        <div className="pre-bar"><i /></div>
      </div>
    </div>
  );
}

export function ProgressRail() {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const bar = ref.current as HTMLElement;
    return addTask(() => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${max > 0 ? Math.min(1, window.scrollY / max) : 0})`;
    });
  }, []);
  return <div className="rail" aria-hidden><i ref={ref as never} /></div>;
}

export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const el = ref.current!;
    let x = -100, y = -100, cx = -100, cy = -100;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY; el.classList.add('show');
      const hot = (e.target as HTMLElement)?.closest('a, button, input, select, textarea, video, [data-hot]');
      el.classList.toggle('hot', !!hot);
      const dark = (e.target as HTMLElement)?.closest('[data-dark]');
      document.body.classList.toggle('on-dark', !!dark);
    };
    window.addEventListener('mousemove', move);
    const stop = addTask(() => {
      cx += (x - cx) * 0.2; cy += (y - cy) * 0.2;
      el.style.transform = `translate3d(${cx}px, ${cy}px, 0)`;
    });
    return () => { window.removeEventListener('mousemove', move); stop(); };
  }, []);
  return <div className="cursor" ref={ref} aria-hidden />;
}

export function Nav() {
  const { lang, setLang, t } = useLang();
  const path = usePathname() || '/';
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  useEffect(() => {
    const d = drawer.current;
    if (!d) return;
    if (open) d.removeAttribute('inert'); else d.setAttribute('inert', '');
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const isActive = (href: string) => {
    const clean = href.split('#')[0];
    if (href.includes('#')) return false;
    return clean === '/' ? path === '/' : path.startsWith(clean.replace(/\/$/, ''));
  };
  const go = () => setOpen(false);
  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')} data-dark>
        <div className="wrap nav-in">
          <a href={a('/')} className="logo" aria-label={t(brand.name)}>
            <span className="logo-mark">
              <img className="lt" src={a('/logo-light.svg')} alt="" width={38} height={38} />
              <img className="dk" src={a('/logo-dark.svg')} alt="" width={38} height={38} />
            </span>
            <span>{t(brand.name)}</span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            {nav.map((n) => (
              <a key={n.href} href={a(n.href)} className={isActive(n.href) ? 'active' : ''}>{t(n.label)}</a>
            ))}
          </nav>
          <div className="lang" role="group" aria-label={t(ui.language)}>
            {LANGS.map((l) => (
              <button key={l.code} aria-pressed={lang === l.code} onClick={() => setLang(l.code)}>{l.label}</button>
            ))}
          </div>
          <a href={a('/#support')} className="btn pri sm">{t(ui.cta)}</a>
          <button className={'burger' + (open ? ' open' : '')} aria-label={open ? t(ui.close) : t(ui.menu)} aria-expanded={open} onClick={() => setOpen(!open)}>
            <i /><i /><i />
          </button>
        </div>
      </header>
      <div className={'drawer' + (open ? ' open' : '')} ref={drawer} inert>
        {nav.map((n, i) => (
          <a key={n.href} href={a(n.href)} style={{ ['--i' as string]: i }} onClick={go}>{t(n.label)}</a>
        ))}
        <a href={a('/#support')} style={{ ['--i' as string]: nav.length, color: 'var(--gold)' }} onClick={go}>{t(ui.cta)}</a>
      </div>
    </>
  );
}
