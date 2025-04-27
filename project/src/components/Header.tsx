// src/components/Header.tsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { cartItems, toggleCart } = useCart();

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-40">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center">
          <img src="/logo.png" alt="Sandía" className="h-8 mr-2" />
          <span className="text-xl font-bold text-[#FF7F50]">Sandía</span>
        </div>
        <nav className="flex items-center space-x-8">
          <a href="#paquetes-listos" className="text-gray-700 hover:text-[#FF7F50] font-medium">
            Paquetes Listos
          </a>
          <a href="#combina-opciones" className="text-gray-700 hover:text-[#FF7F50] font-medium">
            Combina Opciones
          </a>
          <a href="#crea-tu-pedido" className="text-gray-700 hover:text-[#FF7F50] font-medium">
            Crea Tu Pedido
          </a>
        </nav>
        <button 
          onClick={toggleCart}
          className="relative flex items-center bg-[#FF7F50] text-white px-4 py-2 rounded-full hover:bg-[#FF6347]"
        >
          <ShoppingCart size={20} className="mr-2" />
          <span>Carrito</span>
          {cartItems.length > 0 && (
            <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartItems.length}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
