import React, { Component } from 'react';
import { Routes,Route,Navigate } from 'react-router-dom';
import Dashboard from '../pages/adminPanel/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import Logout from '../pages/Logout';
import Profile from '../pages/adminPanel/Profile';

class MyRoute extends Component {
    render() {
        return (
            <div>
                <Routes>	
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout/>} />  
                    <Route path="/registration" element={<Registration/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />      
                    <Route path="/profile" element={<Profile/>} />           
                </Routes>
            </div>
        );
    }
}

export default MyRoute;