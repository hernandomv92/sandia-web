import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const CheckoutForm: React.FC = () => {
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const generateOrderId = () => {
    const timestamp = Date.now();
    return `order-${timestamp}`;
  };

  const generateHash = async (orderId: string, amount: number, currency: string, secretKey: string) => {
    const rawString = `${orderId}${amount}${currency}${secretKey}`;
    const encoder = new TextEncoder();
    const data = encoder.encode(rawString);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
  
    const existingButton = document.getElementById('bold-payment-button');
    if (existingButton) {
      existingButton.remove();
    }
  
    const script = document.createElement('script');
    script.src = 'https://checkout.bold.co/library/boldPaymentButton.js';
    script.async = true;
    document.head.appendChild(script);
  
    const boldButton = document.createElement('script');
    boldButton.id = 'bold-payment-button';
    boldButton.setAttribute('data-bold-button', '');
    boldButton.setAttribute('data-api-key', 'Tz78Pb0NNTHjm5kPY5VSNiP_U-9PR27haU6AXvXci2g'); // Llave pública de PRUEBA
    boldButton.setAttribute('data-description', 'Pago de prueba en Sandía');
    boldButton.setAttribute('data-redirection-url', 'https://localhost:5173');
  
    document.getElementById('bold-button-container')?.appendChild(boldButton);
  
    setSubmitting(false);
  };
  

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Nombre completo"
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Correo electrónico"
        value={formData.email}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="phone"
        placeholder="Teléfono"
        value={formData.phone}
        onChange={handleChange}
        required
        className="w-full p-2 border rounded"
      />
      <input
        type="text"
        name="company"
        placeholder="Empresa (opcional)"
        value={formData.company}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#FF7F50] hover:bg-[#FF6347] text-white font-bold py-3 px-6 rounded"
      >
        {submitting ? 'Preparando pago...' : 'Proceder al pago'}
      </button>

      {/* Aquí se renderiza el botón de Bold dinámicamente */}
      <div id="bold-button-container" className="mt-4"></div>
    </form>
  );
};

export default CheckoutForm;
