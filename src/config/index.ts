import { QueryClient } from '@tanstack/react-query';

export const siteConfig = {
  name: 'Harmonia',
  tagline: 'Résidence & Conciergerie · Marrakech',
  description:
    'Harmonia Conciergerie — services haut de gamme, gestion locative et expériences sur-mesure à Marrakech.',
} as const;

export function makeQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60 * 1000, refetchOnWindowFocus: false, retry: 1 },
    },
  });
}
