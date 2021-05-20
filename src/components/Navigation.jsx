import logo from "./../logo.svg";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="sm">
      <Navbar.Brand>
        <img alt="Logo" className="App-logo" src={logo} /> Logo
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Products">
            <NavDropdown.Item href="blog">Blog</NavDropdown.Item>
            <NavDropdown.Item href="about-us">About Us</NavDropdown.Item>
            <NavDropdown.Item href="contact-us">Contact Us</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
