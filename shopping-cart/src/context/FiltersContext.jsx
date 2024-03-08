import { createContext, useState } from 'react'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [minPrice, setMinPrice] = useState(0)
  const [category, setCategory] = useState('all')
  return (
    <FiltersContext.Provider value={{ minPrice, category, setMinPrice, setCategory }}>
      {children}
    </FiltersContext.Provider>
  )
}
