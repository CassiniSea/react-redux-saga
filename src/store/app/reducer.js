import {appActionTypes} from "./actions";

const initialState = {
    alert: null,
}

export default function app(state = initialState, action) {
    switch (action.type) {
        case appActionTypes.SHOW_ALERT:
            return {...state, alert: action.payload}
        case appActionTypes.HIDE_ALERT:
            return {...state, alert: null}
        default:
            return state
    }
}