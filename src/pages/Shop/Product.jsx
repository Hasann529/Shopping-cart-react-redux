import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../redux/Action';


const Product = ({data}) => {
    const dispatch = useDispatch();
    const carts = useSelector(state => state.products.carts)
   
    const {id , productName , price , productImage } = data
    
     let cartItem = carts[id]

  return (
    <div className='product'>
      <img src={productImage} alt="productImage" />
      <div className='description'>
        <p><b>{productName}</b></p>
        <p className='price'>${price}</p>
      </div>
      <button className='addToCartBttn' onClick={() => dispatch(addToCart(id))}>
        Add to cart {cartItem>0&&<>({cartItem})</>}
      </button>
    </div>
  )
}

export default Product
