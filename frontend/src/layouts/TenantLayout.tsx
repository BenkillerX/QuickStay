import { Outlet } from "react-router-dom";
import TenantSidebar from "../components/common/TenantSidebar";
import TenantBottomNav from "../components/common/TenantBottomNav";

const TenantLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop / Tablet */}
      <div className="flex min-h-screen">
        <TenantSidebar />

        <main className="min-w-0 flex-1 pb-16 md:pb-0">
          <Outlet />
        </main>
      </div>

      {/* Mobile */}
      <TenantBottomNav />
    </div>
  );
};

export default TenantLayout;  