import React, {Component} from "react";
import './App.css'
import axios from "axios";
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

    deleteComment=(comment)=>{
        axios.delete('http://127.0.0.1:8000/music/'+comment.id+'/')
        this.getSongs()
    }
   
    handleChange= (event) => {
         this.setState ({
        [event.target.name]: event.target.value,
    });
    }   

    editComment = (comment) => {
        axios.put('http://127.0.0.1:8000/comment/'+comment.id+'/')
    }


 
    render (){
        return(
            <div className="container-fluid">
                
                <VideoViewer/>     
            </div>
        )
    }
}

export default App