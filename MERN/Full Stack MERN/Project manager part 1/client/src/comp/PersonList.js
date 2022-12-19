import React from 'react'
import axios from 'axios';
import {Link} from '@reach/router';

const PersonList = (props) => {
    const deletePerson = (personId) => {
        axios.delete('http://localhost:8000/api/users/delete/' + personId)
            .then(res => {
                
            })
            .catch(err => console.error(err));
    }
    return (
        <div>
            {props.people.map( (person, i) =>
                <p key={i}> Descreption : {person.descreption} Title: <Link to ={"details/" + person._id}>{person.title}</Link>
                <Link to ={"edit/" + person._id}>Update</Link>
                <button onClick={(e)=>{deletePerson(person._id)}}>
                        Delete
                    </button>
                
                
                 </p>
            )}
        </div>
    )
}
    
export default PersonList;