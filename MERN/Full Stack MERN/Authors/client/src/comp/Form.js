import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';


const Form = (props) => {
    const { initialName, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
  return (
    <div>
        <Link to ={"/"}>Back To Dashboard</Link>
<form onSubmit={onSubmitHandler}>
            <p>
                <label>Name : </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                
            </p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form