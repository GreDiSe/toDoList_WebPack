import React from 'react';

class TodoInput extends React.Component {
    constructor(){
        super();
        this.defaultTaskStatus = { status: this.IN_PROGRESS};
    }


    addTask = () => {
        //const {tasks, setNewState} = props;
        const text = this.refs.task.value;
        this.refs.task.value = '';
        this.props.tasks.push({name: text, ...this.defaultTaskStatus});
        this.props.setNewState({tasks: this.props.tasks});
    };

    render() {
        return (
            <table >
                <tbody>
                <tr className={'addTask'}>
                    <td>
                        <input
                            ref='task'
                            className={"inputText"}
                            type={"text"}
                            placeholder={"Напиши что-то"}
                        />
                    </td>
                    <td>
                        <button className={'buttonAdd'} onClick={this.addTask}>Добавить</button>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}
export default TodoInput;
