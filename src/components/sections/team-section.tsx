'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';

export function TeamSection() {
  const { dict } = useI18n();
  const t = dict.home.team;

  return (
    <section className="sec" style={{ background: 'var(--brand-black, #0A0A0A)' }}>
      <div className="eyebrow">{t.eyebrow}</div>
      <h2 className="sec-h">
        {t.title} <span className="g">{t.titleHighlight}</span>
      </h2>
      <p className="sec-sub">{t.sub}</p>
      <Reveal>
        <div className="team-grid">
          {t.members.map((m) => (
            <div key={m.n} className="t-card">
              <div className="t-avatar">{m.i}</div>
              <div className="t-name">{m.n}</div>
              <div className="t-role">{m.r}</div>
              <p className="t-bio">{m.b}</p>
            </div>
          ))}
        </div>
      </Reveal>
      <div style={{ textAlign: 'center', marginTop: 48 }}>
        <LocalizedLink href="/about" className="btn-outline">
          {t.cta}
        </LocalizedLink>
      </div>
    </section>
  );
}
