import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/router"
import { fetchTvShowById } from "src/functions/fetchTvShowById"
import { RootObject } from "src/types/tvShowTypes"

export default function TvShow() {
  const router = useRouter()
  const tvShowId: string = router.query.tvshowid as string

  const { data: tvShows, isLoading } = useQuery(["tvShow", tvShowId], () =>
    fetchTvShowById(tvShowId)
  ) as any
  console.log(tvShows, "tv")

  if (isLoading) {
    return <div>...</div>
  }
  return (
    <div>
      {[tvShows.data].map((tvShow: RootObject) => (
        <div key={tvShow.id}>
          <h1>{tvShow?.name}</h1>
          <div className="w-2/4">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
              alt={tvShow?.name}
              width={500}
              height={500}
            />
          </div>
          <p>{tvShow?.tagline}</p>
          <p>{tvShow?.overview}</p>
          <div className="flex flex-row gap-2">
            <p>{tvShow?.first_air_date}</p>
            <span>-</span>
            <p>{tvShow.last_air_date}</p>
          </div>
          <p>{tvShow.status}</p>
          <p>{tvShow?.popularity}</p>
        </div>
      ))}
    </div>
  )
}
