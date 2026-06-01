'use client';

import { useLocale, useMessages } from 'next-intl';

import type { Dictionary } from './dictionaries/fr';
import type { Locale } from './config';

/**
 * Compatibility hook over next-intl: returns the active locale and the full
 * typed dictionary, so components keep using `dict.section.key` access.
 */
export function useI18n(): { locale: Locale; dict: Dictionary } {
  return {
    locale: useLocale() as Locale,
    dict: useMessages() as unknown as Dictionary,
  };
}
