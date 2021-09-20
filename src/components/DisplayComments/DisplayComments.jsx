import React, {useEffect, useState} from "react";
import axios from "axios";
import LikeComment from "../LikeComment/LikeComment";




const DisplayComments=(props)=>{
    const [comments, setComments] = useState(['no Comments'])
    function filterComment(video){
        axios.get(`http://127.0.0.1:8000/comment/${video}/video/`).then(response=>{setComments(response.data)})
    }

useEffect (()=>{
    filterComment(props.video);
}, [props])

    return(
        <div>
           
                    <div>
                        {
                        comments.map((val, index)=>
                        <div key={index} className= "commentDisplay">
                         <p > {val.comment} </p>
                        <LikeComment comment= {val}/>

                        </div>)
                        }   
                    </div>
                
        </div>
        
   
    )
    
    
}

export default DisplayComments


