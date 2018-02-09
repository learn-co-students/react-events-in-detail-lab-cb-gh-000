// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  handleClick = (evt) => {
    this.props.onReceiveCoordinates([evt.clientX, evt.clientY])
  }
  render() {
    return (
      <button onClick={this.handleClick}>Coord</button>
    )
  }
}
