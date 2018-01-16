import {initialState} from './initialState';
import appReducer from '../reducers/indexReducer';
import { createStore } from 'redux';

export const store = createStore(appReducer);
store.subscribe(() => {
    console.log(store.getState() );
});
console.log(store.getState());
