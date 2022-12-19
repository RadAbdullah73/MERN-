import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [title, setTitle] = useState("");
    const [descreption, setDescreption] = useState("");
    const [price, setPrice] = useState("");
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            title,
            descreption,
            price
        })
            .then(res=>console.log(res))
            .catch(err=>console.log(err))
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