import { CHANGE_RADIO_BUTTON} from "./actionTypes";

export const changeRadioButton = newRadioName => ({
    type: CHANGE_RADIO_BUTTON,
    radioName: newRadioName
});