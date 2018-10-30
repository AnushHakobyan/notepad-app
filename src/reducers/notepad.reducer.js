import {
    SAVE_NOTEPAD,
    DELETE_NOTEPAD,
} from '../actions/action.types';

const initialState  = {
    notepads: [],
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTEPAD: {
            const { notepad } = action.payload;
            return {
                ...state,
                notepads: [
                    notepad,
                    ...state.notepads,
                ],
            };
        }
        case DELETE_NOTEPAD: {
            const { notepadId } = action.payload;
            return {
                ...state,
                notepads: state.notePads.filter(notepad => notepad.id === notepadId),
            };
        }
        default:
            return state;
    }
}