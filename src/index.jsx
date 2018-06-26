import React from 'react';
import ReactDOM from 'react-dom';
import {Switch} from 'react-router'
import {Route, HashRouter} from 'react-router-dom';
import App from './components/App';
import Results from './components/Results';


import Voting from './components/Voting';

const routes = <Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
</Route>;

ReactDOM.render((
	<HashRouter>
	  <App/>
	</HashRouter>
), document.getElementById( 'app' ) )