'use client';

import { useLocale } from 'next-intl';

import { usePathname, useRouter } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';

/** Toggle the active locale, preserving the current (locale-agnostic) path. */
export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="locale-switcher">
      {routing.locales.map((l) => (
        <button
          key={l}
          className={`locale-btn${l === locale ? ' active' : ''}`}
          onClick={() => router.replace(pathname, { locale: l })}
          aria-label={l.toUpperCase()}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
