import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Log from "../CSS/Login.css";
import img1 from "../Images/Login.jpg";
import axios from "axios";

function Login() {
    const [isUser, setIsUser] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [isManager, setIsManager] = useState(false)
    const [data, setData] = useState([])


    const handleLogin = (e) => {
        e.preventDefault()
        var email = e.target.value

        // {
        //     user.role == "employee" ?
        //         setIsUser(true) : user.role == "manager" ?
        //             setIsManager(true) : user.role == "admin" &&
        //             setIsAdmin(true)
        // }
        // var role = ""


        // const val = data.map((value) => {
        //     if (email === value.email) {

        //         return value
        //     }
        // })
        // role = val.role

        if (email === "chandu@employee.com")
            setIsUser(true)
        else if (email === "chandu@manager.com")
            setIsManager(true)
        if (email === "admin@gmail.com")
            setIsAdmin(true)

        // console.log(role)
    }



    const getAllusers = async () => {
        const response = await axios.get(
            "http://localhost:9002/signup/getall"
        );
        setData(response.data)
    }

    // console.log(data);

    useEffect(() => {

        getAllusers();

    }, [])


    return (
        <div className="Login" >
            <div className="Login-inner">
                <img src={img1}></img>
            </div>
            <div className="Login-outer" >
                <label className="Login-label1">Email</label>
                <br />
                <br />
                <input type="text" className="Login-email" onBlur={handleLogin}></input>
                <br />
                <br />
                <label className="Login-label1">Password</label>
                <br />
                <br />
                <input type="password" className="Login-password"></input>
                <br />
                {isUser ?
                    <Link to='/UserDashboard'><button className="Login-btn">LOGIN</button></Link>
                    : isManager ?
                        <Link to='/ManagerDashboard'><button className="Login-btn">LOGIN</button></Link>
                        : isAdmin ?
                            <Link to='/AdminDashboard'><button className="Login-btn">LOGIN</button></Link>
                            : <button className="Login-btn">LOGIN</button>
                }
                <br />
                {/* {
                    data.map((value) => {
                        return <p key={value.id}>{value.role}</p>
                    })
                } */}
                <h4 className="Login-tag">Don't Have an Account? Please <b>SignUp</b></h4>
            </div>

        </div>
    )
}

export default Login;