import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import produto from './produtoReducer';

const rootReducer = combineReducers(
    { produto, routing: routerReducer }
)

export default rootReducer;
