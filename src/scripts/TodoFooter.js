import React from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { NAME_ALL, NAME_DONE, NAME_IN_PROGRESS } from "./store/initialState";
import { removeSelectedTasks, selectAllTasks } from "./action/tasksActions";
import { changeRadioButton } from "./action/radioCheckedActions";


class TodoFooter extends React.Component {

    showTasks = (status, ref) => {

        this.refs.all.checked = false;
        this.refs.done.checked = false;
        this.refs.notDone.checked = false;
        this.refs[ref].checked = true;
        this.props.onChangeRadioButton(status);

    };


    render() {
        console.log(this.props);
        return (
            <div>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <Button
                                onClick={this.props.onSelectAllEl}
                                raised color="primary">
                                Выделить
                            </Button>
                        </td>
                        <td>
                            <Button
                                onClick={this.props.onDeleteSelected}
                                raised color="primary">
                                Удалить выделенные
                            </Button>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={'info'}>
                    <tbody>
                    <tr>
                        <td>Количество: {this.props.count}</td>
                        <td><input
                            ref='all'
                            defaultChecked={true}
                            onChange={() => this.showTasks(NAME_ALL, 'all')}
                            type={'radio'}
                        />Все</td>
                        <td><input
                            ref='done'
                            onChange={() => this.showTasks(NAME_DONE, 'done')}
                            type={'radio'}
                        />Сделаные</td>
                        <td><input
                            ref='notDone'
                            onChange={() => this.showTasks(NAME_IN_PROGRESS, 'notDone')}
                            type={'radio'}
                        />Не сделаные</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
export default connect(
    state => ({
        count: state.count
    }),
    dispatch => ({
        onSelectAllEl: () => {
            dispatch(selectAllTasks())
        },
        onDeleteSelected: () => {
            dispatch(removeSelectedTasks())
        },
        onChangeRadioButton: name => {
            dispatch(changeRadioButton(name))
        }
    })
)(TodoFooter);
