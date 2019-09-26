import React from "react";
import {NavLink } from 'react-router-dom'
import './Navbar.css'

function Header(props) {

    // let label = props.data;
    // console.log(label);
    
    

    return (
        <div>
        <div className="topnav">
            <NavLink    to="/" >Home</NavLink >
            <NavLink  to="/register"  >register</NavLink >
        </div>
        </div>
    );
}

export default Header;