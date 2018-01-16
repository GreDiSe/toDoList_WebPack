import appReducer from '../reducers/indexReducer';
import { createStore } from 'redux';

export const store = createStore(appReducer);
store.subscribe(() => {
    console.log('STORE: ', store.getState() );
});
