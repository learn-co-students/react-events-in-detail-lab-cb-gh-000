import React from 'react';
import ReactDOM from 'react-dom';

import CoordinatesButton from './components/CoordinatesButton';
import DelayedButton from './components/DelayedButton';

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
