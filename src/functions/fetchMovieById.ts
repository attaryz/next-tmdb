import axios from "axios"
export function fetchMovieById(id: string) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}`
  )
}
// const res = axios.get(
//   "https://api.themoviedb.org/3/movie/553?api_key=3fe73a4bbd76c67bfd3a23034a2e25e6"
// )
