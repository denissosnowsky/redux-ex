import {createStore, combineReducers} from 'redux';
import { reducerMyPage } from './reducer';

let reducers = combineReducers({
    maPage: reducerMyPage,
});

const store = createStore(reducers);


export default store;
