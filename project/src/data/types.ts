export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'snack' | 'fruit' | 'drink' | 'protein';
  tags: string[];
}

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  products: Product[];
  tags: string[];
  featured?: boolean;
}

export interface CartItem {
  id: string;
  type: 'package' | 'product' | 'custom';
  name: string;
  price: number;
  quantity: number;
  image: string;
  items?: Product[];
}