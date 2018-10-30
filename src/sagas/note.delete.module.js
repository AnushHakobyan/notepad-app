import { call, takeEvery } from 'redux-saga/effects';
import {  deleteApiRequest } from '../tools/apiTools';
import { DELETE_NOTE }  from '../actions/action.types';

const getNotepad = (body) => deleteApiRequest('https://api.github.com/gists', body);

function* deleteNoteSaga(action) {
    const { id } = action.payload;
    const response = yield call(getNotepad, id);
    if (response.ok) {
        // put DELETE_NOTE_SUCCESS which removes specified note from the redux state as well
    } else {
        //put DELETE_NOTE_FAILURE with the error
    }
}

function* watchDeleteNoteSaga() {
    yield takeEvery(DELETE_NOTE, deleteNoteSaga);
}

export default watchDeleteNoteSaga;