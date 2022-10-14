import axios from "axios"
export function fetchMovieById(id: string) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}`
  )
}
