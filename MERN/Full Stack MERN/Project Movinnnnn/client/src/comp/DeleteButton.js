import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
    
export default props => {
    
    const {personName, personId, successCallback } = props;
    
    const deletePerson = e => {
        let answer = window.confirm("Are you sure you want to Delete this player? ");
        if (answer){
        axios.delete('http://localhost:8000/api/users/delete/' + personId)
            .then(res=>{
                successCallback();
                
            }
            
            )
            navigate("/players/list")
    }
   
}
    
    return (
        <button onClick={deletePerson}>
            Delete
        </button>
    )
}

