import React, { Component, Fragment } from 'react';
import { Navbar,Container,Nav,NavDropdown,Form,Button} from "react-bootstrap"; // react bootstrap 
import { Link } from 'react-router-dom';

class NavBarAdmin extends Component {
    render() {
        return (
            <Fragment>
                <Navbar bg="dark" variant="dark">
                    <Container fluid>
                        {/* <Navbar.Brand href="#">Admin Panel</Navbar.Brand> */}
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link to="/dashboard" className='navBarLink'> <p>DASHBOARD</p> </Link>
                        </Nav>
                            <Link to="/profile" className='navBarLink'> <p>Profile</p> </Link>
                            <Link to="/logout" className='navBarLink'> <p>Logout</p> </Link>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Fragment>
        );
    }
}

export default NavBarAdmin;