import {
  FiHome,
  FiSearch,
  FiHeart,
  FiCalendar,
  FiUser,
} from "react-icons/fi";

const TenantBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200">
      <div className="flex items-center justify-around h-16">

        <button className="flex flex-col items-center gap-1 text-green-500">
          <FiHome className="text-xl" />
          <span className="text-[10px]">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiSearch className="text-xl" />
          <span className="text-[10px]">Explore</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiHeart className="text-xl" />
          <span className="text-[10px]">Saved</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiCalendar className="text-xl" />
          <span className="text-[10px]">Bookings</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiUser className="text-xl" />
          <span className="text-[10px]">Profile</span>
        </button>

      </div>
    </nav>
  );
};

export default TenantBottomNav;