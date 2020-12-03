import React from "react";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./LOGO-white.png";
import "./NovaNav.css";

function NovaNav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Col>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="auto"
            height="40"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
      </Col>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Col>
          <Nav className="justify-content-center">
            <Nav.Link>About</Nav.Link>
            <Nav.Link>Motorcycles</Nav.Link>
            <Nav.Link>Teams</Nav.Link>
            <Nav.Link>Sponsors</Nav.Link>
            <Nav.Link>Media</Nav.Link>
          </Nav>
        </Col>
        <Col>
          <Nav className="justify-content-end">
            <Nav.Link>Contact</Nav.Link>
            <Nav.Link>Apply now!</Nav.Link>
          </Nav>
        </Col>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NovaNav;
