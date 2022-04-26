import React from "react"
import ItemCount from "../ItemCount/ItemCount"
import {Link} from "react-router-dom"

const Item = ({title, price, img, stock, category, description}) => {
    
    return(
        <div>
            <Link to={`${category}/${title.replace(" ", "-")}`}>
                <img src={img}></img>
            </Link>
            <ItemCount stock={stock} initial={1} title={title} price={price} description={description}/>
            <div>{title}</div>
            <div>{price}</div>
        </div>
    )
}

export default Item