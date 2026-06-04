'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';
import { money, onImageError, resolveAssetUrl } from '@/lib/format';
import { sec, eyebrow, secH, secSub, btnOutline } from '@/lib/ui-classes';
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
      <LocalizedLink
        key={s.id}
        href={`/voyageurs/${s.slug}`}
        className="group relative h-[320px] cursor-pointer overflow-hidden"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="absolute inset-0 size-full object-cover transition-transform duration-[.6s] ease-[ease] group-hover:scale-[1.08]"
          src={resolveAssetUrl(s.coverUrl ?? s.thumbUrl)}
          alt={s.title}
          onError={onImageError}
        />
        <div className="absolute inset-0 transition-[background] duration-[.4s] [background:linear-gradient(to_top,rgba(5,4,2,0.9)_0%,rgba(5,4,2,0.3)_55%,rgba(5,4,2,0.1)_100%)] group-hover:[background:linear-gradient(to_top,rgba(5,4,2,0.95)_0%,rgba(5,4,2,0.5)_60%,rgba(5,4,2,0.2)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="mb-2 font-display text-[11px] tracking-[2px] text-gold uppercase">{s.title}</div>
          {items.length > 0 && (
            <ul className="mb-[10px] flex flex-col gap-1">
              {items.map((i) => (
                <li key={i} className="text-[11px] text-cream/70">
                  {i}
                </li>
              ))}
            </ul>
          )}
          <div className="mt-[5px] border-t border-[rgba(201,168,76,0.2)] pt-[9px] text-[10px] tracking-[1px] text-gold-dark italic">
            {priceLabel(s, fromWord)}
          </div>
          <div className="mt-[10px] inline-block cursor-pointer bg-gold px-[18px] py-2 text-[9px] font-bold tracking-[2px] text-black uppercase transition-[background] duration-300 hover:bg-gold-light">
            {t.book}
          </div>
        </div>
      </LocalizedLink>
    );
  };

  const list = services ?? [];

  return (
    <section className={`${sec} bg-brand-black`}>
      <div className={eyebrow}>{t.eyebrow}</div>
      <h2 className={secH}>
        {t.title} <span className="text-gold">{t.titleHighlight}</span>
      </h2>
      <p className={secSub}>{t.sub}</p>

      {isLoading ? (
        <p className="text-center text-text-light">
          {locale === 'en' ? 'Loading…' : 'Chargement…'}
        </p>
      ) : list.length === 0 ? (
        <p className="text-center text-text-light">
          {locale === 'en' ? 'No services available yet.' : 'Aucun service disponible.'}
        </p>
      ) : (
        <Reveal>
          <div className="mx-auto mb-[3px] grid max-w-[1400px] grid-cols-5 gap-[3px] max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
            {list.slice(0, 10).map(renderCard)}
          </div>
        </Reveal>
      )}

      <div className="mt-[52px] text-center">
        <LocalizedLink href="/voyageurs" className={btnOutline}>
          {t.viewAll}
        </LocalizedLink>
      </div>
    </section>
  );
}
