// Code CoordinatesButton Component Here
import React from 'react'
export default class CoordinatesButton extends React.Component{
  constructor(){
    super()
    this.click = this.click.bind(this)
  }
  click(e){
    var coordinates = [e.clientX,e.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }
  render(){
    return (
      <button onClick={this.click}>Button</button>
    )
  }
}
