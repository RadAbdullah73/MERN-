import React from 'react'
import { useState } from 'react'

const Tabs = (props) => {
    const [index, setIndex] = useState(0);
    const handleClick = (value) => {
        setIndex(value);
    }
    function changeBackground(e) {
        e.target.style.background = 'Black';
        e.target.style.color = 'white' ;
      }
      function resetBackground(e) {
        e.target.style.background = 'white';
        e.target.style.color = 'Black' ;
      }
      const btn ={
        width : "200px",
        height:"100px",
        fontSize:"40px",
        background:'white' ,

      }
      const cont ={
        width : "590px",
        height:"150px",
        border: "2px solid black",
        marginLeft:"385px",
        marginTop:"10px",
        fontSize:"30px",

      }


    return ( 
        <div>
        {
        props.listOfTabs.map((item,index) => {
        return(
          <button style={btn} onMouseOver={changeBackground}  onMouseOut={resetBackground} onClick={ (e) => handleClick(index)}>{item.name}</button>    
        )
        })  
        }
        <div style={cont}>
            <p>{props.listOfTabs[index].content}</p>
        </div>
       </div>
    ); 
}
export default Tabs