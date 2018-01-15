import { SHOW_COUNT_TASKS } from '../action/actionTypes';
import injectReducer from './injectReducer'

export default injectReducer(state.count = 0, {
    [`${SHOW_COUNT_TASKS}`]: (state, action) => ({
        ...state,
        count: action.count
    })
})