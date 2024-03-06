import { Movies } from './components/Movies'
import { useState, useCallback } from 'react'
import debounce from 'just-debounce-it'

import '../style.css'

export function App () {
  const [searchText, setSearchText] = useState('')
  const [isSort, setIsSort] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault() // Evite a default reload
    if (!event.target.search.value) return
    setSearchText(event.target.search.value)
  }

  const debounceTextHandle = useCallback(
    debounce(event => {
      handleTextChange(event)
    }, 300),
    [searchText]
  )

  const handleTextChange = (event) => {
    if (!event.target.value) return
    setSearchText(event.target.value)
  }

  const handleSort = (event) => {
    setIsSort(event.target.checked)
  }

  return (
    <>
      <main className='main-content'>
        <h1>Movie Catalog</h1>
        <form onSubmit={handleSubmit}>
          <section className='form-inputs'>
            <label>Movie Title:
              <input name='search' type='text' placeholder='Avengers, Matrix, Avatar' onChange={debounceTextHandle} />
            </label>
            <input name='sort' type='checkbox' onChange={handleSort} value={isSort} />
            <label>
              Order by Title
            </label>
          </section>
          <button className='search-button' type='submit'>Search</button>
        </form>
        <Movies searchText={searchText} isSort={isSort} />
      </main>
    </>

  )
}
