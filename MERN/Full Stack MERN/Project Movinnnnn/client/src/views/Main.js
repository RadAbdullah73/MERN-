import React, { useEffect, useState } from 'react'
import Form from '../comp/Form';
import axios from 'axios';
import Home from '../comp/Home';
import { navigate } from '@reach/router';
    
const Main = (props) => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const createPlayer = player => {
        axios.post('http://localhost:8000/api/users/', player)
            .then(res=>{
                setPlayers([...players, res.data]);
                navigate("/players/list")
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            }) 
                  
    }
  
    
    return (
        <div>
           <Form onSubmitProp={createPlayer} initialName="" initialType="" initialDescreption="" initialSkillOne="" initialSkillTwo="" initialSkillThree="" >
           {errors.map((err, index) => <p key={index}>{err}</p>)}
            </Form>
           <hr/>
           
        </div>
    )
}
    
export default Main;


