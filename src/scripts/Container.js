import React from 'react';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import TodoList from  './TodoList';

export default class Container extends React.Component {
    render() {
        return (
            <div className={'width'}>
                <TodoInput/>
                <TodoList/>
                <TodoFooter/>
            </div>
        )
    }
}