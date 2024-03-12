import { createContext } from 'react'
import { CartReducer } from '../components/reducers/CartReducer'
import { useCartReducer } from '../components/hooks/useCartReducer'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const { state, addToCart, removeFromCart, clearCart, decreaseQuantity } = useCartReducer(CartReducer)
  return (
    <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart, decreaseQuantity }}>
      {children}
    </CartContext.Provider>

  )
}
