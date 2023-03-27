import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";
import Swal from "sweetalert2";

const Header = () => {  
    return <>
     <Navbar id="event-click">
        <Container className="background-header">
          <Nav className="me-auto" style={{ paddingTop: "14px" }}>
            <Nav.Link href="/" className="item-menu">
              Home
            </Nav.Link>
            <Nav.Link href="/feedback" className="item-menu">
              Feedback
            </Nav.Link>
            <Nav.Link href="/service" className="item-menu">
              Contact
            </Nav.Link>
            {localStorage.getItem("Role") != "USER" ? (<>
            <Nav.Link href="/service" className="item-menu">
              Sign Up
            </Nav.Link>
            <Nav.Link href="/sign-in" className="item-menu">
              Sign In
            </Nav.Link>
            </>) : (<></>)}
            </Nav>
        </Container>
      </Navbar>
    </>
}

export default Header