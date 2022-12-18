import React, { Component } from 'react'

export default class Mern extends Component {
    constructor(props){
        super(props);
        this.state={
            age : this.props.age,
        }
    }
  render() {
    return (
      <div>
        <h1>{this.props.firstName} {this.props.lastName}</h1>
        <p>{this.state.age}</p>
        <p>{this.props.hairColor}</p>
        <button onClick={ () => { this.setState({ age: this.state.age +1  }) } }>Add one</button>
      </div>
    )
  }
}
