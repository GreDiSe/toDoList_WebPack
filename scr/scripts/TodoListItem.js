import React from 'react';

class TodoListItem extends React.Component {
    constructor(){
        super();
        this.DONE = 'done';
        this.IN_PROGRESS = 'in_progress';
    }


    render() {
        const cur = this.props.task;
        const className = cur.status === this.DONE ? 'cross' : 'notCross';
        return (
            <tr>
                <td>
                    <input
                        checked={cur.status === this.DONE}
                        onChange={this.props.checkedItem}
                        className={'check'}
                        type={'checkbox'}
                    />
                    <h5 className={className}>{cur.name}</h5>
                </td>
                <td>
                    <button
                        className={'buttonDelete'}
                        onClick={this.deleteTask}
                    />
                </td>
            </tr>
        )
    }
}
export default TodoListItem;
