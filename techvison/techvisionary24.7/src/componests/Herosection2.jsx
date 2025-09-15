import React from 'react'
import { Link } from 'react-router-dom'
import myimg from '../img/background.jpg'
import myimg2 from '../img/person-donating.png'
import data from '../img/data.png'


function Herosection2() {
  const showDetails = (e) => {

    let nextElement = e.target.nextElementSibling;
    nextElement.classList.toggle("show-details");
  }
  return (
    <>
      <div className="container-fluid herosection">
        <div className="container">

          <h5>Learn Anytime, Anywhere – Join Our Expert-Led Online Classes Today!</h5>
        </div>
        <div className="timeline">

          <div className="content left-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Website Development <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-laptop w-6 h-6 text-indigo-500"><path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path></svg></h4>
              <small>HTML, CSS, JS, React, Node, php</small>
              <p>Master the Art of Website Development from Scratch with Expert Guidance.</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className="content right-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Graphic Design <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool w-6 h-6 text-indigo-500"><path d="m12 19 7-7 3 3-7 7-3-3z"></path><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="m2 2 7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg></h4>
              <small>Photoshop, illustrator, canva, corel Draw</small>
              <p>Design Your Future – Join Our Online Graphic Design Classes Today!</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>
              <span className='right-container-arrow'></span>
            </div>
          </div>
          <div className="content left-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Data Analyst <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-spreadsheet w-6 h-6 text-indigo-500"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M8 13h2"></path><path d="M14 13h2"></path><path d="M8 17h2"></path><path d="M14 17h2"></path></svg></h4>
              <small>Excel, Power Bi</small>
              <p>Unlock High-Demand Skills – Become a Certified Data Analyst Today</p>
              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>
              <span className='left-container-arrow'></span>
            </div>
          </div>
          <div className="content right-container">
            <i className="fa-solid fa-circle"></i>
            <div className="text-box">
              <h4>Master Js Framework <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code2 w-6 h-6 text-indigo-500"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg></h4>
              <small>React, Angular, Vue Js, Node</small>
              <p>Become a Pro in JavaScript Frameworks – Master React, Angular, and More!</p>

              <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>
              <span className='right-container-arrow'></span>
            </div>
          </div>


        </div>

         <div className="container-fluid course-container">
          <div className="container-fluid">
            <h3 className='text-center'>Your Future Starts Here – Enroll in Our Online Classes and Grow.</h3>
            <div className="d-flex child  justify-content-around align-items-center gap-2 flex-wrap">
              <div className="img-section">
                <img src={myimg} className='img-fluid' alt="" />
              </div>
              <div className='details'>
                <div className="text-section">
                  <h1> <i class="fa-solid fa-layer-group"></i> Website Development</h1>
                </div>
                <div className="course-details">
                  <div className='icon'><i class="fa-brands fa-html5"></i><i class="fa-brands fa-css3-alt"></i><i class="fa-brands fa-js"></i><i class="fa-brands fa-react"></i></div>
                  <div className='caption'>

                    <p>Live Classes | Proper Notes PDF | 150+ Hours Content | 40+ Project</p>
                  </div>
                  <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>

                </div>

              </div>
            </div>
            <div className="d-flex child  my-3 flex-wrap-reverse justify-content-around align-items-center gap-2 flex-wrap">

              <div className='details'>
                <div className="text-section">
                  <h1> <i class="fa-solid fa-pen-nib"></i> Graphic Design </h1>
                </div>
                <div className="course-details">
                  <div className='icon my-1'><i class="fa-solid fa-display"></i><i class="fa-brands fa-pinterest"></i><i class="fa-brands fa-canadian-maple-leaf"></i><i class="fa-solid fa-bezier-curve"></i></div>
                  <div className='caption'>

                    <p>Live Classes | Proper Notes PDF | 150+ Hours Content | 80+ Designs </p>

                  </div>
                    <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>
                </div>

              </div>
              <div className="img-section">
                <img src={myimg2} className='img-fluid' alt="" />
              </div>
            </div>
            <div className="d-flex child  my-3 justify-content-around align-items-center gap-2 flex-wrap">

              <div className="img-section">
                <img src={data} className='img-fluid' alt="" />
              </div>
              <div className='details'>
                <div className="text-section">
                  <h1> <i class="fa-solid fa-database"></i> Data Analyst </h1>
                </div>
                <div className="course-details">
                  <div className='icon my-1'><i class="fa-solid fa-chart-simple"></i><i class="fa-solid fa-file-excel"></i><i class="fa-solid fa-sheet-plastic"></i><i class="fa-brands fa-windows"></i></div>
                  <div className='caption'>

                    <p>Live Classes | Proper Notes PDF | 150+ Hours Content | 80+ Designs </p>

                  </div>
                    <button className='Explorebtn'> <Link className='link-tag' to="/Contact">Enroll Now</Link></button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Herosection2
