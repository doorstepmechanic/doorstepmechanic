import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import "../Styles/Navbar.css";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar" sticky="top">
      <Container >
        {/* Left: Logo */}
        <Navbar.Brand href="#" className="logo">
          DoorstepMechanic
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible menu */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Centered Links */}
          <Nav className="mx-auto nav-links">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Services</Nav.Link>
            <Nav.Link href="#">Bookings</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>

            {/* Mobile-only Login + extra items */}
            <Nav.Link href="#" className="d-lg-none">Login</Nav.Link>
            <Nav.Link href="#" className="d-lg-none">Profile</Nav.Link>
            <Nav.Link href="#" className="d-lg-none">Settings</Nav.Link>
            <Nav.Link href="#" className="d-lg-none">Logout</Nav.Link>
          </Nav>

          {/* Right-side items for desktop */}
          <Nav className="ml-auto nav-right d-none d-lg-flex">
            <Nav.Link href="#">
              <button className="login-btn">Login</button>
            </Nav.Link>

            {/* Desktop-only 3-dot dropdown */}
            <Dropdown align="end">
              <Dropdown.Toggle variant="link" className="dots-btn">
                ⋮
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Profile</Dropdown.Item>
                <Dropdown.Item href="#">Settings</Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;