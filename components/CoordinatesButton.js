import React from 'react';

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super();
        this.clickEvent = this.clickEvent.bind(this);
    }

    clickEvent(e) {
        this.props.onReceiveCoordinates([e.screenX, e.screenY]);
    }


    render() {
        return (
            <button onClick={this.clickEvent}>Coordinates</button>
        );
    }
}
