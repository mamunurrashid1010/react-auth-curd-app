import React, { Component } from 'react';
import { Form,Button, Container, Row, Col,Alert } from 'react-bootstrap';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

class Registration extends Component {
    constructor(){
        super();
        this.state={
                fullName:'',
                mobile:'',
                email:'',
                password:'',
                validationError:'',
                postResult:'',
                errorMessage:'',
        }
    }

    // get form data
    inputOnChnageHandler=(event)=>{
        var inputName = event.target.name;
        var inputValue = event.target.value;
        this.setState({[inputName]:inputValue});

        // validation
        // name validation
        if(inputName === 'fullName'){
            var namePattern = /^[a-zA-Z ]{2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({validationError:"Name is not valid"});
            }
            else{
                this.setState({validationError:" "});
            }
        }
        // mobile validation
        if(inputName === 'mobile'){
            if(!Number(inputValue)){
                this.setState({validationError:"Mobile is not valid"});
            }
            else{
                this.setState({validationError:" "});
            }
        }
        // email validation
        if(inputName === 'email'){
            var emailPattern = /^\S+@\S+\.\S+$/;
            if(!emailPattern.test(inputValue)){
                this.setState({validationError:"Email is not valid"});
            }
            else{
                this.setState({validationError:" "});
            }
        }

    }

    // form submit
    formSubmitHandler=(event)=>{
        event.preventDefault();
        //alert(this.state.password);
        var data={
            name:this.state.fullName,
            email:this.state.email,
            password:this.state.password
        };
        // post data
        axios.post('http://127.0.0.1:8000/api/auth/register',data)
        .then(response=>{
            if(response.status==201){
                this.setState({postResult:response.data.message});
            }
            //<Navigate  to="/login" />
        })
        .catch(error=>{
            if(error.response.data['name'])
                this.setState({errorMessage:error.response.data['name']})
            if(error.response.data['email'])
                this.setState({errorMessage:error.response.data['email']})
            if(error.response.data['password'])
                this.setState({errorMessage:error.response.data['password']})
        })
    }

    render() {
        return (
            <div>
                <Row>
                        <Col>
                            {/* <p>Name: {this.state.fullName}</p>
                            <p>Mobile: {this.state.mobile}</p>
                            <p>Email: {this.state.email}</p>
                            <p>password: {this.state.password}</p>
                            <p>user: {this.state.userDetails}</p> */}
                        </Col>
                        <Col>
                        <h3 style={{paddingTop:'100px'}}><Alert className='alert'>Registration</Alert></h3><br></br>
                        <h5>{this.state.validationError}</h5>
                        {/* server error message*/}
                        <h5>{this.state.errorMessage}</h5>
                        <h5>{this.state.postResult}</h5>
                        <form onSubmit={this.formSubmitHandler}>
                            <input name="fullName" type="text" placeholder="Enter your name" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                            <input name="mobile" type="text" placeholder="Mobile No" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                            <input name="email" type="text" placeholder="example@mail.com" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                            <input name="password" type="text" placeholder="password" onChange={this.inputOnChnageHandler} style={{width:'100%'}}></input><br></br><br></br>
                      
                            <br></br>
                            <input className='btn btn-success' type="submit" value="Registration Now"></input>
                        </form>
                        </Col>
                        <Col></Col>
                </Row>
                
            </div>
        );
    }
}

export default Registration;