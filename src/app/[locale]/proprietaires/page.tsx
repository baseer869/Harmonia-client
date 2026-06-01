import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { LocalizedLink, Reveal } from '@/components/ui';
import { defaultLocale, isLocale } from '@/i18n';
import { proprietaires } from '@/content/proprietaires';

const HERO_IMG =
  'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=85';
const WHY_IMG =
  'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=85';

export default async function ProprietairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = proprietaires[isLocale(locale) ? locale : defaultLocale];

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
          <div className="proprio-why">
            <div>
              <div className="eyebrow left">{c.why.eyebrow}</div>
              <h2 className="prop-title">
                {c.why.titleA}
                <br />
                <span className="g">{c.why.titleH}</span>
              </h2>
              <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 36 }}>
                {c.why.desc}
              </p>
              <ul className="chk">
                {c.why.checks.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={WHY_IMG} alt="" />
          </div>
        </Reveal>
      </section>

      <section id="services-inclus" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">{c.services.eyebrow}</div>
        <h2 className="sec-h">
          {c.services.titleA} <span className="g">{c.services.titleH}</span>
        </h2>
        <p className="sec-sub">{c.services.sub}</p>
        <Reveal>
          <div className="services-inclus-grid">
            {c.services.cards.map((s) => (
              <div key={s.t} className="si-card">
                <div className="si-title">{s.t}</div>
                <ul className="si-list">
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="formules" className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="eyebrow">{c.formules.eyebrow}</div>
        <h2 className="sec-h">
          {c.formules.titleA} <span className="g">{c.formules.titleH}</span>
        </h2>
        <p className="sec-sub">{c.formules.sub}</p>
        <Reveal>
          <div className="formules-grid">
            {c.formules.plans.map((p) => (
              <div key={p.name} className={`f-card${p.featured ? ' featured' : ''}`}>
                {p.featured && <div className="f-badge">{c.formules.badge}</div>}
                <div className="f-name">{p.name}</div>
                <div className="f-price" style={{ fontSize: 34 }}>
                  {p.price}
                </div>
                <div className="f-price-sub">{p.priceSub}</div>
                <ul className="f-list">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
                <p className="f-note">{p.note}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <LocalizedLink href="/contact" className="btn-gold">
            {c.formules.cta}
          </LocalizedLink>
        </div>
      </section>
    </>
  );
}
