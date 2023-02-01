import React from 'react'

const ProductItem = ({ item }) => {
    return (
    <div>
        <img src = {item.image} alt ={item.title}/>
        <h3>{item.title}</h3>
        <p>{item.price}</p>
        <p>{item.qtyInStock}</p>
        <p>{item.description}</p>
    </div>
    )
}

export default ProductItem