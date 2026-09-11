import {
  FiHome,
  FiEye,
  // FiUsers,
  FiMessageCircle,
  FiPlus,
  FiArrowRight,
  // FiMapPin,
  FiCalendar,
  FiClock,
} from "react-icons/fi";
import { useAuth } from "../../context/useAuth";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api";

interface Property {
  _id: string;
  title: string;
  price: number;
  images: string[];
  location: {
    state: string;
    city: string;
    area: string;
    address: string;
  };
  status: string;
}


const OwnerHome = () => {
  const {currentUser} = useAuth()
  const [userPorperties, setUserPorperties] = useState<Property[]>([]);
  const userInitial = currentUser?.lastname || "UnKnown";

  useEffect(() => {
  const getUserProperties = async () => {
    try {
      const response = await api.get("/properties/")

      setUserPorperties(response.data.properties)
    } catch (error) {
      console.error(error)
    }
  }

  getUserProperties()
}, [])
  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Owner Dashboard
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Welcome back {userInitial}
          </h1>

          <p className="text-sm text-gray-500 mt-2">
            Manage your properties and connect with potential tenants.
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


      {/* Overview Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

        {/* Properties */}
        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiHome size={20} />
            </div>

            <span className="text-xs font-medium text-gray-400">
              Properties
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            0
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Total properties
          </p>
        </div>


        {/* Views */}
        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiEye size={20} />
            </div>

            <span className="text-xs font-medium text-gray-400">
              Visibility
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            0
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Property views
          </p>
        </div>


        {/* Requests */}
        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiCalendar size={20} />
            </div>

            <span className="text-xs font-medium text-gray-400">
              Requests
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            0
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Inspection requests
          </p>
        </div>


        {/* Messages */}
        <div className="rounded-2xl bg-white border border-gray-100 p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <FiMessageCircle size={20} />
            </div>

            <span className="text-xs font-medium text-gray-400">
              Messages
            </span>
          </div>

          <h2 className="text-2xl font-bold text-gray-900">
            0
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Unread messages
          </p>
        </div>

      </div>


      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* My Properties */}
        <div className="xl:col-span-2 rounded-2xl bg-white border border-gray-100 shadow-sm">

  {/* Header */}
  <div className="flex items-center justify-between p-5 border-b border-gray-100">
    <div>
      <h2 className="text-lg font-semibold text-gray-900">
        My Properties
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Manage your listed properties
      </p>
    </div>

    <button className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700">
      View all
      <FiArrowRight size={16} />
    </button>
  </div>

  {/* Dynamic Content */}
  {userPorperties.length === 0 ? (

    // EMPTY STATE
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-50 text-green-600 mb-5">
        <FiHome size={28} />
      </div>

      <h3 className="text-base font-semibold text-gray-900">
        You haven't listed any properties yet
      </h3>

      <p className="max-w-md text-sm text-gray-500 mt-2">
        Add your first property to start reaching potential
        tenants on QuickStay.
      </p>

      <button
        className="
          mt-6
          inline-flex
          items-center
          gap-2
          rounded-xl
          border
          border-green-600
          px-5
          py-2.5
          text-sm
          font-semibold
          text-green-600
          transition
          hover:bg-green-50
        "
      >
        <FiPlus size={17} />
        List a Property
      </button>

    </div>

  ) : (

    // PROPERTIES
    <div className="p-5">
      {userPorperties.map((property) => (
        <div key={property._id}>
          {property.title}
        </div>
      ))}
    </div>

  )}

</div>


        {/* Quick Actions */}
        <div className="rounded-2xl bg-white border border-gray-100 shadow-sm">

          <div className="p-5 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">
              Quick Actions
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Manage your QuickStay activity
            </p>
          </div>


          <div className="p-4 space-y-2">

            <button className="group flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:bg-gray-50">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-50 text-green-600">
                <FiPlus size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Add Property
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  List a new property
                </p>
              </div>

              <FiArrowRight
                size={17}
                className="text-gray-400 transition group-hover:translate-x-1"
              />
            </button>


            <button className="group flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:bg-gray-50">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <FiHome size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Manage Properties
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  View and edit your listings
                </p>
              </div>

              <FiArrowRight
                size={17}
                className="text-gray-400 transition group-hover:translate-x-1"
              />
            </button>


            <button className="group flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:bg-gray-50">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-600">
                <FiCalendar size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Inspection Requests
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  See tenant requests
                </p>
              </div>

              <FiArrowRight
                size={17}
                className="text-gray-400 transition group-hover:translate-x-1"
              />
            </button>


            <button className="group flex w-full items-center gap-4 rounded-xl p-4 text-left transition hover:bg-gray-50">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                <FiMessageCircle size={19} />
              </div>

              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Messages
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Chat with potential tenants
                </p>
              </div>

              <FiArrowRight
                size={17}
                className="text-gray-400 transition group-hover:translate-x-1"
              />
            </button>

          </div>
        </div>

      </div>


      {/* Recent Activity */}
      <div className="mt-6 rounded-2xl bg-white border border-gray-100 shadow-sm">

        <div className="flex items-center justify-between p-5 border-b border-gray-100">

          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Activity
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Stay updated on your properties
            </p>
          </div>

          <button className="flex items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700">
            View all
            <FiArrowRight size={16} />
          </button>

        </div>


        {/* Empty Activity */}
        <div className="flex flex-col items-center justify-center py-14 px-6 text-center">

          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-100 text-gray-400 mb-4">
            <FiClock size={23} />
          </div>

          <h3 className="text-sm font-semibold text-gray-800">
            No recent activity
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            Your property activity will appear here.
          </p>

        </div>

      </div>

    </div>
  );
};

export default OwnerHome;

