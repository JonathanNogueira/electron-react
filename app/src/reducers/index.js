import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counterReducer from './counterReducer';
import todoReducer from './todoreducer'; 

const rootReducer = combineReducers({
  // Add more reducers here
  counter: counterReducer,
  todos: todoReducer,
  routing: routerReducer
});

export default rootReducer;
