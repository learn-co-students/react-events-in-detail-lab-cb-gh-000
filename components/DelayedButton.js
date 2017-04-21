import React from 'react';

export default class DelayedButton extends React.Component{

  constructor(){
    super();
    this.handleClick=this.handleClick.bind(this);
  }
  handleClick(event){
    event.persist();
    setTimeout(()=>{
      this.props.onDelayedClick(event)
    })
  }
  render(){
  return <button onClick={this.handleClick}>Delayed</button> 
}
}