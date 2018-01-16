import { CHANGE_RADIO_BUTTON } from '../action/actionTypes';
import injectReducer from './injectReducer'
import {initialState} from '../store/initialState';

export default injectReducer(initialState.radioChecked, {
    [`${CHANGE_RADIO_BUTTON}`]: (state, action) => action.radioName})