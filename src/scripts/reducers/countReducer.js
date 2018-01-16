import { SHOW_COUNT_TASKS } from '../action/actionTypes';
import injectReducer from './injectReducer'
import {initialState} from '../store/initialState';

export default injectReducer(initialState.count, {
    [`${SHOW_COUNT_TASKS}`]: (state, action) => action.count
})