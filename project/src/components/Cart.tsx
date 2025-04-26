import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Trash2, MinusCircle, PlusCircle, X, CheckCircle } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const [checkoutComplete, setCheckoutComplete] = useState(false);
  
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const handleCheckout = () => {
    if (cart.length === 0) return;
    
    // Simulate checkout process
    setCheckoutComplete(true);
    setTimeout(() => {
      clearCart();
      setCheckoutComplete(false);
      setIsOpen(false);
    }, 3000);
  };
  
  return (
    <>
      {/* Cart Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed right-5 bottom-5 z-30 bg-[#FF7F50] hover:bg-[#FF6347] text-white p-3 rounded-full shadow-lg transition-all hover:scale-105"
      >
        <ShoppingCart size={24} />
        {totalItems > 0 && (
          <span className="absolute -top-2 -right-2 bg-[#E91E63] text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </button>
      
      {/* Cart Drawer */}
      <div className={`fixed inset-0 z-40 ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)}></div>
        
        <div className="absolute right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-xl flex flex-col">
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="font-bold text-lg flex items-center">
              <ShoppingCart size={20} className="mr-2" />
              Tu Pedido
            </h2>
            <button onClick={() => setIsOpen(false)} className="p-1 rounded-full hover:bg-gray-100">
              <X size={20} className="text-gray-500" />
            </button>
          </div>
          
          {checkoutComplete ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8">
              <div className="bg-green-50 p-6 rounded-full mb-4">
                <CheckCircle size={48} className="text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-2">¡Pedido Completado!</h3>
              <p className="text-center text-gray-600">
                Tu pedido ha sido recibido y será procesado en breve.
              </p>
            </div>
          ) : cart.length > 0 ? (
            <>
              <div className="flex-1 overflow-y-auto p-4">
                {cart.map(item => (
                  <div key={item.id} className="flex border-b border-gray-200 py-4">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-16 h-16 object-cover rounded-md mr-3"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-gray-400 hover:text-[#E91E63]"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="text-[#4CAF50] font-bold mt-1">
                        ${item.price}
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                          >
                            <MinusCircle size={14} />
                          </button>
                          <span className="px-2 text-sm">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="px-2 py-1 text-gray-500 hover:bg-gray-100"
                          >
                            <PlusCircle size={14} />
                          </button>
                        </div>
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-bold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">IVA (19%):</span>
                  <span className="text-gray-600">${(subtotal * 0.19).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-4 text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-[#4CAF50]">${(subtotal * 1.19).toFixed(2)}</span>
                </div>
                
                <button
                  onClick={handleCheckout}
                  className="w-full bg-[#FF7F50] hover:bg-[#FF6347] text-white py-3 rounded-lg font-medium transition-all"
                >
                  Completar Pedido
                </button>
              </div>
            </>
          ) : (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-gray-400">
              <ShoppingCart size={48} className="mb-4" />
              <p className="text-center">Tu carrito está vacío</p>
              <button 
                onClick={() => setIsOpen(false)}
                className="mt-4 text-[#4CAF50] font-medium hover:underline"
              >
                Continuar Comprando
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;