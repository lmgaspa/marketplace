import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignIn from './Pages/LoginSignIn';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png'
import About from './PagesFooter/About';
import Contact from './PagesFooter/Contact';
import Company from './PagesFooter/Company';
import ProductsFooter from './PagesFooter/ProductsFooter';
import Latest from './Components/Latest/Latest';
import CheckOffers from './Components/CheckOffers/CheckOffers';
import LoginSuccess from './LoginSuccess/LoginSuccess'
import SignUp from './Pages/SignUp';
import RegisterSuccess from './LoginSuccess/RegisterSuccess';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop/>}/> 
          <Route path='/about' element={<About/>}/>
          <Route path='/productsfooter' element={<ProductsFooter/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/latest' element={<Latest/>}/>
          <Route path='/checkoffers' element={<CheckOffers/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/loginsuccess' element={<LoginSuccess/>}/>
          <Route path='/registersuccess' element={<RegisterSuccess />}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
