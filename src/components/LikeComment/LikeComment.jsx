import React, {useState} from "react"
import axios from "axios";
import { Button } from "bootstrap";

const LikeComment = (props)=> {
    const [comment, setComment] = useState (props.val);
    // const [liked, setLiked] = useState(false);

    const updateComment = (comment) => { 
        axios.put('http://127.0.0.1:8000/comment/'+comment.id+'/')
    }
    
    const increment = ()=>{
    setComment(
        {
                "id": comment.id,
                "video": comment.video,
                "comment": comment.comment,
                "likes": comment.like ++,
                "dislikes": comment.dislikes
        }
    )
    updateComment(comment);
}

    const decrement =()=> {
        setComment(
            {
                    "id": comment.id,
                    "video": comment.video,
                    "comment": comment.comment,
                    "likes": comment.like --,
                    "dislikes": comment.dislikes
            }
        )
        updateComment(comment);
    }



    return(
        <div>
            <form type={Button} onClick={increment}> Like {comment.likes} </form>
            <form type= {Button} onClick={decrement}>  Dislike {comment.dislikes} </form>

        </div>
    )


}

export default LikeComment