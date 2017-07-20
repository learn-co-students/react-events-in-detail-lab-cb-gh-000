import React from 'react';

export default class DelayedButton extends React.Component{
  constructor(){
    super();
    this.whenTheButtonIsClicked = this.whenTheButtonIsClicked.bind(this);
  }
  whenTheButtonIsClicked(event){
    event.persist();
    setTimeout(() => {
      this.props.onDelayedClick(event);
    },this.props.delay);
  }
  render(){
    return (
      <button onClick={this.whenTheButtonIsClicked} />
    );
  }
}
