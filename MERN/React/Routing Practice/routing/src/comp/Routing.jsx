import React from 'react'

const Routing = (props) => {

  return (
    <div>
        {isNaN(props.num) ? <p>the Word is : {props.num}</p> : <p>The Number is : {props.num}</p>}
    
    </div>
  )
}

export default Routing