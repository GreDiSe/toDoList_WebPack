import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button'

class TodoInput extends React.Component {
    constructor(){
        super();
        this.IN_PROGRESS = 'in_progress';
        this.defaultTaskStatus = { status: this.IN_PROGRESS};
    }

    addTask = () => {
        const newText = this.ref.value;
        this.ref.value = '';
        const newTasks = this.props.tasks.concat();
        newTasks.push({name: newText, ...this.defaultTaskStatus});
        this.props.setNewState({tasks: newTasks});
    };

    render() {
        return (
            <table >
                <tr className={'addTask'}>
                    <td>
                        <TextField
                            inputRef={ref => this.ref = ref}
                            placeholder="Введи задачу"
                        />
                    </td>
                    <td>
                        <Button
                            onClick={this.addTask}
                            raised color="primary">
                            Добавить
                        </Button>
                    </td>
                </tr>
            </table>
        )
    }
}
export default TodoInput;
