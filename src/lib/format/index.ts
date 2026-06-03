/**
 * Display formatters shared across the catalog, service detail and cart.
 * These are presentation-only — no booking/pricing logic lives here.
 */

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000/api/public';

/** Origin that serves admin-uploaded assets (everything before /api/public). */
const ASSET_BASE = API_URL.replace(/\/api\/public\/?$/, '');

/** Resolve an image URL: absolute URLs pass through; admin `/uploads/…` get the
 *  admin origin; null falls back to a neutral placeholder. */
export function resolveAssetUrl(url: string | null | undefined): string {
  const FALLBACK =
    'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1200&q=80';
  if (!url) return FALLBACK;
  return url.startsWith('http') ? url : `${ASSET_BASE}${url}`;
}

/** Format integer minor units as a localized currency string. */
export function money(cents: number, currency: string, maximumFractionDigits = 0): string {
  try {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency,
      maximumFractionDigits,
    }).format(cents / 100);
  } catch {
    return `${Math.round(cents / 100)} ${currency}`;
  }
}
