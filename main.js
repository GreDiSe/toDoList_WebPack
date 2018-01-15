import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/scripts/store/configurateStore'


import Container from './src/scripts/Container.js';
import './src/scripts/TodoFooter.js';
import './src/scripts/TodoInput.js';
import './src/scripts/TodoListItem.js';
import './src/scripts/TodoList.js';

import './src/style/style.css';

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('root')
);