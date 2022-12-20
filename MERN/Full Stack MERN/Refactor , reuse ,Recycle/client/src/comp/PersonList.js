import React , {useEffect , useState} from 'react'
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

const PersonList = (props) => {
    const [people, setPeople] = useState([]);
   
    useEffect(() => {
        axios.get('http://localhost:8000/api/users')
            .then(res => setPeople(res.data));
    }, [])
    


    return (
        <div>
            {props.people.map( (person, i) =>
                <p key={i}> Descreption : {person.descreption} |||||||| Title: <Link to ={"details/" + person._id}>{person.title}</Link>
                <Link to ={"edit/" + person._id}>|||||Update</Link>
                <DeleteButton personId={person._id} successCallback={()=>props.removeFromDom(person._id)}/>
                
                
                 </p>
            )}
        </div>
    )
}
    
export default PersonList;