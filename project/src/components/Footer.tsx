import React from 'react';
import { GlassWaterIcon as Watermelon, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#4CAF50] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Watermelon className="h-8 w-8 text-white" />
              <span className="ml-2 text-xl font-bold">Sandía</span>
            </div>
            <p className="text-gray-100 mb-4">
              Lo más sano para tu día. Refrigerios saludables para empresas y eventos corporativos.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-100">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-100">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-100">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-white">Paquetes Corporativos</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white">Eventos Especiales</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white">Refrigerios Personalizados</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white">Entregas Express</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Información</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-100 hover:text-white">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white">FAQ</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="text-gray-100 hover:text-white">Términos y Condiciones</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 flex-shrink-0" />
                <span>Loma de la Cruz, Cra. 16 #3-58, Los Libertadores, Cali, Valle del Cauca</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 flex-shrink-0" />
                <span>+57 311 8514141</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 flex-shrink-0" />
                <span>info@sandia.mx</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-10 pt-6 text-center">
          <p className="text-gray-100">&copy; {new Date().getFullYear()} Sandía. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;