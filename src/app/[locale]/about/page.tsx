import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { TerritorySection } from '@/components/sections';
import { LocalizedLink, Reveal } from '@/components/ui';
import { defaultLocale, isLocale } from '@/i18n';
import { about } from '@/content/about';

const HERO_IMG =
  'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1600&q=85';
const STORY_IMG =
  'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=800&q=85';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = about[isLocale(locale) ? locale : defaultLocale];

  return (
    <>
      <PageHero
        eyebrow={c.hero.eyebrow}
        title={
          <>
            {c.hero.titleA}
            <br />
            <span className="g">{c.hero.titleH}</span>
            <br />
            {c.hero.titleB}
          </>
        }
        imgSrc={HERO_IMG}
      />

      <section className="sec" style={{ background: 'var(--dark2)' }}>
        <Reveal>
          <div className="about-split">
            <div>
              <div className="eyebrow left">{c.story.eyebrow}</div>
              <h2 className="prop-title">
                {c.story.titleA}
                <br />
                <span className="g">{c.story.titleH}</span>
              </h2>
              {c.story.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 24)}
                  style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 24 }}
                >
                  {p}
                </p>
              ))}
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={STORY_IMG} alt="" />
          </div>
        </Reveal>
      </section>

      <section id="valeurs" className="sec" style={{ background: 'var(--black)' }}>
        <div className="eyebrow">{c.values.eyebrow}</div>
        <h2 className="sec-h">
          {c.values.titleA} <span className="g">{c.values.titleH}</span>
        </h2>
        <Reveal>
          <div className="about-values">
            {c.values.cards.map((v) => (
              <div key={v.n} className="av-card">
                <div className="av-num">{v.n}</div>
                <div className="av-title">{v.t}</div>
                <p className="av-desc">{v.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="equipe" className="sec" style={{ background: 'var(--dark2)' }}>
        <div className="eyebrow">{c.team.eyebrow}</div>
        <h2 className="sec-h">
          {c.team.titleA} <span className="g">{c.team.titleH}</span>
        </h2>
        <p className="sec-sub">{c.team.sub}</p>
        <Reveal>
          <div className="team-grid">
            {c.team.members.map((m) => (
              <div key={m.n} className="t-card">
                <div className="t-avatar">{m.i}</div>
                <div className="t-name">{m.n}</div>
                <div className="t-role">{m.r}</div>
                <p className="t-bio">{m.b}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <div style={{ textAlign: 'center', marginTop: 52 }}>
          <LocalizedLink href="/contact" className="btn-gold">
            {c.team.cta}
          </LocalizedLink>
        </div>
      </section>

      <TerritorySection />
    </>
  );
}
