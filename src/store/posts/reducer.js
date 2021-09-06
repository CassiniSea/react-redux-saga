import {postsActionTypes} from "./actions";

const initialState = {
    posts: []
}

export default function posts(state = initialState, action) {
    switch (action.type) {
        case postsActionTypes.GET_POSTS:
            return {...state, posts: action.payload}
        default:
            return state
    }
}