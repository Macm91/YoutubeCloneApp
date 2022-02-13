import React, { useState, useEffect} from "react";
import axios from "axios";
import './TitleBar.css';
import 'bootstrap/dist/css/bootstrap.min.css';






const TitleBar =(props)=>{
    const [videoData, setVideoData] = useState("");
    const [search, setSearch] = useState ('');
    const [showTable, setShowTable] = useState(false)

    async function handleClick(question){
        let response
        response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${question}&type=video&key=AIzaSyByYNis8DwlkG0UZrKcxhZFdjJTZ4HTEj0`)
        .then(response =>  { setVideoData(response.data.items)})
        // pass the props videodata in to the function that displays the videos 
    }

    

    const handleSubmit = (event) => {
        event.preventDefault()
        handleClick(search);
    }

    useEffect(() => {
        // Trigger rerender
        if (videoData !== "") setShowTable(true)
    },[videoData])

    async function renderNew(vid){
        await props.newLoad(vid.videoId)
    }

//TODO: use css to change loaction of search results on the right of screen
return(
    <div>

        <div className="mx header" >
            <div className="container-fluid position-sticky" >
                   <div className="row" >
                       <div className= "col-8" id="youtubeIcon">
                       <span id="youtubeText">
                           <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" fill="red" class="bi bi-play-btn" viewBox="0 0 16 16">
                                <path d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
                                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                            </svg>
                           Youtube Clone
                        </span>
                       </div>
                   
                   <div className="col-4 ">
                        <form onSubmit = {handleSubmit} className="searchForm">
                            <input name="search" placeholder="search..." onChange={event => {setSearch(event.target.value)}}/>
                            <button type="submit"> Search</button>
                        </form>
                   </div>
                   </div>
                
            </div>  
        </div>
        
        <div >
                {/* <div> */}
                <div className="d-flex overflow-scroll border w-auto h-50 ">
                    {showTable &&
                        videoData.map((element) => <ul><img onClick = {() => renderNew(element.id)} src={element.snippet.thumbnails.default.url} alt="Thumbnail" width="120" height="90"/><h5>{element.snippet.title}</h5></ul>)
                            // mapp data into table.
                        }
                
            </div>
        </div>
        
        </div>
)

}

export default TitleBar;