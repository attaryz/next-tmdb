import { useQuery } from "@tanstack/react-query"
import type { NextPage } from "next"
import Image from "next/image"
import Link from "next/link"
import HomePageSections from "src/components/HomePageSections"
import PopularMovies from "src/components/Movies/PopularMovies"
import TvShowsAiringToday from "src/components/TvShows/AiringTodayTvShows"
import PopularTvShows from "src/components/TvShows/PopulatTvShows"
import { fetchPopularMovies } from "src/functions/fetchPopularMovies"
import Layout from "src/components/Layout"
const Home: NextPage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-4 mx-4 my-4">
        <HomePageSections title={"Popular Movies"}>
          <PopularMovies />
        </HomePageSections>
        <HomePageSections title={"Popular TvShows"}>
          <PopularTvShows />
        </HomePageSections>
        <HomePageSections title={"TvShows Airing Today"}>
          <TvShowsAiringToday />
        </HomePageSections>
      </div>
    </Layout>
  )
}

export default Home
