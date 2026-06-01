import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { LocalizedLink, Reveal } from '@/components/ui';
import { defaultLocale, isLocale } from '@/i18n';
import { conditions } from '@/content/conditions';

const HERO_IMG =
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=85';

interface Block {
  title: string;
  desc: string;
  featured?: boolean;
  highlight?: { val: string; lbl: string };
  list?: string[];
  steps?: { n: string; t: string; p: string }[];
}

export default async function ConditionsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = conditions[isLocale(locale) ? locale : defaultLocale];
  const blocks = c.blocks as Block[];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.titleA}
            <br />
            <span className="g">{c.hero.titleH}</span>
          </>
        }
        imgSrc={HERO_IMG}
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <Reveal>
          <div className="contrat-grid" style={{ maxWidth: 1200, margin: '0 auto' }}>
            {blocks.map((b) => (
              <div key={b.title} className={`contrat-block${b.featured ? ' featured' : ''}`}>
                <div className="contrat-block-title">{b.title}</div>
                <p className="contrat-block-desc">{b.desc}</p>
                {b.highlight && (
                  <div className="contrat-highlight">
                    <div className="contrat-highlight-val">{b.highlight.val}</div>
                    <div className="contrat-highlight-lbl">{b.highlight.lbl}</div>
                  </div>
                )}
                {b.steps?.map((s) => (
                  <div key={s.n} className="contrat-step">
                    <div className="contrat-step-num">{s.n}</div>
                    <div className="contrat-step-body">
                      <strong>{s.t}</strong>
                      <p>{s.p}</p>
                    </div>
                  </div>
                ))}
                {b.list && (
                  <ul className="chk">
                    {b.list.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">{c.guarantees.eyebrow}</div>
        <h2 className="sec-h">
          {c.guarantees.titleA} <span className="g">{c.guarantees.titleH}</span>
        </h2>
        <Reveal>
          <div className="contrat-guarantee-grid">
            {c.guarantees.cards.map((g) => (
              <div key={g.t} className="cg-card">
                <div className="cg-title">{g.t}</div>
                <p className="cg-desc">{g.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <LocalizedLink href="/contact" className="btn-outline">
            {c.guarantees.cta}
          </LocalizedLink>
        </div>
      </section>
    </>
  );
}
