import { render } from "@testing-library/react";
import axios from "axios";
import React, {useEffect, useState} from "react";
import VideoViewer from "../VideoViewer/VideoViewer";

// const = Styling issuse

// * Main Function
const RelatedVideos = (props) =>{
    const [videoData, setVideoData] = useState("");
    const [showTable, setShowTable] = useState(false)

    async function handleClick(props){
        let response
        response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${props.video}&type=video&key=AIzaSyBkY3kg-L1IHpD3Wy285XtpITZBj5oMONQ&part=snippet&maxResults=5`)
        .then(response =>  { setVideoData(response.data.items)})
    }

    useEffect(() => {
        // Trigger rerender
        if (videoData != "") setShowTable(true)
    },[videoData])

    async function renderNew(vid){
        await props.newLoad(vid.videoId)
    }

    return (
        <div>
            <button 
                onClick = {() => handleClick(props)}
            >
                Related
            </button>
                {showTable &&
                    videoData.map((element) => <ul><img onClick = {() => renderNew(element.id)}src={element.snippet.thumbnails.default.url} alt="Thumbnail" width="120" height="90"/><h5>{element.snippet.title}</h5></ul>)
                        // mapp data into table.
                }
        </div>

    )

            }
export default RelatedVideos;