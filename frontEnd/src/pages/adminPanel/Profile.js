import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container,Row,Col,Alert,Button } from 'react-bootstrap';
import NavBarAdmin from './NavBarAdmin';
import {Navigate} from 'react-router-dom';

class Profile extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
        }
    }

    componentDidMount(){
        var jwtToken = sessionStorage.getItem('access_token');
        axios.get('http://127.0.0.1:8000/api/auth/profile', {'headers':{'Authorization':'Bearer '+jwtToken}})
        .then(res=>{
            console.log(res);
            this.setState({name:res.data.name, email:res.data.email });
        })
        .catch(e=>[

        ])
    }
    render() {
        // Authentication check
        if(!(sessionStorage.getItem('access_token'))){
            return <Navigate replace  to="/login" />;
        }
        else{
            return (
                <Fragment>
                    <NavBarAdmin/>

                    <Container>
                        <Row className='pt-5'>
                            <Col lg={12} md={8} sm={12}>
                                <Alert variant="success">
                                <h5>PROFILE<hr/></h5>
                                <p>
                                    Name : {this.state.name} <br/>
                                    Email : {this.state.email}
                                </p>
                                
                                </Alert>
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Profile;