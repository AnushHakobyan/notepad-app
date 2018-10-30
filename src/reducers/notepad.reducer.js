import {
    GET_NOTEPAD,
    GET_NOTEPAD_SUCCESS,
    GET_NOTEPAD_FAILURE,
    SAVE_NOTEPAD,
    SAVE_NOTEPAD_SUCCESS,
    SAVE_NOTEPAD_FAILURE,
    DELETE_NOTEPAD,
    DELETE_NOTEPAD_SUCCESS,
    DELETE_NOTEPAD_FAILURE,
} from '../actions/action.types';

const initialState  = {
    notepads: [],
    notepadId: null,
    isLoading: false,
};

/**
 * Reducer function to handle a single notepad related actions.
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = initialState, action) {
    switch (action.type) {
        case SAVE_NOTEPAD: {
            const { notepad } = action.payload;
            return {
                ...state,
                isLoading: true,
            };
        }
        case SAVE_NOTEPAD_SUCCESS: {
            const { notepad } = action.payload;
            return {
                ...state,
                notepads: [
                    notepad,
                    ...state.notepads,
                ],
                notepadId: notepad.id,
            };
        }
        case SAVE_NOTEPAD_FAILURE: {
            const { error } = action.payload;
            return {
                ...state,
               error,
                isLoading: false,
            };
        }
        case GET_NOTEPAD: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_NOTEPAD_SUCCESS: {
            const { notepad } = action.payload;
            return {
                ...state,
                notepadId: notepad.id,
                isLoading: false,
            };
        }
        case GET_NOTEPAD_FAILURE: {
            const { notepad } = action.payload;
            return {
                ...state,
                isLoading: false,
            };
        }
        case DELETE_NOTEPAD: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case DELETE_NOTEPAD_SUCCESS: {
            const { notepadId } = action.payload;
            return {
                ...state,
                notepads: state.notePads.filter(notepad => notepad.id === notepadId),
                notepadId: state.notepads[0] && state.notepads[0].id || null,
                isLoading: false,
            };
        }
        case DELETE_NOTEPAD_FAILURE: {
            const { error } = action.payload;
            return {
                ...state,
               error,
                isLoading: false,
            };
        }
        default:
            return state;
    }
}