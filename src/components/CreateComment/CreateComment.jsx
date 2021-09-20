import React, { Component } from "react";
// import './CreateForm.css'

class CreateComment extends Component{
    constructor (props){
        super(props);
        this.state = {
            video:'ZJ2tcji7O64',
            comment: '',
            likes: 0,
            dislikes: 0
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
               <label></label>
               <input name="comment" onChange={this.handleChange} placeholder="Comment"/>
               <button type="submit">Create Comment</button>
               {/* could also potentially add a button here to cancel & empty input */}
           </form>
           </footer>
        );
   }
}

export default CreateComment;