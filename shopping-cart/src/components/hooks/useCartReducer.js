import { useReducer } from 'react'
import { CartReducer, initialState } from '../reducers/CartReducer'

export function useCartReducer () {
  const [state, dispatch] = useReducer(CartReducer, initialState)

  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product })
  }

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product })
  }

  const decreaseQuantity = (product) => {
    dispatch({ type: 'DECREASE_QUANTITY', payload: product })
  }

  const clearCart = (products) => {
    dispatch({ type: 'CLEAR_CART', payload: products })
  }

  return { state, addToCart, removeFromCart, clearCart, decreaseQuantity }
}
