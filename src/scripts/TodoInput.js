import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { addTask } from "./action/tasksActions";

class TodoInput extends React.Component {

    render() {
        return (
            <table >
                <tbody>
                <tr className={'addTask'}>
                    <td>
                        <TextField
                            inputRef={ref => this.ref = ref}
                            placeholder="Введи задачу"
                        />
                    </td>
                    <td>
                        <Button
                            onClick={() => this.onAddTask(this.ref.value)}
                            raised color="primary">
                            Добавить
                        </Button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default connect(
    state,
    dispatch => ({
        onAddTask: value => {
            dispatch(addTask(value))
        }
    })
)(TodoInput);

