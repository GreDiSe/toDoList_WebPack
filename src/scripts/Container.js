import React from 'react';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import TodoList from  './TodoList';
import Button from 'material-ui/Button';

class Container extends React.Component {
    constructor() {
        super();

        this.DONE = 'done';
        this.IN_PROGRESS = 'in_progress';
        this.ALL = 'all';

        this.state = {tasks: [], radioChecked: this.ALL};
        this.defaultTaskStatus = {status: this.IN_PROGRESS};
    };

    setNewState = (newState) => {
        this.setState(newState)
    };

    render() {
        return (
            <div>

                <TodoInput
                    tasks={this.state.tasks}
                    setNewState={this.setNewState}
                />

                <TodoList
                    tasks={this.state.tasks}
                    radio={this.state.radioChecked}
                    setNewState={this.setNewState}
                />

                <TodoFooter
                    tasks={this.state.tasks}
                    radio={this.state.radioChecked}
                    setNewState={this.setNewState}
                />

            </div>
        )
    }
}
export default Container;
