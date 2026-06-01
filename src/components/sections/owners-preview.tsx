'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';

export function OwnersPreview() {
  const { dict } = useI18n();
  const t = dict.home.owners;

  return (
    <section className="sec" style={{ background: 'var(--dark2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <Reveal>
          <div className="prop-grid">
            <div>
              <div className="eyebrow left">{t.eyebrow}</div>
              <h2 className="prop-title">
                {t.title1}
                <br />
                <span className="g">{t.titleHighlight}</span>
              </h2>
              <p
                style={{
                  fontSize: 14.5,
                  lineHeight: 1.95,
                  color: 'var(--text-muted)',
                  marginBottom: 36,
                }}
              >
                {t.desc}
              </p>
              <ul className="chk" style={{ marginBottom: 40 }}>
                {t.checks.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
              <LocalizedLink href="/proprietaires" className="btn-gold">
                {t.cta}
              </LocalizedLink>
            </div>
            <Reveal delay="0.18s">
              <div className="metrics-grid">
                {t.metrics.map((m) => (
                  <div key={m.l} className="metric-box">
                    <span className="metric-n">{m.n}</span>
                    <span className="metric-l">{m.l}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
