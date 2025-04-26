import { Product } from './types';

export const products: Product[] = [
  // Snacks
  {
    id: 'snack-1',
    name: 'Mix de Frutos Secos',
    description: 'Mezcla de almendras, nueces, castañas y arándanos deshidratados',
    price: 25,
    image: 'https://images.pexels.com/photos/6558799/pexels-photo-6558799.jpeg',
    category: 'snack',
    tags: ['sin-azucar', 'vegano', 'proteina']
  },
  {
    id: 'snack-2',
    name: 'Barras de Granola',
    description: 'Barra de avena con miel y frutos secos',
    price: 18,
    image: 'https://images.pexels.com/photos/5875049/pexels-photo-5875049.jpeg',
    category: 'snack',
    tags: ['vegano', 'energetico']
  },
  {
    id: 'snack-3',
    name: 'Chips de Vegetales',
    description: 'Chips horneados de zanahoria, remolacha y papa dulce',
    price: 22,
    image: 'https://images.pexels.com/photos/8171244/pexels-photo-8171244.jpeg',
    category: 'snack',
    tags: ['sin-gluten', 'vegano', 'horneado']
  },
  {
    id: 'snack-4',
    name: 'Yogurt Griego',
    description: 'Yogurt griego con granola y frutos rojos',
    price: 28,
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg',
    category: 'snack',
    tags: ['proteina', 'probiotico']
  },
  {
    id: 'snack-5',
    name: 'Hummus con Bastones',
    description: 'Hummus tradicional con bastones de apio y zanahoria',
    price: 30,
    image: 'https://images.pexels.com/photos/1618898/pexels-photo-1618898.jpeg',
    category: 'snack',
    tags: ['vegano', 'proteina', 'sin-gluten']
  },
  {
    id: 'snack-6',
    name: 'Galletas de Avena',
    description: 'Galletas caseras de avena y canela',
    price: 15,
    image: 'https://images.pexels.com/photos/230325/pexels-photo-230325.jpeg',
    category: 'snack',
    tags: ['horneado', 'energetico']
  },
  
  // Fruits
  {
    id: 'fruit-1',
    name: 'Mix de Frutas',
    description: 'Selección de frutas de temporada cortadas',
    price: 35,
    image: 'https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg',
    category: 'fruit',
    tags: ['fresco', 'sin-azucar', 'vitaminas']
  },
  {
    id: 'fruit-2',
    name: 'Brochetas de Frutas',
    description: 'Brochetas de frutas variadas',
    price: 38,
    image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
    category: 'fruit',
    tags: ['fresco', 'vitaminas', 'premium']
  },
  {
    id: 'fruit-3',
    name: 'Manzanas',
    description: 'Manzanas frescas enteras',
    price: 12,
    image: 'https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg',
    category: 'fruit',
    tags: ['fresco', 'sin-azucar', 'clasico']
  },
  {
    id: 'fruit-4',
    name: 'Plátanos',
    description: 'Plátanos enteros',
    price: 10,
    image: 'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg',
    category: 'fruit',
    tags: ['energetico', 'potasio', 'clasico']
  },
  
  // Drinks
  {
    id: 'drink-1',
    name: 'Agua de Frutas',
    description: 'Agua infusionada con frutas naturales',
    price: 20,
    image: 'https://images.pexels.com/photos/616840/pexels-photo-616840.jpeg',
    category: 'drink',
    tags: ['sin-azucar', 'refrescante', 'hidratante']
  },
  {
    id: 'drink-2',
    name: 'Jugo Verde',
    description: 'Jugo de espinaca, apio, manzana y jengibre',
    price: 32,
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
    category: 'drink',
    tags: ['detox', 'vitaminas', 'energetico']
  },
  {
    id: 'drink-3',
    name: 'Agua Mineral',
    description: 'Botella individual de agua mineral',
    price: 15,
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg',
    category: 'drink',
    tags: ['hidratante', 'sin-azucar', 'clasico']
  },
  {
    id: 'drink-4',
    name: 'Smoothie de Frutas',
    description: 'Smoothie de fresa, plátano y naranja',
    price: 35,
    image: 'https://images.pexels.com/photos/775032/pexels-photo-775032.jpeg',
    category: 'drink',
    tags: ['energetico', 'vitaminas', 'premium']
  },
  
  // Protein
  {
    id: 'protein-1',
    name: 'Huevos Cocidos',
    description: 'Huevos cocidos pelados',
    price: 18,
    image: 'https://images.pexels.com/photos/806457/pexels-photo-806457.jpeg',
    category: 'protein',
    tags: ['proteina', 'keto', 'sin-carbohidratos']
  },
  {
    id: 'protein-2',
    name: 'Edamame',
    description: 'Edamame con sal marina',
    price: 25,
    image: 'https://images.pexels.com/photos/3645126/pexels-photo-3645126.jpeg',
    category: 'protein',
    tags: ['vegano', 'proteina', 'sin-gluten']
  },
];