import React from 'react'
import CartItem from '../../components/cart/CartItem'
import {CartContainerStyle, PageHeading} from '../../styles/CartScreen'
import { useDispatch, useSelector } from 'react-redux'
import { listCartItems } from '../../actions/cartActions'
// const cartItems = [
//   {
//     title:'Amazing Shirt',
//     price: 1999,
//     image: 'google',
//     qtyInCart: 1,
//   },
// ]

const CartScreen = () => {
  
  const dispatch = useDispatch()

  const cartItemsList = useSelector((state)=>state.cartItemsList)

  const { loading, error, cartItems } = cartItemsList

  React.useEffect(()=>{
    dispatch(listCartItems())
  },[dispatch])

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