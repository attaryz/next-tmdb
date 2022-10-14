import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/router"
import { fetchTvShowById } from "src/functions/fetchTvShowById"
import { RootObject, Season } from "src/types/tvShowTypes"
import TvShowSeason from "src/components/TvShows/TvshowSeason"
import Layout from "src/components/Layout"

export default function TvShow() {
  const [seasonNumber, setSeasonNumber] = useState<number>(1)
  const [showSeason, setShowSeason] = useState<boolean>(false)
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
    <Layout>
      <div>
        {[tvShows.data].map((tvShow: RootObject) => (
          <div key={tvShow.id}>
            <div className="w-2/4">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt={tvShow?.name}
                width={500}
                height={500}
              />
            </div>
            <h1 className="text-6xl">{tvShow?.name}</h1>
            <p>{tvShow?.tagline}</p>
            <p>{tvShow?.overview}</p>
            <div className="flex flex-row gap-2">
              <p>{tvShow?.first_air_date}</p>
              <span>-</span>
              <p>{tvShow.last_air_date}</p>
            </div>
            <p>{tvShow.status}</p>
            <p>{tvShow?.popularity}</p>
            <div className="mt-8 mb-4">
              <h1 className="text-2xl">Seasons:</h1>
              <div className="grid grid-cols-4 gap-2 mx-4 items-center">
                {tvShow?.seasons.map((season: Season) => (
                  <div
                    key={season.id}
                    className="flex flex-col items-center rounded-md p-2">
                    <div
                      onClick={() => {
                        setSeasonNumber(season.season_number)
                        setShowSeason(true)
                      }}>
                      <p>{season.name}</p>
                      {/* <p>{season.overview}</p> */}
                      <p>{season.air_date}</p>
                      {/* <p>{season.episode_count}</p> */}
                      <div className="w-2/4">
                        <Image
                          className="bg-cover"
                          src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                          alt={season.name}
                          width={500}
                          height={500}
                          layout="intrinsic"
                        />
                      </div>
                    </div>
                    <div>
                      <TvShowSeason
                        seasonData={season}
                        seasonNumber={season.season_number}
                        tvShowId={tvShow.id}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
