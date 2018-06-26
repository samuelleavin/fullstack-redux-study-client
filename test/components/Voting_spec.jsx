import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-dom/test-utils';
import {expect} from 'chai';

import Voting from '../../src/components/Voting';

describe('Voting', () => {
    it('renders a pair of buttons', () => {
        const component = renderIntoDocument(
            <Voting pair={["Trainspotting", "28 Days Later"]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    });
    
    it('invokes callback when a button is clicked', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
    
        const component = renderIntoDocument(
          <Voting pair={["Trainspotting", "28 Days Later"]}
                  vote={vote}/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        Simulate.click(buttons[0]);
    
        expect(votedWith).to.equal('Trainspotting');
      });
      
      it('invokes disables voting buttons when a user has voted', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
    
        const component = renderIntoDocument(
          <Voting pair={["Trainspotting", "28 Days Later"]}
                  hasVoted="Trainspotting"/>
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        // Simulate.click(buttons[0]);
    
        expect(buttons.length).to.equal(2);
        const allDisabled = buttons.every(button => button.hasAttribute('disabled'));
        // buttons.some()
        expect(allDisabled).to.equal(true);
      });
      
      it('adds a label to the voted button when a user voted', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
    
        const component = renderIntoDocument(
          <Voting pair={["Trainspotting", "28 Days Later"]}
                  hasVoted="Trainspotting"/>
        );
        
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons[0].textContent).to.contain('Voted');
      });      
      
      it('hides buttons when a winner is selected', () => {
        let votedWith;
        const vote = (entry) => votedWith = entry;
    
        const component = renderIntoDocument(
          <Voting pair={["Trainspotting", "28 Days Later"]}
                  winner="Trainspotting"/>
        );
        
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
        expect(buttons.length).to.equal(0);
        
        const winner = component.refs.winner;
        expect(winner).to.be.ok;
        expect(winner.refs.winnerHeader).to.exist;
        expect(component.refs.vote).to.not.be.ok;
        
        const header = scryRenderedDOMComponentsWithTag(component, 'h1');
        expect(header).to.exist;
      });
});
