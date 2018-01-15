import { combineReducers } from 'redux';
import tasksReducer from  '../reducers/tasksReducer';
import radioCheckedReducer from  '../reducers/radioCheckedReducer';
import countReducer from  '../reducers/countReducer';

const appReducer =  combineReducers({
    tasksReducer,
    radioCheckedReducer,
    countReducer
});

export default appReducer;