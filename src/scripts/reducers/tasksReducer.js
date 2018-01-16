import {
    ADD_TASK,
    REMOVE_TASK,
    REMOVE_SELECTED_TASKS,
    SELECT_ALL_TASKS,
    CHANGE_STATUS
} from '../action/actionTypes';

import { NAME_IN_PROGRESS, NAME_DONE } from "../store/initialState";
import injectReducer from './injectReducer'
import {initialState} from '../store/initialState';


export default injectReducer(initialState.tasks, {
    [`${ADD_TASK}`]: (state, action) => [
        ...state,
        {
            name: action.content,
            status: NAME_IN_PROGRESS
        }
    ],
    [`${REMOVE_TASK}`]: (state, action) => {

        const newState = state.concat();

        newState.splice(action.index, 1);

        return newState;
    },
    [`${REMOVE_SELECTED_TASKS}`]: state => {
        const newState = state.concat();

        return newState.filter(cur => cur.status === NAME_IN_PROGRESS);
    },
    [`${SELECT_ALL_TASKS}`]: state => {

        return state.map(cur => {
            cur.status = NAME_DONE;
            return cur;
        });

    },
    [`${CHANGE_STATUS}`]: (state, action) => {
        const newState = state.concat();
        console.log('Start', state, action.index);

        newState[action.index].status = newState[action.index].status === NAME_IN_PROGRESS ?
            NAME_DONE :
            NAME_IN_PROGRESS;


        console.log('End', newState);
        return newState;
    },

})