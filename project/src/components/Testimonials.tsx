import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials: React.FC = () => {
  const clients = [
    {
      logo: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg',
      name: 'TechFlow',
    },
    {
      logo: 'https://images.pexels.com/photos/373076/pexels-photo-373076.jpeg',
      name: 'Creativa Inc.',
    },
    {
      logo: 'https://images.pexels.com/photos/266047/pexels-photo-266047.jpeg',
      name: 'Finanzas Pro',
    },
    {
      logo: 'https://images.pexels.com/photos/9020117/pexels-photo-9020117.jpeg',
      name: 'Consultoría Global',
    },
    {
      logo: 'https://images.pexels.com/photos/6970070/pexels-photo-6970070.jpeg',
      name: 'Marketing Solutions',
    },
  ];

  const testimonials = [
    {
      quote: "Los refrigerios de Sandía han transformado nuestras reuniones de trabajo. ¡Nuestro equipo adora la calidad y variedad!",
      author: "María González",
      position: "Gerente de RRHH",
      company: "TechFlow"
    },
    {
      quote: "Un servicio impecable. La facilidad para personalizar nuestros pedidos y la puntualidad en la entrega han sido excepcionales.",
      author: "Carlos Ramírez",
      position: "Director Ejecutivo",
      company: "Creativa Inc."
    },
    {
      quote: "Sandía ofrece la mejor opción saludable para nuestros eventos. Servicio rápido y siempre frescos.",
      author: "Ana Torres",
      position: "Coordinadora de Eventos",
      company: "Marketing Solutions"
    },
    {
      quote: "Excelente variedad de opciones, nuestros empleados lo aprecian mucho en cada reunión.",
      author: "Luis Fernández",
      position: "Director de Operaciones",
      company: "Finanzas Pro"
    },
    {
      quote: "Calidad, presentación y sabor impecables. Altamente recomendados.",
      author: "Paola Mejía",
      position: "Asistente Ejecutiva",
      company: "Consultoría Global"
    },
    {
      quote: "Desde que trabajamos con Sandía, nuestras pausas activas han mejorado muchísimo.",
      author: "Roberto Díaz",
      position: "Jefe de Recursos Humanos",
      company: "TechFlow"
    },
    {
      quote: "Rápidos, flexibles y atentos a nuestras necesidades de última hora. ¡Gran aliado!",
      author: "Camila Herrera",
      position: "Gerente de Administración",
      company: "Creativa Inc."
    },
  ];

  return (
    <section className="bg-[#F5F5F5] py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Empresas que confían en nosotros</h2>

        {/* Logos de empresas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex justify-center">
              <img 
                src={client.logo} 
                alt={client.name}
                className="h-16 w-auto transition duration-300"
              />
            </div>
          ))}
        </div>

        {/* Carrusel de testimonios */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
                <div className="text-5xl text-[#E91E63] mb-6 leading-none">“</div>
                <p className="text-gray-700 mb-8">{testimonial.quote}</p>
                <div className="flex items-center">
                  <div className="w-14 h-14 bg-[#4CAF50] rounded-full flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
