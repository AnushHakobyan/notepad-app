import { call, takeEvery } from 'redux-saga/effects';
import {  deleteApiRequest } from '../tools/apiTools';
import { DELETE_NOTEPAD }  from '../actions/action.types';

const getNotepad = (id) => deleteApiRequest(`https://api.github.com/gists/${id}`);

function* deleteNotepadSaga(action) {
    const { id } = action.payload;
    const response = yield call(deleteApiRequest, id);
    if (response.ok) {
        // put success
    } else {
        //put failure
    }
}

function* watchDeleteNotepadSaga() {
    yield takeEvery(DELETE_NOTEPAD, deleteNotepadSaga);
}

export default watchDeleteNotepadSaga;