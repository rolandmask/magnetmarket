import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Signup from "./components/Signup";
import ItemPage from "./components/ItemPage";
import Dashboard from "./components/Dashboard";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import Listing from "./components/Listing";

function App() {
  return (
    <div className="App">

        <BrowserRouter>
          <div>
            <Navigation/>
                <Switch>
                  <Route path="/" component={Home} exact/>
                  <Route path="/ItemPage" component={ItemPage}/>
                  <Route path="/Signup" component={Signup}/>
                  <Route path="/Dashboard" component={Dashboard}/>
                  <Route path="/Login" component={Login}/>
                  <Route path="/Listing" component={Listing}/>
                  <Route component={Error}/>
                </Switch>
          </div>
        
        </BrowserRouter>
     
    </div>
  );
}

export default App;
