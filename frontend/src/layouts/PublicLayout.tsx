import React from 'react'
import Navbar from '../components/common/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/common/Footer'

const PublicLayout = () => {
  return (
    <>
        <Navbar/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </>
  )
}

export default PublicLayout