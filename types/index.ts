export interface CartItem {
  id: number;
  name: string;
  sub: string;
  price: number;
  qty: number;
  img: string;
}

export interface ReviewItem {
  a: string;
  d: string;
  s: number;
  t: string;
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
