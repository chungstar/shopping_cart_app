import React from 'react'
import { ProductItemStyle, CartAddButton } from '../../styles/ProductScreen'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../actions/cartActions'

const ProductItem = ({ item }) => {
    const dispatch = useDispatch()
    const addToCartHandler = ()=>{
        dispatch(addProductToCart(item))
    }

    return (
        <ProductItemStyle primary>
            <div>
                <img style = {{width:'100px'}} src = {item.image} alt ={item.title}/>
                <h3 style = {{
                    border:'1px solid black',
                    borderRadius:'2px',
                    padding:'1rem'
                }}>
                    {item.title}
                </h3>
                <p style = {{
                    fontSize:'30px',
                    color:'black',
                }}>
                    $ {item.price}
                </p>
                <p>{item.qtyInStock}</p>
                <p style = {{
                    fontSize:'10px',
                    color:'black',
                }}>{item.description}</p>
            </div>
            <CartAddButton onClick={addToCartHandler} primary>
                Add To Cart
            </CartAddButton>
        </ProductItemStyle>

    )
}

export default ProductItem