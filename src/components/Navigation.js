import React from 'react';
import { NavLink } from "react-router-dom";

const Navigation = () => {

    return (
      <div id="mainNav">
        <NavLink to="/">HOME</NavLink> / 
        <NavLink to="/About">ABOUT</NavLink> / 
        <NavLink to="/Contact">CONTACT</NavLink> /
        <NavLink to="/Login">LOGIN</NavLink> /
        <NavLink to="/Dashboard">DASHBOARD</NavLink>
      </div>
    );  

};

export default Navigation;