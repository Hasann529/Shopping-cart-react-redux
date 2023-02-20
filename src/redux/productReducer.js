import { PRODUCTS } from '../storage'

  let cart = {}
 for(let i=1;i<PRODUCTS.length+1;i++)
 {
    cart[i]=0
 }
 const initialState = {
    carts:cart
 }
  

const productReducer = (state=initialState,{type ,payload}) => {
 
    switch (type) {
        case 'ADD':
            const newCart = {...state.carts}
            newCart[payload]=newCart[payload]+1
             return {
                ...state,
                carts:newCart
             }
            
        case 'REMOVE':
            const remCart = {...state.carts}
            remCart[payload] = remCart[payload]-1  
            return {
                ...state,
                carts:remCart
            }
    
        default:
            return state
    }
}

export default productReducer
