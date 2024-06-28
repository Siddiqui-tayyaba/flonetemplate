import React, { useState } from 'react';
import Header from '../components/LoginHeader';

interface Product {
  id: number;
  name: string;
  price: number;
}

const pages = [
  { name: 'Home', path: '/' },
  { name: 'WishList', path: '/wishlist' },
];

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([
    { id: 1, name: 'Product 1', price: 29.99 },
    { id: 2, name: 'Product 2', price: 49.99 },
  ]);

  const removeItem = (id: number) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  return (
    <div>
      <Header pages={pages}/>
    
    <div style={{ padding: '20px' }}>
      <h2>Wishlist</h2>
      <ul>
        {wishlistItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)}
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Wishlist;
