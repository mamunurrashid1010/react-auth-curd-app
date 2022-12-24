import React, { Component } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';
import Dashboard from './adminPanel/Dashboard';
import Login from './Login';

class logout extends Component {

    componentDidMount(){
        var jwtToken = sessionStorage.getItem('access_token');
        axios.post('http://127.0.0.1:8000/api/auth/logout','',{'headers':{'Authorization':'Bearer '+jwtToken}})
        .then(response=>{
            if(response.status == 200){
                sessionStorage.clear();
            }  
        })
        .catch(error=>{
            //alert(error.response.status);
        })
    }
    render() {
        // Authentication check
        if(!(sessionStorage.getItem('access_token'))){
            return <Navigate replace  to="/login" />;
        }
        else{
            return <Login/>;
        }

    }
}

export default logout;