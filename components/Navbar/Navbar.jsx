import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import IEMlogo from "../../public/logo/IEM_Logo.png";
import Image from "next/image";

import React, { useState } from "react";
import { useEffect } from "react";

const TopNavbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 100){
      
       setColorchange(true);
     
     }
     else{
       setColorchange(false);
   
     }
  };

useEffect(()=>{
  window.addEventListener('scroll', changeNavbarColor);
 
  return () => window.removeEventListener("scroll", changeNavbarColor);
  
},)

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={
        colorChange ? 'navbar navcolorChange' : 'navbar'
      }
      variant={colorChange ? "light" : "dark"}
      fixed="top"
    >
      <Container>
        <Link href="/">
          <Navbar.Brand>
            <Image
              alt=""
              src={IEMlogo}
              height="60"
              className="d-inline-block align-top"
            />
            {/* <img
              alt=""
              src={""}
              height="60"
              margin="0px  10px"
              className="d-inline-block align-top logo"
            />
            <img
              alt=""
              src={""}
              height="60"
              margin="0px  10px"
              className="d-inline-block align-top logo"
            /> */}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{ fontWeight: "700" }}>
            <Nav.Link href="/#hero">Home</Nav.Link>
            <Nav.Link href="/#about">Discover More</Nav.Link>
            <Nav.Link href="/#clients">Our Partners</Nav.Link>
            <Nav.Link target="_blank" href="https://drive.google.com/file/d/1Yyp1cImKSxcvvttIoWTMSkxqOpJtZ3s7/view?usp=share_link">Rule Book</Nav.Link>
            <Nav.Link href='/team'>Our Teams</Nav.Link>
            <Nav>
              <a className="btn-get-started scrollto animate__animated animate__fadeInUp">
                Register Now
              </a>
            </Nav>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopNavbar;
