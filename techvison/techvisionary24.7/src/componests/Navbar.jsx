import React from 'react';
import logo from '../assets/logo.svg';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
    const collapsed =()=>{
        document.querySelector(".navbar-toggler").classList.toggle("collapsed");
        document.querySelector("#navbarSupportedContent").classList.toggle("show")
    }
    return (
        <>
            <nav className="navbar my-1 navbar-expand-lg fixed-top  " id='navbarMain'>
                <div className="container-fluid my-1 main">

                    <div className='container-fluid  toggle'>

                        <NavLink  to="#" className='nav-NavLink link-tag'>Techvisionary24.7</NavLink>
                       
                        <button className="navbar-toggler mx-1 collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="toggler-icon top-bar"></span>
                            <span className="toggler-icon middle-bar"></span>
                            <span className="toggler-icon bottom-bar"></span>
                        </button>
                       
                    </div>

                    <div className="collapse mx-4  navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item  m-2">
                                <NavLink className="nav-NavLink link-tag active" onClick={collapsed} aria-current="page" to="/">Home</NavLink>
                            </li>
                            {/* <li className="nav-item mx-2">
                                <NavLink className="nav-NavLink link-tag" to="#">Courses</NavLink>
                            </li> */}
                            <li className="nav-item mx-2">
                                {/* <NavLink className="nav-NavLink link-tag" onClick={collapsed} to="/Course">Course</NavLink> */}
                            </li>
                            <li className="nav-item m-2">
                                <NavLink className="nav-NavLink link-tag" onClick={collapsed} to="/Contact">Contact</NavLink>
                            </li>
                            {/* <li className="nav-item mx-2">
                                <NavLink className="nav-NavLink link-tag" to="#">About</NavLink>
                            </li> */}

                        </ul>
                    </div>
                    

                </div>
            </nav>
        </>
    )
}

export default Navbar
