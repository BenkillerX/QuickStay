import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { NavLink } from "react-router-dom";
import {
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
  FiHome,
  FiBell,
  FiHeart,
  FiClipboard,
  FiMessageCircle,
  FiSettings,
} from "react-icons/fi";
const TenantSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside
      className={`hidden md:flex h-screen flex-col  bg-white border-r border-gray-200 transition-all duration-300 shrink-0
        ${isCollapsed ? "w-25" : "w-65]"}
      `}
    >
      {/* Header */}
      <div
        className={`
          flex items-center
          p-5
          border-b border-gray-100
          ${isCollapsed ? "justify-center" : "justify-between"}
        `}
      >
       {/* Logo */}
      <div
        className={`flex items-center ml-6 ${
          isCollapsed ? "justify-center" : "gap-2"
        }`}
      >
        <img
          src="/images/Quick4.jpg"
          alt="QuickStay"
          className="w-10 h-10 rounded-lg object-cover shrink-0 "
        />

        {!isCollapsed && (
          <h1 className="font-semibold text-gray-800 whitespace-nowrap">
            Green
            <span className="text-green-500">SpringHome</span>
          </h1>
        )}
      </div>

        {/* Collapse button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      {/* Profile */}
      <div
        className={`
          p-5
          border-b border-gray-100
          ${isCollapsed ? "flex justify-center" : ""}
        `}
      >
        <div
          className={`
            flex items-center
            ${isCollapsed ? "justify-center" : "gap-3"}
          `}
        >
          <img
            src="/images/Quick4.jpg"
            alt="User"
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />

          {!isCollapsed && (
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-gray-800 truncate">
                Akhere Benedict
              </h2>

              <p className="text-xs text-gray-500">
                Renter
              </p>
            </div>
          )}

          {!isCollapsed && (
            <button className="ml-auto p-1 text-gray-400 hover:text-gray-700">
              <FiChevronRight />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
     <nav className="flex-1 p-4 space-y-2">
  <SidebarLink
    icon={<FiHome />}
    label="Home"
    to="/tenant/"
    collapsed={isCollapsed}
  />

  <SidebarLink
    icon={<FiBell />}
    label="Notifications"
    to="/tenant/notifications"
    collapsed={isCollapsed}
  />

  <SidebarLink
    icon={<FiHeart />}
    label="Saved"
    to="/tenant/saved-properties"
    collapsed={isCollapsed}
  />

  <SidebarLink
    icon={<FiClipboard />}
    label="Inspections"
    to="/tenant/inspections"
    collapsed={isCollapsed}
  />

  <SidebarLink
    icon={<FiMessageCircle />}
    label="Messages"
    to="/tenant/messages"
    collapsed={isCollapsed}
  />

  <SidebarLink
    icon={<FiSettings />}
    label="Settings"
    to="/tenant/settings"
    collapsed={isCollapsed}
  />
</nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className={`
            w-full
            flex items-center
            rounded-xl
            text-gray-600
            hover:bg-red-50
            hover:text-red-500
            transition
            ${isCollapsed
              ? "justify-center p-3"
              : "gap-3 px-4 py-3"
            }
          `}
        >
          <FiLogOut className="text-lg shrink-0" />

          {!isCollapsed && (
            <span className="text-sm font-medium">
              Logout
            </span>
          )}
        </button>
      </div>
    </aside>
  );
};

type SidebarLinkProps = {
  icon: React.ReactNode;
  label: string;
  to: string;
  collapsed: boolean;
};

const SidebarLink = ({
  icon,
  label,
  to,
  collapsed,
}: SidebarLinkProps) => {

  return (
    <NavLink
      to={to}
      className={({ isActive }) => `
        w-full
        flex
        items-center
        rounded-xl
        transition
        ${collapsed
          ? "justify-center p-3"
          : "gap-3 px-4 py-3"
        }
        ${
          isActive
            ? "bg-green-50 text-green-600"
            : "text-gray-600 hover:bg-gray-50 hover:text-green-600"
        }
      `}
    >
      <span className="text-lg shrink-0">
        {icon}
      </span>

      {!collapsed && (
        <span className="text-sm font-medium">
          {label}
        </span>
      )}
    </NavLink>
  );
};

export default TenantSidebar;