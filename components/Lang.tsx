'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Lang, L, LANGS } from '@/data/site';

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (x: L) => string; locale: string };
const LangCtx = createContext<Ctx>({ lang: 'en', setLang: () => {}, t: (x) => x.en, locale: 'en-US' });
export const useLang = () => useContext(LangCtx);

// Numeral systems: Latin for English, Eastern Arabic-Indic digits for Arabic and extended ones for Urdu,
// matching the digits used in the written copy.
const LOCALES: Record<Lang, string> = { en: 'en-US', ur: 'ur-PK-u-nu-arabext', ar: 'ar-EG' };

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    let l: Lang = 'en';
    try {
      const q = new URLSearchParams(window.location.search).get('lang');
      const s = localStorage.getItem('lang');
      const pick = (q || s) as Lang | null;
      if (pick && LANGS.some((x) => x.code === pick)) l = pick;
    } catch {}
    setLangState(l);
  }, []);

  useEffect(() => {
    const meta = LANGS.find((x) => x.code === lang)!;
    document.documentElement.lang = lang;
    document.documentElement.dir = meta.dir;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem('lang', l); } catch {}
  };
  const t = (x: L) => x[lang];
  return <LangCtx.Provider value={{ lang, setLang, t, locale: LOCALES[lang] }}>{children}</LangCtx.Provider>;
}
