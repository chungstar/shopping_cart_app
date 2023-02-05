import React from 'react'
import CartItem from '../../components/cart/CartItem'
import {CartContainerStyle, PageHeading} from '../../styles/CartScreen'

const cartItems = [
  {
    title:'Amazing Shirt',
    price: 1999,
    image: 'google',
    qtyInCart: 1,
  },
]

const CartScreen = () => {
  return (
    <div>
        <PageHeading>Cart</PageHeading>
        <CartContainerStyle>
          {/* map through our cart items, display cartItem component for each one */}
          {cartItems.map((item)=>(
            <CartItem item={item} />
          ))}
        </CartContainerStyle>
    </div>
  )
}

export default CartScreen