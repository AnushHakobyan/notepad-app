import { all, fork } from 'redux-saga/effects';
import watchSaveNotepadSaga from './notepad.save.module';
import watchGetNotepadSaga from './notepad.module';
import watchDeleteNotepadSaga from './notepad.delete.module';
import watchSaveNoteSaga from './note.save.module';
import watchGetNoteSaga from './note.module';
import watchDeleteNoteSaga from './note.delete.module';
import watchGetNotepadsSaga from './notepads.module';

export default function* rootSaga() {
    yield all([
        fork(watchSaveNotepadSaga),
        fork(watchGetNotepadSaga),
        fork(watchDeleteNotepadSaga),
        fork(watchSaveNoteSaga),
        fork(watchGetNoteSaga),
        fork(watchDeleteNoteSaga),
        fork(watchGetNotepadsSaga),
    ]);
}