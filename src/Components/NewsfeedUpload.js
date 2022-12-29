import React, { useState } from "react";
import FileUpload from "./FileUpload";
import nf from "../CSS/Nfeed.css";
import axios from "axios";
import { dispatch } from "react";


function NewsfeedUpload() {

    const [newsfeedname, setNewsfeedname] = useState("")
    const [newsfeedtype, setNewsfeedtype] = useState("")
    const [newfeeddesc, SetNewsfeeddesc] = useState("")
    const [data, setData] = useState()

    const Applydata = () => { dispatch(HandleClick()) }

    const HandleClick = () => {

        const form = new FormData;
        form.append("file", data);
        // return async function (dispatch, getState) {

        axios.post("http://localhost:9002/image/Newsfeed"
            , form).then((response) => { alert("Newsposted"); }).catch((error) => { console.log(error); })
        // }
    }
    return (

        <div className="NF-outer">
            <div className="NF-Inner">
                <label className="NF-label1">NewsFeed-Name</label>
                <br />
                <br />
                <input type="text" className="NF-name" onChange={(e) => setNewsfeedname(e.target.value)}></input>
                <br />
                <br />
                <label className="NF-label1">NewsFeed-Type</label>
                <br />
                <br />
                <input type="text" className="NF-type" onChange={(e) => setNewsfeedtype(e.target.value)}></input>
                <br />
                <br />
                <label className="NF-label1">NewsFeed-Description</label>
                <br />
                <br />
                <input type="text" className="NF-Desc" onChange={(e) => SetNewsfeeddesc(e.target.value)}></input>
                <br />
                <br />
                <label className="NF-label1">NewsFeed-Image</label>
                <br />
                {/* <FileUpload /> */}
                <br />
                <input type="file" onChange={(e) => setData(e.target.files[0])} />
                <br />
                <br />
                <br />
                <button onClick={HandleClick}>Submit</button>
            </div>
        </div>
    )
}

export default NewsfeedUpload;