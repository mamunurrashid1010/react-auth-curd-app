import React, { Component, Fragment } from 'react';
import {Alert, Container, Row, Col} from 'react-bootstrap';
import NavBar from '../navBar/NavBar';

class Home extends Component {
    render() {
        return (
            <Fragment>
                {/* navbar */}
                <NavBar/>

                <Container>
                    <Row className='pt-5'>
                        <Col lg={12} md={8} sm={12}>
                            <Alert variant="success">
                            <Alert.Heading>Welcome,</Alert.Heading>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book
                            </p>
                            <hr />
                            <p className="mb-0">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            </p>
                            </Alert>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Home;