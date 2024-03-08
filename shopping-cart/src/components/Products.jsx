import productsMock from '../mocks/products.json'
import { useState, useContext, useEffect } from 'react'
import './styles/Products.css'
import { FiltersContext } from '../context/FiltersContext'

export function Products () {
  const [products, setProducts] = useState(productsMock.products)
  const filtersContext = useContext(FiltersContext)

  useEffect(() => {
    let filteredProducts = products
    filteredProducts = productsMock.products.filter((product) => {
      // console.log(product.category)
      console.log(filtersContext.category)

      return (
        (product.category.includes(filtersContext.category.toLowerCase()) ||
          filtersContext.category === 'all') &&
        product.price >= filtersContext.minPrice
      )
    })
    console.log(filteredProducts)
    setProducts(filteredProducts)
  }
  , [filtersContext.minPrice, filtersContext.category])

  return (
    <section>
      <ul className='list-products'>
        {products.map((product) => {
          return (
            <li className='item-list-product' key={product.id}>
              <h2>{product?.title}</h2>
              <img className='product-image' src={product.image} alt={`The image of a ${product.title}`} />
              <h2>${product?.price}</h2>
              <button>Add to cart</button>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
