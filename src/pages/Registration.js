import React, { Component } from 'react';
import { Form,Button, Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { redirect } from 'react-router-dom';

class Registration extends Component {
    constructor(){
        super();
        this.state={
                fullName:'',
                mobile:'',
                email:'',
                password:'',
                postResult:'',
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
                this.setState({fullName:"Name is not valid"});
            }
        }
        // mobile validation
        if(inputName === 'mobile'){
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile is not valid"});
            }
        }
        // email validation
        if(inputName === 'email'){
            var emailPattern = /^\S+@\S+\.\S+$/;
            if(!emailPattern.test(inputValue)){
                this.setState({email:"Email is not valid"});
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
        axios.post('http://127.0.0.1:8000/api/registration/saveReg',data)
        .then(response=>{
            this.setState({postResult:response.data});
            alert(response.data.message);
            <redirect to="/login" />
        })
        .catch(error=>{
            console.log(error);
        })
    }

    render() {
        return (
            <div>
                <Row>
                        <Col>
                            <p>Name: {this.state.fullName}</p>
                            <p>Mobile: {this.state.mobile}</p>
                            <p>Email: {this.state.email}</p>
                            <p>password: {this.state.password}</p>
                        </Col>
                        <Col>
                        <h1 style={{paddingTop:'100px'}}>Registration</h1><br></br>
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