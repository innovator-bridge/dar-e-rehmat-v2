'use client';
import { useLang } from './Lang';
import { a } from '@/lib/asset';
import { CountNum } from './SectionsA';
import { page, path, numbers, machines, pyramid, FIG, SHOW_FINANCIALS, hiddenNote } from '@/data/roadmap';

/* ---------- 1. The path ---------- */
export function RoadmapPath() {
  const { t } = useLang();
  return (
    <section className="sec" id="path">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(path.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '18ch' }}>{t(path.title)}</h2>
        <ol className="rpath">
          {path.steps.map((s, i) => (
            <li key={s.n} data-rv="up" data-d={i * 90}>
              <span className="rp-dot">{s.n}</span>
              <div className="rp-when">{t(s.when)}</div>
              <h3>{t(s.title)}</h3>
              <p>{t(s.body)}</p>
            </li>
          ))}
        </ol>
        <p className="map-note" data-rv="up">{t(page.draft)}</p>
      </div>
    </section>
  );
}

/* ---------- 2. Time and value ---------- */
export function RoadmapNumbers() {
  const { t, locale } = useLang();
  const f = (n: number) => n.toLocaleString(locale);
  return (
    <section className="sec mist" id="numbers">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(numbers.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '20ch' }}>{t(numbers.title)}</h2>
        <div className="kpis four" style={{ marginTop: 36 }}>
          {numbers.cards.map((c, i) => (
            <div className="kpi" key={i} data-rv="up" data-d={i * 100}>
              <div className="num">{c.prefix}<CountNum target={c.target} /></div>
              <div className="ul" /><p>{t(c.label)}</p>
            </div>
          ))}
        </div>
        {SHOW_FINANCIALS ? (
          <div className="bars" data-rv="up">
            <h3 className="h-md">{t(numbers.barsTitle)}</h3>
            <div className="bar-row">
              <span>{t(numbers.earn)}</span>
              <div className="bar"><i style={{ ['--w' as string]: '100%' }} className="gold" /><b>${f(FIG.earnUsdPerDay)}+</b></div>
            </div>
            <div className="bar-row">
              <span>{t(numbers.live)}</span>
              <div className="bar"><i style={{ ['--w' as string]: `${(FIG.livingUsdPerDay / FIG.earnUsdPerDay) * 100}%` }} className="green" /><b>${f(FIG.livingUsdPerDay)}</b></div>
            </div>
            <p className="map-note">{t(numbers.barsNote)}</p>
          </div>
        ) : (
          <p className="map-note">{t(hiddenNote)}</p>
        )}
      </div>
    </section>
  );
}

/* ---------- 3. Machine ladder ---------- */
export function MachineLadder() {
  const { t, locale } = useLang();
  const f = (n: number) => n.toLocaleString(locale);
  const max = Math.max(...machines.items.map((m) => m.days));
  return (
    <section className="sec" id="machines">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(machines.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '20ch' }}>{t(machines.title)}</h2>
        {SHOW_FINANCIALS ? (
          <>
            <p className="lede" data-rv="up" data-d="160" style={{ marginTop: 18 }}>{t(machines.lede)}</p>
            <div className="mladder">
              {machines.items.map((m, i) => (
                <article className="mcard" key={i} data-rv="up" data-d={i * 120}>
                  <div className="mk-kind">{t(m.kind)}</div>
                  <div className="mk-price">Rs {f(m.rs)}</div>
                  <div className="bar slim"><i className="gold" style={{ ['--w' as string]: `${(m.days / max) * 100}%` }} /></div>
                  <div className="mk-days"><b>{f(m.days)}</b> {t(machines.daysLabel)}</div>
                  <p>{t(m.note)}</p>
                </article>
              ))}
            </div>
            <p className="map-note">{t(machines.note)}</p>
          </>
        ) : (
          <p className="map-note">{t(hiddenNote)}</p>
        )}
      </div>
    </section>
  );
}

/* ---------- 4. The pyramid ---------- */
export function PyramidSection() {
  const { t } = useLang();
  return (
    <section className="sec mist" id="pyramid">
      <div className="wrap">
        <div className="eyebrow" data-rv="up">{t(pyramid.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" data-d="80" style={{ maxWidth: '20ch' }}>{t(pyramid.title)}</h2>
        <p className="lede" data-rv="up" data-d="160" style={{ marginTop: 18 }}>{t(pyramid.lede)}</p>
        <div className="pyr">
          {pyramid.levels.map((l, i) => (
            <div className="pyr-row" key={i} data-rv="up" data-d={i * 120}>
              <div className="pyr-shape" style={{ ['--lv' as string]: i }}><span>{t(l.name)}</span></div>
              <p>{t(l.body)}</p>
            </div>
          ))}
        </div>
        <p className="map-note">{t(pyramid.illustrative)}</p>
      </div>
    </section>
  );
}

/* ---------- Teaser shown on the Stitching Centre page ---------- */
const teaser = {
  eyebrow: { en: 'Self-sufficiency roadmap', ur: 'خود کفالت کا راستہ', ar: 'خارطة الاكتفاء الذاتي' },
  title: { en: 'See how a learner becomes a teacher', ur: 'دیکھیں کہ سیکھنے والی استانی کیسے بنتی ہے', ar: 'شاهد كيف تصبح المتعلّمة معلّمة' },
  body: {
    en: 'Six months of training, her own machine, her own income, and then she trains others. The full roadmap is on its own page.',
    ur: 'چھ ماہ کی تربیت، اپنی مشین، اپنی آمدنی، اور پھر دوسروں کو سکھانا۔ مکمل راستہ اپنے صفحے پر موجود ہے۔',
    ar: 'ستة أشهر من التدريب، وآلتها الخاصة، ودخلها الخاص، ثم تدرّب غيرها. خارطة الطريق الكاملة في صفحتها الخاصة.',
  },
  cta: { en: 'Open the roadmap', ur: 'راستہ کھولیں', ar: 'افتح خارطة الطريق' },
};
export function RoadmapTeaser() {
  const { t } = useLang();
  return (
    <section className="sec dark" data-dark>
      <div className="wrap" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>{t(teaser.eyebrow)}</div>
        <h2 className="h-lg" data-rv="up" style={{ maxWidth: '20ch', marginInline: 'auto' }}>{t(teaser.title)}</h2>
        <p className="lede" data-rv="up" data-d="100" style={{ margin: '18px auto 30px' }}>{t(teaser.body)}</p>
        <a className="btn pri" href={a('/roadmap/')} data-rv="up" data-d="180">{t(teaser.cta)} <span aria-hidden>→</span></a>
      </div>
    </section>
  );
}
