import React, { useEffect, useState } from 'react'
import axios from 'axios';
import First from '../comp/First';
import Form from '../comp/Form';
    
const Main = (props) => {
    const [userName ,setUsername ]=useState("")
   
    return (
        <div>
            {!userName ?            
            <First fun={setUsername}/>
        :
            <Form userName1={userName} />
        }
        </div>
    )
}
    
export default Main;


