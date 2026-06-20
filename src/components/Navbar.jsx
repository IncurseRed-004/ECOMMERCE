import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CgProfile } from "react-icons/cg";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { userLogout } from "../Redux/userSlice";
import "./Navbar.css"

function Header() {
  const {cartItems} = useSelector((state)=> state.productState)
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.userState);
  const handleLogout = () => {
    toast.success("logout successful")
    dispatch(userLogout());
  }

  return (
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
              {!isAuthenticated && (
                <>
                  <Nav.Link as={Link} to='/login'>Login</Nav.Link>
                  <Nav.Link as={Link} to='/register'>Register</Nav.Link>
                </>
              )}





              <Nav.Link as={Link} to='/cart' className="position-relative">
                <FaCartShopping size={22} />
                <span className="cart-count">{cartItems.length }</span>
              </Nav.Link>


              {isAuthenticated && (
                <NavDropdown title={<CgProfile size={22} />} id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to=''>Purchase Score</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/profile'>
                    Edit Profile 
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/add-product'>add products</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/list-products'>List Products</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/admin/list-users'>List users</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} onClick={handleLogout} to="/login">
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}

            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>


    </>
  )
}
export default Header