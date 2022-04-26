import React, {useState} from "react"
import {useCart} from "../CartContext/CartContext"

const ItemCount = ({stock, initial, title, description, price}) => {

    const {cartWidget, setCartWidget, setCartProducts, cartProducts} = useCart()

    const [count, setCount] = useState(0)

    const increase = () => {
        if(count < stock){
            setCount(count+1)
        }
    }

    const decrease = () => {
        if(count > initial) {
            setCount(count-1)
        }
    }

    const onAdd = () => {
        setCartWidget(cartWidget + count)
        setCartProducts([...cartProducts, {
            title: title,
            description: description,
            price: price,
            count: count
        }])
    }

    return(
        <div>
            <button onClick={increase}>+</button>
            <div>{count}</div>
            <button onClick={decrease}>-</button>
            <button onClick={onAdd}>AGREGAR AL CARRITO</button>
        </div>
    )
}

export default ItemCount