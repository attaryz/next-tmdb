import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import fetchPopularTvShows from "src/functions/fetchPopularTvShows"

const PopularTvShows = () => {
  const { data: popularTvShows, isLoading } = useQuery(["popularTvShows"], () =>
    fetchPopularTvShows()
  ) as any
  console.log(popularTvShows, "popularTvShows")

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <div className="grid grid-cols-10 gap-4">
      {popularTvShows.data.results.map((tvShow: any) => (
        <div key={tvShow.id} className="border border-gray-50 rounded-lg">
          <Link href={`tvshow/${tvShow.id}`} passHref>
            <div>
              <Image
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt={tvShow?.name}
                width={200}
                height={300}
              />
              <div className="p-2">
                <p className="text-xs">{tvShow.name}</p>
                <span className="text-xs text-yellow-500">
                  {tvShow.vote_average}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularTvShows
