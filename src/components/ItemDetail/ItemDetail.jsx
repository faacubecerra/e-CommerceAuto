import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getProducts } from "../../asyncmock"
import { Link } from "react-router-dom"
import '../ItemCount/ItemCount'
import Cart from "../ItemCount/ItemCount"

const ItemDetail = () => {

    const { idRef } = useParams()

    const [autoView, setAutoView] = useState()

    useEffect(() => {
        getProducts().then(prods => {
                setAutoView(prods.find(elem => elem.title == idRef.replace("-", " ")))
        }).catch(error => {
            console.log(error)
        })
    }, [])


    return(
        <div>
            <div>{autoView?.title}</div>
            <img src={autoView?.img}/>
            <div>{autoView?.price}</div>
            <div>{autoView?.category}</div>
            <div>{autoView?.description}</div>
            <Cart stock={autoView?.stock} initial={1}  />
            <Link to= "/cart">
                <button>TERMINAR COMPRA</button>
            </Link>
        </div>
    )
}

export default ItemDetail