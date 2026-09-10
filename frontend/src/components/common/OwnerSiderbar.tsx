import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuth } from "../../context/useAuth";

import {
  FiHome,
  FiBriefcase,
  FiClipboard,
  FiMessageCircle,
  FiDollarSign,
  FiBell,
  FiSettings,
  FiLogOut,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

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
        ${collapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
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

const OwnerSiderbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navigate = useNavigate();

  const { currentUser, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const userInitial =
    currentUser?.firstname?.charAt(0).toUpperCase() || "?";

  return (
    <aside
      className={`
        hidden md:flex
        h-screen
        flex-col
        bg-white
        border-r border-gray-200
        transition-all duration-300
        shrink-0
        sticky top-0
        ${isCollapsed ? "w-20" : "w-65"}
      `}
    >
      {/* Logo */}
      <div
        className={`
          h-20
          flex
          items-center
          border-b border-gray-100
          ${isCollapsed ? "justify-center" : "px-6"}
        `}
      >
        {!isCollapsed ? (
          <h1 className="text-xl font-bold text-green-600">
            QuickStay
          </h1>
        ) : (
          <span className="text-xl font-bold text-green-600">
            Q
          </span>
        )}
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
            flex
            items-center
            ${isCollapsed ? "justify-center" : "gap-3"}
          `}
        >
          {/* User Initial */}
          <div
            className="
              w-11
              h-11
              rounded-full
              bg-green-100
              text-green-600
              flex
              items-center
              justify-center
              font-semibold
              text-lg
              shrink-0
            "
          >
            {userInitial}
          </div>

          {!isCollapsed && (
            <div className="min-w-0">
              <h2 className="text-sm font-semibold text-gray-800 truncate">
                {currentUser?.firstname} {currentUser?.lastname}
              </h2>

              <p className="text-xs text-gray-500">
                Property Owner
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {!isCollapsed && (
          <p className="px-4 mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Navigation
          </p>
        )}

        <SidebarLink
          icon={<FiHome />}
          label="Home"
          to="/owner/"
          collapsed={isCollapsed}
        />

        <SidebarLink
          icon={<FiBriefcase />}
          label="My Properties"
          to="/owner/properties"
          collapsed={isCollapsed}
        />

        <SidebarLink
          icon={<FiClipboard />}
          label="Requests"
          to="/owner/requests"
          collapsed={isCollapsed}
        />

        <SidebarLink
          icon={<FiMessageCircle />}
          label="Messages"
          to="/owner/messages"
          collapsed={isCollapsed}
        />

        <SidebarLink
          icon={<FiDollarSign />}
          label="Earnings"
          to="/owner/earnings"
          collapsed={isCollapsed}
        />

        <SidebarLink
          icon={<FiBell />}
          label="Notifications"
          to="/owner/notifications"
          collapsed={isCollapsed}
        />

        <SidebarLink
          icon={<FiSettings />}
          label="Settings"
          to="/owner/settings"
          collapsed={isCollapsed}
        />
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-100">
        <button
          onClick={handleLogout}
          className={`
            w-full
            flex
            items-center
            rounded-xl
            text-gray-600
            hover:bg-red-50
            hover:text-red-500
            transition
            ${isCollapsed ? "justify-center p-3" : "gap-3 px-4 py-3"}
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

      {/* Collapse Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="
          absolute
          top-24
          -right-3
          w-7
          h-7
          rounded-full
          bg-white
          border
          border-gray-200
          shadow-sm
          flex
          items-center
          justify-center
          text-gray-500
          hover:text-green-600
          transition
        "
      >
        {isCollapsed ? (
          <FiChevronRight />
        ) : (
          <FiChevronLeft />
        )}
      </button>
    </aside>
  );
};

export default OwnerSiderbar;

// /owner/
// /owner/properties
// /owner/requests
// /owner/messages
// /owner/earnings
// /owner/notifications
// /owner/settings
