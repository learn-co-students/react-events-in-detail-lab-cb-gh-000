// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {

  logger = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  }


  render() {
    return (
      <button onClick={this.logger}>Coordinates</button>
    );
  }
}

export default CoordinatesButton;
