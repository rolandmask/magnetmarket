import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
      <div id="mainNav" align="center">
        <NavLink to="/">Home</NavLink> / 
        <NavLink to="/About">About</NavLink> / 
        <NavLink to="/Contact">Contact</NavLink> /
        <NavLink to="/Login">Login</NavLink> /
        <NavLink to="/Dashboard">Dashboard</NavLink>
      </div>
    );  

};

export default Navigation;