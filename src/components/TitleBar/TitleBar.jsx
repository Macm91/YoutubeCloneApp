import React, { useState, useEffect} from "react";
import axios from "axios";
import './TitleBar.css';



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
                <div className='search-results'>
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