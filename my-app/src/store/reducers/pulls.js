export const pullsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'PULLS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
}

export const pullsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'PULLS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
}

export const pulls = (state = [], action) => {
    switch (action.type) {
        case 'PULLS_FETCH_DATA_SUCCESS':
            return action.payload;
        default:
            return state;
    }
}