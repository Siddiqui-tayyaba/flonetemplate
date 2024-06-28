import React, { useState } from 'react';
import Header from '../components/LoginHeader';

interface Product {
  id: number;
  name: string;
  price: number;
}
const pages = [
  { name: 'Home', path: '/' },
  { name: 'Cart', path: '/cart' },
];
const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Header pages={pages}/>
    <div style={{ padding: '20px' }}>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
    </div>
  );
};

export default Cart;
