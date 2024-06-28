import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductById } from '../Services/ProductApi';

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string | undefined }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProductDetails = async () => {
      try {
        if (id) {
          const productData = await fetchProductById(id);
          setProduct(productData);
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    getProductDetails();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto px-4">
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-4">{product.description}</p>
        <h2 className="text-2xl font-semibold">${product.price}</h2>
      </div>
    </div>
  );
}

export default ProductDetail;
