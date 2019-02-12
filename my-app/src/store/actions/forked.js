// Action creators

export const forkedHasErrored = (bool) => {
    return {
        type: 'FORKED_HAS_ERRORED',
        hasErrored: bool
    };
}

export function forkedIsLoading(bool) {
    return {
        type: 'FORKED_IS_LOADING',
        isLoading: bool
    };
}

export function fetchForkedSuccess(data) {
    return {
        type: 'FETCH_FORKED_SUCCESS',
        payload: data
    };
}

// Thunk Action Creator
export const fetchForked = (url) => {
    return (dispatch) => {
        dispatch(forkedIsLoading(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.json())
            .then(data => {
            	const forked = data.filter(datum => {
            	    if (datum.fork) {
            	        return datum;
            	    }
            	});
                
                dispatch(forkedIsLoading(false));
            	dispatch(fetchForkedSuccess(forked));
            })
            .catch(() => dispatch(forkedHasErrored(true)));
    };
}