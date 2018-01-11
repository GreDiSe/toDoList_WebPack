import ReactDOM from 'react-dom';
import React from 'react';

import Container from './scr/scripts/Container.js';
import './scr/scripts/TodoFooter.js';
import './scr/scripts/TodoInput.js';
import './scr/scripts/TodoListItem.js';
import './scr/scripts/TodoList.js';

import './scr/style/TodoList.css';
import './scr/style/TodoFooter.css';
import './scr/style/TodoInput.css';
import './scr/style/TodoListItem.css';
import './scr/style/Container.css';

ReactDOM.render(<Container/>, document.getElementById('root'));