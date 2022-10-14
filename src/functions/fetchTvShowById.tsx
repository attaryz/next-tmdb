import axios from "axios"
export function fetchTvShowById(id: string) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}&language=en-US`
    // &language=en-US`
  )
}
