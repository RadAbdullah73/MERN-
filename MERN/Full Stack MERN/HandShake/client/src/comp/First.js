import React, { useState } from 'react'

const First = (props) => {
    const [name , setName] = useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.fun(name);



    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text"  onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type="submit" value="Login" />

        </form>
    </div>
  )
}

export default First