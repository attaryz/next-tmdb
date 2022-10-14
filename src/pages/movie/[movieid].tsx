import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import { useRouter } from "next/router"
import Badge from "src/components/Badge"
import Layout from "src/components/Layout"
import { fetchMovieById } from "src/functions/fetchMovieById"
import fetchMovieImagesById from "src/functions/fetchMovieImagesById"
import { RootObject } from "src/types/movieTypes"
import { time_convert } from "src/utils/time_convert"

export default function Movie() {
  const router = useRouter()
  const movieId: string = router.query.movieid as string

  const { data: movies, isLoading } = useQuery(["movie", movieId], () =>
    fetchMovieById(movieId)
  ) as any
  console.log(movies?.data, "query")

  const { data: movieImages, isLoading: movieImagesLoading } = useQuery(
    ["movieImages", movieId],
    () => fetchMovieImagesById(movieId)
  ) as any

  console.log(movieImages?.data, "movieImages")

  if (isLoading) {
    return <div>...</div>
  }

  return (
    <Layout>
      <div className="mx-4 my-8">
        {[movies.data].map((movie: RootObject) => (
          <div key={movie?.id} className="grid grid-cols-2 items-start">
            <div className="items-center justify-center flex">
              <Image
                className="rounded-md bg-contain"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie?.title}
                width={400}
                height={500}
              />
            </div>
            <div>
              <div className="">
                <h1 className="text-2xl">{movie?.title}</h1>
                <p className="text-xs">{movie?.tagline}</p>
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex flex-row items-center gap-2">
                  <p className="font-semibold">Status:</p>
                  <p className="">{movie.status}</p>
                </div>
                <div className="flex flex-row gap-2">
                  <p className="font-semibold">Release Date:</p>
                  <p>{movie.release_date}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-semibold">Runtime:</p>
                  <p>{time_convert(movie.runtime)}</p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-semibold">Language:</p>
                  <p className="capitalize text-sm">
                    {movie.original_language}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex gap-2">
                <p className="font-semibold">Genre:</p>
                {movie.genres.map((genre) => (
                  <Badge key={genre.id}>{genre.name}</Badge>
                ))}
              </div>
              <div className="flex flex-col gap-2 mt-8">
                <p className="font-semibold">Description:</p>
                <p>{movie?.overview}</p>
              </div>
              <div className="flex flex-row gap-2 mt-4">
                <div className="flex flex-row gap-2 items-center">
                  <p className="font-semibold">Budget:</p>
                  <p>
                    {movie.budget.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <p className="font-semibold">Revenue:</p>
                  <p>
                    {movie?.revenue.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <>
          {movieImagesLoading ? (
            <div>...</div>
          ) : (
            <div className="flex flex-col gap-4 mt-8">
              <h1 className="text-xl font-semibold">Images</h1>
              <div className="grid grid-cols-4 gap-2">
                {movieImages?.data?.backdrops.map((image: any) => (
                  <div
                    key={image.file_path}
                    className="flex items-center justify-center">
                    <Image
                      className="rounded-md bg-contain"
                      src={`https://image.tmdb.org/t/p/w500/${image.file_path}`}
                      alt={image.file_path}
                      width={400}
                      height={200}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      </div>
    </Layout>
  )
}
