import axios from "axios"
export default function fetchTvShowsAiringToday() {
  return axios.get(
    `https://api.themoviedb.org/3/tv/airing_today?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}&language=en-US&page=1`
  )
}
