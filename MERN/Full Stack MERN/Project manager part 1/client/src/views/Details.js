import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';


const Details = (props) => {
    const [person, setPerson] = useState({})
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/users/delete/' + personId)
            .then(res => {
                navigate('/')
                
            })
            .catch(err => console.error(err));
    }


    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Title: {person.title}</p>
            <p>Price: {person.price}</p>
            <button onClick={(e) => { deletePerson(person._id) }}>
                Delete
            </button>
        </div>

    )
}

export default Details;

