import { call, takeEvery } from 'redux-saga/effects';
import {  getApiRequest } from '../tools/apiTools';
import { GET_NOTEPADS }  from '../actions/action.types';

const getNotepads = () => getApiRequest('https://api.github.com/gists');

function* getNotepadsSaga(action) {
    const response = yield call(getNotepads);
    if (response.ok) {
        // put success action
    } else {
        // put failure action
    }
}

function* watchGetNotepadsSaga() {
    yield takeEvery(GET_NOTEPADS, getNotepadsSaga);
}

export default watchGetNotepadsSaga;