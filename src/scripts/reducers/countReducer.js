import { SHOW_COUNT_TASKS } from "../action/actionTypes";

export default countReducer(state.count = 0, {
    [`${SHOW_COUNT_TASKS}`]: (state, action) => ({
        ...state,
        count: action.count
    })
})
