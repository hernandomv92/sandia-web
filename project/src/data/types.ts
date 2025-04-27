export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 
    | 'snacks'
    | 'gourmet'
    | 'sanisimo'
    | 'tipicos-vallunos'
    | 'postres'
    | 'bebidas'
    | 'vegetariano';
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
  type: 'package' | 'product'; // <<< ESTA línea es la clave que no estaba antes
  name: string;
  price: number;
  quantity: number;
  image: string;
  items?: Product[];
}
