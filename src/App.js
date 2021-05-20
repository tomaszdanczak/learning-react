import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Navbar fixed="top" expand="sm">
        <Navbar.Brand>
          <img alt="Logo" src={logo} /> Logo
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
      <div className="content">This is a content</div>
    </div>
  );
}

export default App;
