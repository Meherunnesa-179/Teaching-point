import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
import './Navigation.css'

const Navigation = () => {
  const activeStyle = {
    fontWeight : "bold",
    color : "red",
    background : "white",
    padding : "10px",
    borderRadius : "5px",
    margin : "15px",
    textDecoration : "none"
  }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark top-fixed" variant="dark">
  <Container>
          <Navbar.Brand href="#home"><img class = "logo" src={logo} alt="" />  Luminous Point</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
      
        <Nav className = "ms-auto fw-bold navStyle fs-4 ">
             <Nav.Link>
                   <NavLink activeStyle={activeStyle} exact to="/">  Home</NavLink>
             </Nav.Link>
            <Nav.Link>
                   <NavLink activeStyle={activeStyle} exact to="/about">About</NavLink>
             </Nav.Link>
             <Nav.Link>
                   <NavLink activeStyle={activeStyle} exact to="/courses">Courses</NavLink>
             </Nav.Link>
             <Nav.Link>
                  <NavLink activeStyle={activeStyle} exact to="/Services">Services</NavLink>
            </Nav.Link>
            <Nav.Link>
                  <NavLink activeStyle={activeStyle} exact to="/contact">Contact us</NavLink>
             </Nav.Link>  
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Navigation;