import React, { useState, useEffect } from "react";
import axios from 'axios'

function NewsFeed() {
    // const [news, setNews] = useState([])


    // const getNews = async () => {
    //     const response = await axios.get(
    //         "http://localhost:9002/image/downloadNewsfeed/2", {

    //         responseType: 'blob'
    //     }
    //     );
    //     setNews(response)
    // }


    // useEffect(() => {
    //     getNews()
    // }, [])

    return (
        <div>
            <h2>This is NewsFeed </h2>
            <img src="http://localhost:9002/image/downloadNewsfeed/6" width="200px" height="200px"></img>
        </div>
    )
}

export default NewsFeed;