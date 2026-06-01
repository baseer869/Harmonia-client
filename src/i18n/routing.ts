import { defineRouting } from 'next-intl/routing';

import { defaultLocale, locales } from './config';

/**
 * next-intl routing.
 * `localePrefix: 'as-needed'` → the default locale (fr) has NO URL prefix
 * (`/`, `/proprietaires`), while other locales are prefixed (`/en`,
 * `/en/proprietaires`). `/fr/...` redirects to the unprefixed path.
 */
export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: 'as-needed',
});
