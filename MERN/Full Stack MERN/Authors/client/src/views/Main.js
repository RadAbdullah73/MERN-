import React, { useEffect, useState } from 'react'
import Form from '../comp/Form';
import axios from 'axios';
import Home from '../comp/Home';
import { navigate } from '@reach/router';
    
const Main = (props) => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
            .then(res=>{
                setAuthors(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

  
    const createAuth = author => {
        axios.post('http://localhost:8000/api/users/', author)
            .then(res=>{
                setAuthors([...authors, res.data]);
                navigate("/")
               
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })            
    }
  
    
    return (
        <div>
              {errors.map((err, index) => <p key={index}>{err}</p>)}
           <Form onSubmitProp={createAuth} initialName="" />
           <hr/>
           
        </div>
    )
}
    
export default Main;


