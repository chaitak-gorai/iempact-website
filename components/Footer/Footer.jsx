import React from "react";
import {
  Instagram,
  Facebook,
  Twitter,
  Envelope,
  Phone,
  Linkedin,
} from "react-bootstrap-icons";
import { BsYoutube } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Image from "next/image";
import Logo from "../../public/images/1.png";

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 footer-contact">
                <div className="abc">
                <Image src={Logo} className="img-fluid" alt="" />
                </div>
                
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h1>Contact Us</h1>
                <ul>
                  <li>Sneha Rakshit: +91 8335082312</li>
                  <li>Rijurik Saha: +91 8240786312</li>
                  <li>Aditya Podar: +91 9432280995</li>
                  <li>Souvik Bhattacharyya: +91 8777374583</li>
                  <li>Surya Sekhar Datta: +91 9830140585</li>
                  <li>Srinjoy Sarkar: +91 9836679464</li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 map">
                <iframe
                  title="iembuilding"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58946.693046837725!2d88.37152913125!3d22.572807299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275a90e2f3b89%3A0xd13b26d16803ab9b!2sIEM%2C%20Management%20House!5e0!3m2!1sen!2sin!4v1660410991738!5m2!1sen!2sin"
                  frameBorder="0"
                  allowFullScreen=""
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div class="container d-md-flex py-4">
            <div class="me-md-auto text-center text-md-start">
              <div class="copyright text-center">
                <b>
                  &copy; Copyright 2022 IEMPACT 2k23 | Designed by Team IEMPACT
                </b>
              </div>
            </div>
            <div class="social-links text-center text-md-right pt-3 pt-md-0">
              <a
                href="https://www.facebook.com/iempactfestival"
                className="facebook mx-1"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={30} />
              </a>
              <a
                href="https://instagram.com/iempact2k23?igshid=YmMyMTA2M2Y="
                className="instagram mx-1"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={30} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
