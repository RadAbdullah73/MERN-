import React , {useState , useEffect} from 'react'

const Pokemon = () => {
    const [people, setPeople] = useState([]);
    const [cond , setConde] = useState(false);
     
        useEffect(() => {
            fetch('https://pokeapi.co/api/v2/pokemon/?limit=807')
                .then(response => response.json())
                .then(response => setPeople(response.results))
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

export default Pokemon