const ListCart =  ({title, description, price, count}) =>{

    return(
        <div>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
            <div>{count}</div>
        </div>
    )
}

export default ListCart