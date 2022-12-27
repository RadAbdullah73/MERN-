import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link , navigate} from '@reach/router';
import DeleteButton from './DeleteButton';
import Details from './Details';


const Home = (props) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(res => {
        setAllPlayers(res.data);
        setLoaded(true);
      })
      .catch(err => console.error(err));
  }, []);

  const removeFromDom = authorId => {
    setAllPlayers(allPlayers.filter(author => author._id != authorId));
  }
  return (
    <div>
      <h1>Pet Shelters</h1>
      <h3> These Pets are looking for a new home</h3>
      <Link to={"new/"}>Add Pet</Link>
      <table border="1">
        <thead>
          <th>Pet</th>
          <th>Type</th>
          <th>Actions</th>
        </thead>
        {allPlayers.map((player, i) =>

          <tr
            key={i}>
            <td> {player.name} </td>
            <td> {player.type}</td>
            <td>
              <button onClick={() => navigate("/details/" + player._id)}>
              Details
            </button>
            <button onClick={() => navigate("/update/" + player._id)}>
              Edit
            </button>

            </td>

          </tr>

        )}
      </table>
    </div>
  )
}

export default Home