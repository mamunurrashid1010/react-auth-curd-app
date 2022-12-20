import React, { Component } from 'react';
import { Form,Button, Container, Row, Col } from 'react-bootstrap';

class Login extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                        <h3 style={{paddingTop:'100px'}}>Login</h3>
                        <form onSubmit={this.formSubmitHandler}>
                            <input name="email" type="text" placeholder="example@mail.com" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                            <input name="password" type="text" placeholder="Enter password" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                      
                            <input className='btn btn-info' type="submit" value="Login Now"></input>
                        </form>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default Login;