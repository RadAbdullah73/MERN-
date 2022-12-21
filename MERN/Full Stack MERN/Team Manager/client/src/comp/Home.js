import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const Home = (props) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/users')
        .then(res=>{
          setAllPlayers(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
},[]);

const removeFromDom = authorId => {
  setAllPlayers(allPlayers.filter(author => author._id != authorId));
}
  return (
    <div>
        <h1>Manage Players</h1>
        <h1> <Link to ={"/sts/game/1"} className="mn">Manage Player Status</Link></h1>
        <Link to ={"new/"}>Add Player</Link>
        <table border="1">
          <thead>
            <th>Player Name</th>
            <th>Favorite Position</th>
            <th>Actions</th>
          </thead>
          
            {allPlayers.map( (player, i) =>
            
                <tr
                 key={i}>
                 <td> {player.name} </td>
                <td> {player.position}</td>
                <td><DeleteButton personId={player._id} personName={player.name} successCallback={()=>removeFromDom(player._id)}/></td>
                 </tr>
                 
            )}
            </table>
    </div>
  )
}

export default Home