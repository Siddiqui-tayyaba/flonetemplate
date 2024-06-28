import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/About';
import Account from './pages/Account';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Compare from './pages/Compare';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Wishlist from './pages/Wishlist';
import TopNavigation from './components/TopNavigation';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import MainNavigation from './components/MainNavigation';
import Register from './pages/Register';
import Footer from './components/Footer';


const App: React.FC = () => {
  const username = 'Tayyaba';
  return (
    <Router>
      <TopNavigation/>
      <MainNavigation/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/account" element={<Account username={username} />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/products" element={<ProductList />} /> 
        

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
