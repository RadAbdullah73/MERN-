import React, { useState } from 'react'
import axios from 'axios';

const Form = (props) => {
    const { initialTitle, initialDescreption,initialPrice, onSubmitProp } = props;
    const [title, setTitle] = useState(initialTitle);
    const [descreption, setDescreption] = useState(initialDescreption);
    const [price, setPrice] = useState(initialPrice);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({title, descreption , price});
    }
  return (
    <div>
<form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Descreption</label><br/>
                <input type="text" onChange={(e)=>setDescreption(e.target.value)} value={descreption}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="text" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default Form