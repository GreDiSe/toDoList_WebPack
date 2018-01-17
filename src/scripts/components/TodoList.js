import React from 'react';
import TodoListItem from './TodoListItem';
import List from 'material-ui/List';
import { connect } from 'react-redux';
import { removeTask, changeStatus } from "../action/tasksActions";
import { showCountTasks } from "../action/countActions";
import { NAME_IN_PROGRESS, NAME_DONE } from "../store/initialState";

class TodoList extends React.Component {
    checkForRenderTask = (item) => {
        if (this.props.radioChecked === NAME_DONE && item.status !== NAME_DONE) {
            return false;
        } else if (this.props.radioChecked === NAME_IN_PROGRESS && item.status !== NAME_IN_PROGRESS) {
            return false;
        } else return !item.name.includes(this.props.substring);
    };
    render() {
        const tasks = this.props.state.filter(this.checkForRenderTask);
        this.props.onShowCountTasks(tasks.length);
        return (
            <List
                style={
                    {
                        width: '396px',
                        padding: 0,
                        border: '2px solid #303F9F'
                    }
                }
            >
                {tasks.map((curTask, i) => {
                    return (
                        <TodoListItem
                            key={i}
                            task={curTask}
                            deleteTask={() => this.props.onRemoveTask(i)}
                            checkedItem={() => this.props.onChangeStatus(i)}
                        />
                    )
                })}
            </List>
        )
    }
}
export default connect(
    state => ({
        state: state.tasks,
        radioChecked: state.radioChecked,
        substring: state.substring
    }),
    dispatch => ({
        onRemoveTask: index => {
            dispatch(removeTask(index))
        },
        onChangeStatus: index => {
            dispatch(changeStatus(index))
        },
        onShowCountTasks: count => {
            dispatch(showCountTasks(count))
        }
    })
)(TodoList);
