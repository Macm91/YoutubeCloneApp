import React from "react";
import { useState, useEffect } from "react/cjs/react.development";
import './CreateComment.css'



const CreateComment=(props)=>{
    const [comment, setComment] = useState(['']);
    const [video, setVideo] = useState ();
    const [likes, setLikes] = useState (0);
    const [dislikes, setDislikes] = useState (0);

    useEffect(() => {
        setVideo(props.video)
    },[props]);

    const handleChange= (event) => {
        setComment (event.target.value);
   }



   const handleSubmit = (event) => {
       let newComment = {video:video, comment:comment, likes:likes, dislikes:dislikes}
       event.preventDefault()
       props.createComment(newComment);
   }


    //    render() { 
       return ( 
         
           <form onSubmit= {handleSubmit} className="submitComment">
               <input className="input" name="comment" onChange={handleChange} placeholder="Comment"/>
               {/* <br/> */}
               <button className="createButton" type="submit">Create Comment</button><hr /> 
           </form>
        );

}

export default CreateComment;
