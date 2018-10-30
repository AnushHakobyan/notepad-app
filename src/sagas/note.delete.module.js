import { call, takeEvery } from 'redux-saga/effects';
import {  deleteApiRequest } from '../tools/apiTools';
import { DELETE_NOTE }  from '../actions/action.types';

const getNotepad = (body) => deleteApiRequest('https://api.github.com/gists', body);

function* deleteNoteSaga(action) {
    const response = yield call(getNotepad, id);
    if (response.ok) {
        // put success
    } else {
        //put failure
    }
}

function* watchDeleteNoteSaga() {
    yield takeEvery(DELETE_NOTE, deleteNoteSaga);
}

export default watchDeleteNoteSaga;