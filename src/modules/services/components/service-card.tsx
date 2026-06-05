'use client';

import { useI18n } from '@/i18n/provider';
import { LocalizedLink } from '@/components/ui';
import { onImageError, resolveAssetUrl } from '@/lib/format';

import type { PublicService } from '../types';

/** Best short line for a card: description → tags → included items. */
function serviceShortText(s: PublicService): string {
  if (s.description) return s.description;
  if (s.tags?.length) return s.tags.slice(0, 2).join(' · ');
  if (s.included?.length) return s.included.slice(0, 2).map((i) => i.title).join(' · ');
  return '';
}

/**
 * Single catalogue card — the one source of truth used on both the home
 * "Our Service Catalogue" preview and the full /voyageurs catalogue page.
 */
export function ServiceCard({ service: s }: { service: PublicService }) {
  const { locale } = useI18n();
  const desc = serviceShortText(s);

  return (
    <article className="group">
      <LocalizedLink href={`/voyageurs/${s.slug}`} className="block">
        <div className="relative !h-[190px] w-full overflow-hidden bg-black !max-[768px]:h-[220px]">
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
}
