import { combineReducers } from 'redux';
import tasks from  '../reducers/tasksReducer';
import radioChecked from  '../reducers/radioCheckedReducer';
import count from  '../reducers/countReducer';

const appReducer =  combineReducers({
    tasks,
    radioChecked,
    count
});

export default appReducer;