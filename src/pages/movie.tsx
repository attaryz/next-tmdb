import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { fetchMovieById } from "src/functions/fetchMovieById"
import { RootObject } from "src/types/movieTypes"
import { time_convert } from "src/utils/time_convert"

export default function Movie() {
  const movieId: string = "718930"

  const { data: movies, isLoading } = useQuery(["movie", movieId], () =>
    fetchMovieById(movieId)
  ) as any
  console.log(movies, "query")

  if (isLoading) {
    return <div>...</div>
  }

  return (
    <div className="mx-4 my-8">
      {[movies.data].map((movie: RootObject) => (
        <div key={movie?.id} className="flex flex-col ">
          <div className="w-2/4">
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie?.title}
              width={500}
              height={500}
            />
          </div>
          <div className="my-4">
            <h1 className="text-2xl">{movie?.title}</h1>
            <p className="text-xs">{movie?.tagline}</p>
          </div>
          <p>{time_convert(movie.runtime)}</p>
          <p>{movie?.overview}</p>
          <div className="flex flex-row gap-2">
            <div className="flex flex-row gap-2 items-center">
              <p>Budget:</p>
              <p>
                {movie.budget.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p>Revenue:</p>
              <p>
                {movie?.revenue.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
