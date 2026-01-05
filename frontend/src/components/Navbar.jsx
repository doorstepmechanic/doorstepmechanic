import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link ,Outlet} from "react-router-dom";
import "../Styles/Navbar.css";

const AppNavbar = () => {
  return (
    <>
    <Navbar expand="lg" className="custom-navbar" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/customer/dashboard/home" className="logo">
          DoorstepMechanic
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto nav-links">
            <Nav.Link as={Link} to="/customer/dashboard/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/customer/dashboard/services">
              Services
            </Nav.Link>

            <Nav.Link as={Link} to="/customer/dashboard/bookings">
              Bookings
            </Nav.Link>

            <Nav.Link as={Link} to="/customer/dashboard/profile">
              Profile
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto nav-right d-none d-lg-flex">
            <Nav.Link>
              <button className="login-btn">Login</button>
            </Nav.Link>

            <Dropdown align="end">
              <Dropdown.Toggle variant="link" className="dots-btn">
                ⋮
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/customer/dashboard/profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item>Settings</Dropdown.Item>
                <Dropdown.Item>Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     <Outlet />
    </>
  );
};

export default AppNavbar;
