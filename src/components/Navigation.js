import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
      <div id="mainNav">
        <NavLink to="/">HOME</NavLink> ·&nbsp; 
        <NavLink to="/ItemPage">ITEMPAGE</NavLink> ·&nbsp; 
        <NavLink to="/Listing">LISTING</NavLink> ·&nbsp; 
        <NavLink to="/Signup">SIGNUP</NavLink> ·&nbsp;
        <NavLink to="/Login">LOGIN</NavLink> ·&nbsp;
        <NavLink to="/Dashboard">DASHBOARD</NavLink>
        
      </div>
    );  

};

export default Navigation;