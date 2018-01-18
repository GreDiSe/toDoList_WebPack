import {
    ADD_TASK,
    REMOVE_TASK,
    REMOVE_SELECTED_TASKS,
    SELECT_ALL_TASKS,
    CHANGE_STATUS,
    SEARCH_TASKS,
    DOWNLOAD_TASKS
} from './actionTypes';

export const addTask = task => ({
    type: ADD_TASK,
    content: task
});

export const removeTask = index => ({
    type: REMOVE_TASK,
    index: index
});

export const removeSelectedTasks = () => ({
    type: REMOVE_SELECTED_TASKS
});

export const selectAllTasks = () => ({
    type: SELECT_ALL_TASKS
});

export const changeStatus = index => ({
    type: CHANGE_STATUS,
    index: index
});

export const searchTasks = value => ({
    type: SEARCH_TASKS,
    value: value
});

export const downloadTasks = state => ({
    type: DOWNLOAD_TASKS,
    state: state
});