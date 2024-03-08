import { useId, useContext } from 'react'
import './styles/Filters.css'
import { FiltersContext } from '../context/FiltersContext'

export function Filters () {
  //   const [filters, setFilters] = useState({ minPrice: 0, category: '' })
  const { selectId } = useId()
  const filtersContext = useContext(FiltersContext)

  const handleCategoryChange = (event) => {
    filtersContext.setCategory(event.target.value)
  }

  const handleMinPriceChange = (event) => {
    filtersContext.setMinPrice(event.target.value)
  }

  return (
    <>
      <section className='filters-section'>
        <div className='price-filter'>
          <label>Min Value:</label>
          <input
            onChange={handleMinPriceChange}
            type='range'
            min='0'
            max='1000'
          />
          <p>{filtersContext.minPrice}</p>
        </div>
        <select
          onChange={handleCategoryChange}
          name='category'
          id={selectId}
          style={{ fontSize: '15px', textTransform: 'capitalize' }}
        >
          <option value='all' defaultChecked>all</option>
          <option value='electronics'>electronics</option>
          <option value='clothing'>clothing</option>
          <option value='jewelery'>jewelery</option>
        </select>
      </section>
    </>
  )
}
