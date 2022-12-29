import React from "react";
import Admin from "../CSS/AdminDashboard.css";
import { NavLink, Outlet } from "react-router-dom";




function AdminDashboard() {
    return (
        <div className="Admin">
            <div className="Admin-inner1">
                <h2 className="Admin-H2">AdminDashboard</h2>
                <hr />
                <h2 className="Admin-Image">Image</h2>
                <h2>AdminId</h2>
                <h2>AdminName</h2>


                <hr />
                <br />
                <NavLink activeclassName="active" className="nava5" to="DocumentsUpload">DocumentsUpload</NavLink>
                <br />
                <br />

                <NavLink activeclassName="active" className="nava6" to="ProductsUpload">ProductsUpload</NavLink>
                <br />
                <br />
                <NavLink activeclassName="active" className="nava7" to="NewsfeedUpload">NewfeedUpload</NavLink>
                <br />
                <br />
                <br />
                <NavLink activeclassName="active" className="nava9" to="ProjectUpload">ProjectUpload</NavLink>
            </div>
            <div className="Admin-inner2">
                <div className="Admin-inner3">
                    {/* <NavLink activeclassName="active" className="nava1" to="VerifyData">VerifyData</NavLink>
                    <NavLink activeclassName="active" className="nava2" to="DeleteUser">DeleteUser</NavLink> */}
                    {/* <NavLink activeclassName="active" className="nava3" to="SalarySlips">SalarySlips</NavLink> */}
                    <NavLink activeclassName="active" className="nava4" to="EmployeeData">EmployeeData</NavLink>
                    <NavLink activeclassName="active" className="nava8" to="ManagerData">ManagerData</NavLink>
                </div>
                <Outlet />
            </div>
        </div>

    )
}
export default AdminDashboard;