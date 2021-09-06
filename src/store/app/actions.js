export const appActionTypes = {
    SHOW_ALERT: 'APP/SHOW_ALERT',
    HIDE_ALERT: 'APP/HIDE_ALERT',
}

export const showAlert = (text, time) => {
    return async dispatch => {
        dispatch({
            type: appActionTypes.SHOW_ALERT,
            payload: text,
        })
        setTimeout(() => dispatch({
            type: appActionTypes.HIDE_ALERT,
        }), time)
    }
}
