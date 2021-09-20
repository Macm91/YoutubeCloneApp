import React, { useEffect, useState } from "react";

const SearchResult =(props)=>{
    const [results,setResults] = useState ("");
    
    useEffect(()=>{
    setResults(props.videoData)
},[props])

    return(
        results.map((element) => <ul><img src={element.snippet.thumbnails.default.url} alt="Thumbnail" width="120" height="90"/><h3>{}</h3></ul>)
    )


}

export default SearchResult