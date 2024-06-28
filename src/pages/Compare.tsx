import React, { useState } from 'react';
import Header from '../components/LoginHeader';

interface Product {
  id: number;
  name: string;
  price: number;
  features: string[];
}

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Compare', path: '/compare' },
];

const Compare: React.FC = () => {
  const [productsToCompare, setProductsToCompare] = useState<Product[]>([
    {
      id: 1,
      name: 'Product 1',
      price: 29.99,
      features: ['Feature A', 'Feature B'],
    },
    {
      id: 2,
      name: 'Product 2',
      price: 49.99,
      features: ['Feature C', 'Feature D'],
    },
  ]);

  return (
    <div>
      <Header pages={pages}/>
    
    <div style={{ padding: '20px' }}>
      <h2>Compare Products</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {productsToCompare.map(product => (
              <th key={product.id}>{product.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Price</td>
            {productsToCompare.map(product => (
              <td key={product.id}>${product.price.toFixed(2)}</td>
            ))}
          </tr>
          {productsToCompare[0].features.map((feature, index) => (
            <tr key={index}>
              <td>{feature}</td>
              {productsToCompare.map(product => (
                <td key={product.id}>{product.features[index]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Compare;
