import {takeEvery, put} from 'redux-saga/effects'
import {getPostsByNumberSaga, postsActionTypes, setPosts} from "./posts/actions";
import {showAlert} from "./app/actions";

export function* sagaWatcher() {
    yield takeEvery(postsActionTypes.FORCE_SAGA, sagaWorker)
}

function* sagaWorker() {
    yield put(showAlert('Saga forced', 1000))
    const posts = yield getPostsByNumberSaga(3)
    yield put(setPosts(posts))
}