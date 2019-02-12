import { AUTHENTICATE } from './constants';

const initialState = {
    authenticated: false, 
    forked: {
        hasErrored: false,
        isLoading: false,
        items: []
    },
    pulls: {
        hasErrored: false,
        isLoading: false,
        items: []
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTHENTICATE:
            return {
                ...state, 
                authenticated: true,
            }
        case 'FORKED_HAS_ERRORED':
            return {
                ...state, 
                forked: {...state.forked, hasErrored: action.hasErrored}
            };
        case 'FORKED_IS_LOADING':
            return {
                ...state, 
                forked: {...state.forked, isLoading: action.isLoading}
            };
        case 'FORKED_FETCH_DATA_SUCCESS':
            return {
                ...state, 
                forked: {...state.forked, items: action.payload}
            };
        case 'PULLS_HAS_ERRORED':
            return {
                ...state, 
                pulls: {...state.pulls, hasErrored: action.hasErrored}
            };
        case 'PULLS_IS_LOADING':
            return {
                ...state, 
                pulls: {...state.pulls, isLoading: action.isLoading}
            };
        case 'PULLS_FETCH_DATA_SUCCESS':
            return {
                ...state, 
                pulls: {...state.pulls, items: action.payload}
            };
        default:
            return state;
    }
}