import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Home from './components/Home';
import LoginForm from './components/LoginForm';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="/login" component={LoginForm}></Route>
        </Route>
    </Router>
)

render(router, document.getElementById('root'));
