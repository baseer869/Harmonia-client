import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import '../globals.css';

import { Navbar, Footer } from '@/components/layouts';
import { CartDrawer } from '@/modules/cart';
import { routing } from '@/i18n/routing';
import { Providers } from '../providers';

export const metadata: Metadata = {
  title: 'HARMONIA – Résidence & Conciergerie · Marrakech',
  description:
    'Harmonia Conciergerie — services haut de gamme, gestion locative et expériences sur-mesure à Marrakech, Maroc.',
  keywords: 'conciergerie Marrakech, gestion locative Maroc, services luxe Marrakech',

  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Lato:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <Navbar />
            <main>{children}</main>
            <Footer />
            <CartDrawer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
