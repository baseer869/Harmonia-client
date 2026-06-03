'use client';

import { useI18n } from '@/i18n/provider';

import { usePublicService } from '../hooks';
import { ServiceDetail } from './service-detail';

/** Fetches a live service by slug, then renders the detail page in its design. */
export function ServiceDetailLoader({ slug }: { slug: string }) {
  const { locale } = useI18n();
  const { data, isLoading, isError } = usePublicService(slug);

  if (isLoading) {
    return (
      <div
        style={{
          paddingTop: 'var(--nav-h)',
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--black)',
          color: 'var(--text-light)',
        }}
      >
        {locale === 'en' ? 'Loading…' : 'Chargement…'}
      </div>
    );
  }
  if (isError || !data) {
    return (
      <div
        style={{
          paddingTop: 'var(--nav-h)',
          minHeight: '100vh',
          display: 'grid',
          placeItems: 'center',
          background: 'var(--black)',
          color: '#e07a7a',
        }}
      >
        {locale === 'en' ? 'Service not found.' : 'Service introuvable.'}
      </div>
    );
  }

  return <ServiceDetail service={data} />;
}
