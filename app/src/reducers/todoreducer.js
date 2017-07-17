import * as types from '../constants/actionTypes';

export default function todoReducer(state = [], action) {
  switch(action.type) {
    case types.ADD_TODO:
      return state.concat({
          id: action.id, 
          title: action.title, 
          text: action.text
      });
    case types.REMOVE_TODO:
        let index = -1; 
        for(let i = 0; i < state.length; i++) {
          if(state[i].id === action.id) {
              index = i; 
              break;
          }
        }

        let newState = [].concat(state);
        newState.splice(index, 1);
    
       return newState;
    case types.EDIT_TODO:
      return state - 1;
    default:
      return state;
  }
}