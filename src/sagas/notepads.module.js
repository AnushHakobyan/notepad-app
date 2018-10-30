import { call, takeEvery } from 'redux-saga/effects';
import {  getApiRequest } from '../tools/apiTools';
import { GET_NOTEPADS }  from '../actions/action.types';

const getNotepads = () => getApiRequest('https://api.github.com/gists');

function* getNotepadsSaga(action) {
    const response = yield call(getNotepads);
    // This is the main boilerplate of creating saga side effects. When saga which makes API call is tied with the
    // appropriate action, already described in the reducer and dispatched by the component. Then depending on the
    // API response success or failure actions are being put. They handle the final state of the reducer after the
    // action is done.
    if (response.ok) {
        // GET_NOTEPADS_SUCCESS success action
    } else {
        // GET_NOTEPADS_FAILURE failure action
    }
}

function* watchGetNotepadsSaga() {
    yield takeEvery(GET_NOTEPADS, getNotepadsSaga);
}

export default watchGetNotepadsSaga;