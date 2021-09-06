import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./rootReducer";
import thunk from "redux-thunk";
import createSagaMiddlware from 'redux-saga'
import {sagaWatcher} from "./sagas";

const saga = createSagaMiddlware()

export const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk, saga),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
)

saga.run(sagaWatcher)