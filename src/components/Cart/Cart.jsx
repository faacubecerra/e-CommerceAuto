import {useCart} from "../CartContext/CartContext"
import ListCart from "../ListCart/ListCart"

const Cart = ()=>{

    const {cartProducts} = useCart()
    
    return(
        <div>
            {
                cartProducts.map(elem => <ListCart title={elem.title} description={elem.description} price={elem.price} count={elem.count}/>)
            }
        </div>
    )
}

export default Cart;