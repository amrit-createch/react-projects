import { useContext, useState } from 'react';
import './App.css';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import { useCartContext } from './context/cartContext/CartContext'
function App() {
  const value = useCartContext()
  console.log(value);

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
