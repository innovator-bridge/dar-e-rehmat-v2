'use client';
import { useEffect } from 'react';
import { LangProvider, useLang } from '@/components/Lang';
import { Preloader, ProgressRail, Cursor, Nav } from '@/components/Chrome';
import { Hero, Marquee, Manifesto, Challenge, WorkRail, Model } from '@/components/SectionsA';
import { Proof, Team, School, Gallery, Support, Location, Contact, Footer } from '@/components/SectionsB';
import { initReveal, initParallax } from '@/lib/motion';
import { ui } from '@/data/site';

function Page() {
  const { lang, t } = useLang();
  // Re-scan after the language changes, because text length (and layout) changes.
  useEffect(() => {
    const a = initReveal();
    const b = initParallax();
    return () => { a(); b(); };
  }, [lang]);
  return (
    <>
      <Preloader />
      <ProgressRail />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Manifesto />
        <Challenge />
        <WorkRail />
        <Model />
        <Proof />
        <Team />
        <School />
        <Gallery />
        <Support />
        <Location />
        <Contact />
      </main>
      <Footer />
      <div className="demo-flag">{t(ui.demo)}</div>
    </>
  );
}

export default function Home() {
  return <LangProvider><Page /></LangProvider>;
}
