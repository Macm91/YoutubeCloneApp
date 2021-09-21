import React, {useEffect, useState} from "react";
import axios from "axios";





const DisplayComments=(props)=>{
    const [comments, setComments] = useState(['no Comments'])
    const [comm, setComm] = useState([])

    function filterComment(video){
        axios.get(`http://127.0.0.1:8000/comment/${video}/video/`).then(response=>{setComments(response.data)})
    }

    const updateComment = (comment) => { 
        axios.put('http://127.0.0.1:8000/comment/'+comment.id+'/')
    }

    const increment = (val)=>{
        debugger
        setComm(
            {
                    id: val.id,
                    video: val.video,
                    comment: val.comment,
                    likes: val.like,
                    dislikes: val.dislikes
            }
        )
        console.log("setComm")
        console.log (comm)
        updateComment(comm);
    }


useEffect (()=>{
    filterComment(props.video);
}, [props])

    return(
       
            <div>
                {
                comments.map((val, index)=> 
                <tr key={index} className= "commentDisplay"> 
                <th>{val.comment} </th>
                <th><form type="button" onClick={()=> increment(val)} >Like {val.likes}</form></th>

                </tr>)
                }   
            </div>
        
   
    )
    
    
}

export default DisplayComments