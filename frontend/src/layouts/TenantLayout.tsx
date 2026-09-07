import { Outlet } from "react-router-dom"
import TenantSidebar from "../components/common/TenantSidebar"

const TenantLayout = () => {
  return (
    <>
    <TenantSidebar/>
        <main>
            <Outlet/>
        </main>
    </>
  )
}

export default TenantLayout