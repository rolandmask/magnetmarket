import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
      <div id="mainNav">
        <NavLink to="/">HOME</NavLink> / 
        <NavLink to="/ItemPage">ITEMPAGE</NavLink> / 
        <NavLink to="/Signup">SIGNUP</NavLink> /
        <NavLink to="/Login">LOGIN</NavLink> /
        <NavLink to="/Dashboard">DASHBOARD</NavLink>
      </div>
    );  

};

export default Navigation;