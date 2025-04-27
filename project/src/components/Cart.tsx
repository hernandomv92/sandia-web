// src/components/Cart.tsx
import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, X } from 'lucide-react';

const Cart: React.FC = () => {
  const {
    cartItems,
    toggleCart,
    isCartOpen,
    removeFromCart,
    clearCart,
  } = useCart();

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const iva = subtotal * 0.16;
  const total = subtotal + iva;

  const cartRef = useRef<HTMLDivElement>(null);

  // Cerrar el carrito al hacer click fuera
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (cartRef.current && !cartRef.current.contains(event.target as Node)) {
        if (isCartOpen) {
          toggleCart();
        }
      }
    };
    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen, toggleCart]);

  // Función para vaciar y cerrar carrito
  const handleClearCart = () => {
    clearCart();
    toggleCart();
  };

  return (
    <>
      {/* Botón flotante para abrir carrito */}
      <button
        onClick={toggleCart}
        className="fixed bottom-6 right-6 bg-[#FF7F50] text-white p-4 rounded-full shadow-lg hover:bg-[#FF6347] z-50 flex items-center gap-2"
      >
        <ShoppingCart size={24} />
        {cartItems.length > 0 && (
          <span className="bg-white text-[#FF7F50] font-bold rounded-full px-2 text-sm">
            {cartItems.length}
          </span>
        )}
      </button>

      {/* Panel del carrito */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 flex justify-end"
        >
          <div
            ref={cartRef}
            className="bg-white w-80 h-full p-6 shadow-lg overflow-y-auto relative"
          >
            <button
              onClick={toggleCart}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>

            <h2 className="text-2xl font-bold mb-6 mt-8">Tu Selección</h2>

            {cartItems.length === 0 ? (
              <p className="text-gray-500">Tu carrito está vacío.</p>
            ) : (
              <ul className="space-y-4">
                {cartItems.map((item) => (
                  <li key={item.id} className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">${item.price} x {item.quantity}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm"
                    >
                      Eliminar
                    </button>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 border-t pt-4">
              <p className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between">
                <span>IVA (16%):</span>
                <span>${iva.toFixed(2)}</span>
              </p>
              <p className="flex justify-between font-bold text-lg mt-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </p>

              <button
                onClick={handleClearCart}
                className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-2 rounded-md"
              >
                Vaciar carrito
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
