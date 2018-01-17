import React from 'react';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { addTask } from "../action/tasksActions";
import { substringValue } from "../action/substringAction";
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
const theme = createMuiTheme({
    overrides: {}
});

        class TodoInput extends React.Component {
    constructor() {
        super();
        this.state = {value: 1};
    }

    childContextTypes = {
        muiTheme: React.PropTypes.object
    };

    getChildContext = () => {
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    };

    handleChange = (event, index, value) => this.setState({value});

    buttonAddTasks = () => {
        const value = this.ref.value;
        this.props.onAddTask(value);
        this.ref.value = '';
    };
    render() {
        console.log(this.props);
        return (
            <table >
                <tbody>
                <tr>
                    <td style={{paddingLeft: '20px'}}>
                        <TextField
                            id={'textField'}
                            onChange={this.props.onSubstringValue}
                            hintText="Введи задачу"
                            style={{}}
                        />
                    </td>
                    <td>
                        <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                            <MenuItem value={1} primaryText="Never" />
                            <MenuItem value={2} primaryText="Every Night" />
                            <MenuItem value={3} primaryText="Weeknights" />
                            <MenuItem value={4} primaryText="Weekends" />
                            <MenuItem value={5} primaryText="Weekly" />
                        </DropDownMenu>
                        {/*<Button
                            onClick={this.buttonAddTasks}
                            raised color="primary">
                            Добавить
                        </Button>*/}
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
        onSubstringValue: event => {
            dispatch(substringValue(event.target.value))
        }
    })
)(TodoInput);
