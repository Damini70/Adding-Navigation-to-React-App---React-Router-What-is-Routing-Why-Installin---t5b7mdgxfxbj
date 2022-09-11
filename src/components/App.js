import React, {Component, useState} from "react";
import {BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";
import  LocationDisplay from "./LocationDisplay";

import '../styles/App.css';

class App extends Component {
    render() {

        return(
            <div id="main">
               <Router>
        <Link to="/">Home</Link><br/>
        <Link to="/about">About</Link><br/>
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/*" element={<div><h1>No match.</h1></div>}/>
        </Routes>
        <LocationDisplay/>

        </Router>
            </div>
        )
    }
}


export default App;


class Home extends Component {
    render() {

        return(
            <div>
                <h1>You are home.</h1>
            </div>
        )
    }
}

class About extends Component {
    render() {

        return(
            <div>
                 <h1>You are on the about page.</h1>
            </div>
        )
    }
}

