import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore} from 'redux';

import Container from './components/Container';
import Home from './components/Home';

import rootReducer from './utils/reducers';

import registerServiceWorker from './registerServiceWorker';

const Store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={Store}>
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Redirect to='page/1' />} />
        <Route exact path='/page/:id' render={(props) => <Container {...props}>
          <Home />
        </Container>} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
