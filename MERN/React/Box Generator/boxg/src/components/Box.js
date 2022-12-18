import React, { useState } from 'react'

const Box = () => {
    const[color,setColor] = useState("");
    const [arr, setArr] = useState([]);
    // const[size , setSize] = useState(80);
     const handelSubmit=(e)=>{
        e.preventDefault();
        setArr(arr => [...arr, color]);
        setColor('');       
     }

  return (
    <div>
        <form onSubmit={handelSubmit}>
        Color:<input type='text' value={color} onChange={ (e) => setColor(e.target.value)}></input>

        <button>Add</button>
        <div style={{display:"flex" , justifyContent:'space-between'}} >
            { arr.map((item,i) => 
                <div key={ i } style={{backgroundColor:item ,height:200 , width:200}}></div> ) }
        </div>
        
        </form>
        </div>
  )
}

export default Box