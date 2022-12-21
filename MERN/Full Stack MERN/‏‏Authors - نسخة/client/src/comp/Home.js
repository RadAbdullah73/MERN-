import React, {useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import DeleteButton from './DeleteButton';

const Home = (props) => {
  const [authors, setAuthors] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(()=>{
    axios.get('http://localhost:8000/api/users')
        .then(res=>{
            setAuthors(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
},[]);

const removeFromDom = authorId => {
  setAuthors(authors.filter(author => author._id != authorId));
}
  return (
    <div>
        <h1>Favorite Authors</h1>
        <Link to ={"new/"}>Add New Author</Link>
        <h3>We have quotes by :</h3>
            {authors.map( (auth, i) =>
                <p
                 key={i}>
                 Author : {auth.name}
                <Link to ={"edit/" + auth._id}>Edit</Link>
                <DeleteButton authorId={auth._id} successCallback={()=>removeFromDom(auth._id)}/>
                 </p>
            )}
    </div>
  )
}

export default Home