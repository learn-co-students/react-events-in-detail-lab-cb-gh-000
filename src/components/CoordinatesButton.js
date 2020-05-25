// Code CoordinatesButton Component Here
import React, { Component } from "react";

class CoordinatesButton extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);

    }
    handleClick(event){
        this.props.onReceiveCoordinates([event.clientX,event.clientY]);
    }
    render(){
        return(
            <button onClick={this.handleClick}>Coords</button>
        )
    }
}
export default CoordinatesButton;
