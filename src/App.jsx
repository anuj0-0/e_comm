import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Products from './components/Products';
import './index.css'


function App() {
  fetch('https://dummyjson.com/products')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      localStorage.setItem('products', JSON.stringify(data))
    });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='products' element={<Products />} />
      </Routes>
    </BrowserRouter>


  )
}

export default App