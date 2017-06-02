import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.persist();

    if (this.props.onDelayedClick !== undefined && this.props.delay !== undefined) {
      setTimeout(
        () => { this.props.onDelayedClick(event); },
        this.props.delay
      )
    }
  }

  render() {
    return (
      <button onClick={this.handleClick}>DelayedButton</button>
    );
  }
}
