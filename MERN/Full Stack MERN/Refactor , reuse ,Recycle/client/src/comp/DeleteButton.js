import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
    
export default props => {
    
    const { personId, successCallback } = props;
    
    const deletePerson = e => {
        axios.delete('http://localhost:8000/api/users/delete/' + personId)
            .then(res=>{
                successCallback();
                
            }
            )
            .catch(err=>console.log(err));navigate('/');
    }
    
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}

