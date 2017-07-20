import React from 'react'

export default class CoordinatesButton extends React.Component{
  constructor(){
    super();
    this.whenTheButtonIsClicked = this.whenTheButtonIsClicked.bind(this);
  }
  whenTheButtonIsClicked(event) {
    this.props.onReceiveCoordinates([event.pageX,event.pageY]);
  }
  render(){
    return (
      <button onClick={this.whenTheButtonIsClicked} />
    );
  }
}
