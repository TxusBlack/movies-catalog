import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { HashRouter, Switch, Route, Redirect } from "react-router-dom"

import App from './pages/App';
import DetailsPage from './pages/Details';

import reducers from './redux/reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/movie/:movieId" component={DetailsPage} exact />
        <Redirect from='*' to='/' />
      </Switch>
    </HashRouter>
  </Provider>,
  document.querySelector('#root')
);
