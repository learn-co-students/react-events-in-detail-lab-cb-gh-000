// Code CoordinatesButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component{
  eventFn = (event) => {
    setTimeout(()=>{
      this.props.onDelayedClick(event);
    }, this.props.delay)
  }

  render(){
    return(
      <button onClick={this.eventFn}>
      </button>
    );
  }
}
