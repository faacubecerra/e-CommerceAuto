import logohonda from './img/HondaCivic2.png'
import logobmw from './img/bmw e30.png'

const products = [
        {
            id: 1 ,
            title: 'HONDA CIVIC' ,
            description: 'EK 9 Año 1999' ,
            price: 7700,
            img: logohonda,
            stock: 10,
            category: 'Auto',
        },
        {
        id: 2,
        title: 'BMW E30 M3',
        description: 'E30 M3 1990' ,
        price: 40000,
        img: logobmw,
        stock: 5,
        category: 'Aviones',
        }
    ]


export const getProducts = () => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}
export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}