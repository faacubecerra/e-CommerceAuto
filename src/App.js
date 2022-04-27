import React from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from "./components/ItemDetail/ItemDetail";
import {CartProvider} from "../src/components/CartContext/CartContext"
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar/>

          <Routes>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/' element={<ItemListContainer/>}/>
            <Route path='/:category/:idRef' element={<ItemDetail/>}/>
            <Route path="/autos"/>
            <Route path="/modificaciones"/>
            <Route path="/accesorios"/>

          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
