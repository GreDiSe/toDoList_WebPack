import React from 'react';
import Button from 'material-ui/Button'

class TodoFooter extends React.Component {
    constructor(){
        super();
        this.DONE = 'done';
        this.IN_PROGRESS = 'in_progress';
        this.ALL = 'all';
    }

    showTasks = (status, ref) => {
        this.props.setNewState({radioChecked: status});
        this.refs.all.checked = false;
        this.refs.notDone.checked = false;
        this.refs.done.checked = false;
        this.refs[ref].checked = true;
    };

    selectAllEl = () =>{
        const newTasks = this.props.tasks.map(cur => {
            cur.status = this.DONE;
            return cur;
        });
        this.props.setNewState({tasks: newTasks})
    };

    deleteSelected = () => {
        const newTasks = this.props.tasks.filter(cur => {
            return cur.status !== this.DONE;
        });
        this.props.setNewState({tasks: newTasks});

    };

    render() {
        return (
            <div>
                <table>

                    <td>
                        <Button
                            onClick={this.selectAllEl}
                            raised color="primary">
                            Выделить
                        </Button>
                    </td>
                    <td>
                        <Button
                            onClick={this.deleteSelected}
                            raised color="primary">
                            Удалить выделенные
                        </Button>
                    </td>

                </table>
                <table className={'info'}>
                    <tr>
                        <td ref='count'>Количество: {this.props.count}</td>
                        <td><input
                            ref='all'
                            defaultChecked={true}
                            onChange={() => this.showTasks(this.ALL, 'all')}
                            type={'radio'}
                        />Все</td>
                        <td><input
                            ref='done'
                            onChange={() => this.showTasks(this.DONE, 'done')}
                            type={'radio'}
                        />Сделаные</td>
                        <td><input
                            ref='notDone'
                            onChange={() => this.showTasks(this.IN_PROGRESS, 'notDone')}
                            type={'radio'}
                        />Не сделаные</td>
                    </tr>
                </table>
            </div>
        )
    }
}
export default TodoFooter;
