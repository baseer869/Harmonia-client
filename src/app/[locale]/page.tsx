import { setRequestLocale } from 'next-intl/server';

import {
  HeroSection,
  OwnersPreview,
  CatalogPreview,
  InvestPreview,
  TeamSection,
  ContactSection,
} from '@/components/sections';

/** Home page — composed from modular, bilingual section components. */
export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <OwnersPreview />
      <CatalogPreview />
      <InvestPreview />
      <TeamSection />
      <ContactSection />
    </>
  );
}
