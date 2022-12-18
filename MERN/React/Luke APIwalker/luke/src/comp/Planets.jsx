import React , {useEffect ,useState} from 'react'
import axios from 'axios';
import { navigate } from '@reach/router'

const Planets = (props) => {
    const [planet, setPlanet] = useState('');
    useEffect(()=>{
        axios.get('https://swapi.dev/api/planets/'+props.pLiD )
            .then(response=>{setPlanet(response.data)})
            .catch(() => navigate("/error"))
    }, [props.pLiD]);
  return (
    <div>
    <h3>{planet.name}</h3>
    <p>Diameter : {planet.diameter}</p>
    <p>Climate : {planet.climate}</p>
    <p>Population : {planet.population}</p>
    <p>Terrain : {planet.terrain}</p>
 </div>
  )
}
export default Planets