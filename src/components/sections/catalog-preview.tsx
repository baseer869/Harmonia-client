'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';
import { money, resolveAssetUrl } from '@/lib/format';
import { usePublicServices, type PublicService } from '@/modules/services';

const MODE_SUFFIX: Record<PublicService['priceMode'], string> = {
  PER_PERSON: '/ pers.',
  PER_TRIP: '/ trajet',
  FIXED: '',
  ON_QUOTE: '',
};

function priceLabel(s: PublicService, fromWord: string): string {
  if (s.priceMode === 'ON_QUOTE') return 'Sur devis';
  return `${fromWord} ${money(s.priceCents, s.currency)} ${MODE_SUFFIX[s.priceMode]}`.trim();
}

export function CatalogPreview() {
  const { dict, locale } = useI18n();
  const t = dict.home.catalog;
  const fromWord = locale === 'en' ? 'From' : 'Dès';
  const { data: services, isLoading } = usePublicServices();

  const renderCard = (s: PublicService) => {
    const items = (s.tags.length ? s.tags : s.included.map((i) => i.title)).slice(0, 3);
    return (
      <LocalizedLink key={s.id} href={`/voyageurs/${s.slug}`} className="cat-card">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="cat-card-img"
          src={resolveAssetUrl(s.coverUrl ?? s.thumbUrl)}
          alt={s.title}
        />
        <div className="cat-card-overlay" />
        <div className="cat-card-body">
          <div className="cat-card-name">{s.title}</div>
          {items.length > 0 && (
            <ul className="cat-card-items">
              {items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}
          <div className="cat-card-price">{priceLabel(s, fromWord)}</div>
          <div className="cat-card-btn">{t.book}</div>
        </div>
      </LocalizedLink>
    );
  };

  const list = services ?? [];

  return (
    <section className="sec" style={{ background: 'var(--brand-black, #0A0A0A)' }}>
      <div className="eyebrow">{t.eyebrow}</div>
      <h2 className="sec-h">
        {t.title} <span className="g">{t.titleHighlight}</span>
      </h2>
      <p className="sec-sub">{t.sub}</p>

      {isLoading ? (
        <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
          {locale === 'en' ? 'Loading…' : 'Chargement…'}
        </p>
      ) : list.length === 0 ? (
        <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
          {locale === 'en' ? 'No services available yet.' : 'Aucun service disponible.'}
        </p>
      ) : (
        <Reveal>
          <div className="cat-grid">{list.slice(0, 10).map(renderCard)}</div>
        </Reveal>
      )}

      <div style={{ textAlign: 'center', marginTop: 52 }}>
        <LocalizedLink href="/voyageurs" className="btn-outline">
          {t.viewAll}
        </LocalizedLink>
      </div>
    </section>
  );
}
