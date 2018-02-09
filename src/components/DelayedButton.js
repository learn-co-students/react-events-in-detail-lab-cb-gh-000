// Code DelayedButton Component Here
import React from 'react'
export default class DelayedButton extends React.Component {
  handleClick = evt => {
    evt.persist()
    setTimeout( () => this.props.onDelayedClick(evt), this.props.delay)
  }
  render() {
    return (
      <button onClick={this.handleClick}></button>
    )
  }
}
