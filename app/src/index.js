import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, useRouterHistory } from 'react-router';
import {createHashHistory} from 'history';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from './routes';
import configureStore from './store/configureStore';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = configureStore({ counter: 0, todos: [] });

// useRouterHistory creates a composable higher-order function
// using hash history to support electron.
const appHistory = useRouterHistory(createHashHistory)();
const history = syncHistoryWithStore(appHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes}/>
  </Provider>,
  document.getElementById('root')
);
