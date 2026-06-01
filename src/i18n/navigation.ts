import { createNavigation } from 'next-intl/navigation';

import { routing } from './routing';

/**
 * Locale-aware navigation helpers. The exported `Link` automatically applies
 * the active locale with the as-needed prefix rule, so components never build
 * locale paths by hand.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
