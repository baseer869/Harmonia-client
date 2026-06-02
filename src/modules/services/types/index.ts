/**
 * Services · domain types.
 *
 * NOTE: this static dataset is the TEMPORARY catalog source. It will be
 * replaced by data fetched from the admin's /api/public/services. Deep body
 * content is French for now; the bilingual catalog-level labels come from the
 * i18n dictionary (`categories`).
 */
export interface ReviewItem {
  a: string; // author
  d: string; // date
  s: number; // stars
  t: string; // text
}

/* ------------------------------------------------------------------ *
 * Live catalog (admin public API). These are the REAL bookable services
 * returned by `/api/public/services`. The static `ServiceData` below is the
 * legacy design dataset and is unrelated to booking.
 * ------------------------------------------------------------------ */

export type ServiceType = 'EXPERIENCE' | 'TRANSFER' | 'PRODUCT' | 'QUOTE';
export type PriceMode = 'PER_PERSON' | 'PER_TRIP' | 'FIXED' | 'ON_QUOTE';

export interface PublicServiceOption {
  name: string;
  priceDeltaCents: number;
}
export interface PublicServiceExtra {
  name: string;
  priceCents: number;
}
export interface PublicServiceIncluded {
  title: string;
  description: string;
}
export interface PublicServiceInfo {
  label: string;
  value: string;
}

/** A bookable service as returned by the admin public catalog. */
export interface PublicService {
  id: string;
  slug: string;
  type: ServiceType;
  title: string;
  subtitle: string | null;
  description: string | null;
  tags: string[];
  coverUrl: string | null;
  thumbUrl: string | null;
  priceMode: PriceMode;
  priceCents: number;
  currency: string;
  priceUnit: string | null;
  requiresDate: boolean;
  minPeople: number | null;
  maxPeople: number | null;
  durationMinutes: number | null;
  languages: string[];
  featured: boolean;
  included: PublicServiceIncluded[];
  info: PublicServiceInfo[];
  options: PublicServiceOption[];
  extras: PublicServiceExtra[];
}

export interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  img: string;
  thumb: string;
  price: string;
  priceNum: number;
  rating: string;
  reviews: string;
  cat: string;
  desc: string;
  tags: string[];
  included: [string, string][];
  info: [string, string][];
  options: string[];
  extras: [string, string][];
  reviewsList: ReviewItem[];
}
