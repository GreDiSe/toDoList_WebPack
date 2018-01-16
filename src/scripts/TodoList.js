import React from 'react';
import TodoListItem from './TodoListItem';
import List from 'material-ui/List';
import { connect } from 'react-redux';
import { removeTask, changeStatus } from "./action/tasksActions";
import { showCountTasks } from "./action/countActions";

class TodoList extends React.Component {
    render() {
        const tasks = this.props.state.filter(cur => cur.status === this.props.radioChecked);
        this.props.onShowCountTasks(tasks.length);
        return (
            <List
                style={
                    {
                        width: '396px',
                        padding: 0,
                        border: '2px solid grey'
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
        radioChecked: state.radioChecked
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
