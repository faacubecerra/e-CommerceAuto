import React, { createContext, useState, useContext } from 'react';

export const CartContext = createContext();
export const useCart = () => useContext(CartContext)

export const CartProvider = ({children}) => {

    const [cartWidget, setCartWidget] = useState(0);

    const [cartProducts, setCartProducts] = useState([])

    return (
    <CartContext.Provider value={{cartWidget, setCartWidget, cartProducts, setCartProducts}}>
    {children}
    </CartContext.Provider>
);

}