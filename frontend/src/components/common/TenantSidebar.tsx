import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/useAuth"

const TenantSidebar = () => {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const handleLogout = ()=>{
  logout()
navigate("/login")
  } 
  return (
    <div>TenantSidebar
      <button onClick={handleLogout} className="px-4 py-2 mt-2 bg-green-500 ">Logout</button>
    </div>
  )
}

export default TenantSidebar