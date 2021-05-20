import logo from "./../logo.svg";
import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Navigation = () => {
  return (
    <Navbar collapseOnSelect bg="light" variant="light" fixed="top" expand="sm">
      <LinkContainer to="/" exact>
        <Navbar.Brand>
          <img src={logo} className="App-logo" alt="logo" /> Learning React
        </Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav>
          <NavDropdown title="Chapters 2-10">
            <LinkContainer to="/chapter02">
              <NavDropdown.Item>Chapter 2</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter03">
              <NavDropdown.Item>Chapter 3</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter04">
              <NavDropdown.Item>Chapter 4</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter05">
              <NavDropdown.Item>Chapter 5</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter06">
              <NavDropdown.Item>Chapter 6</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter07">
              <NavDropdown.Item>Chapter 7</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter08">
              <NavDropdown.Item>Chapter 8</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter09">
              <NavDropdown.Item>Chapter 9</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter10">
              <NavDropdown.Item>Chapter 10</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

          <NavDropdown title="Chapters 11-20">
            <LinkContainer to="/chapter11">
              <NavDropdown.Item>Chapter 11</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter12">
              <NavDropdown.Item>Chapter 12</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter13">
              <NavDropdown.Item>Chapter 13</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter14">
              <NavDropdown.Item>Chapter 14</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter15">
              <NavDropdown.Item>Chapter 15</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter16">
              <NavDropdown.Item>Chapter 16</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter17">
              <NavDropdown.Item>Chapter 17</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter18">
              <NavDropdown.Item>Chapter 18</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter19">
              <NavDropdown.Item>Chapter 19</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/chapter20">
              <NavDropdown.Item>Chapter 20</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
