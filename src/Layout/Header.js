import React from 'react'
import { Navbar, Nav, Container, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOut, faAnglesRight, faSignIn, faCartShopping } from '@fortawesome/free-solid-svg-icons'

import { FcShop } from "react-icons/fc";
import { FaShoppingCart } from "react-icons/fa";
import { HiUserAdd } from "react-icons/hi";





import './Header.css'

export default function Header() {




  const navigate = useNavigate();

  const LogOut = () => {

    window.sessionStorage.clear()

    alert("You have successfully logged out your account. ")
    navigate('/LoginPage')
  }

  const authToken = window.sessionStorage.getItem('TokenValue');

  return (
    <div>
      <Navbar bg="light" variant="light" >

        <Navbar.Brand className="heading" style={{ fontFamily: "Lucida Handwriting", marginLeft: "90px" }}>
          <FcShop style={{ fontSize: "80px" }} /> <strong>Denims FX</strong>

        </Navbar.Brand>
        <Nav className="mx-auto fs-5" expand="lg">
          <Nav.Link style={{ marginLeft: "56px", marginRight: "15px" }} as={Link} to="/" className="navBarHover">Home</Nav.Link>
          <Nav.Link as={Link} to="/ProductPage">Products</Nav.Link>

          <NavDropdown title="Trending" id="basic-nav-dropdown" style={{ marginRight: "15px" }}>
            <NavDropdown.Item as={Link} to="/NewPage" style={{ fontSize: "20px" }}>New Releases</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/BestPage" style={{ fontSize: "20px" }}>Best Sellers</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/FlatPage" style={{ fontSize: "20px" }}>Flat 50% Off</NavDropdown.Item>
          </NavDropdown>




          <Nav.Link as={Link} to="/AboutPage" style={{ marginRight: "15px" }}>About Us</Nav.Link>
          <Nav.Link as={Link} to="/ContactPage">Contact</Nav.Link>


          {/* <Nav.Link >Registration</Nav.Link> */}


          <Button variant="outline-dark" style={{ marginLeft: "390px" }} className="cart"> <FaShoppingCart style={{ marginRight: "15px", fontSize: "22px" }} />  Cart
          </Button>
          
          {/* <Button variant="outline-dark" style={{ marginLeft: "10px" }} as={Link} to="/RegPage"> <HiUserAdd />Register</Button>  */}

       

          {!authToken ?

            (


              <Button variant="outline-dark" style={{ marginLeft: "10px", height: "50px" }} as={Link} to="/LoginPage" > <FontAwesomeIcon icon={faSignIn} style={{ marginRight: "15px", fontSize: "22px", paddingTop: "5px" }}></FontAwesomeIcon >Log In</Button>
             
            )
            :

            <Button variant="outline-dark" style={{ marginLeft: "10px" }} onClick={LogOut}>
              <FontAwesomeIcon icon={faSignOut} style={{ marginRight: "15px", fontSize: "22px",  }}></FontAwesomeIcon>Log Out</Button>


          }



        </Nav>

      </Navbar>
    </div>
  )
}
