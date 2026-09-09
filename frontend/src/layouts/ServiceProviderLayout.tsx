import { Outlet } from "react-router-dom"
import ServiceProviderSiderbar from "../components/common/ServiceProviderSiderbar"

const ServiceProviderLayout = () => {
  return (
    <>
    <ServiceProviderSiderbar/>
    <main>
        <Outlet/>
    </main>
    </>
  )
}

export default ServiceProviderLayout