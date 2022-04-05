import { ADD_INITIAL_VALUE, CHANGE_LANGUAGE } from "../types";

export const language = (state, action) => {
    switch (action.type) {
        case ADD_INITIAL_VALUE:
            return {
                ...state,
                ...action.value
            };
        case CHANGE_LANGUAGE:
            return {
                ...state,
                lang: action.payload
            };
        default:
            return { ...state };
    }
};
