import React from 'react'
import { Instagram, Facebook, Twitter, Envelope,Phone, Linkedin } from 'react-bootstrap-icons';
import {BsYoutube} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'

const Footer = () => {
  return (
    <>
      <footer id="footer">

          <div class="footer-top">
            <div class="container">
              <div class="row">

                <div class="col-lg-3 col-md-6 footer-contact">
                  <h3>Flattern</h3>
                  <p>
                    A108 Adam Street <br/>
                    New York, NY 535022<br/>
                    United States <br/><br/>
                    <strong>Phone:</strong> +1 5589 55488 55<br/>
                    <strong>Email:</strong> info@example.com<br/>
                  </p>
                </div>

                

                <div class="col-lg-4 col-md-6 footer-links">
                  <h4>Our Services</h4>
                  <ul>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
                    <li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
                  </ul>
                </div>

                <div class="col-lg-5 col-md-6 map">
                <iframe title='iembuilding' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58946.693046837725!2d88.37152913125!3d22.572807299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a90e2f3b89%3A0xd13b26d16803ab9b!2sIEM%2C%20Management%20House!5e0!3m2!1sen!2sin!4v1660410991738!5m2!1sen!2sin" frameBorder="0"  allowFullScreen=""></iframe>
                  
                </div>

              </div>
            </div>
          </div>

          <div class="container d-md-flex py-4">

            <div class="me-md-auto text-center text-md-start">
              <div class="copyright">
                &copy; Copyright <strong><span>Flattern</span></strong>. All Rights Reserved
              </div>
              <div class="credits">
                
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
            <a href="#" className="facebook mx-1" target="_blank" rel="noreferrer"><Facebook size={30}/></a>
              <a href="#" className="instagram mx-1" target="_blank" rel="noreferrer"><Instagram size={30} /></a>
              <a href="#" className="linkedin mx-1" target="_blank" rel="noreferrer"><Linkedin size={30}/></a>
              <a href="#" target="_blank" rel="noreferrer"><BsYoutube size={30}/></a>
              <a href="#" className="twitter mx-1" target="_blank" rel="noreferrer"><Twitter size={25}/></a>
            </div>
          </div>
    </footer>
    </>
  )
}

export default Footer