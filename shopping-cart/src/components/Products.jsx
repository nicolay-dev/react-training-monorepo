import { ShoppingCart } from './ShoppingCart'
import { useProducts } from './hooks/useProducts'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import './styles/Products.css'

export function Products () {
  const { products, getProductById, cleanCartProperty } = useProducts()
  const { addToCart, removeFromCart } = useContext(CartContext)

  const handleAddCart = (event) => {
    const product = getProductById(event.target.value)
    product.isOnCart ? removeFromCart(product) : addToCart(product)
  }

  return (
    <section>
      <ShoppingCart cleanCartProducts={cleanCartProperty} />
      <ul className='list-products'>
        {products.map((product) => {
          return (
            <li className='item-list-product' key={product?.id}>
              <h2>{product?.title}</h2>
              <img className='product-image' src={product?.image} alt={`The image of a ${product?.title}`} />
              <h2>${product?.price}</h2>
              <button className={product?.isOnCart ? 'remove-cart-btn' : ''} onClick={handleAddCart} value={product?.id}>Add to cart</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
