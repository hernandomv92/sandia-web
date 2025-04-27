// src/components/CustomBuilder.tsx
import React, { useState } from 'react';
import { Product } from '../data/types';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { PlusCircle, MinusCircle, ShoppingCart } from 'lucide-react';

const CustomBuilder: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProducts, setSelectedProducts] = useState<{ [key: string]: { product: Product; quantity: number } }>({});
  const [customName, setCustomName] = useState('Paquete Personalizado');
  const [people, setPeople] = useState(10);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'snacks', name: 'Snacks' },
    { id: 'frutas', name: 'Frutas' },
    { id: 'bebidas', name: 'Bebidas' },
    { id: 'proteina', name: 'Proteína' },
  ];

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category.toLowerCase() === activeCategory);

  const totalPrice = Object.values(selectedProducts).reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

  const handleAddProduct = (product: Product) => {
    setSelectedProducts(prev => {
      const existing = prev[product.id];
      return {
        ...prev,
        [product.id]: {
          product,
          quantity: existing ? existing.quantity + 1 : 1,
        },
      };
    });
  };

  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(prev => {
      const existing = prev[productId];
      if (!existing || existing.quantity <= 1) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [productId]: {
          ...existing,
          quantity: existing.quantity - 1,
        },
      };
    });
  };

  const handleCreatePackage = () => {
    if (Object.keys(selectedProducts).length === 0) return;
    addToCart({
      id: `custom-${Date.now()}`,
      type: 'custom',
      name: customName || 'Paquete Personalizado',
      price: totalPrice,
      quantity: 1,
      image: Object.values(selectedProducts)[0]?.product.image || '',
      items: Object.values(selectedProducts).map(item => ({
        ...item.product,
        quantity: item.quantity,
      })),
    });

    setSelectedProducts({});
    setCustomName('Paquete Personalizado');
  };

  return (
    <section id="crea-tu-pedido" className="scroll-mt-24 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Crea Tu Pedido</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Arma un paquete personalizado seleccionando los productos que más te gusten.
        </p>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sección de productos */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-medium">Número de personas</h3>
                <div className="flex items-center">
                  <button onClick={() => setPeople(Math.max(1, people - 1))} className="p-1 rounded-full hover:bg-gray-100">
                    <MinusCircle size={20} />
                  </button>
                  <span className="mx-3">{people}</span>
                  <button onClick={() => setPeople(people + 1)} className="p-1 rounded-full hover:bg-gray-100">
                    <PlusCircle size={20} />
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-500">Recomendamos 2-3 productos por persona.</p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <div className="flex overflow-x-auto pb-2 mb-4">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-4 py-2 mr-2 rounded-full ${
                      activeCategory === cat.id ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map(product => (
                  <div key={product.id} className="border p-4 rounded-lg flex flex-col items-center text-center">
                    <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded-md mb-2" />
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-xs text-gray-500 mb-2">{product.description}</p>
                    <span className="font-bold text-green-600 mb-2">${product.price}</span>
                    <div className="flex items-center gap-2">
                      {selectedProducts[product.id] && (
                        <>
                          <button onClick={() => handleRemoveProduct(product.id)} className="p-1 hover:bg-gray-100 rounded-full">
                            <MinusCircle size={16} />
                          </button>
                          <span className="text-sm">{selectedProducts[product.id].quantity}</span>
                        </>
                      )}
                      <button onClick={() => handleAddProduct(product)} className="p-1 hover:bg-gray-100 rounded-full">
                        <PlusCircle size={16} className="text-[#FF7F50]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sección resumen */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-20">
              <h3 className="font-bold text-lg mb-4">Tu Selección</h3>
              <input
                type="text"
                value={customName}
                onChange={(e) => setCustomName(e.target.value)}
                className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                placeholder="Nombre del paquete"
              />

              {Object.keys(selectedProducts).length > 0 ? (
                <div className="mb-4 max-h-60 overflow-auto">
                  {Object.values(selectedProducts).map(({ product, quantity }) => (
                    <div key={product.id} className="flex items-center justify-between py-2 border-b">
                      <p className="text-sm">{product.name}</p>
                      <span className="text-sm font-medium">x{quantity}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-center py-12">Tu selección está vacía.</p>
              )}

              <div className="border-t pt-4 mt-4">
                <p className="flex justify-between mb-2 font-semibold">
                  <span>Subtotal:</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </p>
                <p className="flex justify-between text-sm text-gray-500">
                  <span>Para {people} personas</span>
                  <span>${(totalPrice / people).toFixed(2)} por persona</span>
                </p>
              </div>

              <button
                onClick={handleCreatePackage}
                disabled={Object.keys(selectedProducts).length === 0}
                className={`w-full mt-6 py-3 rounded-lg flex items-center justify-center ${
                  Object.keys(selectedProducts).length === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#FF7F50] text-white hover:bg-[#FF6347]'
                }`}
              >
                <ShoppingCart size={18} className="mr-2" />
                Agregar al Pedido
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomBuilder;
