import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

//objeto com o estado inicial padrao

const defaultState = {
    description: 'Aplicação iniciada',
    initialData: 'Seja bem vindo ao sistema de controle de horas TimeSheet!'
};

const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(rootReducer, defaultState, enhancers);
export const history = syncHistoryWithStore(browserHistory, store);
export default store;
