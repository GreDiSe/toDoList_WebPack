import { CHANGE_RADIO_BUTTON } from "../action/actionTypes";
import { NAME_ALL } from "../store/initialState";

export default radioCheckedReducer(state.radioChecked = NAME_ALL, {
    [`${CHANGE_RADIO_BUTTON}`]: (state, action) => ({
        ...state,
        radioChecked: action.radioName
    })
})

