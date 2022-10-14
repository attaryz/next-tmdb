import { useQuery } from "@tanstack/react-query"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import PopularMovies from "src/components/Movies/PopularMovies"
import PopularTvShows from "src/components/TvShows/PopulatTvShows"
import { fetchPopularMovies } from "src/functions/fetchPopularMovies"

const Home: NextPage = () => {
  return (
    <div className="flex flex-col gap-4 mx-4 my-4">
      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold">Popular Movies</h1>
        <PopularMovies />
      </div>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-3xl font-bold">Popular TvShows</h1>
        <PopularTvShows />
      </div>
    </div>
  )
}

export default Home
