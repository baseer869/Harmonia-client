import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { TerritorySection } from '@/components/sections';
import { Reveal } from '@/components/ui';
import { OwnerRequestForm } from '@/modules/owner-requests';
import { defaultLocale, isLocale } from '@/i18n';
import { contact } from '@/content/contact';

const HERO_IMG =
  'https://images.unsplash.com/photo-1534430480872-3498386e7856?w=1600&q=85';

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const c = contact[isLocale(locale) ? locale : defaultLocale];

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
        <div className="contact-inner">
          <Reveal>
            <p className="contact-tagline">
              {c.taglineA}
              <br />
              <em>{c.taglineEm}</em>
            </p>
            <p style={{ fontSize: 14.5, lineHeight: 1.95, color: 'var(--text-muted)', marginBottom: 36 }}>
              {c.desc}
            </p>
            <div className="c-info">
              {c.info.map((it) => (
                <div className="c-item" key={it.label}>
                  <span className="c-ico">{it.ico}</span>
                  <div className="c-text">
                    <small>{it.label}</small>
                    {it.value}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay="0.18s">
            {/* Live provider-lead form → admin Owner Requests. */}
            <OwnerRequestForm />
          </Reveal>
        </div>
      </section>

      <TerritorySection />
    </>
  );
}
