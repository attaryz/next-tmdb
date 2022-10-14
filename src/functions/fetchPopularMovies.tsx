import axios from "axios"
export function fetchPopularMovies() {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}&language=en-US&page=1`
  )
}
