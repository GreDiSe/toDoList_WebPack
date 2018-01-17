import { SUBSTRING_VALUE } from "./actionTypes";

export const substringValue = value => ({
    type: SUBSTRING_VALUE,
    substring: value
});
