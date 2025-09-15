import React from 'react'
// import Home from './Home'
import Navbar from './Navbar'
import Footer from './footer'
import { Outlet } from 'react-router-dom'
export default function Layout() {
    return (
        <>
            <Navbar />
            
            <Outlet />
            
            <Footer />
        </>
    )
}