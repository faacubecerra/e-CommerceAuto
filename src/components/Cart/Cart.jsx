import React, {useState} from "react"

const Cart = ({stock, initial, title}) => {

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
        console.log(`¡${count} ${title} agregados al carro con éxito!`)
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

export default Cart