import React, {Component} from "react";
import './App.css'
import axios from "axios";
import CreateComment from "./CreateComment/CreateComment";
import VideoViewer from "./VideoViewer/VideoViewer";


class App extends Component{
    constructor(props){
        super(props);
        this.state ={
            comments : [],
            search :'',
            searchResults : ''
            
        }
    }
    componentDidMount(){
        // To DO: input the get all videos function here. 
        // This can be filtered in the display via the search bar. 
        
    }

// Done
    async getComments (){
        try{
            let response = await axios.get('http://127.0.0.1:8000/comment/');
            this.setState({
                comments: response.data
            });
    }
        catch(ex) {
            console.log ('Error in API Call!')
        }
    }


// Done
    
    
    deleteComment=(comment)=>{
        axios.delete('http://127.0.0.1:8000/music/'+comment.id+'/')
        this.getSongs()
    }

   
// Done
    handleChange= (event) => {
         this.setState ({
        [event.target.name]: event.target.value,
    });
    }   

    editComment = (comment) => {
        axios.put('http://127.0.0.1:8000/comment/'+comment.id+'/')
    }


// ###############
// TODO: Need to create/implement from the Youtube API a filter function that will fitler by video 


// TODO: when we want a certain video to play, we can map through multiple videos to play or a single video and inject the .id into the code after /embed

// Need to fill this in, obviously. 
    render (){
        return(
            <div className="container-fluid">
                <VideoViewer/>     
            </div>
        )
    }
}

export default App