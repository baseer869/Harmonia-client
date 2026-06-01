/**
 * Category cards shown on the home catalogue preview. The translatable text
 * (name/items/price) lives in the dictionary under `categories`; here we keep
 * the stable, non-translatable bits (id → image).
 */
export interface CategoryCard {
  id: string;
  img: string;
}

export const CATEGORY_CARDS: CategoryCard[] = [
  { id: 'excursions', img: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80' },
  { id: 'bienetre', img: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80' },
  { id: 'transport', img: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=80' },
  { id: 'gastro', img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80' },
  { id: 'activites', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80' },
  { id: 'domicile', img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80' },
  { id: 'shopping', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80' },
  { id: 'evenements', img: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80' },
  { id: 'packs', img: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80' },
  { id: 'cadeaux', img: 'https://images.unsplash.com/photo-1611006174913-c8d9e5d5b1a2?w=600&q=80' },
];
