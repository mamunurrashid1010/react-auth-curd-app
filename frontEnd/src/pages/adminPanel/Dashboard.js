import React, { Component } from 'react';
import {Navigate} from 'react-router-dom';

class Dashboard extends Component {
    render() {
        // Authentication check
        if(!sessionStorage.getItem('access_token')){
            return <Navigate replace  to="/login" />;
        }
        return (
            <div>
                <h1>Welcome to Dashboard</h1>
                <p>
                     Access Token: {sessionStorage.getItem('access_token')}<br></br>  
                     User Name: {sessionStorage.getItem('user_name')}<br></br> 
                     User ID: {sessionStorage.getItem('user_id')}<br></br>
                </p>
            </div>
        );
    }
}

export default Dashboard;