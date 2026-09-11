import {
  FiHome,
  FiPlusCircle,
  FiUser,
  FiSettings,
} from "react-icons/fi";

const OwnerBottomNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white md:hidden">
      <div className="flex h-16 items-center justify-around">
        <button className="flex flex-col items-center gap-1 text-green-600">
          <FiHome size={20} />
          <span className="text-xs">Home</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiPlusCircle size={20} />
          <span className="text-xs">Add</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiUser size={20} />
          <span className="text-xs">Profile</span>
        </button>

        <button className="flex flex-col items-center gap-1 text-gray-500">
          <FiSettings size={20} />
          <span className="text-xs">Settings</span>
        </button>
      </div>
    </nav>
  );
};

export default OwnerBottomNav;