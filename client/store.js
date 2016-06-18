import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';

import rootReducer from './reducers/index';

//objeto com o estado inicial padrao

const defaultState = {
    description: 'Aplicação iniciada'
};

const store = createStore(rootReducer, defaultState);
const history = syncHistoryWithStore(browserHistory, store);

export default store;
export default history;