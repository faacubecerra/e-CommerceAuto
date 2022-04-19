import React from "react"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>

        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/:category/:idRef' element={<ItemDetail/>}/>
          <Route path="/autos"/>
          <Route path="/modificaciones"/>
          <Route path="/accesorios"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
