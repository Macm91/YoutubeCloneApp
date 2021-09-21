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
            video:'ZJ2tcji7O64',
            comment: '',
            likes: 0,
            dislikes: 0,
            title: '',
            description: ''
         }
    }


    componentDidMount(){
        this.filterComments();
        this.titleAndDescription()
    }

    async filterComments(){
    try{
        let response = await axios.get(`http://127.0.0.1:8000/comment/${this.state.video}/video`);
        this.setState({
            comments: response.data
        });
}
    catch(ex) {
        console.log ('Error in API Call!');
    }
} 

    loadNewVid = (vid) =>{
        this.setState({
            video: vid
        }, () => this.titleAndDescription())
        
    }
    async titleAndDescription(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${this.state.video}&key=AIzaSyByYNis8DwlkG0UZrKcxhZFdjJTZ4HTEj0&part=snippet,statistics`)
        this.setState({
            title:response.data.items[0].snippet.title,
            description:response.data.items[0].snippet.description
        })

    }

    

    createComment=(newComment)=>{axios.post('http://127.0.0.1:8000/comment/',newComment)}


    render(){ 
        return ( 
            <div>
                <TitleBar newLoad = {this.loadNewVid}/>
            <div>
                <iframe title= "videoViewer" id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${this.state.video}`}
                frameborder="0"></iframe>
                <h4>{this.state.title}</h4><br /><p>{this.state.description}</p>
                <CreateComment createComment = {this.createComment} video={this.state.video}/>
                <DisplayComments video={this.state.video}/>  
                <RelatedVideos video = {this.state.video} newLoad = {this.loadNewVid}/>      
            </div>
           
            </div>
        )
    }
}
 
export default VideoViewer;