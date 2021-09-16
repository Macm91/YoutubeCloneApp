import React, { Component } from "react";
import './CreateForm.css'

class CreateComment extends Component{
    constructor (props){
        super(props);
        this.state = {
            comment: "",
        }
    }

    handleChange= (event) => {
        this.setState ({
            [event.target.name]: event.target.value,
        });
   }

   handleSubmit = (event) => {
       this.props.createComment(this.state);
   }


   render() { 
       return ( 
           <footer>
           <form onSubmit= {this.handleSubmit}>
               <label>Song Title</label>
               <input name="newComment" onChange={this.handleChange} value={this.state.comment} placeholder="Comment"/>
               <button type="submit">Create Comment</button>
               {/* could also potentially add a button here to cancel & empty input */}
           </form>
           </footer>
        );
   }
}

export default CreateComment;
