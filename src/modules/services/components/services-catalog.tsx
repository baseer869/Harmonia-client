'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { CATEGORY_CARDS } from '@/constants';

/**
 * Full service catalogue grid (voyageurs page). Reuses the bilingual
 * `categories` dictionary + category images. Each card links to the service
 * detail page.
 */
export function ServicesCatalog() {
  const { dict } = useI18n();
  const t = dict.pages.voyageurs;
  const cats = dict.categories as Record<
    string,
    { name: string; items: string[]; price: string }
  >;

  return (
    <div className="cat-grid" style={{ maxWidth: 1400, margin: '0 auto' }}>
      {CATEGORY_CARDS.map((card) => {
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
              <div className="cat-card-btn">{t.bookCta}</div>
            </div>
          </LocalizedLink>
        );
      })}
    </div>
  );
}
