import React from 'react'

function footer() {
    return (
        <>
            <footer className=' footar  '>
                <div className='contacticon'>
                    <i className="fa-brands fa-facebook fa-bounce  "></i>
                    <i className="fa-brands fa-instagram  fa-bounce "></i>
                    <i className="fa-solid fa-envelope fa-bounce "></i>

                </div>

                <div className="footercontent">

                    <div className="footerlinks 
                    contact">
                        Contact Details
                        <ul>
                            <li>
                                <i className="fa-solid fa-phone"></i>: 9927098979
                            </li>
                            <li>
                                <i className="fa-brands fa-whatsapp"></i>: 9927098979
                            </li>
                            <li>
                                <i className="fa-brands fa-instagram"></i>: techvisionary24.7
                            </li>
                            <li>
                                <i className="fa-regular fa-envelope"></i>: techvisionary24.7
                            </li>
                        </ul>
                    </div>
                    <div className="footerlinks 
">
                        Business Services

                        <ul>
                            <li> Business Website.</li>
                            <li> Business logo. </li>
                            <li> Social media post.</li>
                            <li>Other Graphic work.</li>
                            <li>Resume Design</li>
                            <li>Excel work</li>
                        </ul>
                    </div>
                    <div className="footerlinks">
                        Learning Courses
                        <ul>
                            <li>Graphic Design</li>
                            <li>Advance Excel</li>
                            <li>Website Development</li>
                            <li>Microsoft office</li>
                            <li>Learn java</li>
                            <li>Learn C++</li>
                        </ul>
                    </div>

                </div>
                <div className='animated-text'>

                <h1>Techvisionary</h1>
                </div>
            </footer >

        </>
    )
}

export default footer



