import React from "react";
import videobg from "../Videos/Newsfeed.mp4";
import vid from "../CSS/News.css";

const News = () => {
    return (
        <div className="News">
            <div className="News-section">
                <h2 className="News-Head">NewsFeeds....</h2>
                <h2 className="News-Head1">Have a look at all the latest news,click to See all the latest Newsfeed....</h2>
                <button className="News-btn">Click Here</button>
            </div>
            <div className="Video">
                <video src={videobg} />
            </div>
        </div>
    )
}

export default News;