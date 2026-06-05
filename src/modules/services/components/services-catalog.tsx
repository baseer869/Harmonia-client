// 'use client';

// import { useI18n } from '@/i18n/provider';
// import { LocalizedLink } from '@/components/ui';
// import { onImageError } from '@/lib/format';

// import { usePublicServices } from '../hooks';
// import type { PublicService } from '../types';

// /* Live catalogue — real bookable services from the admin public API. */

// const API_URL =
//   process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api/public';
// const ASSET_BASE = API_URL.replace(/\/api\/public\/?$/, '');

// const FALLBACK_IMG =
//   'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=1200&q=80';

// /** Admin uploads are served from the admin origin; absolute URLs pass through. */
// function resolveImg(url: string | null): string {
//   if (!url) return FALLBACK_IMG;
//   if (url.startsWith('http') || url.startsWith('data:')) return url;
//   return `${ASSET_BASE}${url}`;
// }

// const MODE_SUFFIX: Record<PublicService['priceMode'], string> = {
//   PER_PERSON: '/ pers.',
//   PER_TRIP: '/ trajet',
//   FIXED: '',
//   ON_QUOTE: '',
// };

// function money(cents: number, currency: string): string {
//   try {
//     return new Intl.NumberFormat('fr-FR', {
//       style: 'currency',
//       currency,
//       maximumFractionDigits: 0,
//     }).format(cents / 100);
//   } catch {
//     return `${Math.round(cents / 100)} ${currency}`;
//   }
// }

// function priceLabel(s: PublicService, fromWord: string): string {
//   if (s.priceMode === 'ON_QUOTE') return 'Sur devis';
//   return `${fromWord} ${money(s.priceCents, s.currency)} ${MODE_SUFFIX[s.priceMode]}`.trim();
// }

// /**
//  * Full service catalogue grid (voyageurs page). Renders the live catalogue;
//  * each card deep-links into the booking flow with the service preselected.
//  */
// export function ServicesCatalog() {
//   const { dict, locale } = useI18n();
//   const t = dict.pages.voyageurs;
//   const fromWord = locale === 'en' ? 'From' : 'Dès';
//   const { data: services, isLoading, isError, error } = usePublicServices();

//   if (isLoading) {
//     return (
//       <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
//         {locale === 'en' ? 'Loading catalogue…' : 'Chargement du catalogue…'}
//       </p>
//     );
//   }
//   if (isError) {
//     return (
//       <p style={{ textAlign: 'center', color: '#e07a7a' }}>
//         {(error as Error).message}
//       </p>
//     );
//   }
//   if (!services?.length) {
//     return (
//       <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
//         {locale === 'en'
//           ? 'No services available yet.'
//           : 'Aucun service disponible pour le moment.'}
//       </p>
//     );
//   }

//   return (
//     <div className="cat-grid" style={{ maxWidth: 1400, margin: '0 auto' }}>
//       {services.map((s) => {
//         const items = (s.tags.length ? s.tags : s.included.map((i) => i.title)).slice(0, 3);
//         return (
//           <LocalizedLink
//             key={s.id}
//             href={`/voyageurs/${s.slug}`}
//             className="cat-card"
//           >
//             {/* eslint-disable-next-line @next/next/no-img-element */}
//             <img
//               className="cat-card-img"
//               src={resolveImg(s.coverUrl ?? s.thumbUrl)}
//               alt={s.title}
//               onError={onImageError}
//             />
//             <div className="cat-card-overlay" />
//             <div className="cat-card-body">
//               <div className="cat-card-name">{s.title}</div>
//               {items.length > 0 && (
//                 <ul className="cat-card-items">
//                   {items.map((i) => (
//                     <li key={i}>{i}</li>
//                   ))}
//                 </ul>
//               )}
//               <div className="cat-card-price">{priceLabel(s, fromWord)}</div>
//               <div className="cat-card-btn">{t.bookCta}</div>
//             </div>
//           </LocalizedLink>
//         );
//       })}
//     </div>
//   );
// }
'use client';

import { useI18n } from '@/i18n/provider';

import { usePublicServices } from '../hooks';
import { ServiceCard } from './service-card';

/**
 * Full service catalogue grid (voyageurs page). Uses the exact same ServiceCard
 * as the home "Our Service Catalogue" preview so both stay visually identical.
 */
export function ServicesCatalog() {
  const { locale } = useI18n();
  const { data: services, isLoading, isError, error } = usePublicServices();

  if (isLoading) {
    return (
      <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
        {locale === 'en' ? 'Loading catalogue…' : 'Chargement du catalogue…'}
      </p>
    );
  }

  if (isError) {
    return (
      <p style={{ textAlign: 'center', color: '#e07a7a' }}>
        {(error as Error).message}
      </p>
    );
  }

  if (!services?.length) {
    return (
      <p style={{ textAlign: 'center', color: 'var(--text-light)' }}>
        {locale === 'en'
          ? 'No services available yet.'
          : 'Aucun service disponible pour le moment.'}
      </p>
    );
  }

  return (
    <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-x-[22px] gap-y-[28px]">
      {services.map((s) => (
        <div key={s.id} className="w-[300px] max-w-full">
          <ServiceCard service={s} />
        </div>
      ))}
    </div>
  );
}