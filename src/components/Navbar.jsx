// import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="link">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/criteria" className="link">
              Criteria
            </Nav.Link>
            <Nav.Link as={Link} to="/casestudy" className="link">
              Case Study
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
