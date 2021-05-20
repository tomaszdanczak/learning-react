import logo from "./../logo.svg";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar fixed="top" expand="sm">
      <LinkContainer to="/" exact>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" /> Learning React
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Chapters">
            <LinkContainer to="/chapter02">
              <NavDropdown.Item>Chapter 2</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter03">
              <NavDropdown.Item>Chapter 3</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
