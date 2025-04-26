import React, { useState } from 'react';
import { Product } from '../data/types';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { PlusCircle, Info, Users, Search, ShoppingCart } from 'lucide-react';

const InteractiveBuilder: React.FC = () => {
  const { addToCart } = useCart();
  const [selectedProducts, setSelectedProducts] = useState<{[key: string]: number}>({});
  const [searchTerm, setSearchTerm] = useState('');
  const [people, setPeople] = useState(10);
  const [showProductInfo, setShowProductInfo] = useState<string | null>(null);
  
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );
  
  const totalPrice = Object.entries(selectedProducts).reduce((sum, [productId, quantity]) => {
    const product = products.find(p => p.id === productId);
    return sum + (product ? product.price * quantity : 0);
  }, 0);
  
  const handleAddProduct = (productId: string) => {
    setSelectedProducts(prev => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1
    }));
  };
  
  const handleRemoveProduct = (productId: string) => {
    setSelectedProducts(prev => {
      const updated = { ...prev };
      if (updated[productId] > 1) {
        updated[productId] -= 1;
      } else {
        delete updated[productId];
      }
      return updated;
    });
  };
  
  const handleCreateOrder = () => {
    if (Object.keys(selectedProducts).length === 0) return;
    
    const selectedItems = Object.entries(selectedProducts).map(([productId, quantity]) => {
      const product = products.find(p => p.id === productId)!;
      return { ...product, quantity };
    });
    
    addToCart({
      id: `interactive-${Date.now()}`,
      type: 'custom',
      name: `Pedido para ${people} personas`,
      price: totalPrice,
      quantity: 1,
      image: selectedItems[0]?.image || '',
      items: selectedItems
    });
    
    // Reset
    setSelectedProducts({});
  };
  
  const getProductById = (id: string) => products.find(p => p.id === id);
  
  return (
    <section id="crea-tu-pedido" className="scroll-mt-24 py-12 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-2 text-center">Crea Tu Pedido</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Selecciona productos de nuestra galería para crear un pedido totalmente personalizado.
        </p>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="relative flex-grow max-w-md">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar productos..."
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-full w-full"
                  />
                </div>
                
                <div className="flex items-center">
                  <Users size={18} className="text-gray-500 mr-2" />
                  <span className="text-sm text-gray-600 mr-2">Personas:</span>
                  <select 
                    value={people}
                    onChange={(e) => setPeople(Number(e.target.value))}
                    className="border border-gray-300 rounded-md p-1"
                  >
                    {[5, 10, 15, 20, 25, 30, 50, 100].map(value => (
                      <option key={value} value={value}>{value}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="relative group overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-105"
                      />
                      <button
                        onClick={() => setShowProductInfo(product.id)}
                        className="absolute top-2 right-2 bg-white rounded-full p-1 shadow-sm text-gray-500 hover:text-gray-700"
                      >
                        <Info size={16} />
                      </button>
                    </div>
                    
                    <div className="p-3">
                      <h4 className="text-sm font-medium line-clamp-1">{product.name}</h4>
                      <div className="flex items-center justify-between mt-2">
                        <span className="font-bold text-[#4CAF50]">${product.price}</span>
                        <div className="flex items-center">
                          {selectedProducts[product.id] && (
                            <>
                              <button 
                                onClick={() => handleRemoveProduct(product.id)}
                                className="text-gray-500 hover:text-gray-700"
                              >
                                -
                              </button>
                              <span className="mx-2 text-sm font-medium">
                                {selectedProducts[product.id]}
                              </span>
                            </>
                          )}
                          <button 
                            onClick={() => handleAddProduct(product.id)}
                            className="text-[#FF7F50] hover:text-[#FF6347]"
                          >
                            <PlusCircle size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    {showProductInfo === product.id && (
                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50">
                        <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
                          <button 
                            onClick={() => setShowProductInfo(null)}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
                          >
                            ✕
                          </button>
                          
                          <div className="flex flex-col sm:flex-row gap-4">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full sm:w-1/3 h-32 object-cover rounded-lg"
                            />
                            <div>
                              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                              <p className="text-gray-600 mb-3">{product.description}</p>
                              <div className="flex flex-wrap gap-2 mb-3">
                                {product.tags.map(tag => (
                                  <span key={tag} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                              <p className="text-lg font-bold text-[#4CAF50]">${product.price}</p>
                            </div>
                          </div>
                          
                          <div className="mt-4 flex justify-end">
                            <button
                              onClick={() => {
                                handleAddProduct(product.id);
                                setShowProductInfo(null);
                              }}
                              className="bg-[#FF7F50] hover:bg-[#FF6347] text-white py-2 px-6 rounded-full"
                            >
                              Agregar
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-md p-5 sticky top-20">
              <h3 className="font-bold text-lg mb-4">Resumen del Pedido</h3>
              
              <div className="mb-1 flex justify-between items-center">
                <span className="text-gray-700">Para {people} personas</span>
                <span className="text-sm text-gray-500">${(totalPrice / people).toFixed(2)} por persona</span>
              </div>
              
              {Object.keys(selectedProducts).length > 0 ? (
                <div className="my-4 max-h-96 overflow-auto">
                  {Object.entries(selectedProducts).map(([productId, quantity]) => {
                    const product = getProductById(productId);
                    if (!product) return null;
                    
                    return (
                      <div key={productId} className="flex items-center justify-between py-3 border-b border-gray-200">
                        <div className="flex items-center">
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="w-16 h-16 object-cover rounded-md mr-3"
                          />
                          <div>
                            <p className="font-medium">{product.name}</p>
                            <div className="flex items-center mt-1">
                              <button 
                                onClick={() => handleRemoveProduct(productId)}
                                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-gray-500"
                              >
                                -
                              </button>
                              <span className="mx-3 text-sm">{quantity}</span>
                              <button 
                                onClick={() => handleAddProduct(productId)}
                                className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 text-[#4CAF50]"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-bold">${product.price * quantity}</p>
                          <p className="text-xs text-gray-500">(${product.price} x {quantity})</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <ShoppingCart className="mx-auto mb-3" size={32} />
                  <p>Selecciona productos para<br />crear tu pedido personalizado</p>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">Subtotal:</span>
                  <span className="font-bold">${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">IVA (16%):</span>
                  <span className="text-sm text-gray-600">${(totalPrice * 0.16).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-bold text-lg border-t border-gray-200 pt-2">
                  <span>Total:</span>
                  <span className="text-[#4CAF50]">${(totalPrice * 1.16).toFixed(2)}</span>
                </div>
              </div>
              
              <button
                onClick={handleCreateOrder}
                disabled={Object.keys(selectedProducts).length === 0}
                className={`w-full py-3 rounded-lg flex items-center justify-center font-medium ${
                  Object.keys(selectedProducts).length === 0
                    ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    : 'bg-[#FF7F50] text-white hover:bg-[#FF6347] transform transition-transform hover:scale-[1.02]'
                }`}
              >
                <ShoppingCart size={18} className="mr-2" />
                Finalizar Pedido
              </button>
              
              <p className="text-xs text-gray-500 text-center mt-3">
                Se aplicará un descuento de 5% para pedidos de más de 30 personas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveBuilder;