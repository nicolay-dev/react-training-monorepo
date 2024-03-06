export function Movie ({ movie }) {
  return (
    <>
      <h3 className='movie-text'>{movie.Title}</h3>
      <p className='movie-text'>{movie.Year}</p>
      <img src={movie.Poster} alt={`The Poster for the movie: ${movie.Title}`} className='movie-poster' />
    </>
  )
}
