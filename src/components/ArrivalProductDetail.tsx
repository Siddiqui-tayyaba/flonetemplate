import React from 'react';

interface ProductProps {
  id: string;  

  name: string;
  price: string;
  description: string;
  thumbnail: string;
}

const ArrivalProductDetail: React.FC<ProductProps> = ({ id,  name, price, description }) => {
  return (
    <div>
      <h1>Product Detail</h1>
      <p>Product ID: {id}</p>
      <p>Product Name: {name}</p>
      <p>Product Price: {price}</p>
      <p>Product Description: {description}</p>
      
    </div>
  );
};

export default ArrivalProductDetail;
