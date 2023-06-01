import Navbar from './components/Navbar.js';
import '../src/App.css'
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './components/Home.js';
import About from '../src/components/About.js'
import Error from '../src/components/Error.js'
import Reservations from '../src/components/Reservations.js';
import Login from '../src/components/Login.js';
import OnlineMenu from '../src/components/OnlineMenu.js';
import Cart from './components/Cart.js';
import CartItems from './components/CartItems.js';
import { CartProvider } from './components/context/CartContext.js';
import { useState } from 'react';
import Footer from './components/Footer.js';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
        <Cart/>
          <Routes>
            <Route exact path="/" element={ <Home/> }></Route>
            <Route path="about" element={ <About/> }></Route>
            <Route path="reservations" element={ <Reservations/> }></Route>
            <Route path="onlinemenu" element={ <OnlineMenu/> }></Route>
            <Route path="login" element={ <Login setIsLoggedIn={setIsLoggedIn}/> }></Route>
            <Route path='cartitems' element={ <CartItems/> }></Route>
            <Route path="*" element={ <Error/> }></Route>
          </Routes>
          <Footer></Footer> 
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
