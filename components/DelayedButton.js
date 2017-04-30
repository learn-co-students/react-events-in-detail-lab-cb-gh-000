const  React = require('react');

class DelayedButton extends React.Component {

    handleCLick(e){
       e.persist()
         setTimeout(()=>{this.props.onDelayedClick(e)},this.props.delay)
    }
    render() {
        return (
         <button  onClick={this.handleCLick.bind(this)}>
           jaabiri
         </button>

        );
    }
}
DelayedButton.proptypes ={
  onDelayedClick : React.PropTypes.func.isRequired,
  delay: React.PropTypes.number.isRequired
}
module.exports = DelayedButton;
