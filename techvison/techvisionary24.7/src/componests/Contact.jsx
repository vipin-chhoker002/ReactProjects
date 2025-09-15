import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom';

function Contact() {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gc08dh5', 'template_qlj186o', form.current, {
        publicKey: 'XwMsnsXyJ0wwpLD2n',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      )
      document.getElementById("form").reset();

  }


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container-fluid" id="HomeContent">
        <div className="Homeprofile container">
          <div className="row">
            <div className="col-lg-6 leftcontent">
              <div className="subheading">
                <h2>Transforming Ideas into Digital Excellence.</h2>
                <h6>Empowering Students and Businesses with Cutting-Edge Design, Development, and Learning Solutions.</h6>
              </div>
              <div className="onlineclass child">
                <p>Business Services</p>
                <div className="statictics">
                  <div className="result"><p>100%</p> <p>Support</p></div>
                  <div className="result"><p>150+</p> <p>Happy client</p></div>
                  <div className="result"><p>50+</p><p>prof. workers</p></div>
                  <div className="result"><p>0%</p><p>Extra Cost</p></div>
                </div>
              </div>
              <div className="onlineclass child">
                <p>online classes</p>
                <div className="statictics">
                  <div className="result"><p>100%</p> <p> Live classes</p></div>
                  <div className="result"><p>30+</p> <p>Live Project</p></div>
                  <div className="result"><p>110+</p><p>Learners</p></div>
                  <div className="result"><p>1 v 1</p><p>Classes</p></div>
                </div>
              </div>
              <button className="Explorebtn"><Link className='link-tag' to="/">Explore</Link> <i className="fa-solid fa-paper-plane fa-bounce"></i></button>
            </div>


            <div className="col-lg-6 my-5 m-auto">
              <form action="" ref={form} onSubmit={sendEmail} className="child" id="form">
                <div className="form-content">
                  <h5>Send Enquiry to Explore our </h5>
                  <h6>Courses or Services</h6>
                  <div className="form-content">
                    <div class="wrap-input-8">
                      <p>Name:</p>
                      <input class="input" type="text" name='from_name' placeholder="Name" />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="wrap-input-8">
                      <p>Email:</p>
                      <input class="input" type="email" name='from_email' placeholder="@Example.com" />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="wrap-input-8">
                      <p>Phone:</p>
                      <input class="input" type="tel" name='phone' placeholder="********79" />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>
                    <div class="wrap-input-8">
                      <p>Course/Servces</p>
                      <input class="input" type="text" name='why' placeholder="course/classes" />
                      <span class="focus-border">
                        <i></i>
                      </span>
                    </div>

                    <button type='submit' class="btn-79"><span><i class="fa-solid fa-paper-plane"></i>   Send</span></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
