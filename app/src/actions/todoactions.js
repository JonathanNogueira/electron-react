import * as types from '../constants/actionTypes';

var nextId = 0; 

export function add(title = 'Title', text = 'Todo message') {
  return {
    type: types.ADD_TODO, 
    id: nextId++,
    title: title, 
    text: text
  };
};

export function edit() {
  return {
    type: types.EDIT_TODO
  };
};

export function remove(id) {
  return {
    type: types.REMOVE_TODO, 
    id: id
  };
};