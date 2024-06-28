import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../Services/ProductApi';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    getProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    return products.filter(product => product.price > 20);
  }, [products]);

  const renderProduct = useCallback((product: Product) => (
    <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="border border-gray-300 rounded-lg p-4 shadow-md">
        <h2 className="text-xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-700 mb-2">{product.description}</p>
        <p className="text-lg font-semibold mb-4">${product.price}</p>
        <Link to={`/product/${product.id}`} className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          View Details
        </Link>
      </div>
    </div>
  ), []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Product List</h1>
      <div className="flex flex-wrap -mx-4">
        {filteredProducts.map(renderProduct)}
      </div>
    </div>
  );
}

export default ProductList;
