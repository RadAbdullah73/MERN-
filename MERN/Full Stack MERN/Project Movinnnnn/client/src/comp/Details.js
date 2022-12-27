import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

const Details = (props) => {
    const { id } = props;
    const [pet, setPet] = useState({})
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + id)
            .then(res => {
                setPet(res.data);
                setLoaded(true);
                console.log("hiiiiiiiiii")
               

            })
            .catch(err => console.error(err));
    });

    const increaseOne=(num) => {
        axios.put('http://localhost:8000/api/users/update/'+ id, {'like' : num+1})
            .then(res =>console.log("zzzzzzzzzz") 
            )
            .catch(err=>console.log(err));


    }



    return (      
        <div> 
            {loaded && 
            <>
                
            <h2>Name : {pet.name} </h2>
            <p>Descreption : {pet.descreption}</p>
            <p>Type : {pet.type}</p>
            <p>Likes : {pet.like} <button onClick={()=>increaseOne(pet.like)}>Like</button>  </p>
            <hr></hr>
            <h3>Skills :
                <table border="1">
                    <thead>
                        <th>SKILL ONE</th>
                        <th>SKILL TWO</th>
                        <th>SKILL THREE</th>
                    </thead>
                    <tr>
                        <td>{pet.skills.skill1}</td>
                        <td>{pet.skills.skill2}</td>
                        <td>{pet.skills.skill3}</td>
                    </tr>
                </table>           
            </h3>
            <DeleteButton personId={id}  /> </> }
        </div>
       


    )
}

export default Details