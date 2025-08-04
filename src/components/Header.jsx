import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      expand="lg"
      variant="light"
      fixed="top"
      className="bg-transparent backdrop-blur-md shadow-none py-3"
    >
      <Container>
        <Navbar.Brand className="fw-bold fs-3 text-dark-700">ASWIN VIJU</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className="text-dark-600">About</Nav.Link>
            <Nav.Link href="#projects" className="text-dark-400">Projects</Nav.Link>
            <Nav.Link href="#skills" className="text-dark-400">Skills</Nav.Link>
            <Nav.Link href="#contacts" className="text-dark-400">Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
