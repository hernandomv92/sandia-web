import React, { useState } from 'react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { PlusCircle } from 'lucide-react';

const categories = [
  { label: 'Todos', value: 'all' },
  { label: 'Snacks', value: 'snacks' },
  { label: 'Gourmet', value: 'gourmet' },
  { label: 'Sanísimo', value: 'sanisimo' },
  { label: 'Típicos Vallunos', value: 'tipicos-vallunos' },
  { label: 'Postres', value: 'postres' },
  { label: 'Bebidas', value: 'bebidas' },
  { label: 'Vegetariano', value: 'vegetariano' },
];

const InteractiveBuilder: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="combina-opciones" className="scroll-mt-24 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Combina Opciones</h2>

        {/* Categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map(cat => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === cat.value ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Productos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="text-gray-600 text-sm mb-2">{product.description}</p>
              <p className="text-green-600 font-bold mb-4">${product.price}</p>
              <button
                onClick={() => addToCart({
                  id: product.id,
                  type: 'product',
                  name: product.name,
                  price: product.price,
                  quantity: 1,
                  image: product.image,
                })}
                className="flex items-center gap-2 bg-[#FF7F50] text-white px-4 py-2 rounded-full hover:bg-[#FF6347]"
              >
                <PlusCircle size={18} />
                Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveBuilder;
