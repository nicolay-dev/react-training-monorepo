import { useState, useEffect, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { useProducts } from './hooks/useProducts'
import './styles/ShoppingCart.css'

export function ShoppingCart ({ cleanCartProducts }) {
  const [isCartVisible, setIsCartVisible] = useState(false)
  const { cart, clearCart, addToCart, decreaseQuantity } = useContext(CartContext)
  const { getProductById } = useProducts()

  const handleIncreaseQuantity = (event) => {
    addToCart(getProductById(event.target.value))
  }
  const handleDecreaseQuantity = (event) => {
    decreaseQuantity(getProductById(event.target.value))
  }

  const handleClearCart = () => {
    clearCart()
    cleanCartProducts()
  }

  const handleCartVisibility = () => {
    setIsCartVisible(previous => !previous)
  }

  const renderCart = () => {
    const aside = Array.from(document.getElementsByClassName('shopping-cart')).shift()
    aside.style.display = isCartVisible ? 'unset' : 'none'
  }

  useEffect(renderCart, [isCartVisible])

  return (
    <>
      <button className='cart-button' onClick={handleCartVisibility}>🛒</button>
      <aside className='shopping-cart'>
        <header className='header-cart'>
          <button className='close-button' onClick={handleCartVisibility}>✖️</button>
        </header>
        <ul className='cart-ul'>
          {
            cart.map((product) => {
              return (
                <li className='item-list-product-cart' key={`key-${product?.id}`}>
                  <h2>{product?.title}</h2>
                  <img className='product-image ' src={product.image} alt={`The image of a ${product.title}`} />
                  <footer className='quantity-footer'>
                    <button className='quantity-button' onClick={handleDecreaseQuantity} value={product?.id}>-</button>
                    <p>{product?.quantity}</p>
                    <button className='quantity-button' onClick={handleIncreaseQuantity} value={product?.id}>+</button>
                  </footer>
                </li>
              )
            })
          }
        </ul>
        <footer className='vaciar-footer'>
          {cart.length
            ? <button onClick={handleClearCart}>Vaciar carrito</button>
            : ''}
        </footer>
      </aside>
    </>

  )
}
