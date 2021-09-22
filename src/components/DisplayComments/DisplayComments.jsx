import React, {useEffect, useState, Component} from "react";
import axios from "axios";
import DisplayReplies from "../DisplayReplies/DisplayReplies";





const DisplayComments=(props)=>{
    const [comments, setComments] = useState(['no Comments'])
    const [comm, setComm] = useState([])
    const [reply,setReply] = useState([''])
    const [replies,setReplies] = useState([''])

    

    async function filterComment(video){
        await axios.get(`http://127.0.0.1:8000/comment/${props.video}/video/`).then(response=>{setComments(response.data)}) 
    }
    // const startFilteredComments = () =>{
    //     filterComment().then(filterReplies)
    // }
    async function updateComment(comment){ 
        await axios.put(`http://127.0.0.1:8000/comment/${comment}/`)
    }

    // async function filterReplies(val){
    //     console.log(val)
    //     await axios.get(`http://127.0.0.1:8000/comment/${val}/reply`).then(response => setReplies(response.data.reply))
    // }    

    const increment = (val)=>{

        let commentUpdate = 
            {
                    "id":val.id,
                    "video":val.video,
                    "comment":val.comment,
                    "likes":(val.like=+1),
                    "dislikes":val.dislikes
            }
        
        console.log("setComm")
        console.log (comm)
        updateComment(commentUpdate);
    }
    
    const handleSubmit = (e,id) =>{
        e.preventDefault()
        getReplies(id)
    }

    async function getReplies(id){
        let newReply = {comment_id: id, reply: reply}
        await axios.post(`http://127.0.0.1:8000/reply/`,newReply)
    }

    const handleChange= (event) => {
        setReply (event.target.value);
    }

    useEffect (()=>{
        filterComment(props.video)
        
    }, [props])

    

    return(
       
            <div className="commentTable">
                {
                comments.map((val, index)=> 
                <tr key={index} className= "commentDisplay"> 
                <th>{val.comment } </th>
                <th><form type="button" onClick={()=> increment(val)} > Like {val.likes}</form></th>
                <th><form type = 'submit' onSubmit = {e => handleSubmit(e,val.id)} return false><input name = "reply" onChange={handleChange} placeholder="Reply" type='text'></input></form></th>
                <tr><DisplayReplies val = {val.id} video = {props.video}/></tr>
                </tr>)
                }   
            </div>
        
   
    )
    
    
}

export default DisplayComments