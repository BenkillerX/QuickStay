import { Link } from "react-router-dom"

const CTA = () => {
  return (
   <section className="w-full h-50 bg-black flex flex-col justify-center items-center gap-8">
        <h1 className="text-white text-2xl font-medium">Your next stay starts here.</h1>
        <Link to="/" className="px-4 py-2 bg-orange-500 text-white cursor-pointer rounded-xl">
            Explore Homes
        </Link>
    </section>
  )
}

export default CTA