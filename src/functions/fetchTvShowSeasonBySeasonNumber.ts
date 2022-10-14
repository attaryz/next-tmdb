import axios from "axios"
export default function fetchTvShowSeasonBySeasonNumber(
  tvshowId: string,
  seasonNumber: number
) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${tvshowId}/season/${seasonNumber}?api_key=${process.env.NEXT_PUBLIC_TMDB_V3_API_KEY}&language=en-US`
  )
}
