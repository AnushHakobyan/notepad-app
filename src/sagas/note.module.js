import { call, takeEvery } from 'redux-saga/effects';
import {  getApiRequest } from '../tools/apiTools';
import { GET_NOTE }  from '../actions/action.types';

const getNotepad = (id) => getApiRequest(`https://api.github.com/gists/${id}`);

function* getNoteSaga(action) {
    const response = yield call(getNotepad, id);
    if (response.ok) {
        // put success
    } else {
        //put failure
    }
}

function* watchGetNoteSaga() {
    yield takeEvery(GET_NOTE, getNoteSaga);
}

export default watchGetNoteSaga;