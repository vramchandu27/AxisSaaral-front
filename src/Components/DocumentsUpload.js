import React, { useState } from "react";
import FileUpload from "./FileUpload";
import DC from "../CSS/Document.css";
import { dispatch } from "react";
import axios from "axios";

function DocumentsUpload() {

    const [docname, setDocname] = useState("")
    const [docdesc, setDocdesc] = useState("")
    const [doctype, SetDoctype] = useState("")
    const [data, setData] = useState()

    const Applydata = () => { dispatch(HandleClick()) }

    const HandleClick = () => {

        const form = new FormData;
        form.append("file", data);
        // return async function (dispatch, getState) {

        axios.post("http://localhost:9002/image/uploadFiles"
            , form).then((response) => { alert("Successful"); }).catch((error) => { console.log(error); })
        // }
    }

    return (

        <div className="Documents-outer">
            <div className="Documents-Inner">
                <label className="Documents-label1">Documet-Name</label>
                <br />
                <br />
                <input type="text" className="Document-name" onChange={(e) => setDocname(e.target.value)}></input>
                <br />
                <br />
                <label className="Documents-label1">Document-Description</label>
                <br />
                <br />
                <input type="text" className="Document-Description" onChange={(e) => setDocdesc(e.target.value)}></input>
                <br />
                <br />
                <br />
                <select className="mySelect" onChange={(e) => SetDoctype(e.target.value)}>
                    <option>Document-Type</option>
                    <option>GeneralDocs</option>
                    <option>PrivateDocs</option>
                    <option>OtherDocs</option>
                </select>
                <br />
                <br />
                <br />
                <label className="Documents-label1">Documentfile-upload</label>
                <br />
                <br />
                {/* <FileUpload /> */}
                <input type="file" onChange={(e) => setData(e.target.files[0])} />
                <br />
                <br />
                <button onClick={HandleClick}>Submit</button>
            </div>
        </div>
    )
}

export default DocumentsUpload;