import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../comp/Form';
import {  } from '@reach/router';
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
        axios.put('http://localhost:8000/api/users/update/' + props.id, person)
            .then(res => navigate("/"))
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
                console.log(errorArr);
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

