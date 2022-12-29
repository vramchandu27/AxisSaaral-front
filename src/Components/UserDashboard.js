import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import User from "../CSS/UserDashboard.css"
import GeneralDocs from "./GeneralDocs";
import SpecificDocs from "./SpecificDocs";

function UserDashboard() {
    return (
        <div className="User">
            <div className="User-inner1">
                <h2 className="User-H2">UserDashboard</h2>
                <hr />
                <h2>Image</h2>
                <h2>UserDetails</h2>
            </div>
            <div className="User-inner2">
                <div className="User-inner3">
                    <NavLink activeclassName="active" className="navl1" to="GeneralDocs">GeneralDocs</NavLink>
                    <NavLink activeclassName="active" className="navl2" to="SpecificDocs">SpecificDocs</NavLink>
                    <NavLink activeclassName="active" className="navl3" to="NewsFeed">NewsFeed</NavLink>
                    <NavLink activeclassName="active" className="navl4" to="Projects">Projects</NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default UserDashboard;