import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../Firebase/useAuth";
import imgLogo from "../images/logo/logo.png";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
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
          <Navbar.Collapse className="justify-content-between">
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
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>

            {user?.email ? (
              <Button onClick={logOut}>Logout</Button>
            ) : (
              <Nav.Link as={Link} to="/login"></Nav.Link>
            )}
            <Navbar.Text>
              <a className="singin" href="#login">
                <span>{user?.displayName}</span>
              </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
