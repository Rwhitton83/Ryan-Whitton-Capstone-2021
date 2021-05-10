import React, { useEffect, useState } from 'react';
import './App.css';
import Nav from './Nav.js';
import Login from './Login.js';
import Home from './Home.js';
import Fight from './Fight.js';
import Inv from './Inv.js';
import Register from './Register.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import axios from 'axios';


function App(){
    axios.defaults.withCredentials = true;

        return (
            <Router>
                <div className ="App">
                    <Nav />
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path ="/loginScreen" component={Login}/>
                        <Route path ="/inv" component={Inv}/>
                        <Route path="/fight" component={Fight}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
            </Router>
        );

}
export default App;