import React from 'react';

export default class CoordinatesButton extends React.Component {

  onClickHandler = (event) => {
    this.props.onReceiveCoordinates([event.pageX, event.pageY]);
  }
  render() {
    return(
        <button onClick={this.onClickHandler} />
    );
  }
}
