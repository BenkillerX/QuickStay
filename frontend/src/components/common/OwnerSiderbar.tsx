import { useNavigate } from "react-router-dom"
import { useAuth } from "../../context/useAuth"

const OwnerSiderbar = () => {
    const {logout} = useAuth()
        const navigate = useNavigate()
        const handleLogout = ()=>{
      logout()
    navigate("/login")
      } 

  return (
    <aside>OwnerSiderbar
        <button onClick={handleLogout} className="px-4 py-2 mt-2 bg-green-500 ">Logout</button>
    </aside>
  )
}

export default OwnerSiderbar