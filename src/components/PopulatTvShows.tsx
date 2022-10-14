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
    <div className="grid grid-cols-4 gap-4">
      {popularTvShows.data.results.map((tvShow: any) => (
        <div key={tvShow.id}>
          <Link href={`tvshow/${tvShow.id}`} passHref>
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${tvShow.poster_path}`}
                alt={tvShow?.name}
                width={500}
                height={500}
              />
              <h1>{tvShow.name}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularTvShows
