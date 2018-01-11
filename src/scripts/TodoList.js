import React from 'react';
import TodoListItem from './TodoListItem';
import List from 'material-ui/List';

class TodoList extends React.Component {
    constructor(){
        super();
        this.DONE = 'done';
        this.IN_PROGRESS = 'in_progress';
    }

    checkForRenderTask = (item) => {
        if (this.props.radio === this.DONE && item.status !== this.DONE) {
            return false;
        } else if (this.props.radio === this.IN_PROGRESS && item.status !== this.IN_PROGRESS) {
            return false;
        } else {
            return true;
        }
    };
    deleteTask = (index) => {
        const newTasks = this.props.tasks.concat();
        newTasks.splice(index, 1);
        this.props.setNewState({tasks: newTasks});
    };
    checkedItem = index => {
        const newTasks = this.props.tasks.concat();
        newTasks[index].status = newTasks[index].status === this.DONE ? this.IN_PROGRESS : this.DONE;
        this.props.setNewState({tasks: newTasks});
    };

    render() {
        const renderTasks = this.props.tasks.filter(this.checkForRenderTask);
        return (
            <List>
                {renderTasks.map((curTask, i) => {
                    return (
                        <TodoListItem
                            key={i}
                            task={curTask}
                            className={'info'}
                            deleteTask={() => this.deleteTask(i)}
                            checkedItem={() => this.checkedItem(i)}
                        />
                    )
                })}
            </List>
        )
    }
}
export default TodoList;
