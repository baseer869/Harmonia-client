import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { BookingFlow } from '@/modules/reservations';

const HERO_IMG =
  'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&q=85';

export default async function ReserverPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ service?: string }>;
}) {
  const { locale } = await params;
  const { service } = await searchParams;
  setRequestLocale(locale);

  return (
    <>
      <PageHero
        eyebrow="Conciergerie"
        title="Réserver un service"
        imgSrc={HERO_IMG}
      />
      <section className="sec" style={{ background: 'var(--black)' }}>
        <p className="sec-sub" style={{ marginBottom: 48 }}>
          Sélectionnez une prestation, choisissez vos préférences et envoyez
          votre demande. Notre conciergerie confirme chaque réservation.
        </p>
        <BookingFlow initialSlug={service} />
      </section>
    </>
  );
}
