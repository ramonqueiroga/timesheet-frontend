import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main';
import Home from './components/Home';
import Produto from './components/Produto';
import App from './components/App';
import LoginForm from './components/LoginForm';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';

const router = (

    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}></IndexRoute>
                <Route path="/login" component={LoginForm}></Route>
                <Route path="/produtos" component={Produto}></Route>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
