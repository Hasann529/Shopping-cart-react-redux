import React from 'react'
import { PRODUCTS } from '../../storage'
import Product from './Product'
import './Shop.css'


const Shop = () => {
  return (
    <div className='shop'>
    <div className='shopTitle'>
       <h1>Shopping Zone</h1>
    </div>
    <div className='products'>
      {PRODUCTS.map(product =>  
        <Product  data={product} key={product.id}/>
      )}
    </div>
  
    </div>
  )
}

export default Shop
