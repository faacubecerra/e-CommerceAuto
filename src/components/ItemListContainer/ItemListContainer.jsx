import React, {useEffect, useState} from "react"
import { getProducts } from "../../asyncmock"
import {useParams} from 'react-router-dom'
import Item from "../Item/Item"

import {getDocs, collection, query, where} from 'firebase/firestore'
import {firestoreDb } from '../../services/firebase'

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()
    const [autos, setAutos] = useState()
    
    useEffect(()=>{

        const collectionRef = categoryId 
        ? query(collection (firestoreDb, 'products'), where('category', '==', categoryId))
        : collection (firestoreDb, 'products')

        getDocs(collectionRef).then(response => {
            console.log(response)
            const products = response.docs.map(doc => {
                return{ id: doc.id, ...doc.data()}
            })
            setProducts(products)
        })

    }, [autos])

    if(products.length === 0) {
        return <h1>No hay productos de esta categoría</h1>
    }

    return(
        <div>
            {/* {autos?.map(elem => <Item title={elem.title} price={elem.price} img={elem.img} stock={elem.stock} category={elem.category} description={elem.description}/>)} */}
            <Item products={products}/>
        </div>
    )
}

export default ItemListContainer