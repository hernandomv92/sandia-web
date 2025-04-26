import { Package } from './types';
import { products } from './products';

export const packages: Package[] = [
  {
    id: 'pkg-energetico',
    name: 'Paquete Energético',
    description: 'Perfecto para reuniones matutinas y sesiones de brainstorming',
    price: 85,
    image: 'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg',
    products: [
      products.find(p => p.id === 'snack-2')!,
      products.find(p => p.id === 'fruit-4')!,
      products.find(p => p.id === 'drink-2')!,
      products.find(p => p.id === 'snack-6')!
    ],
    tags: ['energetico', 'vitaminas'],
    featured: true
  },
  {
    id: 'pkg-vegano',
    name: 'Paquete Vegano',
    description: 'Opciones 100% vegetales, deliciosas y nutritivas',
    price: 95,
    image: 'https://images.pexels.com/photos/7194915/pexels-photo-7194915.jpeg',
    products: [
      products.find(p => p.id === 'snack-3')!,
      products.find(p => p.id === 'snack-5')!,
      products.find(p => p.id === 'fruit-1')!,
      products.find(p => p.id === 'drink-1')!
    ],
    tags: ['vegano', 'sin-gluten'],
    featured: true
  },
  {
    id: 'pkg-premium',
    name: 'Paquete Premium',
    description: 'Nuestra mejor selección para impresionar a clientes y colaboradores',
    price: 120,
    image: 'https://images.pexels.com/photos/6783153/pexels-photo-6783153.jpeg',
    products: [
      products.find(p => p.id === 'snack-1')!,
      products.find(p => p.id === 'fruit-2')!,
      products.find(p => p.id === 'drink-4')!,
      products.find(p => p.id === 'snack-4')!
    ],
    tags: ['premium', 'variado'],
    featured: true
  },
  {
    id: 'pkg-clasico',
    name: 'Paquete Clásico',
    description: 'Refrigerios tradicionales que nunca fallan',
    price: 75,
    image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
    products: [
      products.find(p => p.id === 'fruit-3')!,
      products.find(p => p.id === 'drink-3')!,
      products.find(p => p.id === 'snack-6')!,
      products.find(p => p.id === 'protein-1')!
    ],
    tags: ['clasico', 'economico']
  },
  {
    id: 'pkg-proteico',
    name: 'Paquete Proteico',
    description: 'Alto contenido de proteínas para mantener la energía',
    price: 105,
    image: 'https://images.pexels.com/photos/1927314/pexels-photo-1927314.jpeg',
    products: [
      products.find(p => p.id === 'protein-1')!,
      products.find(p => p.id === 'protein-2')!,
      products.find(p => p.id === 'snack-4')!,
      products.find(p => p.id === 'drink-3')!
    ],
    tags: ['proteina', 'saciante']
  },
  {
    id: 'pkg-detox',
    name: 'Paquete Detox',
    description: 'Limpia y revitaliza con alimentos depurativos',
    price: 110,
    image: 'https://images.pexels.com/photos/3645282/pexels-photo-3645282.jpeg',
    products: [
      products.find(p => p.id === 'drink-2')!,
      products.find(p => p.id === 'fruit-1')!,
      products.find(p => p.id === 'snack-3')!,
      products.find(p => p.id === 'drink-1')!
    ],
    tags: ['detox', 'saludable']
  }
];