import createMiddleware from 'next-intl/middleware';
import type { NextRequest } from 'next/server';

import { routing } from '@/i18n/routing';

/**
 * Locale routing via next-intl (Next 16 proxy, formerly `middleware`).
 * Handles default-locale detection and the as-needed prefix rule.
 */
const handle = createMiddleware(routing);

export function proxy(request: NextRequest) {
  return handle(request);
}

export const config = {
  // Match everything except Next internals and files with an extension.
  matcher: ['/((?!_next|_vercel|.*\\..*).*)'],
};
