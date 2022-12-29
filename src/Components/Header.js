import React from "react";
import Headercomp from "../CSS/Header.css";
import { Link } from "react-router-dom";

function Header() {
    return (

        <div className="Header">
            <div>
                <h1 className="Header-Title">Axis SARAL</h1>
            </div>
            <div className="Header-list">
                <ul className="Header-ul">
                    <li><Link to="/Home">Home</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Signup">Signup</Link></li>
                    <li><Link to="/ContactUs">ContactUs</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;