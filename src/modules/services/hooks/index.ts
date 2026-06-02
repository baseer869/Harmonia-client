'use client';

import { useQuery } from '@tanstack/react-query';

import { publicServicesApi } from '../api';
import type { PublicService } from '../types';

/** Services · hooks (TanStack Query over the admin public catalog). */
export const serviceKeys = {
  all: ['public-services'] as const,
  list: () => [...serviceKeys.all, 'list'] as const,
  detail: (slug: string) => [...serviceKeys.all, 'detail', slug] as const,
};

export function usePublicServices() {
  return useQuery<PublicService[]>({
    queryKey: serviceKeys.list(),
    queryFn: () => publicServicesApi.list(),
  });
}

export function usePublicService(slug?: string) {
  return useQuery<PublicService>({
    queryKey: serviceKeys.detail(slug ?? ''),
    queryFn: () => publicServicesApi.getBySlug(slug as string),
    enabled: Boolean(slug),
  });
}
