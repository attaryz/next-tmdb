import axios from "axios"
export default function fetchMovieImagesById(id: string) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}/images?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}`
  )
}
