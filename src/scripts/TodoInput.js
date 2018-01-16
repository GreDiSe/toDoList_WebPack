import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { addTask } from "./action/tasksActions";

class TodoInput extends React.Component {

    buttonAddTasks = () => {
        const value = this.ref.value;
        this.props.onAddTask(value);
        this.ref.value = '';
    };
    render() {
        return (
            <table >
                <tbody>
                <tr>
                    <td style={{paddingLeft: '20px'}}>
                        <TextField
                            inputRef={ref => this.ref = ref}
                            placeholder="Введи задачу"
                        />
                    </td>
                    <td>
                        <Button
                            onClick={this.buttonAddTasks}
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
    state => (state),
    dispatch => ({
        onAddTask: value => {
            dispatch(addTask(value))
        }
    })
)(TodoInput);

