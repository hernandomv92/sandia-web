import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#F5F5F5] to-[#E8F5E9] overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="text-[#E91E63]">Refrigerios saludables</span>
              <br />
              <span className="text-[#4CAF50]">para tu empresa</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg">
              Ofrecemos opciones frescas, nutritivas y personalizables 
              para eventos corporativos y reuniones de trabajo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#paquetes-listos"
                className="bg-[#FF7F50] hover:bg-[#FF6347] text-white font-medium py-3 px-8 rounded-full transition-all transform hover:scale-105"
              >
                Compra ahora
              </a>
              <a 
                href="#combina-opciones"
                className="bg-white hover:bg-gray-100 text-[#4CAF50] font-medium py-3 px-8 rounded-full border border-[#4CAF50] transition-all"
              >
                Arma tu refrigerio
              </a>
            </div>
          </div>

          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg" 
                alt="Selección de refrigerios saludables" 
                className="rounded-xl shadow-lg max-w-full h-auto"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                <div className="text-sm font-medium text-gray-800">¡Entrega el mismo día!</div>
                <div className="text-xs text-[#4CAF50]">Para pedidos antes de las 10 AM</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;
