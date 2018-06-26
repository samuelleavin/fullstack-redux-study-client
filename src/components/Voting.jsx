import React from 'react';
import Winner from './Winner';
import Vote from './Vote';

export default class Voting extends React.PureComponent {
    
    render() {
        return <div className="voting">
            { this.props.winner
                ? <Winner winner={this.props.winner} ref="winner" />
                : <Vote {...this.props} ref="vote"/>
            }
        </div>;
    }
};

// { entry: 'trainspotting }
{/* <Vote entry="trainsspotting" */}