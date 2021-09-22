import React, {useEffect, useState} from "react";
import axios from "axios";
import './DisplayReplies.css'


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
    },[replies])

return(
    <div className="replies">
    {replies.map((element)=><tr> Reply: {element.reply}</tr>)}
    </div>
)}
export default DisplayReplies