import { setRequestLocale } from 'next-intl/server';

import { ServiceDetailLoader } from '@/modules/services';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  setRequestLocale(locale);

  // `service` is the live service slug (e.g. "hammam-ritual").
  return <ServiceDetailLoader slug={service} />;
}
