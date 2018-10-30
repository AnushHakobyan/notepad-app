import { call, takeEvery } from 'redux-saga/effects';
import {  getApiRequest } from '../tools/apiTools';
import { GET_NOTEPAD }  from '../actions/action.types';

const getNotepad = (id) => getApiRequest(`https://api.github.com/gists/${id}`);

function* getNotepadSaga(action) {
    const { id } = action.payload;
    const response = yield call(getNotepad, id);
    if (response.ok) {
        // put success
    } else {
        //put failure
    }
}

function* watchGetNotepadSaga() {
    yield takeEvery(GET_NOTEPAD, getNotepadSaga);
}

export default watchGetNotepadSaga;