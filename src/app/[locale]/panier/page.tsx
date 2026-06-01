import { setRequestLocale } from 'next-intl/server';

import { CartPage } from '@/modules/cart';

export default async function PanierPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CartPage />;
}
