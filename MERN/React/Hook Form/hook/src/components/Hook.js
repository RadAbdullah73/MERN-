import React , { useState } from 'react'


const Hook = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [ConfirmPassword, setConfirmPassword] = useState("");  
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstname,lastname, email, password,ConfirmPassword };
        console.log("Welcome", newUser);
    }

  return (
    <>
    <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
        </form>
            <h1>Your Forms details here :</h1>
            <h2> Your First Name : {firstname}</h2>
            <h2> Your Last Name : {lastname}</h2>
            <h2> Your Email : {email}</h2>
            <h2> Your Password : {password}</h2>
            <h2> Your Confirm Password : {ConfirmPassword}</h2>

            </>
    );


}

export default Hook