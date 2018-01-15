import {initialState} from './initialState';
import appReducer from '../reducers/indexReducer';
import { createStore } from 'redux';

export const store = createStore(appReducer, initialState);
