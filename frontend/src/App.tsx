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