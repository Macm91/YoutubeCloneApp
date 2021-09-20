import React, { Component} from "react";
import axios from "axios";
import CreateComment from "../CreateComment/CreateComment";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import DisplayComments from "../DisplayComments/DisplayComments";


class VideoViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: [],
            video:'ZJ2tcji7O64',
            comment: '',
            likes: 0,
            dislikes: 0
         }
    }

    async getComments (){
        try{
            let response = await axios.get('http://127.0.0.1:8000/comment/');
            this.setState({
                comments: response.data
            });
    }
        catch(ex) {
            console.log ('Error in API Call!');
        }
    } 


    async filterComments(video){
    try{
        let response = await axios.get(`http://127.0.0.1:8000/comment/${video}/video`);
        this.setState({
            comments: response.data
        });
}
    catch(ex) {
        console.log ('Error in API Call!');
    }
} 

    clickMe = (e) => {
        console.log(e)
        console.log('ya done clicked on me')
    }
    

    createComment=(newComment)=>{axios.post('http://127.0.0.1:8000/comment/',newComment)}


    render(){ 
        return ( 
            <React.Fragment>
            <div onClick={(e) => this.clickMe(e)}>
                <iframe title= "videoViewer" id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.video}`}
                frameborder="0"></iframe>
                <CreateComment createComment = {this.createComment}/>
                <DisplayComments comments= {this.comments} video={this.video} filterComments={this.filterComments}/>        
            </div>
            <RelatedVideos video = {this.state.video} />
            </React.Fragment>
         );
    }
}
 
export default VideoViewer;