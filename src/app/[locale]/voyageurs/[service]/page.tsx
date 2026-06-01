import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

import { ServiceDetail, SERVICE_MAP } from '@/modules/services';

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; service: string }>;
}) {
  const { locale, service } = await params;
  setRequestLocale(locale);

  const svc = SERVICE_MAP[service];
  if (!svc) notFound();

  return <ServiceDetail svc={svc} id={service} />;
}
