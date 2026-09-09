import { Route, Routes } from "react-router-dom"
import PublicLayout from "./layouts/PublicLayout"
import LandingPage from "./pages/public/LandingPage"
import ExplorePage from "./pages/public/ExplorePage"
import HowItWorks from "./pages/public/HowItWorks"
import PropertyDetails from "./pages/public/PropertyDetails"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Tenant from "./pages/auth/Tenant"
import ServiceProvider from "./pages/auth/ServiceProvider"
import PropertyOwner from "./pages/auth/PropertyOwner"
import TenantLayout from "./layouts/TenantLayout"
import TenantHome from "./pages/tenant/TenantHome"
import SavedProperties from "./pages/tenant/SavedProperties"
import TenantMessages from "./pages/tenant/TenantMessages"
import Insepections from "./pages/tenant/Insepections"
import Notifications from "./pages/tenant/Notifications"
import Settings from "./pages/tenant/Settings"
import OwnerLayout from "./layouts/OwnerLayout"
import OwnerHome from "./pages/landlord/OwnerHome"
import ServiceProviderLayout from "./layouts/ServiceProviderLayout"
import ServiceHome from "./pages/serviceProvider/ServiceHome"

const App = () => {
  return (
    <>
      <Routes>
        {/* Public Pages Routes */}
        <Route element={<PublicLayout/>}>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/explore" element={<ExplorePage/>}/>
          <Route path="/How-it-works" element={<HowItWorks/>}/>
          <Route path="/propertydetails/:id"  element={<PropertyDetails/>}/>
        </Route>
        {/* Tenant Pages Routes */}
        <Route element={<TenantLayout/>}>
          <Route path="/tenant/" element={<TenantHome/>}/>
          <Route path="/tenant/saved-properties" element={<SavedProperties/>}/>
          <Route path="/tenant/messages" element={<TenantMessages/>}/>
          <Route path="/tenant/inspections" element={<Insepections/>}/>
          <Route path="/tenant/notifications" element={<Notifications/>}/>
          <Route path="/tenant/settings" element={<Settings/>}/>
        </Route>

        <Route element={<OwnerLayout/>}>
            <Route path="/owner/" element={<OwnerHome/>}/>
        </Route>
      <Route element={<ServiceProviderLayout/>}>
       <Route path="/provider/" element={<ServiceHome/>}/> 
      </Route>

        <Route path="/login" element={<Login/>}/>
         <Route path="/register" element={<Register/>}/>
         <Route path="/register/tenant" element={<Tenant/>}/>
         <Route path="/register/service-provider" element={<ServiceProvider/>}/>
         <Route path="/register/property-owner" element={<PropertyOwner/>}/>
      </Routes>
    </>
  )
}

export default App