import React from 'react';

export default class DelayedButton extends React.Component {
  constructor() {
    super();
    
    this.handleEvent = this.handleEvent.bind(this);
  }
  
  handleEvent(event) {
    event.persist();
    setTimeout (() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
    
  }
  
  render() {
    return(
      <button onClick={this.handleEvent}>Delay</button>);
  }
  
}