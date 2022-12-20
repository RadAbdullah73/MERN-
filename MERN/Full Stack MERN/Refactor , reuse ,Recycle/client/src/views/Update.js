import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Form from '../comp/Form';
import { navigate } from '@reach/router';

    
const Update = (props) => {
    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);
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
            .catch(err=>console.log(err));
    }
    return (
        <div>
            <h1>Update a Person</h1>
            {loaded && 
    <Form
        onSubmitProp={updatePerson}
        initialTitle={person.title}
        initialDescreption={person.descreption}
        initialPrice={person.price}
    />
}
        </div>
    )
}
    
export default Update;

