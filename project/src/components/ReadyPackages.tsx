import React from 'react';
import { packages } from '../data/packages';
import { useCart } from '../context/CartContext';
import { Package } from '../data/types';
import { PlusCircle, Check } from 'lucide-react';

const ReadyPackages: React.FC = () => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (pkg: Package) => {
    addToCart({
      id: pkg.id,
      type: 'package',
      name: pkg.name,
      price: pkg.price,
      quantity: 1,
      image: pkg.image,
      items: pkg.products
    });
  };

  return (
    <section id="paquetes-listos" className="scroll-mt-24 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Paquetes Listos</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Selecciones cuidadosamente preparadas para satisfacer diferentes necesidades y preferencias.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Imagen */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {pkg.featured && (
                  <div className="absolute top-0 right-0 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    Destacado
                  </div>
                )}
              </div>

              {/* Contenido */}
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-gray-600 mb-3 text-sm">{pkg.description}</p>

                {/* Productos incluidos */}
                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-1">Incluye:</p>
                  <ul className="text-sm text-gray-700">
                    {pkg.products.map((product) => (
                      <li key={product.id} className="flex items-start mb-1">
                        <span className="mr-1 text-green-500">•</span>
                        {product.name}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Precio y botón */}
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">${pkg.price}</span>
                  <button
                    onClick={() => handleAddToCart(pkg)}
                    disabled={isInCart(pkg.id)}
                    className={`flex items-center justify-center px-4 py-2 rounded-full ${
                      isInCart(pkg.id)
                        ? 'bg-gray-100 text-gray-500 cursor-not-allowed'
                        : 'bg-[#FF7F50] text-white hover:bg-[#FF6347]'
                    } transition-colors`}
                  >
                    {isInCart(pkg.id) ? (
                      <>
                        <Check size={18} className="mr-1" />
                        Agregado
                      </>
                    ) : (
                      <>
                        <PlusCircle size={18} className="mr-1" />
                        Agregar
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReadyPackages;
