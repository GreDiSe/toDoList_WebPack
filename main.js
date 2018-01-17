import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './src/scripts/store/configurateStore'


import Container from './src/scripts/components/Container.js';
import './src/scripts/components/TodoFooter.js';
import './src/scripts/components/TodoInput.js';
import './src/scripts/components/TodoListItem.js';
import './src/scripts/components/TodoList.js';

import './src/style/style.css';

ReactDOM.render(
    <Provider store={store}>
        <Container/>
    </Provider>,
    document.getElementById('root')
);