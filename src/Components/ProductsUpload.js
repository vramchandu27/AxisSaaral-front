import React, { useState } from "react";
import FileUpload from "./FileUpload";
import prd from "../CSS/Product.css";
import { dispatch } from "react";
import axios from "axios";

function ProductsUpload() {

    const [prodname, setProdname] = useState("")
    const [prodtype, setProdtype] = useState("")
    const [proddesc, setProddesc] = useState("")
    const [data, setData] = useState()

    const Applydata = () => { dispatch(HandleClick()) }

    const HandleClick = () => {

        // const data = {
        //     prodname: prodname,
        //     prodtype: prodtype,
        //     proddesc: proddesc,
        //     data: data

        // }
        const form = new FormData;
        form.append("file", data);
        // return async function (dispatch, getState) {

        axios.post("http://localhost:9002/image/uploadProducts"
            , form).then((response) => { alert("Successful"); }).catch((error) => { console.log(error); })
        // }
    }


    return (

        <div className="Products-outer">
            <div className="Products-Inner">
                <label className="Products-label1">Product-Name</label>
                <br />
                <br />
                <input type="text" className="Products-name" onChange={(e) => setProdname(e.target.value)}></input>
                <br />
                <br />
                <label className="Products-label1">Product-Type</label>
                <br />
                <br />
                <input type="text" className="Products-type" onChange={(e) => setProdtype(e.target.value)}></input>
                <br />
                <br />
                <label className="Products-label1">Product-Description</label>
                <br />
                <br />
                <input type="text" className="Products-Desc" onChange={(e) => setProddesc(e.target.value)} ></input>
                <br />
                <br />
                <label className="Products-label1">Product-Image</label>
                <br />
                <br></br>
                <input type="file" onChange={(e) => setData(e.target.files[0])} />
                <br />
                <br />
                <button onClick={HandleClick}>Submit</button>
            </div>
        </div>
    )
}

export default ProductsUpload;