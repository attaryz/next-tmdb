import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/router"
import { fetchTvShowById } from "src/functions/fetchTvShowById"
import { RootObject, Season } from "src/types/tvShowTypes"
import TvShowSeason from "src/components/TvShows/TvshowSeason"
import Layout from "src/components/Layout"
import Badge from "src/components/Badge"

export default function TvShow() {
  const [seasonNumber, setSeasonNumber] = useState<number>(1)
  const [showSeason, setShowSeason] = useState<boolean>(false)
  const router = useRouter()
  const tvShowId: string = router.query.tvshowid as string

  const { data: tvShows, isLoading } = useQuery(["tvShow", tvShowId], () =>
    fetchTvShowById(tvShowId)
  ) as any
  console.log(tvShows?.data, "tv")

  if (isLoading) {
    return <div>...</div>
  }
  return (
    <Layout>
      <div className="mx-4 my-8">
        {[tvShows.data].map((tvShow: RootObject) => (
          <>
            <div key={tvShow.id} className="grid grid-cols-2 items-start">
              <div className="items-center justify-center flex">
                <Image
                  className="rounded-md bg-contain"
                  src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                  alt={tvShow?.name}
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <h1 className="text-2xl">{tvShow?.name}</h1>
                <p>{tvShow?.tagline}</p>
                <div className="flex flex-col gap-2 mt-8">
                  <p className="font-semibold">Description:</p>
                  <p>{tvShow?.overview}</p>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <div className="flex flex-row gap-2 items-center">
                    <p className="font-semibold">Release Date:</p>
                    <p>{tvShow?.first_air_date}</p>
                  </div>
                  <div className="flex flex-row gap-2 items-center">
                    <p className="font-semibold">End Date:</p>
                    <p>{tvShow.last_air_date}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p className="font-semibold">Status:</p>
                  <p>{tvShow.status}</p>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <p className="font-semibold">Popularity:</p>
                  <p>{tvShow?.popularity}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-semibold">Language:</p>
                  <p className="capitalize text-sm">
                    {tvShow.original_language}
                  </p>
                </div>
                <div className="mt-4 flex gap-2">
                  <p className="font-semibold">Genre:</p>
                  {tvShow.genres.map((genre) => (
                    <Badge key={genre.id}>{genre.name}</Badge>
                  ))}
                </div>

                <div className="mt-4">
                  {tvShow.networks.map((network) => (
                    <div key={network.id} className="flex flex-row gap-4">
                      <p className="font-semibold">Network:</p>
                      <p>{network.name}</p>
                      {/* <Image
                        className="rounded-md bg-contain"
                        src={`https://image.tmdb.org/t/p/w500/${network.logo_path}`}
                        alt={network.name}
                        width={100}
                        height={50}
                      /> */}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8 mb-4">
              <h1 className="text-2xl">Seasons:</h1>
              <div className="grid grid-cols-4 gap-2 mx-4 items-center">
                {tvShow?.seasons.map((season: Season) => (
                  <div key={season.id} className="flex flex-col rounded-md p-2">
                    <div
                      onClick={() => {
                        setSeasonNumber(season.season_number)
                        setShowSeason(true)
                      }}>
                      <div className="">
                        <Image
                          className="rounded-md bg-contain"
                          src={`https://image.tmdb.org/t/p/w500/${season.poster_path}`}
                          alt={season.name}
                          width={400}
                          height={200}
                        />
                      </div>
                      <p>{season.name}</p>
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
          </>
        ))}
      </div>
    </Layout>
  )
}
