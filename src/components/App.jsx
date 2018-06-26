import React from 'react';
import {List} from 'immutable';
import Voting from './Voting';

const pair = List.of('Trainspotting', '28 Days Later');

export default class App extends React.Component{
  render () {

  	const fn = (child) => React.cloneElement(
    	child, 
    	{pair: pair}
    )

    const item = React.Children.map(this.props.children, fn); 
    
    return (
    	<div>
	    	{item}
    	</div>
    )
    	
	
  }
  
};