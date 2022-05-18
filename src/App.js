import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import { CartProvider } from "../src/components/CartContext/CartContext";
import Cart from "./components/Cart/Cart";
import ItemCategoryConteiner from "./components/ItemCategoryConteiner/ItemCategoryConteiner";
import OrderForm from "./components/OrderForm/OrderForm"
  
  function App() {
    return (
      <div>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:productId" element={<ItemDetail />} />
            <Route path="/auto" element={<ItemCategoryConteiner category="auto"/>} />
            <Route path="/rueda" element={<ItemCategoryConteiner category="rueda"/>} />
            <Route path="/pintura" element={<ItemCategoryConteiner category="pintura"/>} />
            <Route path="/orderform" element={<OrderForm/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
