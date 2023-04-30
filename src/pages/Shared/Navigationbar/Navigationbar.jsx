import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from '../../../providers/AuthProvider';

const Navigationbar = () => {
   const {user, logOut}= useContext(AuthContext);
   const handleLogOut =()=>{
    logOut()
    .then()
    .catch(error=>{
      console.error(error)
    })
   }
    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto d-flex align-items-center">
            <Link to='/catagory/0' >Home</Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {
                user && <Nav.Link href="#deets"> <FaUserCircle style={{fontSize:'2rem'}} ></FaUserCircle> </Nav.Link>
              }
          
                {
                  user ? <Button onClick={handleLogOut} variant="success">Logout</Button> : <Link to='/login'><Button variant="success">Login</Button></Link>
                }
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </Container>
    );
};

export default Navigationbar;