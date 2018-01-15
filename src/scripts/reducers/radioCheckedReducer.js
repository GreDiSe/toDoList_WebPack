import { SHOW_COUNT_TASKS } from "../action/actionTypes";
import { NAME_ALL } from "../store/initialState";

export default countReducer(state.radioChecked = NAME_ALL, {
    [`${SHOW_COUNT_TASKS}`]: (state, action) => ({
        ...state,
        count: action.count
    })
})


