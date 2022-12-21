import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../comp/Form';
import { navigate } from '@reach/router';

    
const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
    const [errors, setErrors] = useState([]); 

    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
            .then(res => {
                setPerson(res.data);
                setLoaded(true);
            })
    }, []);
    
    const updatePerson = person => {
        axios.put('http://localhost:8000/api/users/update/'+ props.id, person)
            .then(navigate('/'))
            
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })            
    }
    return (
        <div>
            <h1>Update a Person</h1>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            {loaded && 
    <Form
        onSubmitProp={updatePerson}
        initialName={person.name}
      
    />
}
        </div>
    )
}
    
export default Update;

