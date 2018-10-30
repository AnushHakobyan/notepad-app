import {
    SAVE_NOTEPAD,
    DELETE_NOTEPAD,
} from '../actions/action.types';

export const saveNotepad = title => {
    console.log(title);
    return {
    payload: {
        title,
    },
    type: SAVE_NOTEPAD,
}};