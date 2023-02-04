import React from 'react'

const CartItem = ({item}) => {
  return (
    <div>
        <img
            src={item.image}
            alt={item.name}
            style={{ maxWidth: '150px', maxHeight: '150px' }}
        />
        <div>
            <h3>Title</h3>
            <h4>{item.title}</h4>
        </div>

        <div>
            <h3>Price</h3>
            <h4>
            {' '}
            <span style={{ fontWeight: 600, marginRight: '2px' }}>$</span>{' '}
            {item.price}
            </h4>
        </div>

        <div>
            <h3>Qty In Cart</h3>
            <input type = 'number' min = '1'/>
        </div>
        
        <button>Delete</button>
    </div>
  )
}

export default CartItem