import React from 'react';
import TodoListItem from './TodoListItem';
import List from 'material-ui/List';
import { connect } from 'react-redux';
import { removeTask, changeStatus } from "./action/tasksActions";

class TodoList extends React.Component {
    render() {
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
                {this.props.state.map((curTask, i) => {
                    return (
                        <TodoListItem
                            key={i}
                            task={curTask}
                            deleteTask={() => this.onRemoveTask(i)}
                            checkedItem={() => this.onChangeStatus(i)}
                        />
                    )
                })}
            </List>
        )
    }
}
export default connect(
    state => ({
        state: state.tasks
    }),
    dispatch => ({
        onRemoveTask: index => {
            dispatch(removeTask(index))
        },
        onChangeStatus: index => {
            dispatch(changeStatus(index))
        }
    })
)(TodoList);
