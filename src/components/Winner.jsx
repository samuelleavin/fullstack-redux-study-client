import React from 'react';

export default class Winner extends React.PureComponent {
    render() {
        return <h1 className="winner" ref="winnerHeader">
            Winner, winner {this.props.winner} chicken winner!
        </h1>;
    }
}
