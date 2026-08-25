import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex p-4 justify-between bt-'>
        {/* Logo Section */}
        <div>
        <h1>Quick<span>Stay</span></h1>
        </div>
        <ul>
            <Link to="">Home</Link>
            <Link to="">Explore</Link>
            <Link to="">How It Works</Link>
            <Link to="">Become A host</Link>
        </ul>
        <div>
            <button>Login</button>
            <button>Signin</button>
            <button>List Property</button>
        </div>
    </nav>
  )
}

export default Navbar