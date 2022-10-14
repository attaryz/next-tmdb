import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <Link href="/" passHref>
        <h1 className="text-xl">Home</h1>
      </Link>
    </nav>
  )
}
export default Navbar
