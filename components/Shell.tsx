'use client';
import { ReactNode, useEffect } from 'react';
import { LangProvider, useLang } from './Lang';
import { Preloader, ProgressRail, Cursor, Nav } from './Chrome';
import { Footer } from './SectionsB';
import { initReveal, initParallax } from '@/lib/motion';
import { ui } from '@/data/site';

function Inner({ children }: { children: ReactNode }) {
  const { lang, t } = useLang();
  // Re-scan reveals and parallax when the language changes (text length changes layout).
  useEffect(() => {
    document.documentElement.classList.add('ready');
    const x = initReveal();
    const y = initParallax();
    return () => { x(); y(); };
  }, [lang]);
  // Jump to a #hash after the client-rendered content exists (for links from the inner pages).
  useEffect(() => {
    const h = window.location.hash;
    if (!h) return;
    const id = window.setTimeout(() => document.querySelector(h)?.scrollIntoView(), 400);
    return () => window.clearTimeout(id);
  }, []);
  return (
    <>
      <Preloader />
      <ProgressRail />
      <Cursor />
      <Nav />
      <main>{children}</main>
      <Footer />
      <div className="demo-flag">{t(ui.demo)}</div>
    </>
  );
}

export default function Shell({ children }: { children: ReactNode }) {
  return <LangProvider><Inner>{children}</Inner></LangProvider>;
}
