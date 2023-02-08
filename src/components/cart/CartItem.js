import React from 'react'
import { CartItemStyle, CartDeleteButtonStyle, CartInfoStyle } from '../../styles/CartScreen'
import { useDispatch } from 'react-redux'
import { updateCartQty, deleteItemFromCart } from '../../actions/cartActions'

const CartItem = ({item}) => {
    const [stateQty,setStateQty]=React.useState(item.qtyInCart)
    const dispatch = useDispatch()
    const handleCartQty = (item) =>{
        dispatch(updateCartQty(item, stateQty))
    }
    const handleCartDelete = (cartItemId) => {
        dispatch(deleteItemFromCart(cartItemId))
      }
    return (
        <CartItemStyle>
            <img
                src={item.image}
                alt={item.name}
                style={{ maxWidth: '150px', maxHeight: '150px' }}
            />
            <CartInfoStyle>
                <h3>Title</h3>
                <h4>{item.title}</h4>
            </CartInfoStyle>

            <CartInfoStyle>
                <h3>Price</h3>
                <h4>
                {' '}
                <span style={{ fontWeight: 600, marginRight: '2px' }}>$</span>{' '}
                {item.price}
                </h4>
            </CartInfoStyle>

            <CartInfoStyle>
                <h3>Qty In Cart</h3>
                <input
                    type = 'number'
                    min = '1'
                    value={stateQty}
                    onChange={(e)=>{
                        setStateQty((prev) => Number(e.target.value))
                        handleCartQty(item.id, stateQty)
                    }}
                />
            </CartInfoStyle>
            
            <CartDeleteButtonStyle onClick={()=>handleCartDelete(item.id)}>Delete</CartDeleteButtonStyle>
        </CartItemStyle>
    )
}

export default CartItem