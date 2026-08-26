import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    if (isOpen) {
        alert("Side Bar Open")
    }
    const Navlinks = [
    { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "How It Works", path: "/HowItWorks" },
]
  return (
    <header className='w-full border-b border-gray-200 sticky top-0 z-10 bg-white'>
         <nav>
            {/* Mobile Screen */}
            <div className='px-4 py-2 flex items-center justify-between md:hidden'>
                <h1>QucikStay</h1>
                {/* Hamburger */}
                <button onClick={()=>setIsOpen(!isOpen)} className='flex flex-col gap-1' >
                    <span className='w-6 h-0.5 bg-black '></span>
                    <span className='w-6 h-0.5 bg-black'></span>
                    <span className='w-6 h-0.5 bg-black'></span>
                </button>
            </div>


            {/* Tablet Above */}
            <div className='hidden md:flex items-center px-16 py-4 justify-between  w-full m-auto'>
            {/* Logo Section */}
        <Link to="/">
        <div>
            <img src="" alt="" />
        <h1 className='text-lg font-bold'>Quick<span className='text-orange-500'>Stay</span></h1>
        </div>
        </Link>
        <ul className='flex gap-8'>
           {Navlinks.map((link)=>(
            <li key={link.name}>
                <Link to={link.path}
                className=' className="text-gray-700 font-medium hover:text-amber-700 transition duration-300"'>
                    {link.name}
                </Link>
            </li>
           ))}
        </ul>
        <div className='flex gap-4 items-center'>
            <Link to="/login" className='px-4 py-2 bg-orange-500 rounded-lg text-white'>Login</Link>
            <Link to="/register" className="px-4 py-2 border-2 border-orange-500 hover:bg-orange-500 hover:text-white text-sm  rounded-lg transition">Sign In</Link>
            <Link to="/" className='bg-orange-500 px-4 py-2 rounded-lg text-white'>List Property</Link>
        </div>
    </div>
    </nav>
    </header>
   
  )
}

export default Navbar