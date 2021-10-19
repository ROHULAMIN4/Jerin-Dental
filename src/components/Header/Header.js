import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgLogo from "../images/logo/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar
        bg="dark"
        sticky="top"
        variant="dark"
        collapseOnSelect
        expand="lg"
      >
        <Container className="w-100 main-navbar">
          <Navbar.Brand href="#home">
            <img className="w-50" src={imgLogo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/team">
              Team
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contactus">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="/information">
              Help
            </Nav.Link>

            {/* {user?.email ? (
              <Button onClick={logOut} variant="light">
                Logout
              </Button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )} */}
            <Navbar.Text>
              Signed in as: <a href="#login">Rohul</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
