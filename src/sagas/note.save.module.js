import { call, takeEvery } from 'redux-saga/effects';
import {  postApiRequest } from '../tools/apiTools';
import { SAVE_NOTE }  from '../actions/action.types';

const getNotepad = (body) => postApiRequest('https://api.github.com/gists', body);

function* saveNoteSaga(action) {
    const { body } = action.payload;
    const response = yield call(getNotepad, body);
    if (response.ok) {
        // put success
    } else {
        //put failure
    }
}

function* watchSaveNoteSaga() {
    yield takeEvery(SAVE_NOTE, saveNoteSaga);
}

export default watchSaveNoteSaga;