import React from 'react';
import { GlassWaterIcon as Watermelon } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between mb-4 md:mb-0">
          <div className="flex items-center">
            <Watermelon className="h-10 w-10 text-[#E91E63]" />
            <span className="ml-2 text-2xl font-semibold">
              <span className="text-[#E91E63]">san</span>
              <span className="text-[#4CAF50]">día</span>
            </span>
          </div>
          <div className="md:hidden">
            <button 
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              aria-label="Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        
        <nav className="hidden md:flex">
          <ul className="flex space-x-8">
            <li>
              <a 
                href="#paquetes-listos"
                className="py-2 text-gray-600 hover:text-[#E91E63] transition-colors"
              >
                Paquetes Listos
              </a>
            </li>
            <li>
              <a 
                href="#combina-opciones"
                className="py-2 text-gray-600 hover:text-[#E91E63] transition-colors"
              >
                Combina Opciones
              </a>
            </li>
            <li>
              <a 
                href="#crea-tu-pedido"
                className="py-2 text-gray-600 hover:text-[#E91E63] transition-colors"
              >
                Crea Tu Pedido
              </a>
            </li>
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <a href="#contacto" className="bg-[#FF7F50] hover:bg-[#FF6347] text-white font-medium py-2 px-6 rounded-full transition-all">
            Contacto
          </a>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden border-t border-gray-200">
        <nav className="flex justify-between px-4 py-2">
          <a 
            href="#paquetes-listos"
            className="py-2 px-3 text-sm text-gray-600 hover:text-[#E91E63] transition-colors"
          >
            Paquetes Listos
          </a>
          <a 
            href="#combina-opciones"
            className="py-2 px-3 text-sm text-gray-600 hover:text-[#E91E63] transition-colors"
          >
            Combina Opciones
          </a>
          <a 
            href="#crea-tu-pedido"
            className="py-2 px-3 text-sm text-gray-600 hover:text-[#E91E63] transition-colors"
          >
            Crea Tu Pedido
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
