import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeToCart } from '../../redux/Action'

const CartItem = ({data}) => {
    const {id , productName , price , productImage } = data
    const dispatch = useDispatch()
    const carts = useSelector(state => state.products.carts)

     const cartItem = carts[id]

  return (
    <div className='cartItem'>
      <img src={productImage} alt="productImage" />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p>${price}</p>
        <div className='countHandler'>
            <button onClick={() => dispatch(removeToCart(id))}>-</button>
            <input value={cartItem} />
            <button onClick={() => dispatch(addToCart(id))}>+</button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
