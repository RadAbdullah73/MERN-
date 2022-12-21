import React, { useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';

const Form = (props) => {
    const { initialName,initialPosition, onSubmitProp } = props;
    const [name, setName] = useState(initialName);
    const [position, setPosition] = useState(initialPosition);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name,position ,'status.game1':0 ,'status.game2':0 ,'status.game3':0 });
    }
  return (
    <div>
        <Link to ={"/players/list"}>Back To Dashboard</Link>
<form onSubmit={onSubmitHandler}>
            <p>
                <label>Name : </label><br/>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                {props.children}
            </p>
            <p>
                <label>Prefered Position </label><br/>
                <input type="text" onChange={(e)=>setPosition(e.target.value)} value={position}/>
            </p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form