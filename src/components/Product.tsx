import React from 'react';
import { Link } from 'react-router-dom';

interface ProductProps {
  id: string;
  image: string;
  name: string;
  price: string;
  description: string;
}

const Product: React.FC<ProductProps> = ({ id, image, name, price, description }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4">
      <Link to={`/product/${id}`}>
        <img className="w-full" src={image} alt={name} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">{price}</p>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default Product;
