'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';
import { CATEGORY_CARDS } from '@/constants';

export function CatalogPreview() {
  const { dict } = useI18n();
  const t = dict.home.catalog;
  const cats = dict.categories as Record<
    string,
    { name: string; items: string[]; price: string }
  >;

  const renderCard = (card: { id: string; img: string }) => {
    const c = cats[card.id];
    if (!c) return null;
    return (
      <LocalizedLink
        key={card.id}
        href={`/voyageurs/${card.id}`}
        className="cat-card"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cat-card-img" src={card.img} alt={c.name} />
        <div className="cat-card-overlay" />
        <div className="cat-card-body">
          <div className="cat-card-name">{c.name}</div>
          <ul className="cat-card-items">
            {c.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
          <div className="cat-card-price">{c.price}</div>
          <div className="cat-card-btn">{t.book}</div>
        </div>
      </LocalizedLink>
    );
  };

  return (
    <section className="sec" style={{ background: 'var(--brand-black, #0A0A0A)' }}>
      <div className="eyebrow">{t.eyebrow}</div>
      <h2 className="sec-h">
        {t.title} <span className="g">{t.titleHighlight}</span>
      </h2>
      <p className="sec-sub">{t.sub}</p>
      <Reveal>
        <div className="cat-grid">{CATEGORY_CARDS.slice(0, 5).map(renderCard)}</div>
      </Reveal>
      <Reveal>
        <div className="cat-grid" style={{ marginTop: 3 }}>
          {CATEGORY_CARDS.slice(5).map(renderCard)}
        </div>
      </Reveal>
      <div style={{ textAlign: 'center', marginTop: 52 }}>
        <LocalizedLink href="/voyageurs" className="btn-outline">
          {t.viewAll}
        </LocalizedLink>
      </div>
    </section>
  );
}
