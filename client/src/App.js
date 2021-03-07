import React from 'react';
import './App.css';
import Nav from './Nav.js';
import About from './About.js';
import Login from './Login.js';
import Home from './Home.js';
import Fight from './Fight.js';
import Inv from './Inv.js';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App(){
        return (
            <Router>
            <div className ="App">
            <Nav />
            <Switch>
            <Route path="/" exact component={Home}/>
            <Route path ="/about" component={About}/>
            <Route path ="/login" component={Login}/>
            <Route path ="/inv" component={Inv}/>
            <Route path="/fight" component={Fight}/>
            </Switch>
            </div>
            </Router>
        );

}

export default App;