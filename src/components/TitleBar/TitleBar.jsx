import React, { useState} from "react";
import axios from "axios";
import './TitleBar.css';
// import SearchResult from "../SearchResults/SearchResults";


const TitleBar =()=>{
    const [videoData, setVideoData] = useState("");
    const [search, setSearch] = useState ('');

    async function handleClick(question){
        debugger
        let response
        response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${question}&key=AIzaSyBkY3kg-L1IHpD3Wy285XtpITZBj5oMONQ&maxResults=25`)
        .then(response =>  { setVideoData(response.data.items)})
        console.log(videoData);
        // pass the props videodata in to the function that displays the videos 
    }

    const handleSubmit = (event) => {
        handleClick(search);
    }


return(
    <div className='row row-space'>
            <div className='col-md-12' style={{padding:0}}>
                <div className='titlebar-nav'>
               <header> 
                   <h1> Youtube Clone </h1>
                   
                   <form onSubmit = {handleSubmit}>
                    <input name="search" placeholder="search..." onChange={event => {setSearch(event.target.value)}}/>
                    <button type="submit"> Search</button>
                   </form>

                </header>
                </div>
            </div>
        </div>
)

}

export default TitleBar;