import logohondacivic from './img/HondaCivic.png'
import logobmwe30 from './img/BMWe30.png'
import logosubaruwrx from './img/SubaruImprezaWRXsti.png'
import logotoyotasupra from './img/ToyotaSupra.png'
import logonissanskyline from './img/NissanSkyline.png'

const products = [
        {
            id: 1 ,
            title: 'HONDA CIVIC' ,
            description: 'EK 9 Año 1999' ,
            price: 7700,
            img: logohondacivic,
            stock: 10,
            category: 'Auto',
        },
        {
            id: 2,
            title: 'BMW E30 M3',
            description: 'E30 M3 1990' ,
            price: 40000,
            img: logobmwe30,
            stock: 5,
            category: 'Auto',
        },
        {
            id: 3,
            title: 'Subaru Impreza WRX sti',
            description: 'Impreza WRX sti' ,
            price: 40000,
            img: logosubaruwrx,
            stock: 5,
            category: 'Auto',
        },
        {
            id: 4,
            title: 'Toyota Supra MK4',
            description: 'Supra MK4 1996' ,
            price: 40000,
            img: logotoyotasupra,
            stock: 5,
            category: 'Auto',
        },
        {
            id: 5,
            title: 'Nissan Skyline GTR R-34',
            description: 'Nissan Skyline GTR R-34' ,
            price: 40000,
            img: logonissanskyline,
            stock: 5,
            category: 'Auto',
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