import React, {useEffect, useState} from "react"
import { getProducts } from "../../asyncmock"
import Item from "../Item/Item"

const ItemListContainer = () => {

    const [autos, setAutos] = useState()
    
    useEffect(()=>{
        getProducts().then(prods => {
            setAutos(prods)
            console.log(autos)
        }).catch(error => {
            console.log(error)
        })
    }, [autos])

    return(
        <div>
            {autos?.map(elem => <Item title={elem.title} price={elem.price} img={elem.img} stock={elem.stock} category={elem.category}/>)}
        </div>
    )
}

export default ItemListContainer