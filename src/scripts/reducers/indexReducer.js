import { combineReducers } from 'redux';
import tasks from  '../reducers/tasksReducer';
import radioChecked from  '../reducers/radioCheckedReducer';
import count from  '../reducers/countReducer';
import substring from '../reducers/substringReducer';

const appReducer =  combineReducers({
    tasks,
    radioChecked,
    count,
    substring
});

export default appReducer;