import React from 'react';

export default class DelayedButton extends React.Component {

  onClickHandler = (event) => {
    event.persist();
    setTimeout(function() {
    }, this.props.delay);
    this.props.onDelayedClick(event);

  }

  render() {
    return(
      <button onClick={this.onClickHandler} />
    );
  }
}
