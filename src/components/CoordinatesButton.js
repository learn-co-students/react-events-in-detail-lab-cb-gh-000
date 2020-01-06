// Code CoordinatesButton Component Here
import React from 'react';
class CoordinatesButton extends React.Component {
  clickHandler = (event) => {
    const coordinates = [event.clientX, event.clientY];
    this.props.onReceiveCoordinates(coordinates);
    console.log(event.target);
  }
  render() {
    return (
      <button onClick={ this.clickHandler }>Button</button>
    )
  }
}
export default CoordinatesButton;
