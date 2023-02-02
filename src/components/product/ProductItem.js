import React from 'react'
import { ProductItemStyle, CartAddButton } from '../../styles/ProductScreen'
const ProductItem = ({ item }) => {
    return (
        <ProductItemStyle primary>
            <div>
                <img style = {{width:'100px'}} src = {item.image} alt ={item.title}/>
                <h3 style = {{
                    border:'1px solid black',
                    borderRadius:'2px',
                    padding:'1rem'
                }}>{item.title}</h3>
                <p style = {{
                    fontSize:'30px',
                    color:'black',
                }}>
                    $ {item.price}</p>
                <p>{item.qtyInStock}</p>
                <p style = {{
                    fontSize:'10px',
                    color:'black',
                }}>{item.description}</p>
            </div>
            <CartAddButton primary>
                Add To Cart
            </CartAddButton>
        </ProductItemStyle>

    )
}

export default ProductItem