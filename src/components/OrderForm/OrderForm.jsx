import { useEffect } from "react"
import {useCart} from "../CartContext/CartContext"

const OrderForm = () => {

    const {setCartProducts, setCartWidget} = useCart()

    let target1 = null
    let target2 = null
    let target3 = null
    let orderNumber = null

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)
        return(
            orderNumber = fecha + random
        )
    }

    useEffect(() => {
        generarId()
    }, [])

    const handleClick = () => {

        target1 = document.querySelector(".name")
        target2 = document.querySelector(".email")
        target3 = document.querySelector(".phone")

        if(target1?.value) {
            console.log("el nombre está bien")
            if(validEmail(target2?.value)) {
                console.log("el email está bien")
                if(validPhone(target3?.value)) {
                    alert(`¡Compra exitosa! ID de compra: ${orderNumber.toString()}`)
                    setCartProducts([])
                    setCartWidget(0)
                    target1.value = ""
                    target2.value = ""
                    target3.value = ""
                    console.log("el fono esta bien")
                } else {
                    console.log("el fono está mal")
                }
            } else {
                console.log("el email está mal")
            }
        } else {
            console.log("el nombre está mal")
        }
    }

    const validPhone = (phone) => {
        var expReg= /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        var isValid = expReg.test(phone);
        return (isValid);
    }

    const validEmail = (email) => {
        var expReg= /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        var isValid = expReg.test(email);     
        return (isValid); 
    }

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