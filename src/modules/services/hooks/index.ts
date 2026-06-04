'use client';

import { useQuery } from '@tanstack/react-query';

import { useI18n } from '@/i18n/provider';
import { publicServicesApi } from '../api';
import type { PublicService } from '../types';

/** Services · hooks (TanStack Query over the admin public catalog, localized). */
export const serviceKeys = {
  all: ['public-services'] as const,
  list: (locale: string) => [...serviceKeys.all, 'list', locale] as const,
  detail: (slug: string, locale: string) =>
    [...serviceKeys.all, 'detail', slug, locale] as const,
};

export function usePublicServices() {
  const { locale } = useI18n();
  return useQuery<PublicService[]>({
    queryKey: serviceKeys.list(locale),
    queryFn: () => publicServicesApi.list(locale),
  });
}

export function usePublicService(slug?: string) {
  const { locale } = useI18n();
  return useQuery<PublicService>({
    queryKey: serviceKeys.detail(slug ?? '', locale),
    queryFn: () => publicServicesApi.getBySlug(slug as string, locale),
    enabled: Boolean(slug),
  });
}
