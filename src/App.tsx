import React from 'react';
import './App.css';
import AddToCartButton from './components/add-to-cart-button/AddToCartButton';
import Header from './components/header/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/product-page/ProductPage';
import ProductCartPage from './pages/product-cart-page/ProductCartPage';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/' element={<ProductPage/>}/>
            <Route path='/cart-items' element={<ProductCartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
