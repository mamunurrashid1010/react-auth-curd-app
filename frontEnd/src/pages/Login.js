import React, { Component } from 'react';
import { Form,Button, Container, Row, Col,Alert } from 'react-bootstrap';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';

class Login extends Component {
    constructor(){
        super();
        this.state={
            email:'',
            password:'',
            errorMessage:'',
            postResult:'',
            authentication: false,
        }
    }

    // input handler
    inputOnChnageHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue})
    }

    // form submit handler
    formSubmitHandler=(event)=>{
        event.preventDefault();
        var data={
            email:this.state.email,
            password:this.state.password
        };
        axios.post('http://127.0.0.1:8000/api/auth/login',data)
        .then(response=>{
            // token and user info
            this.setState({postResult:true});
            sessionStorage.setItem('access_token',response.data.access_token);
            sessionStorage.setItem('token_type',response.data.token_type);
            sessionStorage.setItem('user_id',response.data.user['id']);
            sessionStorage.setItem('user_name',response.data.user['name']);
        })
        .catch(error=>{
            if(error.response.data['email'])
                this.setState({errorMessage:error.response.data['email']})
        })

    }

    render() {
        // Authentication check
        if(this.state.postResult == true){
             return <Navigate replace  to="/dashboard" />;
        }
        return (
            <div>
                <Container>
                    <Row>
                        <Col>{this.state.email}<br></br>{this.state.password}</Col>
                        <Col>
                            <h4 style={{paddingTop:'100px'}}><Alert className='alert'>Login</Alert></h4><br></br>
                            <h5 style={{color:'red'}}>{this.state.errorMessage}</h5>
                            <h5 style={{color:'red'}}>{this.state.postResult}</h5>
                            <form onSubmit={this.formSubmitHandler}>
                                <label style={{float:'left'}}>Email address</label>
                                <input name="email" type="text" placeholder="example@mail.com" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                                <label style={{float:'left'}}>Password</label>
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