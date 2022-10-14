import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import fetchTvShowSeasonBySeasonNumber from "src/functions/fetchTvShowSeasonBySeasonNumber"

interface IProps {
  tvShowId: any
  seasonNumber: number
  seasonData: any
}

const TvShowSeason = ({ seasonNumber, tvShowId, seasonData }: IProps) => {
  const { data: tvShowSeason, isLoading } = useQuery(
    ["tvShowSeason", tvShowId, seasonNumber],
    () => fetchTvShowSeasonBySeasonNumber(tvShowId, seasonNumber)
  ) as any
  console.log(tvShowSeason, "tvShowSeason")
  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <div className="py-2 flex flex-col gap-2">
      {/* {tvShowSeason.data.episodes.map((episode: any) => (
        <div key={episode.id}>
          <div className="w-2/4">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${episode.still_path}`}
              alt={episode.name}
              width={500}
              height={500}
            />
          </div>
          <p>{episode.name}</p>
          <p>{episode.overview}</p>
          <p>{episode.air_date}</p>
          <p>{episode.episode_number}</p>
        </div>
      ))} */}
      <div className="flex flex-row items-center gap-2">
        <p className="capitalize text-sm">season number:</p>
        <span>{seasonNumber}</span>
      </div>
      <div className="flex flex-row items-center gap-2">
        <p className="capitalize text-sm">season air date:</p>
        <span>{seasonData.air_date}</span>
      </div>
      <div>
        <p className="capitalize text-sm">season overview:</p>
        {/* <p className="text-sm">{seasonData.overview}</p> */}
      </div>
      <div className="flex flex-row items-center gap-2">
        <p className="capitalize text-sm">number of episodes:</p>
        <span>{seasonData.episode_count}</span>
      </div>
    </div>
  )
}
export default TvShowSeason
