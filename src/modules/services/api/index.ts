import { api } from '@/lib/api';

import type { PublicService } from '../types';

/** A page of results from the admin's paginated list endpoints. */
interface Paginated<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

/**
 * Services · API layer.
 *
 * Reads the live catalog from the admin's public API. The website renders what
 * the admin returns — it owns no catalog data and computes no prices.
 */
export const publicServicesApi = {
  /** Active services for the current tenant, localized to `locale`. */
  async list(locale?: string): Promise<PublicService[]> {
    const qs = locale ? `?locale=${encodeURIComponent(locale)}` : '';
    const page = await api.get<Paginated<PublicService>>(`/services${qs}`);
    return page.items;
  },

  /** A single active service by slug (with options/extras), localized. */
  getBySlug(slug: string, locale?: string): Promise<PublicService> {
    const qs = locale ? `?locale=${encodeURIComponent(locale)}` : '';
    return api.get<PublicService>(`/services/${slug}${qs}`);
  },
};
