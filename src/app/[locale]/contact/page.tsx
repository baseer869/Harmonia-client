import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { Reveal } from '@/components/ui';
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
            {/* Static preview — wired to /api/public/contact in a later stage. */}
            <div className="contact-form">
              <div className="f-row">
                <div className="f-field">
                  <input type="text" placeholder={c.form.firstName} />
                </div>
                <div className="f-field">
                  <input type="text" placeholder={c.form.lastName} />
                </div>
              </div>
              <div className="f-field">
                <input type="email" placeholder={c.form.email} />
              </div>
              <div className="f-field">
                <input type="tel" placeholder={c.form.phone} />
              </div>
              <div className="f-field">
                <select defaultValue="">
                  <option value="" disabled>
                    {c.form.rolePlaceholder}
                  </option>
                  {c.form.roles.map((r) => (
                    <option key={r}>{r}</option>
                  ))}
                </select>
              </div>
              <div className="f-field">
                <select defaultValue="">
                  <option value="" disabled>
                    {c.form.subjectPlaceholder}
                  </option>
                  {c.form.subjects.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="f-field">
                <textarea placeholder={c.form.message} style={{ height: 140 }} />
              </div>
              <button className="f-submit" type="button">
                {c.form.submit}
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
