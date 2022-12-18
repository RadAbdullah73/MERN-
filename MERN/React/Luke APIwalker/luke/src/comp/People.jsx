import React , {useEffect ,useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router'

const People = (props) => {
    const [people, setPeople] = useState('');
    const[errz,setErrz] = useState(false);
    useEffect(()=>{
        axios.get('https://swapi.dev/api/people/'+props.id+'/' )
            .then(response=>{setPeople(response.data)})
            .catch(() => navigate("/error"))
    }, [props.id]);
  return (
    <div>
       <h3>{people.name}</h3>
       <p>Height : {people.height}</p>
       <p>Mass : {people.mass}</p>
       <p>Hair Color : {people.hair_color}</p>
       <p>Skin Color : {people.skin_color}</p>   
    </div>
  )
}

export default People