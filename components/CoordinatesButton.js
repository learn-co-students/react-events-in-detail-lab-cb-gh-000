import React from 'react';

export default class CoordinatesButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    //event.persist();  // NOTE: not needed
    if (this.props.onReceiveCoordinates !== undefined)
      this.props.onReceiveCoordinates([event.pageX, event.pageY]);
  }

  render() {
    return (
      <button onClick={this.handleClick}>CoordinatesButton</button>
    );
  }
}
