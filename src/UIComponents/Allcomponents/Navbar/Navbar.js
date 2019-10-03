import React from "react";
import {BrowserRouter, Link } from 'react-router-dom'
import './Navbar.css'

function Header(props) {

    // let label = props.data;
    // console.log(label);
    
    

    return (
        <BrowserRouter>
        <div className="topnav">
            {/* <Link exact   to="/screen-interface/home" >Home</Link >
            <Link exact to="/screen-interface/register"  >register</Link > */}
            <a    href="/screen-interface/home" >Home</a >
            <a  href="/screen-interface/register"  >register</a >
        </div>
        </ BrowserRouter>
    );
}

export default Header;