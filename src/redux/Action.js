

export const addToCart = (id) => {
  return {
    type:'ADD',
    payload:id
  }
  
}

export const removeToCart = (id) =>{

    return {
        type:'REMOVE',
        payload:id
      }
      
}
