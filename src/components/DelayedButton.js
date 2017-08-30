// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component{
  constructor(props){
    super(props)
    this.delayB = this.delayB.bind(this)
  }

  delayB(e){
    e.persist()
    setTimeout(() => {
      this.props.onDelayedClick(e)
    },this.props.delay)

  }

  render(){
    return (
      <button onClick={this.delayB}>Delay</button>
    )
  }
}
