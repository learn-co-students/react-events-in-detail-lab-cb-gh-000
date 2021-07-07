// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{
OnclickEvent=(e)=>{
  var x = e.clientX;     // Get the horizontal coordinate
  var y = e.clientY;     // Get the vertical coordinate
  var coor = [x,y];
  this.props.onReceiveCoordinates(coor);

}

render(){

  return (
<button  onClick={this.OnclickEvent} ></button>

  )
}

}
