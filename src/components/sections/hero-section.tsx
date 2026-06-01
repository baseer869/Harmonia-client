'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';

export function HeroSection() {
  const { dict } = useI18n();
  const t = dict.home.hero;

  return (
    <section id="hero">
      <div className="hero-img" />
      <div className="hero-overlay" />
      <div className="hero-pattern" />
      <div className="hero-content">
        <span className="hero-badge">
          <span className="hero-badge-dot" />
          {t.badge}
        </span>
        <h1 className="hero-title">
          {t.title1}
          <br />
          <span className="g">{t.titleHighlight}</span>
          <br />
          {t.title2}
        </h1>
        <p className="hero-subtitle">{t.subtitle}</p>
        <div className="hero-btns">
          <LocalizedLink href="/voyageurs" className="btn-gold">
            {t.ctaBook}
          </LocalizedLink>
          <LocalizedLink href="/proprietaires" className="btn-outline">
            {t.ctaOwners}
          </LocalizedLink>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-card">
          <p className="hero-card-quote">{t.cardQuote}</p>
          <div className="hero-card-divider" />
          <span className="hero-card-label">{t.cardLabel}</span>
        </div>
      </div>
      <div className="hero-stats">
        {t.stats.map((s) => (
          <div key={s.l} className="hero-stat">
            <span className="stat-n">{s.n}</span>
            <span className="stat-l">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
