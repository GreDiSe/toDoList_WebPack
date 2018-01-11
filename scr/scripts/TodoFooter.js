import React from 'react';

class TodoFooter extends React.Component {
    constructor(){
        super();
        this.DONE = 'done';
        this.IN_PROGRESS = 'in_progress';
        this.ALL = 'all';
    }

    showTasks = (status, ref) => {
        /*id = 0 - all
        id = 1 - done
        id = 2 - notDone*/
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
        this.props.tasks({tasks: newTasks});
    };

    render() {
        return (
            <div>
                <table>
                    <tbody>
                    <td><button onClick={this.selectAllEl}>Выделить все</button></td>
                    <td><button onClick={this.deleteSelected}>Удалить выделенные</button></td>
                    </tbody>
                </table>
                <table className={'info'}>
                    <tbody>
                    <tr>
                        <td ref='count'>Количество: 0</td>
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
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TodoFooter;
