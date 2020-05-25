// Code DelayedButton Component Here
import React, { Component } from "react";

class DelayedButton extends Component{
    constructor(){
        super();
        this.handleDelayClick = this.handleDelayClick.bind(this);
    }
    handleDelayClick(event){
        event.persist();
        setTimeout(()=>{
            this.props.onDelayedClick(event);
        },this.props.delay);
    }
    render(){
        return(
            <button onClick={this.handleDelayClick}></button>
        )
    }
}
export default DelayedButton;
