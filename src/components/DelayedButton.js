// Code CoordinatesButton Component Here
import React from 'react';
class DelayedButton extends React.Component {
  clickHandler = (event) => {
    event.persist();
    setTimeout(this.props.onDelayedClick, this.props.delay, event);
  }
  render() {
    return (
      <button onClick={ this.clickHandler }>Button</button>
    )
  }
}
export default DelayedButton;
// Code DelayedButton Component Here
