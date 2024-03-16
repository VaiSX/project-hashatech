import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Products from "./Pages/products";
import Product from "./Pages/Product";
import Downloads from "./Pages/Downloads";
import { Routes, Route } from "react-router-dom";

import './app.css';

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/downloads" element={<Downloads/>}/>
      <Route path="/products/:id" element={<Product/>}/>
      </Routes>
    <Footer/>
    </>
  );
};

export default App;