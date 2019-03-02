import { createStore, combineReducers, applyMiddleware } from 'redux';
import {createLogger} from 'redux-logger';
import { mathReducer } from './reducers/mathReducers';
import { userReducer } from './reducers/userReducers';

export const store = createStore(combineReducers({
    math: mathReducer,
    user: userReducer,
}), {}, applyMiddleware(createLogger()));