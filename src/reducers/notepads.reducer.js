import {
    GET_NOTEPADS,
    GET_NOTEPADS_SUCCESS,
    GET_NOTEPADS_FAILURE,
} from '../actions/action.types';

const initialState  = {
    notepads: [],
    isLoading: false,
};

/**
 * Reducer function which handles actions related with the list of notepads.
 * @param state
 * @param action
 * @returns {*}
 */
export default function(state = initialState, action) {
    switch (action.type) {
        case GET_NOTEPADS: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case GET_NOTEPADS_SUCCESS: {
            const { notepads } = action.payload;
            return {
                ...state,
                notepads,
                isLoading: false,
            }
        }
        case GET_NOTEPADS_FAILURE: {
            const { error } = action.payload;
            return {
                ...state,
                error,
                isLoading: false,
            }
        }
        default:
            return state;
    }
}