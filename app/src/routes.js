import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';


import App from './containers/App';
import About from './containers/about';
import TodoList from './containers/todolist';

export const ROUTES = {
    LANDING: '/',
    TODOLIST: 'todo',
    ABOUT: 'about'
};

export default (
    <Route path={ ROUTES.LANDING } component={ App }>
        <IndexRoute component={ TodoList } />         
        <Route path={ ROUTES.TODOLIST } component={ TodoList }/>
        <Route path={ ROUTES.ABOUT } component={ About } />
        <Route path="*" component={ App } status={404} />
    </Route>
);

