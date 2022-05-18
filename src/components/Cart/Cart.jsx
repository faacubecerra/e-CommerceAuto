import {useCart} from "../CartContext/CartContext"
import ListCart from "../ListCart/ListCart"
import {Link} from "react-router-dom"

const Cart = ()=>{

    const {cartProducts} = useCart()
    
    return(
        <div>
            {
                cartProducts.map(elem => <ListCart title={elem.title} description={elem.description} price={elem.price} count={elem.count}/>)
            },
            <Link to="/orderform">
                <button>Continuar la compra</button>
            </Link>
        </div>
    )
}

export default Cart;