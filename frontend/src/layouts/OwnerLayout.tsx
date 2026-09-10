import { Outlet } from "react-router-dom";
import OwnerSiderbar from "../components/common/OwnerSiderbar";
import OwnerBottomNav from "../components/common/OwnerBottomNav";

const OwnerLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-screen">
        <OwnerSiderbar />

        <main className="min-w-0 flex-1 pb-16 md:pb-0">
          <Outlet />
        </main>
      </div>

      <OwnerBottomNav />
    </div>
  );
};

export default OwnerLayout;
