import {useEffect, useState} from "react"

const OrderForm = () => {

    return(
        <div>
            <form action="submit">
                <input className="name" type="text" placeholder="nombre"></input>
                <input className="email" type="text" placeholder="email"></input> 
                <input className="phone" type="text" placeholder="telefono"></input>
            </form>
            <button onClick={handleClick} type="submit">Terminar compra</button>
        </div>
    )
}

export default OrderForm