import appReducer from '../reducers/indexReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const store = createStore(
    appReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
