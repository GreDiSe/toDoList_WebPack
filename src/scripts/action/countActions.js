import { SHOW_COUNT_TASKS } from "./actionTypes";

export const showCountTasks = count => ({
    type: SHOW_COUNT_TASKS,
    count: count
});