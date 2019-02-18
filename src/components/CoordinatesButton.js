// Code CoordinatesButton Component Here
import React from 'react';

export default class CoordinatesButton extends React.Component {
  render() {
    const {onReceiveCoordinates} = this.props;

    return(
      <button onClick={e => onReceiveCoordinates([e.clientX, e.clientY])}></button>
    )
  }
}
