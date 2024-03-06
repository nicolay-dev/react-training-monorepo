import { useState } from 'react'

export function useMovies () {
  const API_BASE_URL = 'https://www.omdbapi.com'
  const API_KEY = '998914f4'
  const [movies, setMovies] = useState([])

  const getMovies = async ({ searchText, isSort }) => {
    if (!searchText) return
    console.log(searchText)
    const API_URL = `${API_BASE_URL}/?apikey=${API_KEY}&s=${searchText}`
    const response = await fetch(API_URL)
    const data = await response.json()
    const newMovies = data.Search
    setMovies(newMovies)
    return isSort ? sortMovies({ isSort, newMovies }) : data.Search
  }

  const sortMovies = ({ isSort, newMovies }) => {
    if (isSort && movies) {
      let orderedMovies = newMovies ? [...newMovies] : [...movies]
      orderedMovies = orderedMovies.sort((movie, nextMovie) => movie.Title > nextMovie.Title ? 1 : -1)
      return orderedMovies
    } else {
      return movies
    }
  }

  return { getMovies, sortMovies }
}
