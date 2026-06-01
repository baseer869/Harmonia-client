'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';

export function InvestPreview() {
  const { dict } = useI18n();
  const t = dict.home.invest;

  return (
    <section className="sec" style={{ background: 'var(--dark2)' }}>
      <Reveal>
        <div className="invest-hero">
          <div>
            <span className="invest-tag">{t.tag}</span>
            <h2 className="invest-title">
              {t.title1}
              <br />
              <span className="g">{t.titleHighlight}</span>
              <br />
              {t.title2}
            </h2>
            <p
              style={{
                fontSize: 14.5,
                lineHeight: 1.95,
                color: 'var(--text-muted)',
                marginTop: 22,
              }}
            >
              {t.desc}
            </p>
            <div className="invest-kpis">
              {t.kpis.map((k) => (
                <div key={k.l} className="invest-kpi">
                  <span className="invest-kpi-n">{k.n}</span>
                  <span className="invest-kpi-l">{k.l}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 36 }}>
              <LocalizedLink href="/invest" className="btn-gold">
                {t.cta}
              </LocalizedLink>
            </div>
          </div>
          <Reveal delay="0.18s">
            <div className="invest-example">
              <div className="invest-ex-title">{t.exampleTitle}</div>
              {t.rows.map((row) => (
                <div key={row.l} className="invest-row">
                  <span className="invest-rl">{row.l}</span>
                  <span className={`invest-rv${row.gold ? ' g' : ''}`}>
                    {row.v}
                  </span>
                </div>
              ))}
              <div className="invest-hl">
                <span>{t.highlight}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}
