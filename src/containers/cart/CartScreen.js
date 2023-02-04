import React from 'react'
import CartItem from '../../components/cart/CartItem'

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
        <h1>Cart</h1>
        <div>
          {/* map through our cart items, display cartItem component for each one */}
          {cartItems.map((item)=>(
            <CartItem item={item} />
          ))}
        </div>
    </div>
  )
}

export default CartScreen