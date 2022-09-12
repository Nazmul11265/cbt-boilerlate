import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './pages/product-page/ProductPage';
import ProductCartPage from './pages/product-cart-page/ProductCartPage';
import CodeCompiler from './pages/code-compiler/CodeCompiler';


function App() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path='/compiler' element={<CodeCompiler/>}/>
            <Route path='/' element={<ProductPage/>}/>
            <Route path='/cart-items' element={<ProductCartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
