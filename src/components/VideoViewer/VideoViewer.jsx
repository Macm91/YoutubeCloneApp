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


    async getComments (){
            let response = await axios.get('http://127.0.0.1:8000/comment/');
            this.setState({
                comments: response.data
            });
    }
        

    editComment = (comment) => {
        axios.put('http://127.0.0.1:8000/comment/'+comment.id+'/')
    }

        catch(ex) {
            console.log ('Error in API Call!')
        }
    }

    clickMe = (e) => {
        console.log(e)
        console.log('ya done clicked on me')
    }

    createComment=(newComment)=>{axios.post('http://127.0.0.1:8000/comment/',newComment)}


    render(){ 
        return ( 
            <div onClick={(e) => this.clickMe(e)}>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.video}`}
                frameborder="0"></iframe>
                <CreateComment createComment = {this.createComment}/>
                {/* display comments */}
            </div>
       
         );
    }
}
 
export default VideoViewer;