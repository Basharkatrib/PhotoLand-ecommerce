import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import { setCateg } from './store/categoriesSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Thank from './Pages/Thank/Thank';

function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      dispatch(setCateg(null));
    }
  }, [location]); 

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/thank" element={<Thank />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
