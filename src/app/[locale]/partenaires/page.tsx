import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { LocalizedLink, Reveal } from '@/components/ui';
import { defaultLocale, isLocale } from '@/i18n';
import { partenaires } from '@/content/partenaires';

const HERO_IMG =
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1600&q=85';

export default async function PartenairesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = partenaires[isLocale(locale) ? locale : defaultLocale];

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
          <div className="partner-split">
            <div id="apport" className="p-panel">
              <span className="p-tag">{c.broker.tag}</span>
              <h2 className="p-title">
                {c.broker.titleA}
                <br />
                <span className="g">{c.broker.titleH}</span>
              </h2>
              <p className="p-desc">{c.broker.desc}</p>
              <ul className="gain-list">
                {c.broker.gains.map((g) => (
                  <li key={g.s}>
                    <strong>{g.s}</strong>
                    {g.t}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 32 }}>
                <LocalizedLink href="/contact" className="btn-gold">
                  {c.broker.cta}
                </LocalizedLink>
              </div>
            </div>

            <div id="partners" className="p-panel p-dark">
              <span className="p-tag outline">{c.partners.tag}</span>
              <h2 className="p-title">
                {c.partners.titleA}
                <br />
                <span className="g">{c.partners.titleH}</span>
              </h2>
              <p className="p-desc">{c.partners.desc}</p>
              <div className="share-box">
                <div className="big">{c.partners.shareBig}</div>
                <div className="lbl">{c.partners.shareLbl}</div>
                <div className="note">{c.partners.shareNote}</div>
              </div>
              <ul className="gain-list">
                {c.partners.gains.map((g) => (
                  <li key={g.s}>
                    <strong>{g.s}</strong>
                    {g.t}
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: 32 }}>
                <LocalizedLink href="/contact" className="btn-outline">
                  {c.partners.cta}
                </LocalizedLink>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
