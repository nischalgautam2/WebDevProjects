import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from './components/Cart/Cart';
import NotFound from './components/NotFound/NotFound';
import Shop from './components/Shop/Shop';
import ThankYou from './components/ThankYou/ThankYou';
import { productList } from './data';


const App = () => {
  const [products, setProducts] = useState(productList)
  const [cartItems, setCartItems] = useState({})


  return (
    <div>
        <Routes>
          <Route path='/' element={<Shop
            products={products}
            setProducts={setProducts}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />} />
          <Route path='/cart/checkout' element={<Cart />} />
          <Route path='/thank-you' element={<ThankYou />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
    </div>
  );
};

export default App;