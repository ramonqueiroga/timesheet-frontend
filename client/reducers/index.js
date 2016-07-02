import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import produto from './produtoReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers(
    { produto, form: formReducer, routing: routerReducer }
)

export default rootReducer;
