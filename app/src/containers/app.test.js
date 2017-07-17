import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';

const fakeStore = {
  default: () => {},
  subscribe: () => {},
  dispatch: () => {},
  getState: () => ({})
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <Provider store={fakeStore}>
      <App />
    </Provider>, div);
});
