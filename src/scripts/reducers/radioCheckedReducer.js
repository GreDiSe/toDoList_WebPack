import { CHANGE_RADIO_BUTTON } from "../action/actionTypes";

export default radioCheckedReducer(state.radioChecked, {
    [`${CHANGE_RADIO_BUTTON}`]: (state, action) => ({
        ...state,
        radioChecked: action.radioName
    })
})

