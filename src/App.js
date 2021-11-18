import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getProducts } from './store/actions/productsActions';
import Products from './views/Products';
import Navbar from './components/Navbar';
import ProductDetails from './views/ProductDetails';
import AddProduct from './views/AddProduct';

function App() {
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

    return (
    <BrowserRouter>
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Products/>} />
        <Route path="/products/:id" element={<ProductDetails/>} />
        <Route path="/products/addproduct/" element={<AddProduct/>} />
       </Routes>

    </BrowserRouter>
  );
}

export default App;
