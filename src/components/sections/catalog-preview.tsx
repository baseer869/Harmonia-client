// 'use client';

// import { useI18n } from '@/i18n/provider';
// import { LocalizedLink, Reveal } from '@/components/ui';
// import { money, onImageError, resolveAssetUrl } from '@/lib/format';
// import { sec, eyebrow, secH, secSub, btnOutline } from '@/lib/ui-classes';
// import { usePublicServices, type PublicService } from '@/modules/services';

// const MODE_SUFFIX: Record<PublicService['priceMode'], string> = {
//   PER_PERSON: '/ pers.',
//   PER_TRIP: '/ trajet',
//   FIXED: '',
//   ON_QUOTE: '',
// };

// function priceLabel(s: PublicService, fromWord: string): string {
//   if (s.priceMode === 'ON_QUOTE') return 'Sur devis';
//   return `${fromWord} ${money(s.priceCents, s.currency)} ${MODE_SUFFIX[s.priceMode]}`.trim();
// }

// export function CatalogPreview() {
//   const { dict, locale } = useI18n();
//   const t = dict.home.catalog;
//   const fromWord = locale === 'en' ? 'From' : 'Dès';
//   const { data: services, isLoading } = usePublicServices();

//   const renderCard = (s: PublicService) => {
//     const items = (s.tags.length ? s.tags : s.included.map((i) => i.title)).slice(0, 3);
//     return (
//       <LocalizedLink
//         key={s.id}
//         href={`/voyageurs/${s.slug}`}
//         className="group relative h-[320px] cursor-pointer overflow-hidden"
//       >
//         {/* eslint-disable-next-line @next/next/no-img-element */}
//         <img
//           className="absolute inset-0 size-full object-cover transition-transform duration-[.6s] ease-[ease] group-hover:scale-[1.08]"
//           src={resolveAssetUrl(s.coverUrl ?? s.thumbUrl)}
//           alt={s.title}
//           onError={onImageError}
//         />
//         <div className="absolute inset-0 transition-[background] duration-[.4s] [background:linear-gradient(to_top,rgba(5,4,2,0.9)_0%,rgba(5,4,2,0.3)_55%,rgba(5,4,2,0.1)_100%)] group-hover:[background:linear-gradient(to_top,rgba(5,4,2,0.95)_0%,rgba(5,4,2,0.5)_60%,rgba(5,4,2,0.2)_100%)]" />
//         <div className="absolute inset-x-0 bottom-0 p-6">
//           <div className="mb-2 font-display text-[11px] tracking-[2px] text-gold uppercase">{s.title}</div>
//           {items.length > 0 && (
//             <ul className="mb-[10px] flex flex-col gap-1">
//               {items.map((i) => (
//                 <li key={i} className="text-[11px] text-cream/70">
//                   {i}
//                 </li>
//               ))}
//             </ul>
//           )}
//           <div className="mt-[5px] border-t border-[rgba(201,168,76,0.2)] pt-[9px] text-[10px] tracking-[1px] text-gold-dark italic">
//             {priceLabel(s, fromWord)}
//           </div>
//           <div className="mt-[10px] inline-block cursor-pointer bg-gold px-[18px] py-2 text-[9px] font-bold tracking-[2px] text-black uppercase transition-[background] duration-300 hover:bg-gold-light">
//             {t.book}
//           </div>
//         </div>
//       </LocalizedLink>
//     );
//   };

//   const list = services ?? [];

//   return (
//     <section className={`${sec} bg-brand-black`}>
//       <div className={eyebrow}>{t.eyebrow}</div>
//       <h2 className={secH}>
//         {t.title} <span className="text-gold">{t.titleHighlight}</span>
//       </h2>
//       <p className={secSub}>{t.sub}</p>

//       {isLoading ? (
//         <p className="text-center text-text-light">
//           {locale === 'en' ? 'Loading…' : 'Chargement…'}
//         </p>
//       ) : list.length === 0 ? (
//         <p className="text-center text-text-light">
//           {locale === 'en' ? 'No services available yet.' : 'Aucun service disponible.'}
//         </p>
//       ) : (
//         <Reveal>
//           <div className="mx-auto mb-[3px] grid max-w-[1400px] grid-cols-5 gap-[3px] max-[960px]:grid-cols-2 max-[600px]:grid-cols-1">
//             {list.slice(0, 10).map(renderCard)}
//           </div>
//         </Reveal>
//       )}

//       <div className="mt-[52px] text-center">
//         <LocalizedLink href="/voyageurs" className={btnOutline}>
//           {t.viewAll}
//         </LocalizedLink>
//       </div>
//     </section>
//   );
// }
'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink, Reveal } from '@/components/ui';
import { onImageError, resolveAssetUrl } from '@/lib/format';
import { usePublicServices, type PublicService } from '@/modules/services';

