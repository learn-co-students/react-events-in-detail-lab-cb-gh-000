import React from 'react';

class DelayedButton extends React.Component {

  handleClick = (event) => {
    event.persist()
    const cb = this.props.onDelayedClick;
    setTimeout(function() {
      cb(event);
    }, this.props.delay);
  }

  render() {
    return (
      <button onClick={this.handleClick}>Delay</button>
    );
  }
}

export default DelayedButton;
