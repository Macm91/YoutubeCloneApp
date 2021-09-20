import React, { useState } from "react";


    // filters to display only comments with the exact videoID    
const DisplayComments =(props)=> {
    const [comments, setComments] = useState([props.comments]);
    const [video, setVideo]= useState ("");
    
    setVideo(props.video);
    // props.filterComments(video);
      

    // async filterComments(video){
    //     try{
    //         let response = await axios.get(`http://127.0.0.1:8000/comment/${video}/video`);
    //         this.setState({
    //             comments: response.data
    //         });
    
    return(
        <div>
            {console.log("Comments State: ",comments)}
            {/* {comments.map((comment, index) => 
                <p key= "index" className= "individualComment">{comment.comment}</p>)} */}
        </div>
    )
}

export default DisplayComments
