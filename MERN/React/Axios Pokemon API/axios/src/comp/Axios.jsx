import axios from 'axios';
import { useEffect, useState } from 'react';

const Axios = props => {
    const [people, setPeople] = useState([]);
    const [cond , setConde] = useState(false);
   
     
    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
            .then(response=>{setPeople(response.data.results)})
    }, []); 
    
        const handleFetch = ()=>{
            cond?setConde(false):setConde(true)
        }
     
        return (
            <div>
                <button onClick={handleFetch} >Fetch !!!!!!!</button>
                {
                    cond?
                people.length > 0 && people.map((person, index)=>{
                    return (<div key={index}>{person.name}</div>)
                    
                }):""}
            </div>
        );
}

export default Axios