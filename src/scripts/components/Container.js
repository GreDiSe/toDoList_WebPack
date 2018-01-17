import React from 'react';
import TodoInput from './TodoInput';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';

export default class Container extends React.Component {
    render() {
        return (
            <div>
                <h3 style={{
                    width: '400px',
                    textAlign: 'center',
                    margin: '5px'
                }} className={'head'}>TodoList</h3>
                <TodoInput/>
                <TodoList/>
                <TodoFooter/>
            </div>
        )
    }
}
