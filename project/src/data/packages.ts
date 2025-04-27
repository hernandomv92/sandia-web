import { Package } from './types';
import { products } from './products';

export const packages: Package[] = [
  {
    id: 'pkg-snack-party',
    name: 'Fiesta de Snacks',
    description: 'Perfecto para reuniones informales con una gran variedad de snacks.',
    price: 120,
    image: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092', // Imagen bonita de snacks
    products: [
      products.find(p => p.name === 'Doritos')!,
      products.find(p => p.name === 'Galletas Oreo')!,
      products.find(p => p.name === 'Chocorramo')!,
      products.find(p => p.name === 'Pringles')!,
    ],
    tags: ['snacks', 'fiesta'],
    featured: true,
  },
  {
    id: 'pkg-gourmet-deluxe',
    name: 'Gourmet Deluxe',
    description: 'Una experiencia de sabor con platos elaborados de alta calidad.',
    price: 180,
    image: 'https://images.unsplash.com/photo-1601050690590-0ec77c6f40c3', // Imagen de pasta/lasaña
    products: [
      products.find(p => p.name === 'Pasta')!,
      products.find(p => p.name === 'Lasaña')!,
      products.find(p => p.name === 'Arroz Chino')!,
      products.find(p => p.name === 'Arroz Paisa')!,
    ],
    tags: ['gourmet', 'exclusivo'],
    featured: true,
  },
  {
    id: 'pkg-sano',
    name: 'Sanísimo',
    description: 'Opciones saludables para una alimentación consciente y nutritiva.',
    price: 100,
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994', // Imagen de ensaladas/frutas
    products: [
      products.find(p => p.name === 'Ensalada de Verduras de Atún')!,
      products.find(p => p.name === 'Ensalada de Verduras de Jamón')!,
      products.find(p => p.name === 'Granola')!,
      products.find(p => p.name === 'Frutas')!,
    ],
    tags: ['saludable', 'sanisimo'],
    featured: false,
  },
  {
    id: 'pkg-valluno',
    name: 'Típicos Vallunos',
    description: 'Sabores tradicionales del Valle del Cauca para deleitarte.',
    price: 95,
    image: 'https://images.unsplash.com/photo-1606788075766-9a2e3b6be2fc', // Imagen tipo empanadas o comidas típicas
    products: [
      products.find(p => p.name === 'Empanadas')!,
      products.find(p => p.name === 'Marranitas')!,
      products.find(p => p.name === 'Papa Rellena')!,
      products.find(p => p.name === 'Lulada')!,
    ],
    tags: ['tipico', 'valluno'],
    featured: false,
  },
  {
    id: 'pkg-dulce-final',
    name: 'Dulce Final',
    description: 'Los mejores postres para darle un cierre perfecto a tu comida.',
    price: 85,
    image: 'https://images.unsplash.com/photo-1599785209707-7b3b5c5e8327', // Imagen postres/frutas
    products: [
      products.find(p => p.name === 'Ensalada de Frutas')!,
      products.find(p => p.name === 'Fresas con Crema')!,
      products.find(p => p.name === 'Helados')!,
      products.find(p => p.name === 'Tortas')!,
    ],
    tags: ['postres', 'dulce'],
    featured: true,
  },
  {
    id: 'pkg-bebidas-refrescantes',
    name: 'Bebidas Refrescantes',
    description: 'Una variedad de bebidas para todo tipo de gustos.',
    price: 70,
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90', // Imagen jugos/gaseosas
    products: [
      products.find(p => p.name === 'Jugo 100% Natural')!,
      products.find(p => p.name === 'Jugo en Caja')!,
      products.find(p => p.name === 'Gaseosas')!,
      products.find(p => p.name === 'Bebidas Veganas')!,
    ],
    tags: ['bebidas', 'refrescante'],
    featured: false,
  }
];
