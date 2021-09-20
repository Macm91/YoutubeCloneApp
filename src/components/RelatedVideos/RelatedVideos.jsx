import axios from "axios";
import React, {useEffect, useState} from "react";


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
        if (videoData !== "") setShowTable(true)
    },[videoData])

    return (
        <div>
            <button 
                onClick = {() => handleClick(props)}
            >
                Related
            </button>
                {showTable &&
                    videoData.map((element) => <ul><img src={element.snippet.thumbnails.default.url} alt="Thumbnail" width="120" height="90"/><h3>{}</h3></ul>)
                        // mapp data into table.
                }
        </div>

    )

            }
export default RelatedVideos;