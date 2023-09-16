import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div className="NavBar navbar--fixed-top">
          <Navbar bg="dark" data-bs-theme="dark">
            <Container>
              <Navbar.Brand href="#home">hackOMSCSLogo</Navbar.Brand>
              <Nav className="d-flex justify-content-end">
                <Nav.Link href="#home">hackOMSCS</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>
                <Nav.Link href="#schedule">Schedule</Nav.Link>
                <Nav.Link href="#sponsors">Sponsors</Nav.Link>
                <Button type="submit">Apply Now</Button>
              </Nav>
            </Container>
          </Navbar>
    
        </div>
      );
  }
  
  export default NavBar;