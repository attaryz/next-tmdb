import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { fetchPopularMovies } from "src/functions/fetchPopularMovies"
import { RootObject } from "src/types/movieTypes"

const PopularMovies = () => {
  const { data: popularMovies, isLoading } = useQuery(["popularMovies"], () =>
    fetchPopularMovies()
  ) as any
  console.log(popularMovies, "popularMovies")

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <div className="grid grid-cols-10 gap-4">
      {popularMovies.data.results.map((movie: RootObject) => (
        <div key={movie.id} className="border border-gray-50 rounded-lg">
          <Link href={`movie/${movie.id}`} passHref>
            <div>
              <Image
                className="rounded-lg"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie?.title}
                width={200}
                height={300}
              />
              <div className="p-2">
                <p className="text-xs">{movie.title}</p>
                <span className="text-xs text-yellow-500">
                  {movie.vote_average}
                </span>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularMovies
