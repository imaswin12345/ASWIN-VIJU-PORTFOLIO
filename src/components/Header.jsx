import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className="bg-transparent backdrop-blur-md  py-2"
    >
      <Container>
        <Navbar.Brand 
          className="font-bold text-xl md:text-2xl text-gray-800 hover:text-violet-600 transition-colors"
        >
          ASWIN VIJU
        </Navbar.Brand>
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          className="border-0 focus:ring-0 focus:shadow-none"
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto items-center gap-1 md:gap-3">
            <Nav.Link 
              href="#about" 
              className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors"
            >
              About
            </Nav.Link>
            <Nav.Link 
              href="#projects" 
              className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors"
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              href="#skills" 
              className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors"
            >
              Skills
            </Nav.Link>
            <Nav.Link 
              href="#contacts" 
              className="text-gray-700 hover:text-violet-600 px-3 py-2 rounded-md text-sm md:text-base font-medium transition-colors"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
