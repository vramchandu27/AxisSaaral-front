import React from "react";
import Foot from "../CSS/Footer.css";

function Footer() {
    return (
        <div className="Footer">
            <div>
                <h2 className="Footer_title">Contact-us</h2>
                <h3 className="Footer_phoneno">Call: 1800-419-5959
                    <br />
                    SMS BAL to 56161600 or +918691000002
                    <br />
                    to get your Account Balance
                </h3>
            </div>
            <div>
                <h2 className="Footer_holder"> Shareholders Corner</h2>
                <h3 className="Footer_head3">Stock Information</h3>
                <h3 className="Footer_head3">Regulatory Disclosures Section</h3>
                <h3 className="Footer_head3">Shareholder's Information</h3>
                <h3 className="Footer_head3">Financial Results & other information</h3>
                <h3 className="Footer_head3">Corporate Governance</h3>
            </div>
        </div>
    )
}

export default Footer;