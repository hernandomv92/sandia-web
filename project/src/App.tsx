import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ReadyPackages from './components/ReadyPackages';
import InteractiveBuilder from './components/InteractiveBuilder';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-neutral-50 text-gray-800 font-sans">
        <Header />
        <Hero />

        <div className="relative">
          <ReadyPackages />
          <InteractiveBuilder /> {/* 👈 solo este builder */}
          <Cart />
        </div>

        <Testimonials />
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
