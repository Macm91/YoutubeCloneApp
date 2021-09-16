import React, {useState, useEffect, Component} from "react";
import axios from "axios";
import CreateComment from "../CreateComment/CreateComment";


class VideoViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            video:'ZJ2tcji7O64',
            comment: '',
            likes: 0,
            dislikes: 0
         }
    }

    clickMe = (e) => {
        console.log(e)
        console.log('ya done clicked on me')
    }

    createComment=(newComment)=>{axios.post('http://127.0.0.1:8000/comment/',newComment)}


    render() { 
        return ( 
            <div onClick={(e) => this.clickMe(e)}>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.video}`}
                frameborder="0"></iframe>
                <CreateComment createComment = {this.createComment}/>
            </div>
       
         );
    }
}
 
export default VideoViewer;