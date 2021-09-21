import React, { useState, useEffect } from "react";
// import './CreateForm.css'


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
           <footer>
           <form onSubmit= {handleSubmit}>
               <label></label>
               <input name="comment" onChange={handleChange} placeholder="Comment"/>
               <button type="submit">Create Comment</button><hr />
               {/* could also potentially add a button here to cancel & empty input */}
           </form>
           </footer>
        );

}

export default CreateComment;
