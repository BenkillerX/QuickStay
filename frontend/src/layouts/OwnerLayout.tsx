import { Outlet } from "react-router-dom"
import OwnerSiderbar from "../components/common/OwnerSiderbar"


const OwnerLayout = () => {
  return (
    <>
    <OwnerSiderbar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default OwnerLayout