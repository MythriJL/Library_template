import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'react-bootstrap/Image'
import nav_logo from './nav-logo.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import {Navbar, Nav, Form, Button} from "react-bootstrap"
import { Home } from './routes/home/Home';
import { AboutUS } from './routes/aboutus';
import { Learning } from './routes/Learning';
import { School } from './routes/school';
import {CD} from './routes/learningCD';
import { LinkLearning } from './routes/learningLink';



function App() {
  return (
    <Router>
          <>

            <Navbar  className = "navbarcss"  fixed="top"  expand="lg" variant="dark">

              <Navbar.Brand href="/"><Image src={nav_logo} height = "50px" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                  <Nav.Link href="/schools">Schools</Nav.Link>
                  <Nav.Link href="/learning">Learning Resource</Nav.Link>
                  <Nav.Link href="/downloads">Downloads</Nav.Link>
                </Nav>
                <Form inline>

                      <Button variant="outline-warning">Login</Button>
                 </Form>
              </Navbar.Collapse>
            </Navbar>
            
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}

            <div className='body-section'>
              <Switch>
                <Route path="/about" exact>
                  <AboutUS />
                </Route>
                <Route path="/schools" exact>
                  <School />
                </Route>
              
                <Route path = "/learning" exact>
                  <Learning />
                </Route>
                <Route path="/learning/link" exact >
                  <LinkLearning />
                </Route>
                <Route path = "/downloads" exact>
                    <Downloads />
                </Route>
                
                <Route path = "/login" exact>
                    <login />
                </Route>
                
                <Route path="/learning/cd" excat>
                    <CD />
                </Route>
                <Route path="/">
                  <Home /> 
                </Route>
                
              </Switch>
            </div>                    
            <div className = "foot">
              <h5>Copyright © 2020 DSU. All Rights Reserved</h5>
            </div>

          </>
        </Router>
  );
}



export default App;



function login(){
return(
<div>login page</div>
)}


function Downloads(){
return(
<div>Downloads page</div>
)}
