export const forkedHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'FORKED_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export const forkedIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'FORKED_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export const forked = (state = [], action) => {
    switch (action.type) {
        case 'FORKED_FETCH_DATA_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}