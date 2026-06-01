import { fr, type Dictionary } from './dictionaries/fr';
import { en } from './dictionaries/en';
import { defaultLocale, type Locale } from './config';

const DICTIONARIES: Record<Locale, Dictionary> = { fr, en };

/** Server-side dictionary lookup (used by Server Components / layouts). */
export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale] ?? DICTIONARIES[defaultLocale];
}

export type { Dictionary } from './dictionaries/fr';
export * from './config';
