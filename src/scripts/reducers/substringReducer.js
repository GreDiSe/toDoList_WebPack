import injectReducer from './helper/injectReducer'
import { initialState } from "../store/initialState";
import { SUBSTRING_VALUE } from "../action/actionTypes";

export default injectReducer(initialState.substring, {
    [`${SUBSTRING_VALUE}`]: (state, action) => action.substring
})