import React from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {addTask} from "../action/tasksActions";
import {substringValue} from "../action/substringAction";
import FadeMenu from './FadeMenu';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

const theme = createMuiTheme({});


class TodoInput extends React.Component {
    buttonAddTasks = () => {
        const value = this.ref.value;
        this.props.onAddTask(value);
        this.props.onSubstringValue('');
        this.ref.value = '';
    };
    render() {
        return (
            <table >
                <tbody>
                <tr>
                    <td style={{paddingLeft: '20px'}}>
                        <MuiThemeProvider theme={theme}>
                            <TextField
                                inputRef={ref => this.ref = ref}
                            >
                                Введи задачу
                            </TextField>
                        </MuiThemeProvider>
                    </td>
                    <td>
                        <FadeMenu items={[
                            {name: 'Добавление', func: this.buttonAddTasks},
                            {name: 'Поиск', func: () => this.props.onSubstringValue(this.ref.value)}
                        ]}/>
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
        },
        onSubstringValue: value => {
            dispatch(substringValue(value))
        }
    })
)(TodoInput);

