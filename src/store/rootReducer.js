import {combineReducers} from "redux";
import posts from "./posts/reducer";
import app from "./app/reducer";

export const rootReducer = combineReducers({
    posts,
    app,
})