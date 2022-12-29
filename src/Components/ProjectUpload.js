import React, { useState } from "react";
import proj from "../CSS/ProjectUpload.css";
import { useDispatch } from "react-redux";
import axios from "axios";

function ProjectUpload() {
    const dispatch = useDispatch();
    const [projecttitle, setProjecttitle] = useState("");
    const [projectdesc, setProjectdesc] = useState("");
    const [projectmanager, setProjectmanager] = useState("");
    const [projectdomain, setProjectdomain] = useState("");
    const [empworking, setEmpworking] = useState("")

    const Applyproject = () => { dispatch(HandleClick()) }

    const HandleClick = () => {
        const data = {
            projecttitle: projecttitle,
            projectdesc: projectdesc,
            projectmanager: projectmanager,
            projectdomain: projectdomain,
            empworking: empworking,
        }
        return async function (dispatch, getState) {

            await axios.post("http://localhost:9002/project/submitproject", data).then((response) => { alert("Successful"); }).catch((error) => { console.log(error); })
        }
    }

    return (
        <div className="Projup-outer">
            <div className="Projup-Inner">
                <label className="Projup-label1">Project Title</label>
                <br />
                <br />
                <input type="text" className="Projup-name" onChange={(e) => setProjecttitle(e.target.value)}></input>
                <br />
                <br />
                <label className="Projup-label1">Project Description</label>
                <br />
                <br />
                <input type="text" className="Projup-Desc" onChange={(e) => setProjectdesc(e.target.value)}></input>
                <br />
                <br />
                <label className="Projup-label1">Project manager</label>
                <br />
                <br />
                <input type="text" className="Projup-manager" onChange={(e) => setProjectmanager(e.target.value)}></input>
                <br />
                <br />
                <label className="Projup-label1">Project-Domain</label>
                <br />
                <br />
                <input type="text" className="Projup-Domain" onChange={(e) => setProjectdomain(e.target.value)}></input>
                <br />
                <br />
                <label className="Projup-label1">Employees working in the Project</label>
                <br />
                <br />
                <input type="text" className="Projup-emp" onChange={(e) => setEmpworking(e.target.value)}></input>
                <br />
                <br />
                <button onClick={Applyproject} className="Proj-btn">Submit</button>
            </div>
        </div>
    )
}

export default ProjectUpload;