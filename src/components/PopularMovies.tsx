import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { fetchPopularMovies } from "src/functions/fetchPopularMovies"

const PopularMovies = () => {
  const { data: popularMovies, isLoading } = useQuery(["popularMovies"], () =>
    fetchPopularMovies()
  ) as any
  console.log(popularMovies, "popularMovies")

  if (isLoading) {
    return <div>Loading ...</div>
  }
  return (
    <div className="grid grid-cols-4 gap-4">
      {popularMovies.data.results.map((movie: any) => (
        <div key={movie.id}>
          <Link href={`movie/${movie.id}`} passHref>
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie?.title}
                width={500}
                height={500}
              />
              <h1>{movie.title}</h1>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PopularMovies
