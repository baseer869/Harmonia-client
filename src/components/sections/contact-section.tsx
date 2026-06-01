'use client';

import { useI18n } from '@/i18n/provider';
import { Reveal } from '@/components/ui';

export function ContactSection() {
  const { dict } = useI18n();
  const t = dict.home.contact;

  return (
    <section className="sec" style={{ background: 'var(--dark2)' }}>
      <div className="contact-inner">
        <Reveal>
          <p className="contact-tagline">
            {t.tagline1}
            <br />
            <em>{t.taglineEm}</em>
          </p>
          <p
            style={{
              fontSize: 14.5,
              lineHeight: 1.95,
              color: 'var(--text-muted)',
            }}
          >
            {t.desc}
          </p>
          <div className="c-info">
            <div className="c-item">
              <span className="c-ico">+</span>
              <div className="c-text">
                <small>{t.phoneLabel}</small>
                {t.phone}
              </div>
            </div>
            <div className="c-item">
              <span className="c-ico">@</span>
              <div className="c-text">
                <small>{t.emailLabel}</small>
                {t.email}
              </div>
            </div>
            <div className="c-item">
              <span className="c-ico">✦</span>
              <div className="c-text">
                <small>{t.addressLabel}</small>
                {t.address}
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay="0.18s">
          {/* Static preview form — wired to /api/public/contact in a later stage. */}
          <div className="contact-form">
            <div className="f-row">
              <div className="f-field">
                <input type="text" placeholder={t.form.firstName} />
              </div>
              <div className="f-field">
                <input type="text" placeholder={t.form.lastName} />
              </div>
            </div>
            <div className="f-field">
              <input type="email" placeholder={t.form.email} />
            </div>
            <div className="f-field">
              <input type="tel" placeholder={t.form.phone} />
            </div>
            <div className="f-field">
              <select defaultValue="">
                <option value="" disabled>
                  {t.form.rolePlaceholder}
                </option>
                {t.form.roles.map((r) => (
                  <option key={r}>{r}</option>
                ))}
              </select>
            </div>
            <div className="f-field">
              <textarea placeholder={t.form.message} />
            </div>
            <button className="f-submit" type="button">
              {t.form.submit}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
