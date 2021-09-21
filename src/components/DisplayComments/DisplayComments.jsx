import React, {useEffect, useState} from "react";
import axios from "axios";




const DisplayComments=(props)=>{
    const [comments, setComments] = useState(['no Comments'])
    const [reply, setReply] = useState([''])
 
    function filterComment(vid){
        axios.get(`http://127.0.0.1:8000/comment/${vid}/video/`).then(response=>{setComments(response.data)})
    }

    const handleChange= (event) => {
        setReply (event.target.value);
   }

    useEffect (()=>{
        filterComment(props.video);
    }, [props])

    return(
        <div>
            <div>
                {
                comments.map((val, index)=> <p key={index} className= "commentDisplay"> {val.comment} <form  action=""><input name="reply" onChange={handleChange} placeholder="Reply"/></form></p>)
                }   
            </div>
                
        </div>
        
   
    )
    
    
}

export default DisplayComments