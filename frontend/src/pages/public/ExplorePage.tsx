import { Link } from "react-router-dom"
import {
  FiHome,
} from "react-icons/fi";
const ExplorePage = () => {
  return (
   <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-gray-50 px-5">

  {/* Background decoration */}
  <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-100 blur-3xl" />
  <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-green-100 blur-3xl" />

  {/* Content */}
  <div className="relative z-10 max-w-xl text-center">

    {/* Icon */}
    <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-green-100 text-green-600 shadow-sm">
      <FiHome size={38} />
    </div>

    {/* Badge */}
    <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
      <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
      Coming Soon
    </div>

    {/* Heading */}
    <h1 className="mt-5 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
      Something great is
      <span className="text-green-600"> coming.</span>
    </h1>

    {/* Description */}
    <p className="mx-auto mt-5 max-w-lg text-base leading-7 text-gray-500 sm:text-lg">
      We're putting the finishing touches on the QuickStay Explore
      experience. Soon you'll be able to discover verified properties and
      find your perfect place with ease.
    </p>

    {/* Progress */}
    <div className="mx-auto mt-8 max-w-sm">
      <div className="mb-2 flex items-center justify-between text-xs font-medium text-gray-500">
        <span>Building the experience</span>
        <span className="text-green-600">Coming soon</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-gray-200">
        <div className="h-full w-3/4 rounded-full bg-green-600" />
      </div>
    </div>

    {/* CTA */}
    <div className="mt-9 flex flex-wrap justify-center gap-3">
      <Link
        to="/"
        className="rounded-xl bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-green-700"
      >
        Back to Home
      </Link>

      <Link
        to="/help"
        className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:border-green-200 hover:bg-green-50 hover:text-green-700"
      >
        Get Help
      </Link>
    </div>

    {/* Small footer message */}
    <p className="mt-8 text-xs text-gray-400">
      QuickStay · Find a place you trust.
    </p>

  </div>
</div>
  )
}

export default ExplorePage