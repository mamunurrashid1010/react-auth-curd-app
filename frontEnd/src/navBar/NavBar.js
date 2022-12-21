import React, { Component } from 'react';
import '../asset/css/bootstrap.min.css';
import { Navbar,Container,Nav,NavDropdown,Form,Button} from "react-bootstrap"; // react bootstrap 
import { Link } from 'react-router-dom';
import '../asset/css/custom.css';
class NavBar extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        <Navbar.Brand href="#">React App</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/" className='navBarLink'> <p>HOME</p> </Link>
                        </Nav>
                            <Link to="/login" className='navBarLink'> <p>LOGIN</p> </Link>
                            <Link to="/registration" className='navBarLink'> <p>REGISTRATION</p> </Link> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;