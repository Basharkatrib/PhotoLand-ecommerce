import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Subscribe from './Components/Subscribe/Subscribe';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
