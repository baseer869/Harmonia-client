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
  /** Active services for the current tenant. */
  async list(): Promise<PublicService[]> {
    const page = await api.get<Paginated<PublicService>>('/services');
    return page.items;
  },

  /** A single active service by slug (with options/extras). */
  getBySlug(slug: string): Promise<PublicService> {
    return api.get<PublicService>(`/services/${slug}`);
  },
};
