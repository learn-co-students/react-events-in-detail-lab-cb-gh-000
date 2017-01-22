const React = require('react');
const ReactDOM = require('react-dom');

const CoordinatesButton = require('./components/CoordinatesButton');
const DelayedButton = require('./components/DelayedButton');

ReactDOM.render(
  <div>
    <CoordinatesButton onReceiveCoordinates ={
      onReceiveCoordinates(coordonner){
      console.log(coordonner);
  }
    }/>
    <DelayedButton  onDelayedClick ={onDelayedClick(e){
       console.log(e)
    }} delay={1000} />
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
