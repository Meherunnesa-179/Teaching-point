import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Navigation.css'

const Navigation = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img class = "logo" src={logo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
   <li>
   <NavLink activeClassName="nav-link"  exact to="/">
                    Home
                  </NavLink>
   </li>
                <li>
                <NavLink activeClassName="nav-link" to="/about">
                    About
                  </NavLink>
                </li>
                  <li>
                  <NavLink activeClassName="nav-link" to="/services">
                    Services
                  </NavLink>
                  </li>
                <li>
                <NavLink activeClassName="nav-link" to="/courses">
                    Courses
                  </NavLink>
                </li>
      
    </Nav>
    <Nav>
      <Nav.Link>Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;