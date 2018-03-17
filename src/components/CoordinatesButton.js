import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);
    
    this.coordinateArray = this.coordinateArray.bind(this);
  }
  
  coordinateArray =(event)=> {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }
  
  render() {
    return (
      <button onClick={this.coordinateArray}></button>
      );
  }
  
}