import { call, takeEvery } from 'redux-saga/effects';
import {  postApiRequest } from '../tools/apiTools';
import { SAVE_NOTEPAD }  from '../actions/action.types';

const saveNotepad = (body) => postApiRequest('https://api.github.com/gists', body);

function* saveNotepadSaga(action) {
    const { body } = action.payload;
    const response = yield call(saveNotepad, body);
    console.log(response);
}

function* watchSaveNotepadSaga() {
    yield takeEvery(SAVE_NOTEPAD, saveNotepadSaga);
}

export default watchSaveNotepadSaga;

// const body = {
//     description: 'testing api',
//     files: {
//         'notepad.txt': {
//             content: 'some text here',
//         },
//     },
// };