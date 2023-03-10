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
                        <Link to="/" className='navBarLink'> <p>React App (Auth & CURD)</p> </Link>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                        </Nav>
                        <Link to="/" className='navBarLink'> <p>Home</p> </Link>
                            <Link to="/login" className='navBarLink'> <p>Login</p> </Link>
                            <Link to="/registration" className='navBarLink'> <p>Registration</p> </Link> 
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default NavBar;