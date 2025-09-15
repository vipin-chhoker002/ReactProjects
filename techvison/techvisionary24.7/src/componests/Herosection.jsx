import React from 'react'
import { Link } from 'react-router-dom'
import work from '../img/a.jpg'
import myimg2 from '../img/d.jpg'
import data from '../img/data.png'
import website from '../img/website.png'
import meeting from '../img/meeting.png'
function Herosection() {
  return (
    <>


      <div className="container-fluid herosection">
        <div className="container">

          <h5>Providing innovative website development and social media design services to help businesses grow and succeed.</h5>
        </div>
        <div className="timeline">
          <div className="content left-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Your dream website here</h4>
              {/* <small>2024-2025</small> */}
              <p>A website that speaks for your brand, even when you're not.Your business deserves to shine—let’s build your dream site with us.</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Start Now</Link></button>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className="content right-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Graphic Design Services</h4>
              {/* <small>2024-2025</small> */}
              <p> Creative Designs That Speak Volumes – Let Your Brand Shine with TechVisionary24.7</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Start Now</Link></button>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          <div className="content left-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Resume Writing</h4>
              <small>2024-2025</small>
              <p>Stand Out with a Resume That Gets You Noticed! Professional Resume Writing to Highlight Your Skills and Achievements.</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Start Now</Link></button>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className="content right-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Logo Design</h4>
              <small>2024-2025</small>
              <p>Your Brand, Your Story – Captured in a Stunning Logo. </p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Start Now</Link></button>
              <span className='right-container-arrow'></span>
            </div>
          </div>

          <div className="content left-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Excel Services</h4>
              <small>2024-2025</small>
              <p>Transform Your Data into Insights with Professional Excel Services.</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Start Now</Link></button>
              <span className='right-container-arrow'></span>
            </div>
          </div>

        </div>



        <div className="container-fluid course-container">
          <div className="container-fluid">
            <h3 className='text-center'>Professional Services Designed to Drive Growth and Efficiency.</h3>
            <h3 className='text-center We-work'>How We Work</h3>
            <div className="d-flex child  justify-content-around align-items-center gap-2 flex-wrap">
              <div className="img-section">
                <img src={work} className='img-fluid' alt="" />
              </div>
              <div className='details'>
                <div className="text-section">
                  <h1>Understand Your Needs </h1>
                </div>
                <div className="course-details">
                  <div className='caption my-1'>

                    <p>We begin by listening to you. Whether it’s a stunning website, engaging social media design, or a tailored Excel solution, we dive deep into your requirements to understand your goals and preferences. </p>
                  </div>

                </div>

              </div>
            </div>
            <div className="d-flex child flex-wrap-reverse my-3 justify-content-around align-items-center gap-2 flex-wrap">

              <div className='details'>
                <div className="text-section">
                  <h1>Plan and Strategize</h1>
                </div>
                <div className="course-details">
                  <div className='caption my-1'>

                    <p>With your objectives in mind, we craft a personalized plan. Our strategy ensures seamless project execution, aligned with your timeline and budget. </p>

                  </div>
                </div>

              </div>
              <div className="img-section">
                <img src={myimg2} className='img-fluid' alt=" img" />
              </div>
            </div>
            <div className="d-flex child my-3 justify-content-around align-items-center gap-2 flex-wrap">

              <div className="img-section">
                <img src={website} className='img-fluid' alt="" />
              </div>
              <div className='details'>
                <div className="text-section">
                  <h1> Review and Revise </h1>
                </div>
                <div className="course-details">
                  <div className='caption my-2'>

                    <p>Your feedback matters! We share our progress, incorporate your inputs, and refine the work to exceed your expectations.</p>

                  </div>
                </div>

              </div>
            </div>
            <div className="d-flex  child flex-wrap-reverse my-3 justify-content-around align-items-center gap-2 flex-wrap"> 

              

              <div className='details'>
                <div className="text-section">
                  <h1> Deliver and Support</h1>
                </div>
                <div className="course-details">
                  <div className='caption my-2'>

                    <p>Once the project is complete, we ensure a smooth delivery. But our work doesn’t stop there—we provide ongoing support to keep your project running flawlessly.</p>

                  </div>
                </div>

              </div>
              <div className="img-section my-2">
                <img src={meeting} className='img-fluid' alt="" />
              </div>

            </div>

          </div>
        </div>
      </div>







    </>
  )
}

export default Herosection
