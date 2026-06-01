import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { routing } from './routing';
import { fr } from './dictionaries/fr';
import { en } from './dictionaries/en';
import type { Dictionary } from './dictionaries/fr';

const MESSAGES: Record<string, Dictionary> = { fr, en };

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return { locale, messages: MESSAGES[locale] };
});
