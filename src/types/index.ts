export type CategoryType = 'all' | 'necklaces' | 'earrings' | 'bangles' | 'rings' | 'sets';

export interface Product {
  id: string;
  name: string;
  hindiName?: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: CategoryType;
  categoryLabel: string;
  description: string;
  story: string;
  materials: string[];
  finish: string;
  weight: string;
  dimensions: string;
  care: string[];
  inStock: boolean;
  featured?: boolean;
  badge?: 'Signature Masterpiece' | 'Royal Heirloom' | 'Bestseller' | 'Artisanal Brass' | 'Curated Favourite';
  images: string[];
  modelType: 'choker' | 'jhumka' | 'kada' | 'ring' | 'pendant';
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface CollectionMeta {
  id: CategoryType;
  name: string;
  hindiTitle?: string;
  subtitle: string;
  description: string;
  image: string;
  count: number;
}