// function serviceShortText(s: PublicService): string {
//   if (s.shortDescription) return s.shortDescription;
//   if (s.description) return s.description;
//   if (s.tags?.length) return s.tags.slice(0, 2).join(' · ');
//   if (s.included?.length) return s.included.slice(0, 2).map((i) => i.title).join(' · ');
//   return '';
// }
function serviceShortText(s: PublicService): string {
  if (s.description) return s.description;
  if (s.tags?.length) return s.tags.slice(0, 2).join(' · ');
  if (s.included?.length) return s.included.slice(0, 2).map((i) => i.title).join(' · ');
  return '';
}
export function CatalogPreview() {
  const { dict, locale } = useI18n();
  const t = dict.home.catalog;
  const { data: services, isLoading } = usePublicServices();

  const list = services ?? [];

  const renderCard = (s: PublicService) => {
    const desc = serviceShortText(s);

    return (
      <article key={s.id} className="group">
        <LocalizedLink href={`/voyageurs/${s.slug}`} className="block">
          <div className="relative  !h-[190px] w-full overflow-hidden bg-black !max-[768px]:h-[220px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resolveAssetUrl(s.coverUrl ?? s.thumbUrl)}
              alt={s.title}
              onError={onImageError}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            />
          </div>
        </LocalizedLink>

        <div className="!pt-[16px]">
          <h3 className="!text-lg font-serif font-medium! font-normal! leading-none text-[#C4A85B]">
            {s.title}
          </h3>

          {desc && (
            <p className="!mt-[8px] line-clamp-1 text-[12px]! leading-[1.4] text-white/65">
              {desc}
            </p>
          )}

          <div className="!mt-[10px] grid grid-cols-2 gap-[8px]">
            <LocalizedLink
              href={`/voyageurs/${s.slug}`}
              className="flex !h-[29px] items-center justify-center border border-[#C4A85B] bg-[#C4A85B] text-xs! font-semibold !text-black transition-colors duration-300 hover:bg-[#d2b96d]"
            >
              {locale === 'en' ? 'Purchase Now' : 'Acheter'}
            </LocalizedLink>

            <LocalizedLink
              href={`/voyageurs/${s.slug}`}
              className="flex !h-[29px] items-center hover:text-white! justify-center border border-[#C4A85B] bg-transparent text-xs! font-semibold !text-[#C4A85B] transition-colors duration-300 hover:bg-[#C4A85B] hover:text-black"
            >
              {locale === 'en' ? 'Add To Cart' : 'Ajouter'}
            </LocalizedLink>
          </div>
        </div>
      </article>
    );
  };

  return (
<section className="relative bg-black !py-[80px] text-white">
  <div className="mx-auto! w-full max-w-[1728px] !px-[96px] max-[1280px]:!px-[56px] max-[768px]:!px-[24px]">
        <div className="!mb-[48px] text-center">
          <div className="!mb-[8px] flex items-center justify-center gap-4">
            <span className="!h-px !w-[130px] bg-[#C4A85B]/50" />
            <span className="text-[9px] font-semibold tracking-[7px] text-[#C4A85B] uppercase">
              {locale === 'en' ? 'For Travelers' : 'Pour les voyageurs'}
            </span>
            <span className="h-px w-[130px] bg-[#C4A85B]/50" />
          </div>

          <h2 className="font-serif text-[42px] font-bold leading-none tracking-[-1px] text-white max-[768px]:text-[32px]">
            {locale === 'en' ? (
              <>
                Our <span className="text-[#C4A85B]">Service Catalogue</span>
              </>
            ) : (
              <>
                Notre <span className="text-[#C4A85B]">Catalogue de Services</span>
              </>
            )}
          </h2>

          <p className="mt-[18px] font-serif text-[14px] italic text-white/70">
            {locale === 'en'
              ? 'Tailor-made, authentic and unforgettable experiences in Marrakech.'
              : 'Des expériences sur mesure, authentiques et inoubliables à Marrakech.'}
          </p>
        </div>

        {isLoading ? (
          <p className="text-center text-sm text-white/60">
            {locale === 'en' ? 'Loading…' : 'Chargement…'}
          </p>
        ) : list.length === 0 ? (
          <p className="text-center text-sm text-white/60">
            {locale === 'en' ? 'No services available yet.' : 'Aucun service disponible.'}
          </p>
        ) : (
          <Reveal>
            <div className="grid grid-cols-4 gap-x-[22px] gap-y-[28px] max-[1100px]:grid-cols-3 max-[768px]:grid-cols-2 max-[520px]:grid-cols-1">
              {list.slice(0, 8).map(renderCard)}
            </div>
          </Reveal>
        )}

        <div className="!mt-[52px] text-center">
          <LocalizedLink
            href="/voyageurs"
            className="inline-flex !h-[42px] items-center justify-center border border-[#C4A85B] !px-8 !text-[11px] font-semibold tracking-[2px] !text-[#C4A85B] hover:text-white! uppercase transition-colors duration-300 hover:bg-[#C4A85B] hover:text-black"
          >
            {t.viewAll}
          </LocalizedLink>
        </div>
      </div>
    </section>
  );
}