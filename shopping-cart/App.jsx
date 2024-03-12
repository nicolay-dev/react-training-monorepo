import { Header } from './src/components/Header'
import { Products } from './src/components/Products'
import { CartProvider } from './src/context/CartContext'
import './style.css'

export function App () {
  return (
    <>
      <main className='e-commerce'>
        <h1 className=''>Shopping Cart 🛒</h1>
        <Header />
        <CartProvider>
          <Products />
        </CartProvider>
      </main>
    </>
  )
}
