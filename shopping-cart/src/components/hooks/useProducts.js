import { FiltersContext } from '../../context/FiltersContext'
import { useState, useEffect, useContext } from 'react'
import productsMock from '../../mocks/products.json'

export function useProducts () {
  const [products, setProducts] = useState(productsMock.products)
  const filtersContext = useContext(FiltersContext)

  const getProductById = id => products.filter(product => product.id === parseInt(id))[0]

  const cleanCartProperty = () => {
    products.forEach((product) => { product.isOnCart = false })
  }

  useEffect(() => {
    let filteredProducts = products
    filteredProducts = productsMock.products.filter((product) => {
      return (
        (product.category.includes(filtersContext.category.toLowerCase()) ||
            filtersContext.category === 'all') &&
          product.price >= filtersContext.minPrice
      )
    })
    setProducts(filteredProducts)
  }
  , [filtersContext.minPrice, filtersContext.category])

  return { products, getProductById, cleanCartProperty }
}
