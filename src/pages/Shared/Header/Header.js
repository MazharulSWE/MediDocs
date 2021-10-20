import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import  './Header.css';

const Header = () => {
  const {user, userSignOut} = useAuth();
    return (
        <>
        <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg"> 
          <Container>
             <Navbar.Brand  href="#home"><img className="image-style" src={logo} alt="" /></Navbar.Brand>
              <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Nav.Link as ={HashLink} className="style-nav" to="/home#home">Home</Nav.Link>
                  <Nav.Link as ={HashLink} className="style-nav" to="/home#services">Services</Nav.Link>
                  <Nav.Link as ={HashLink} className="style-nav" to="/home#appointment">Appointment</Nav.Link>
                  <Nav.Link as ={HashLink} className="style-nav" to="/home#doctors">Doctors</Nav.Link>
                  <Nav.Link as ={HashLink} className="style-nav" to="/about">About Us</Nav.Link>
                  <Nav.Link as ={HashLink} className="style-nav" to="/contact">Contact Us</Nav.Link>
                  {
                    user?.email?
                    <Button onClick={userSignOut} variant="light" className="style-nav" >Logout</Button>:
                    <Nav.Link as ={HashLink} className="style-nav" to="/login">Login</Nav.Link>
                  } 
                  <Navbar.Text>Signed in as: <a href="#login">{user?.displayName}</a></Navbar.Text>
              </Navbar.Collapse>
         </Container>
       </Navbar>
     </>
    );
};

export default Header;