import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between mx-8 my-2 border-y border-gray-600 px-4 py-4 rounded-md">
      <Link href="/" passHref>
        <h1 className="text-xl cursor-pointer">Home</h1>
      </Link>
      <div className="flex flex-row gap-4 items-center">
        <Link href="/movie" passHref>
          <h1 className="text-xl cursor-pointer">Movies</h1>
        </Link>
        <Link href="/tvshow" passHref>
          <h1 className="text-xl cursor-pointer">Tv Shows</h1>
        </Link>
      </div>
    </nav>
  )
}
export default Navbar
