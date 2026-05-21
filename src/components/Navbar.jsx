import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Header(){
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">CartSub</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
            <Nav.Link as={Link} to='/products'>Product</Nav.Link>
          </Nav>

          <Nav className="ms-auto">
            
            <Nav.Link as={Link} to=''>Register</Nav.Link>
            <Nav.Link as={Link} to=''><FaCartShopping  size={22}  /> </Nav.Link>
            <NavDropdown title={<CgProfile size={22} />}  id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        
        
        </>
    )
}
export default Header