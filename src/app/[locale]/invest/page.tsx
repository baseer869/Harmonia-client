import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { LocalizedLink, Reveal } from '@/components/ui';
import { defaultLocale, isLocale } from '@/i18n';
import { invest } from '@/content/invest';

const HERO_IMG =
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=85';

export default async function InvestPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = invest[isLocale(locale) ? locale : defaultLocale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.titleA} <span className="g">{c.hero.titleH}</span> {c.hero.titleB}
          </>
        }
        imgSrc={HERO_IMG}
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <Reveal>
          <div className="invest-hero">
            <div>
              <span className="invest-tag">{c.intro.tag}</span>
              <h2 className="invest-title">
                {c.intro.titleA}
                <br />
                <span className="g">{c.intro.titleH}</span>
                <br />
                {c.intro.titleB}
              </h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginTop: 22, marginBottom: 30 }}>
                {c.intro.desc}
              </p>
              <ul className="chk" style={{ marginBottom: 36 }}>
                {c.intro.checks.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <div className="invest-kpis">
                {c.intro.kpis.map((k) => (
                  <div key={k.l} className="invest-kpi">
                    <span className="invest-kpi-n">{k.n}</span>
                    <span className="invest-kpi-l">{k.l}</span>
                  </div>
                ))}
              </div>
            </div>
            <Reveal delay="0.18s">
              <div className="invest-example">
                <div className="invest-ex-title">{c.intro.exampleTitle}</div>
                {c.intro.rows.map((row) => (
                  <div key={row.l} className="invest-row">
                    <span className="invest-rl">{row.l}</span>
                    <span className={`invest-rv${row.g ? ' g' : ''}`}>{row.v}</span>
                  </div>
                ))}
                <div className="invest-hl">
                  <span>{c.intro.highlight}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </section>

      <section id="invest-steps" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">{c.process.eyebrow}</div>
        <h2 className="sec-h">
          {c.process.titleA}
          <br />
          <span className="g">{c.process.titleH}</span>
        </h2>
        <p className="sec-sub">{c.process.sub}</p>
        <Reveal>
          <div className="invest-process">
            {c.process.steps.map((s) => (
              <div key={s.n} className="ip-card">
                <div className="ip-num">{s.n}</div>
                <div className="ip-title">{s.t}</div>
                <p className="ip-desc">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="invest-pour-qui" className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="eyebrow">{c.forWho.eyebrow}</div>
        <h2 className="sec-h">
          {c.forWho.titleA}
          <br />
          <span className="g">{c.forWho.titleH}</span>
        </h2>
        <Reveal>
          <div className="invest-for">
            {c.forWho.cards.map((card) => (
              <div key={card.t} className="if-card">
                <div className="if-title">{card.t}</div>
                <p className="if-desc">{card.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <LocalizedLink href="/contact" className="btn-gold">
            {c.forWho.cta}
          </LocalizedLink>
        </div>
      </section>
    </>
  );
}
