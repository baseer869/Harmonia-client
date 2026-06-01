import { setRequestLocale } from 'next-intl/server';

import { PageHero } from '@/components/layouts';
import { ServicesCatalog } from '@/modules/services';
import { getDictionary, isLocale, defaultLocale } from '@/i18n';

const HERO_IMG =
  'https://images.unsplash.com/photo-1539650116574-75c0c6d73f6e?w=1600&q=85';

export default async function VoyageursPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const dict = getDictionary(isLocale(locale) ? locale : defaultLocale);
  const t = dict.pages.voyageurs;

  return (
    <>
      <PageHero eyebrow={t.heroEyebrow} title={t.heroTitle} imgSrc={HERO_IMG} />
      <section className="sec" style={{ background: 'var(--dark)' }}>
        <p className="sec-sub" style={{ marginBottom: 56 }}>
          {t.intro}
        </p>
        <ServicesCatalog />
      </section>
    </>
  );
}
