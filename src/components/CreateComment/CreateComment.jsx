import React from "react";
import { useState } from "react/cjs/react.development";



const CreateComment=(props)=>{
    const [comment, setComment] = useState(['']);
    const [video, setVideo] = useState (props.video);
    const [likes, setLikes] = useState (0);
    const [dislikes, setDislikes] = useState (0);


    // class CreateComment extends Component{
    //     constructor (props){
    //         super(props);
    //         this.state = {
    //             video: this.props.video,
    //             comment: '',
    //             likes: 0,
    //             dislikes: 0
    //         }
    //     }

    const handleChange= (event) => {
        setComment (event.target.value);
   }

    //    handleChange= (event) => {
    //     comment.setState ({
    //         [event.target.name]: event.target.value,
    //     });
    // }


   const handleSubmit = (event) => {
       props.createComment(video, comment, likes, dislikes);
   }


    //    render() { 
       return ( 
           <footer>
           <form onSubmit= {handleSubmit}>
               <label></label>
               <input name="comment" onChange={handleChange} placeholder="Comment"  value={comment}/>
               <button type="submit">Create Comment</button>
               {/* could also potentially add a button here to cancel & empty input */}
           </form>
           </footer>
        );

}

export default CreateComment;
