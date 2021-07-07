// Code CoordinatesButton Component Here
import React from 'react';

export default class DelayedButton extends React.Component
{
  OnclickEvent=(e)=>{
    var eventtarget=e;
    setTimeout((event)=>{
      this.props.onDelayedClick(eventtarget);
      eventtarget.persist();
    },this.props.delay)
  }

render(){
  return (

<button type="button" onClick={ this.OnclickEvent}></button>

  )
}

}
