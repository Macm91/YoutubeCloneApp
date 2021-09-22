import React, {useEffect, useState} from "react";
import axios from "axios";


const DisplayReplies = (props) => {
    const [replies,setReplies] = useState([])

    async function filterReplies(){
        console.log(props.val)
        let response
        response = await axios.get(`http://127.0.0.1:8000/comment/${props.val}/reply/`).then(response => setReplies(response.data))
        console.log(response)
    }    

    useEffect(()=>{
        filterReplies()
    },[replies+1])

return(
    <div>
    {replies.map((element)=><tr>Replies: {element.reply}</tr>)}
    </div>
)}
export default DisplayReplies