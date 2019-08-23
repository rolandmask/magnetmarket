import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <div>
            <Navigation/>
                <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/About" component={About}/>
                  <Route path="/Contact" component={Contact}/>
                  <Route path="/Dashboard" component={Dashboard}/>
                  <Route path="/Login" component={Login}/>
                  <Route component={Error}/>
                </Switch>
          </div>
        
        </BrowserRouter>
     
    </div>
  );
}

export default App;
