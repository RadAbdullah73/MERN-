import React, { useEffect, useState } from 'react'
import axios from 'axios';

    
const Update = (props) => {
    const [title, setTitle] = useState("");
    const [descreption, setDescreption] = useState("");
    const [price, setPrice] = useState("");
    useEffect(() => {
        axios.get('http://localhost:8000/api/users/' + props.id)
            .then(res => {
                setTitle(res.data.title);
                setDescreption(res.data.descreption);
                setPrice(res.data.price);
            })
    }, []);
    
    const updatePerson = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/users/update/' + props.id, {
            title,
            descreption,
            price
        })
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }
    
    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="title" 
                    value={title} 
                    onChange={(e) => { setTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Descreption</label><br />
                    <input type="text" 
                    name="descreption"
                    value={descreption} 
                    onChange={(e) => { setDescreption(e.target.value) }} />
                </p>
                <p>
                    <label>Price</label><br />
                    <input type="text" 
                    name="price"
                    value={price} 
                    onChange={(e) => { setPrice(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
    
export default Update;

