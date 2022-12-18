import React from 'react'

const Negan = (props) => {
  return (
    <div>
    <h1>{props.firstName} {props.lastName}</h1>
    <p>{props.age}</p>
    <p>{props.hairColor}</p>
  
  </div>
  )
}

export default Negan