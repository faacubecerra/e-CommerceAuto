import React from "react"
import Cart from "../Cart/Cart"
import {Link} from "react-router-dom"

const Item = ({title, price, img, stock, category}) => {
    
    return(
        <div>
            <Link to={`${category}/${title.replace(" ", "-")}`}>
                <img src={img}></img>
            </Link>
            <Cart stock={stock} initial={1} title={title}/>
            <div>{title}</div>
            <div>{price}</div>
        </div>
    )
}

export default Item