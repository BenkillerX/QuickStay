import {
  FiPlus,
  FiSearch,
  FiFilter,
//   FiMapPin,
//   FiEdit2,
//   FiTrash2,
  FiEye,
//   FiMoreVertical,
  FiHome,
} from "react-icons/fi";
import { Link } from "react-router-dom";

const OwnerProperties = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Page Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Property Management
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            My Properties
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Manage and monitor the properties you've listed on QuickStay.
          </p>
        </div>

        <Link
        to="/owner/properties/add"
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            bg-green-600
            px-5
            py-3
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-green-700
            active:scale-[0.98]
          "
        >
          <FiPlus size={18} />
          Add Property
        </Link>
      </div>


      {/* Overview */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">

        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiHome size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Total Properties
              </p>

              <p className="text-xl font-bold text-gray-900">
                0
              </p>
            </div>
          </div>
        </div>


        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <FiEye size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Active Listings
              </p>

              <p className="text-xl font-bold text-gray-900">
                0
              </p>
            </div>
          </div>
        </div>


        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
              <FiFilter size={20} />
            </div>

            <div>
              <p className="text-xs text-gray-500">
                Inactive
              </p>

              <p className="text-xl font-bold text-gray-900">
                0
              </p>
            </div>
          </div>
        </div>

      </div>


      {/* Search + Filter */}
      <div className="flex flex-col md:flex-row gap-3 mb-6">

        {/* Search */}
        <div className="relative flex-1">

          <FiSearch
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search your properties..."
            className="
              w-full
              rounded-xl
              border
              border-gray-200
              bg-white
              py-3
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-green-500
              focus:ring-2
              focus:ring-green-100
            "
          />
        </div>


        {/* Filter */}
        <button
          className="
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-gray-200
            bg-white
            px-5
            py-3
            text-sm
            font-medium
            text-gray-600
            transition
            hover:bg-gray-50
          "
        >
          <FiFilter size={17} />
          Filter
        </button>

      </div>


      {/* Property Section */}
      <div className="rounded-2xl bg-white border border-gray-100 shadow-sm">

        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-gray-100 p-5">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Your Listings
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Properties you've added to QuickStay
            </p>
          </div>

          <span className="hidden sm:block text-sm text-gray-400">
            0 properties
          </span>

        </div>


        {/* Empty State */}
        <div className="flex flex-col items-center justify-center px-6 py-20 text-center">

          <div
            className="
              flex
              h-20
              w-20
              items-center
              justify-center
              rounded-3xl
              bg-green-50
              text-green-600
              mb-6
            "
          >
            <FiHome size={34} />
          </div>

          <h3 className="text-lg font-semibold text-gray-900">
            No properties yet
          </h3>

          <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
            You haven't added any properties yet. List your first
            property and make it discoverable to people searching
            for homes on QuickStay.
          </p>

          <Link
          to="/owner/properties/add"
            className="
              mt-6
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-green-600
              px-5
              py-3
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-green-700
            "
          >
            <FiPlus size={18} />
            Add Your First Property
          </Link>

        </div>

      </div>


      {/* ------------------------------------------------ */}
      {/* PROPERTY CARD EXAMPLE                            */}
      {/* ------------------------------------------------ */}
      {/* 
        When you connect MongoDB, the empty state above
        will be replaced by a map over your properties.

        Example structure:

        {properties.map((property) => (
          <PropertyCard
            key={property._id}
            property={property}
          />
        ))}
      */}


      {/* Example Property Card */}

      {/*
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 p-5">

        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

          <div className="relative h-52 bg-gray-100">

            <img
              src={property.image}
              alt={property.title}
              className="h-full w-full object-cover"
            />

            <span className="
              absolute
              left-3
              top-3
              rounded-full
              bg-green-100
              px-3
              py-1
              text-xs
              font-semibold
              text-green-700
            ">
              Active
            </span>

            <button className="
              absolute
              right-3
              top-3
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              bg-white/90
              text-gray-600
              shadow-sm
              hover:bg-white
            ">
              <FiMoreVertical size={18} />
            </button>

          </div>


          <div className="p-5">

            <h3 className="font-semibold text-gray-900">
              3 Bedroom Modern Apartment
            </h3>

            <div className="mt-2 flex items-center gap-1 text-sm text-gray-500">
              <FiMapPin size={15} />
              Ikeja, Lagos
            </div>

            <p className="mt-4 text-lg font-bold text-gray-900">
              ₦2,500,000
              <span className="text-xs font-normal text-gray-500">
                {" "} / year
              </span>
            </p>


            <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">

              <span className="text-xs text-gray-500">
                24 views
              </span>

              <div className="flex items-center gap-2">

                <button className="
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-gray-600
                  hover:bg-gray-50
                ">
                  <FiEdit2 size={14} />
                  Edit
                </button>

                <button className="
                  flex
                  items-center
                  gap-1.5
                  rounded-lg
                  px-3
                  py-2
                  text-xs
                  font-medium
                  text-red-500
                  hover:bg-red-50
                ">
                  <FiTrash2 size={14} />
                  Delete
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
      */}

    </div>
  );
};

export default OwnerProperties;
