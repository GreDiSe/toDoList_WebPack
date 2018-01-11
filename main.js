import ReactDOM from 'react-dom';
import React from 'react';

import Container from './src/scripts/Container.js';
import './src/scripts/TodoFooter.js';
import './src/scripts/TodoInput.js';
import './src/scripts/TodoListItem.js';
import './src/scripts/TodoList.js';

import './src/style/TodoList.css';
import './src/style/TodoFooter.css';
import './src/style/TodoInput.css';
import './src/style/TodoListItem.css';
import './src/style/Container.css';

ReactDOM.render(<Container/>, document.getElementById('root'));