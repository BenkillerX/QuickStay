import { MdVerifiedUser } from "react-icons/md"

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center justify-center bg-[url('./assets/images/QuickStay1.jpg')] bg-cover bg-center">

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 w-[85%]">

        {/* Badge */}
        <span className="inline-flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-sm text-white">
          <MdVerifiedUser size={20} className="text-orange-500" />
          Verified properties. Flexible stays. Secure booking
        </span>

        {/* Heading */}
        <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
          Find A Place You Trust
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-lg font-bold text-white md:text-xl">
          Comfortable homes, verified properties and flexible stays — all in
          one place.
        </p>

        {/* Search */}
       <div className="mt-10 flex w-full max-w-250 flex-col gap-5 rounded-2xl bg-white px-6 py-5 md:flex-row md:items-end md:gap-4">

  <div className="flex min-w-0 flex-1 flex-col gap-2">
    <label>Destination</label>
    <input
      type="text"
      placeholder="Where are you going?"
      className="w-full outline-none"
    />
  </div>

  <div className="flex min-w-0 flex-1 flex-col gap-2">
    <label>Check-In</label>
    <input
      type="date"
      className="w-full outline-none"
    />
  </div>

  <div className="flex min-w-0 flex-1 flex-col gap-2">
    <label>Check-Out</label>
    <input
      type="date"
      className="w-full outline-none"
    />
  </div>

  <div className="flex min-w-0 flex-1 flex-col gap-2">
    <label>Guest</label>
    <input
      type="number"
      min="1"
      placeholder="1"
      className="w-full outline-none"
    />
  </div>

  <button className="shrink-0 cursor-pointer rounded-lg bg-orange-500 px-6 py-3 text-white">
    Search
  </button>

        </div>

        {/* Verified information */}
        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm text-white">
          <span>
            <MdVerifiedUser size={15} className="mr-1 inline-block text-orange-500" />
            Verified Properties
          </span>

          <span>
            <MdVerifiedUser size={15} className="mr-1 inline-block text-orange-500" />
            Secured Bookings
          </span>

          <span>
            <MdVerifiedUser size={15} className="mr-1 inline-block text-orange-500" />
            Flexible Stays
          </span>

          <span>
            <MdVerifiedUser size={15} className="mr-1 inline-block text-orange-500" />
            24/7 Support
          </span>
        </div>

      </div>
    </section>
  )
}

export default HeroSection