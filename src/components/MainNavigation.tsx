import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MainNavigation: React.FC = () => {
  const [searchVisible, setSearchVisible] = useState(false);
  const [wishlistVisible, setWishlistVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState({ home: false, shop: false, pages: false, blog: false });

  const handleMouseEnter = (menu: string) => {
    setDropdownVisible((prevState) => ({ ...prevState, [menu]: true }));
  };

  const handleMouseLeave = (menu: string) => {
    setDropdownVisible((prevState) => ({ ...prevState, [menu]: false }));
  };

  return (
    <nav className="bg-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Flone.</div>
        <ul className="flex-grow flex justify-center space-x-4">
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={() => handleMouseLeave('home')}
          >
            <Link to="/" className="hover:underline flex items-center">
              Home <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Link>
            {dropdownVisible.home && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border p-4 grid grid-cols-3 gap-4">
                <div>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion Two</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion Three</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion Four</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion Five</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion Six</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Fashion Seven</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Kids Fashion</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Cosmetic</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Furniture</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Furniture 2</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Furniture 3</Link>
                </div>
                <div>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Electronics</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Plants</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Book Store</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Flower Shop</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Organic Food</Link>
                </div>
                <div>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Cake Shop</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Pet Food</Link>
                  <Link to="/" className="block px-2 py-1 hover:bg-gray-100">Home Medical</Link>
                </div>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('shop')}
            onMouseLeave={() => handleMouseLeave('shop')}
          >
            <Link to="#" className="hover:underline flex items-center">
              Shop <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Link>
            {dropdownVisible.shop && (
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg border p-4 grid grid-cols-3 gap-4">
                <div>
                  <p>SHOP LAYOUT</p>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop Grid Standard</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop Grid Filter</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop Grid Two Columns</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop Grid No Sidebar</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop Grid Full Width</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop Grid Right Sidebar</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop List Standard</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop List Full Width</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Shop List Two Columns</Link>
                </div>
                <div>
                  <p>PRODUCT DETAILS</p>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Tab Bottom</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Tab Left</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Tab Right</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Sticky</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Slider</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Fixed Image</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Simple</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Varient</Link>
                  <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Product Affiliate</Link>
                </div>
                <div>
                  <img src="https://rukminim2.flixcart.com/image/850/1000/k1v1h8w0/jacket/q/x/a/m-on-m-toon-raarivy-original-imafhcexvgwjdzvg.jpeg?q=90&crop=false" alt="Shop Image" className="w-full h-full object-cover" />
                </div>
              </div>
            )}
          </li>
          <li><Link to="#" className="hover:underline">Collection</Link></li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('pages')}
            onMouseLeave={() => handleMouseLeave('pages')}
          >
            <Link to="#" className="hover:underline flex items-center">
              Pages <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Link>
            {dropdownVisible.pages && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border p-4">
                <Link to="/cart" className="block px-2 py-1 hover:bg-gray-100">Cart</Link>
                <Link to="/checkout" className="block px-2 py-1 hover:bg-gray-100">Checkout</Link>
                <Link to="/wishlist" className="block px-2 py-1 hover:bg-gray-100">Wishlist</Link>
                <Link to="/compare" className="block px-2 py-1 hover:bg-gray-100">Compare</Link>
                <Link to="/account" className="block px-2 py-1 hover:bg-gray-100">My Account</Link>
                <Link to="/login" className="block px-2 py-1 hover:bg-gray-100">Login/Register</Link>
                <Link to="/about" className="block px-2 py-1 hover:bg-gray-100">About Us</Link>
                <Link to="/contact" className="block px-2 py-1 hover:bg-gray-100">Contact Us</Link>
              </div>
            )}
          </li>
          <li
            className="relative"
            onMouseEnter={() => handleMouseEnter('blog')}
            onMouseLeave={() => handleMouseLeave('blog')}
          >
            <Link to="#" className="hover:underline flex items-center">
              Blog <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
            </Link>
            {dropdownVisible.blog && (
              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border p-4">
                <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Blog Standard</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Blog No Sidebar</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Blog Right Sidebar</Link>
                <Link to="#" className="block px-2 py-1 hover:bg-gray-100">Blog Details Standard</Link>
              </div>
            )}
          </li>
          <li><Link to="#" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="flex space-x-4">
          <div className="relative">
            <FontAwesomeIcon icon={faSearch} className="cursor-pointer" onClick={() => setSearchVisible(!searchVisible)} />
            {searchVisible && (
              <input
                type="text"
                placeholder="Search..."
                className="absolute top-0 left-0 mt-8 p-2 border rounded"
              />
            )}
          </div>
          <FontAwesomeIcon icon={faHeart} className="cursor-pointer" onClick={() => setWishlistVisible(!wishlistVisible)} />
          <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer" onClick={() => setCartVisible(!cartVisible)} />
        </div>
      </div>
      {wishlistVisible && (
        <div className="absolute top-16 right-0 bg-white border shadow-lg p-4 w-64">
          <h2 className="text-lg font-bold mb-2">Wishlist</h2>
          <p>Your wishlist is currently empty.</p>
        </div>
      )}
      {cartVisible && (
        <div className="absolute top-16 right-0 bg-white border shadow-lg p-4 w-64">
          <h2 className="text-lg font-bold mb-2">Cart</h2>
          <p>Your cart is currently empty.</p>
        </div>
      )}
    </nav>
  );
}

export default MainNavigation;
