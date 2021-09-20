import React, { Component} from "react";
import axios from "axios";
import CreateComment from "../CreateComment/CreateComment";
import RelatedVideos from "../RelatedVideos/RelatedVideos";
import DisplayComments from "../DisplayComments/DisplayComments";
import TitleBar from "../TitleBar/TitleBar";


class VideoViewer extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            comments: [],
            video:'pfzx8CwndSE',
            comment: '',
            likes: 0,
            dislikes: 0
         }
    }


componentDidMount(){
    this.getComments();
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
        let response = await axios.get(`http://127.0.0.1:8000/comment/ZJ2tcji7O64/video`);
        this.setState({
            comments: response.data
        });
}
    catch(ex) {
        console.log ('Error in API Call!');
    }
} 

    async getTitleAndDescription(videoToPlay){
        let response
        response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.state.video}&key=AIzaSyBkY3kg-L1IHpD3Wy285XtpITZBj5oMONQ
        &part=snippet,statistics`).then(response =>  { response = (response.data.items)})
        return(
            <p>{response.snippet.title}</p>
        )
    }


    loadNewVid = (vid) =>{
        this.setState({
            video: vid
        })
    }
    

    createComment=(newComment)=>{axios.post('http://127.0.0.1:8000/comment/',newComment)}


    render(){ 
        return ( 
            <div>
                <TitleBar loadSearch = {this.loadSearch}/>
            <div>
                <iframe title= "videoViewer" id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.video}`}
                frameborder="0"></iframe>
                <CreateComment createComment = {this.createComment}/>
                <DisplayComments video={this.state.video}/>  
                <RelatedVideos video = {this.state.video} newLoad = {this.loadNewVid}/>      
            </div>
           
            </div>
        )
    }
}
 
export default VideoViewer;