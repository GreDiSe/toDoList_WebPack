import { CHANGE_RADIO_BUTTON } from '../action/actionTypes';
import injectReducer from './injectReducer'
import { NAME_IN_PROGRESS } from "../store/initialState";
import {initialState} from '../store/initialState';

export default injectReducer(initialState.radioChecked = NAME_IN_PROGRESS, {
    [`${CHANGE_RADIO_BUTTON}`]: (state, action) => ({
        ...state,
        radioChecked: action.radioName
    })
})