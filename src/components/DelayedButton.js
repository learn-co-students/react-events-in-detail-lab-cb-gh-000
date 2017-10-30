import React from 'react';

export default class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist();
    setTimeout((e) => {
      this.props.onDelayedClick(event)
    }, this.props.delay) 
  }

  render() {
    return (
      <button onClick={this.handleClick}>DelayedButton</button>
    )
  }
}