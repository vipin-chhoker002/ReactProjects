import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <>

            <div className=' p-2  text-2xl items-center font-bold bg-gray-500 rounded flex justify-center gap-20'>
                <NavLink className={(e) => e.isActive ? 'text-orange-400' : ""} to="/">Home</NavLink>
                <NavLink className={(e) => e.isActive ? 'text-orange-400' : ""} to="/about"> Favourite </NavLink>
                <NavLink className={(e) => e.isActive ? 'text-orange-400' : ""} to="/recipes">Recipes</NavLink>
                <NavLink className={`${(e) => e.isActive ? 'bg-amber-800' : ""} py-1 px-3 bg-gray-900 rounded `} to="/create">Create-Recipes</NavLink>
            </div>


        </>
    )
}

export default NavBar