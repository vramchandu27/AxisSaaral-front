import React from "react";
import Manager from "../CSS/MagerDashboard.css"
import { NavLink, Outlet } from "react-router-dom";

function ManagerDashboard() {
    return (
        <div className="Manager">
            <div className="Manager-inner1">
                <h2 className="Manager-H2">ManagerDashboard</h2>
                <hr />
                <h2>Image</h2>
                <h2>ManagerDetails</h2>
            </div>
            <div className="Manager-inner2">
                <div className="Manager-inner3">
                    <NavLink activeclassName="active" className="navd1" to="GeneralDocs">GeneralDocs</NavLink>
                    <NavLink activeclassName="active" className="navd2" to="SpecificDocs">SpecificDocs</NavLink>
                    <NavLink activeclassName="active" className="navd3" to="NewsFeed">NewsFeed</NavLink>
                    <NavLink activeclassName="active" className="navd4" to="EmployeeData">EmployeeData</NavLink>
                </div>
                <Outlet />
            </div>
        </div>

    )
}

export default ManagerDashboard;