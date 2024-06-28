import React, { useState } from 'react';
import Header from '../components/LoginHeader';


const pages = [
  { name: 'Home', path: '/' },
  { name: 'CheckOut', path: '/checkout' },
];
const Checkout: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('credit_card');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Name:', name);
    console.log('Address:', address);
    console.log('Payment Method:', paymentMethod);
   
  };

  return (
    <div>
      <Header pages={pages}/>
    
    <div style={{ padding: '20px' }}>
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="paymentMethod">Payment Method:</label>
          <select
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button type="submit">Place Order</button>
      </form>
    </div>
    </div>
  );
};

export default Checkout;
