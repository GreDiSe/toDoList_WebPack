import React from 'react';
import TextField from 'material-ui/TextField';
import {connect} from 'react-redux';
import {addTask} from "../action/tasksActions";
import {substringValue} from "../action/substringAction";
import FadeMenu from './FadeMenu';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

const theme = createMuiTheme({});



class TodoInput extends React.Component {
    constructor() {
        super();
        this.func = () => {};
    }
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
                            <form onSubmit={e => {this.func(); e.preventDefault()}}>
                                <TextField
                                    id={'textField'}
                                    inputRef={ref => this.ref = ref}
                                >
                                    Введи задачу
                                </TextField>
                            </form>
                        </MuiThemeProvider>
                    </td>
                    <td>
                        <FadeMenu items={[
                            {name: 'Добавление', func: () => this.func = this.buttonAddTasks},
                            {name: 'Поиск', func: () => this.func = () => this.props.onSubstringValue(this.ref.value)}
                        ]}
                        />
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
            value &&
            dispatch(addTask(value));
            return false;
        },
        onSubstringValue: value => {
            dispatch(substringValue(value))
            return false;
        }
    })
)(TodoInput);

