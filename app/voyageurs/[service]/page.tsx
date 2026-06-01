import { notFound } from 'next/navigation';
import { SERVICE_MAP } from '@/data/services';
import ServiceClient from './ServiceClient';

interface PageProps {
  params: Promise<{ service: string }>;
}

export default async function ServicePage({ params }: PageProps) {
  const { service: id } = await params;
  const svc = SERVICE_MAP[id];
  
  if (!svc) {
    notFound();
  }

  return <ServiceClient service={svc} />;
}
