import React from "react";
import img from "../Images/Image1.jpg";
import style from "../CSS/Hero.css";

function Hero() {
    return (
        <div className="Hero">
            <div>
                <img src={img}></img>
            </div>
            <div className="Hero-outer">
                <h2 className="Hero-H1">Investing in our communities</h2>
                <h2 className="Hero-H2">We’re working hard to put the  well-being
                    <br />of our partners and customers first in all
                    <br /> that we do.</h2>
                <button className="Hero-btn1">GET STARTED</button>
            </div>
        </div>
    )
}

export default Hero