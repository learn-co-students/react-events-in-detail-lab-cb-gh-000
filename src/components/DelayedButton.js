// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{
  constructor(){
    super();
    this.mousecoords = this.mousecoords.bind(this);
  }

  mousecoords(event) {
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
      }, this.props.delay);
  }
  render(){
    return(
      <button onClick={this.mousecoords}></button>
    );
  }
}
