import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Link from 'next/link'

import Image from 'next/image'

import React from 'react'

const TopNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand='lg'
      className='navabar'
      variant='light'
      fixed='top'
    >
      <Container>
        <Link href='/'>
          <Navbar.Brand></Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'></Nav>
          <Nav style={{ fontWeight: '700' }}>
            <Nav.Link href='#hero'>Home</Nav.Link>
            <Nav.Link href='#about'>About Us</Nav.Link>
            <Nav.Link href='/team'>Team</Nav.Link>
            <Nav.Link href='/partners'>Partners</Nav.Link>
            {/* <Nav.Link href='#contact'>Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopNavbar
