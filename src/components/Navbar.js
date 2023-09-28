import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
    return (
        <div className='NavBar navbar--fixed-top'>
          <Navbar bg='dark' data-bs-theme='dark'>
            <Container>
              <Navbar.Brand>hackOMSCSLogo</Navbar.Brand>
              <Nav className='d-flex justify-content-end'>
                <Nav.Item>
                  <NavLink to='/' className='nav-link' activeClassName='active'>
                    hackOMSCS
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to='/about' className='nav-link' activeClassName='active'>
                    About
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to='/faqs' className='nav-link' activeClassName='active'>
                    FAQ
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to='/schedule' className='nav-link' activeClassName='active'>
                    Schedule
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to='/sponsors' className='nav-link' activeClassName='active'>
                    Sponsors
                  </NavLink>
                </Nav.Item>
                <Nav.Item>
                  <NavLink to='/apply' className='nav-link' activeClassName='active'>
                    Apply Now
                  </NavLink>
                </Nav.Item>
              </Nav>
            </Container>
          </Navbar>
        </div>
      );
  }
  
  export default NavBar;