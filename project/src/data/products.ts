import { Product } from './types';

export const products: Product[] = [
  // Snacks
  {
    id: 'snack-1',
    name: 'Doritos',
    description: 'Crujientes nachos de maíz con sabor a queso.',
    price: 8000,
    image: 'https://images.pexels.com/photos/1126357/pexels-photo-1126357.jpeg',
    category: 'snacks',
    tags: ['empacado', 'clasico']
  },
  {
    id: 'snack-2',
    name: 'Galletas Oreo',
    description: 'Galletas de chocolate rellenas de crema de vainilla.',
    price: 6000,
    image: 'https://images.pexels.com/photos/192475/pexels-photo-192475.jpeg',
    category: 'snacks',
    tags: ['empacado', 'dulce']
  },
  {
    id: 'snack-3',
    name: 'Chocorramo',
    description: 'Bizcocho cubierto de chocolate, típico colombiano.',
    price: 7000,
    image: 'https://images.pexels.com/photos/1028714/pexels-photo-1028714.jpeg',
    category: 'snacks',
    tags: ['empacado', 'clasico']
  },
  {
    id: 'snack-4',
    name: 'Pringles',
    description: 'Papas fritas en tubo, variedad de sabores.',
    price: 9000,
    image: 'https://images.pexels.com/photos/3756523/pexels-photo-3756523.jpeg',
    category: 'snacks',
    tags: ['empacado', 'snack']
  },

  // Gourmet
  {
    id: 'gourmet-1',
    name: 'Pasta',
    description: 'Pasta italiana al dente con salsa de tomate.',
    price: 18000,
    image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg',
    category: 'gourmet',
    tags: ['plato-principal', 'gourmet']
  },
  {
    id: 'gourmet-2',
    name: 'Lasaña',
    description: 'Lasaña de carne y queso gratinado.',
    price: 22000,
    image: 'https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg',
    category: 'gourmet',
    tags: ['plato-principal', 'horneado']
  },
  {
    id: 'gourmet-3',
    name: 'Arroz Chino',
    description: 'Arroz salteado al wok con verduras y pollo.',
    price: 20000,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
    category: 'gourmet',
    tags: ['plato-principal', 'gourmet']
  },
  {
    id: 'gourmet-4',
    name: 'Arroz Paisa',
    description: 'Arroz típico colombiano con chicharrón y plátano maduro.',
    price: 21000,
    image: 'https://images.pexels.com/photos/1234535/pexels-photo-1234535.jpeg',
    category: 'gourmet',
    tags: ['plato-tipico', 'colombiano']
  },

  // Sanísimo
  {
    id: 'sanisimo-1',
    name: 'Ensalada de Verduras de Atún',
    description: 'Mezcla fresca de verduras con atún en agua.',
    price: 16000,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    category: 'sanisimo',
    tags: ['saludable', 'proteina']
  },
  {
    id: 'sanisimo-2',
    name: 'Ensalada de Verduras de Jamón',
    description: 'Verduras frescas con trozos de jamón de pavo.',
    price: 15000,
    image: 'https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg',
    category: 'sanisimo',
    tags: ['saludable', 'bajo-en-grasa']
  },
  {
    id: 'sanisimo-3',
    name: 'Ensalada de Verduras de Pollo',
    description: 'Ensalada fresca con trozos de pollo grillado.',
    price: 17000,
    image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg',
    category: 'sanisimo',
    tags: ['proteina', 'saludable']
  },
  {
    id: 'sanisimo-4',
    name: 'Ensalada de Verduras de Salami',
    description: 'Verduras mixtas con finas lonjas de salami.',
    price: 16000,
    image: 'https://images.pexels.com/photos/1435907/pexels-photo-1435907.jpeg',
    category: 'sanisimo',
    tags: ['saludable', 'premium']
  },
  {
    id: 'sanisimo-5',
    name: 'Frutas',
    description: 'Selección fresca de frutas tropicales.',
    price: 10000,
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    category: 'sanisimo',
    tags: ['natural', 'vitaminas']
  },
  {
    id: 'sanisimo-6',
    name: 'Granola',
    description: 'Granola artesanal con avena, miel y frutos secos.',
    price: 12000,
    image: 'https://images.pexels.com/photos/5847980/pexels-photo-5847980.jpeg',
    category: 'sanisimo',
    tags: ['energia', 'saludable']
  },
  {
    id: 'sanisimo-7',
    name: 'Cereales',
    description: 'Mix de cereales saludables para el desayuno.',
    price: 11000,
    image: 'https://images.pexels.com/photos/257816/pexels-photo-257816.jpeg',
    category: 'sanisimo',
    tags: ['energia', 'desayuno']
  },

  // Típicos Vallunos
  {
    id: 'tipicos-1',
    name: 'Empanadas',
    description: 'Empanadas tradicionales colombianas de carne y papa.',
    price: 9000,
    image: 'https://images.pexels.com/photos/1132279/pexels-photo-1132279.jpeg',
    category: 'tipicos-vallunos',
    tags: ['tipico', 'colombiano']
  },
  {
    id: 'tipicos-2',
    name: 'Marranitas',
    description: 'Marranitas vallunas rellenas de chicharrón.',
    price: 10000,
    image: 'https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg',
    category: 'tipicos-vallunos',
    tags: ['colombiano', 'tradicional']
  },
  {
    id: 'tipicos-3',
    name: 'Papa Rellena',
    description: 'Papa rellena con carne molida y arroz.',
    price: 9500,
    image: 'https://images.pexels.com/photos/1660412/pexels-photo-1660412.jpeg',
    category: 'tipicos-vallunos',
    tags: ['tipico', 'frito']
  },
  {
    id: 'tipicos-4',
    name: 'Aborrajados',
    description: 'Plátano maduro relleno de queso y frito.',
    price: 9500,
    image: 'https://images.pexels.com/photos/7045698/pexels-photo-7045698.jpeg',
    category: 'tipicos-vallunos',
    tags: ['postre', 'colombiano']
  },
  {
    id: 'tipicos-5',
    name: 'Lulada',
    description: 'Bebida refrescante típica del Valle del Cauca.',
    price: 8000,
    image: 'https://images.pexels.com/photos/614431/pexels-photo-614431.jpeg',
    category: 'tipicos-vallunos',
    tags: ['bebida', 'tipica']
  },
  {
    id: 'tipicos-6',
    name: 'Salpicón',
    description: 'Ensalada líquida de frutas tropicales.',
    price: 9000,
    image: 'https://images.pexels.com/photos/4197491/pexels-photo-4197491.jpeg',
    category: 'tipicos-vallunos',
    tags: ['bebida', 'frutas']
  },

  // Postres
  {
    id: 'postres-1',
    name: 'Ensalada de Frutas',
    description: 'Mix de frutas frescas servido como postre.',
    price: 10000,
    image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
    category: 'postres',
    tags: ['postre', 'saludable']
  },
  {
    id: 'postres-2',
    name: 'Fresas con Crema',
    description: 'Fresas frescas bañadas en crema dulce.',
    price: 12000,
    image: 'https://images.pexels.com/photos/1657765/pexels-photo-1657765.jpeg',
    category: 'postres',
    tags: ['postre', 'dulce']
  },
  {
    id: 'postres-3',
    name: 'Helados',
    description: 'Helados artesanales de diversos sabores.',
    price: 9000,
    image: 'https://images.pexels.com/photos/461430/pexels-photo-461430.jpeg',
    category: 'postres',
    tags: ['postre', 'frio']
  },
  {
    id: 'postres-4',
    name: 'Tortas',
    description: 'Porciones individuales de torta esponjosa.',
    price: 12000,
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg',
    category: 'postres',
    tags: ['postre', 'dulce']
  },

  // Bebidas
  {
    id: 'bebidas-1',
    name: 'Jugo 100% Natural',
    description: 'Jugo natural sin conservantes ni azúcares añadidos.',
    price: 8000,
    image: 'https://images.pexels.com/photos/1458692/pexels-photo-1458692.jpeg',
    category: 'bebidas',
    tags: ['jugos', 'natural']
  },
  {
    id: 'bebidas-2',
    name: 'Jugo en Caja',
    description: 'Jugo en empaque práctico para llevar.',
    price: 5000,
    image: 'https://images.pexels.com/photos/1441116/pexels-photo-1441116.jpeg',
    category: 'bebidas',
    tags: ['jugos', 'empaque']
  },
  {
    id: 'bebidas-3',
    name: 'Gaseosas',
    description: 'Bebidas gaseosas frías y refrescantes.',
    price: 6000,
    image: 'https://images.pexels.com/photos/34514/pexels-photo.jpg',
    category: 'bebidas',
    tags: ['refresco', 'clasico']
  },
  {
    id: 'bebidas-4',
    name: 'Bebidas Veganas',
    description: 'Alternativas vegetales como leche de almendra o avena.',
    price: 9000,
    image: 'https://images.pexels.com/photos/5945811/pexels-photo-5945811.jpeg',
    category: 'bebidas',
    tags: ['vegano', 'natural']
  },

  // Vegetariano
  {
    id: 'vegetariano-1',
    name: 'Sándwich Vegetariano',
    description: 'Sándwich de vegetales frescos y queso vegano.',
    price: 14000,
    image: 'https://images.pexels.com/photos/1640778/pexels-photo-1640778.jpeg',
    category: 'vegetariano',
    tags: ['sin-carne', 'natural']
  },
  {
    id: 'vegetariano-2',
    name: 'Ensalada de Verduras',
    description: 'Variedad de verduras frescas y aderezo ligero.',
    price: 13000,
    image: 'https://images.pexels.com/photos/406152/pexels-photo-406152.jpeg',
    category: 'vegetariano',
    tags: ['sin-carne', 'saludable']
  },
  {
    id: 'vegetariano-3',
    name: 'Ensalada de Frutas',
    description: 'Mix fresco de frutas tropicales.',
    price: 11000,
    image: 'https://images.pexels.com/photos/5946081/pexels-photo-5946081.jpeg',
    category: 'vegetariano',
    tags: ['natural', 'dulce']
  },
];
