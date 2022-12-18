import React, {useState } from 'react'
import { navigate } from '@reach/router'
import './App.css';


const Home = () => {
    const types = [
        'People',
        'Planets'  
    ];
    const[typez , setTypez] = useState([types[0]]);
    const[id , setId] = useState();

    const handleSubmit =(e) =>{
        e.preventDefault()
        if (typez=="People"){
            navigate('/people/'+id)
        }
        else{
            navigate('/planets/'+id)
        }



    }

  return (
    <div>
        <h2 className="head">Search For :</h2>
        <form onSubmit={handleSubmit}>
            <select value={typez}  onChange={e => setTypez(e.target.value)}>
            {types.map( (type1, idx) => 
                    <option key={idx} value={type1}>{type1}</option>
                )}
            </select>
            <p>ID==<input type='number' onChange={e => setId(e.target.value)} /></p>
            <button>Search</button>
        </form>
        <br></br>
    </div>
    
  )
}

export default Home