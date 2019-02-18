// Code DelayedButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component {
  constructor(props){
    super(props);

    this.onDelayedClickHandler = this.onDelayedClickHandler.bind(this);
  }

  onDelayedClickHandler(e){
    console.log(e);
    const {onDelayedClick, delay} = this.props;
    e.persist();
    setTimeout(() => onDelayedClick(e), delay);
  }

  render() {
    return(
      <button onClick={this.onDelayedClickHandler}></button>
    )
  }
}
