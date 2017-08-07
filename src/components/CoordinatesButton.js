// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component{
  constructor(){
    super();
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler(event){
    this.props.onReceiveCoordinates([event.screenX, event.screenY]);
  }

  render(){
    return(
    <button onClick={this.clickHandler}></button>
    );
  }
}
