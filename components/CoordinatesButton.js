const React = require('react');

class CoordinatesButton extends React.Component {
   handleClick(e){

        let coordonner  = [e.clientX,e.clientY]

        this.props.onReceiveCoordinates(coordonner);
   }
    render() {
        return (
            <button onClick = {this.handleClick.bind(this)}>
                salim
            </button>
        );
    }
}
CoordinatesButton.proptypes={
   onReceiveCoordinates : React.PropTypes.func.isRequired
}
module.exports = CoordinatesButton;
