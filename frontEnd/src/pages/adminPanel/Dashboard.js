import axios from 'axios';
import React, { Component } from 'react';
import {Alert, Container, Row, Col, Button} from 'react-bootstrap';
import {Navigate, Link} from 'react-router-dom';
import NavBarAdmin from './NavBarAdmin';

class Dashboard extends Component {
    constructor(){
        super();
        this.state={

        }
    }

    logout=()=>{
        var jwtToken = sessionStorage.getItem('access_token');
        axios.post('http://127.0.0.1:8000/api/auth/logout','',{'headers':{'Authorization':'Bearer '+jwtToken}})
        .then(response=>{
            if(response.status == 200){
                alert(response.data.message);
                sessionStorage.clear();
            }  
        })
        .catch(error=>{
            alert(error.response.status);
        })
    }

    render() {
        // Authentication check
        if(!(sessionStorage.getItem('access_token'))){
            return <Navigate replace  to="/login" />;
        }
        else{
             return (
            <div>
                <NavBarAdmin/>
                
                <Container>
                    <Row className='pt-5'>
                        <Col lg={12} md={8} sm={12}>
                            <Alert variant="success">
                            <Alert.Heading>Dashboard</Alert.Heading>
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
            </div>
        );
        }
       
    }
}

export default Dashboard;