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
