import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';
import DeleteButton from '../comp/DeleteButton';


const Details = (props) => {
    const [person, setPerson] = useState({})
 


    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <p>Title: {person.title}</p>
            <p>Price: {person.price}</p>
            <DeleteButton personId={person._id} successCallback={()=>props.removeFromDom(person._id)}/>
        </div>

    )
}

export default Details;

