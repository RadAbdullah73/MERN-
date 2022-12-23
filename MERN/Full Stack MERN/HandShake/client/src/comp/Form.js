import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import io from 'socket.io-client';


const Form = (props) => {
   const[msg,setMsg] = useState("")
   const[masseges,setMsgs]=useState([]);
   const [socket] = useState(() => io(':8000'));

   useEffect(()=>{
    socket.on("chat" , data => setMsgs([...masseges , data]))

   })
    const onSubmitHandler = (e) => {
        e.preventDefault();
        socket.emit("chat",props.userName1 +" wrote: "+ msg)
        setMsg("")

    }
  return (
    <div>
      <h1>Welcome {props.userName1}</h1>
          <div style={{width:400 , height:200 ,  overflow: "auto" , marginLeft:490}}>
      {masseges.map((msgz,i)=><p key={i}> {msgz}</p>)}
      </div>
<form onSubmit={onSubmitHandler}>
            <p>
                <label>Your massege : </label><br/>
                <input type="text" onChange={(e)=>setMsg(e.target.value)} value={msg}/>
                
            </p>
            <input type="submit" value="send"/>
        </form>
    
    </div>

  )
}

export default Form