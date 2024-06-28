import React from 'react';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';
import IconBox from '../components/IconBox';
import MainNavigation from '../components/MainNavigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faDollarSign, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Product from '../components/Product';
import bagImage from '../assets/bag.jpeg';
import perfumeImage from '../assets/perfume.png';
import shoesImage from '../assets/shoes.jpg';
import sunglassesImage from '../assets/sunglasses.jpg';
import { Link } from 'react-router-dom';
const HomePage: React.FC = () => {
  return (
    <div>
      <Banner />
      <div className="grid grid-cols-3 gap-4 p-4">
      <IconBox icon={<FontAwesomeIcon icon={faTruck} />} title="Free Shipping" description="On all orders over $50" />
      <IconBox icon={<FontAwesomeIcon icon={faDollarSign} />} title="Best Prices" description="Competitive pricing" />
      <IconBox icon={<FontAwesomeIcon icon={faHeadset} />} title="24/7 Support" description="We are here to help" />
      </div>
      <div className="container mx-auto p-4">
      <p className="text-2xl text-center font-bold mb-4">New Arrivals</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      
        <Product id='1' image={sunglassesImage} name='Silk Leather Bags' price='$90.00' description='something cool' />
        <Product id='2'image={bagImage} name='Silk Leather Bags' price='$90.00' description='something bold'/>
        <Product id='3' image={perfumeImage} name='Silk Leather Bags' price='$90.00' description='something suits you' />
       <Product id='4' image={shoesImage} name='Silk Leather Bags' price='$90.00' description='something that matches you' />
      </div>
    </div>
      <ProductList />
    </div>
  );
}

export default HomePage;
