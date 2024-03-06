import { Movie } from './Movie'

export function MoviesList ({ movies }) {
  return (
    <>
      <ul>
        {movies.map((movie) => {
          return (
            <li key={movie.imdbID}>
              <Movie movie={movie} />
            </li>
          )
        })}
      </ul>
    </>
  )
}
