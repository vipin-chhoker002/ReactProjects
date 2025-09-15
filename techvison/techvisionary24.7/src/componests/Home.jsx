

import React, { useState } from 'react';
import logo1 from '../assets/logo1.png';
import Herosection from './Herosection';
import Herosection2 from './Herosection2';
import { Link } from 'react-router-dom';

function Home() {
    const [activeSection, setActiveSection] = useState('service'); // State to track the active section

    return (
        <>
            <div className="container-fluid d-flex justify-content-center homecontainer">
                <div className="homecontent">
                    <div className="welcomeLogo">
                        <img src={logo1} alt="" />
                        <div className="welcomeText">
                            <h1>Welcome to, <span>TechVisionary24.7</span></h1>
                        </div>
                    </div>
                    <div className="tagline">
                        <h5>Learn, Create, and Grow with TechVisionary24.7 – Your Partner in Education and Digital Success.</h5>
                        <p>At TechVisionary24.7, we offer web design courses and graphic design courses for students, alongside website development and social media design services for businesses. Whether you’re looking to learn or grow, we’re here to empower you with affordable digital solutions tailored to your needs.</p>
                        <p>8:00 AM to 9:00 PM  7 Days open</p>
                        <div>
                            <button className='Explorebtn taglinebtn mx-2 float-left'><Link className='link-tag' to="/Contact">Enroll Now</Link></button>
                            
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 offer-heading">
                <div className="col-lg-12 text-center">
                    <h1>OUR OFFERINGS</h1>
                </div>
                <div className="container text-center">
                    <div className="offer-swicther">
                        <button
                            className={`swicthbtn ${activeSection === 'service' ? 'active' : ''}`}
                            onClick={() => setActiveSection('service')}
                        >
                            Service
                        </button>
                        <button
                            className={`swicthbtn ${activeSection === 'course' ? 'active' : ''}`}
                            onClick={() => setActiveSection('course')}
                        >
                            Course
                        </button>
                    </div>
                </div>
            </div>

            {/* Conditionally render the components */}
            {activeSection === 'service' && <Herosection />}
            {activeSection === 'course' && <Herosection2 />}
        </>
    );
}

export default Home;

