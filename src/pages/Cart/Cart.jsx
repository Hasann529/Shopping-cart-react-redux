import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { PRODUCTS } from '../../storage'
import './cart.css'
import CartItem from './CartItem'

const Cart = () => {
    const cards = useSelector(state => state.products.carts)

    const getTotal = () => {
       
        let total = 0
       for(const i in cards)
         {
          if(cards[i]>0)
          {
            let itemInfo = PRODUCTS.find((product) => product.id === Number(i) )
            total += cards[i] * itemInfo.price
          }
         }
       return total;
    }


  return ( 
    <div className='cart'>
     <div><h1>Your Cart Items</h1></div>
     <div className='cartItems'>
      {PRODUCTS.map(product => {
          if(cards[product.id] !== 0){
            return <CartItem data={product} key={product.id}/>
      }})}
     </div>
     <div className='checkout'>
      {(getTotal()>0)&&<p>Subtotal :${getTotal()}</p>}
      <Link to={'/'} ><button>Continue Shopping</button></Link>
      <button>Checkout</button>
     </div>
    </div>
  )
}

export default Cart
