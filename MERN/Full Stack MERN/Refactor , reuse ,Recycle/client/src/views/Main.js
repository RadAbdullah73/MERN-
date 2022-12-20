import React, { useEffect, useState } from 'react'
import Form from '../comp/Form';
import PersonList from '../comp/PersonList';
import axios from 'axios';
import Details from './Details';
    
const Main = (props) => {
    const [people, setPeople] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/users')
            .then(res=>{
                setPeople(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id != personId));
    }
    const createPerson = person => {
        axios.post('http://localhost:8000/api/people', person)
            .then(res=>{
                setPeople([...people, res.data]);
            })

    }
  
    
    return (
        <div>
           <Form onSubmitProp={createPerson} initialTitle="" initialDescreption="" initialPrice="" />
           <hr/>
           {loaded && <PersonList people={people} removeFromDom={removeFromDom}/>}
           {loaded && <Details  removeFromDom={removeFromDom}/>}
        </div>
    )
}
    
export default Main;


