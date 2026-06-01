'use client';

import { useState, type ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { makeQueryClient } from '@/config';
import { CartProvider } from '@/modules/cart';

/** Client providers: TanStack Query · Cart. (i18n comes from next-intl.) */
export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(makeQueryClient);

  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>{children}</CartProvider>
    </QueryClientProvider>
  );
}
