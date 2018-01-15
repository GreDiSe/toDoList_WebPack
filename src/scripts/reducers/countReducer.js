import { CHANGE_RADIO_BUTTON } from "../action/actionTypes";

export default countReducer(state.count = 0, {
    [`${CHANGE_RADIO_BUTTON}`]: (state, action) => ({
        ...state,
        radioChecked: action.radioName
    })
})


