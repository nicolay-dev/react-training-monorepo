import { useMovies } from '../hooks/useMovies'
import { MoviesList } from './MoviesList'
import { useEffect, useState } from 'react'

export function Movies ({ searchText, isSort }) {
  const { getMovies, sortMovies } = useMovies()
  const [movies, setMovies] = useState([])

  useEffect(() => {
    getMovies({ searchText, isSort }).then(
      response => setMovies(response)
    )
  }, [searchText])

  useEffect(() => {
    const newMovies = sortMovies({ searchText, isSort })
    setMovies(newMovies)
  }, [isSort])

  return (
    <>
      <section className='movies-section'>
        {
        !movies?.length > 0
          ? <p>No movies Found</p>
          : <MoviesList movies={movies} />
      }
      </section>
    </>
  )
}
