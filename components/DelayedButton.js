import React from 'react';

export default class DelayedButton extends React.Component {
    constructor() {
        super();
        this.delay = this.delay.bind(this);
    }

    delay(e) {
        e.persist();
        setTimeout(() => {this.props.onDelayedClick(e);}, this.props.delay);
    }

    render () {
        return (
            <button onClick={this.delay}>Delayed</button>
        );
    }
}
