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

export function forkedFetchDataSuccess(data) {
    return {
        type: 'FORKED_FETCH_DATA_SUCCESS',
        payload: data
    };
}

export const forkedFetchData = (url) => {
    return (dispatch) => {
        dispatch(forkedIsLoading(true));
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(forkedIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(data => {
            	const forked = data.filter(datum => {
            	    if (datum.fork) {
            	        return datum;
            	    }
            	});
            	dispatch(forkedFetchDataSuccess(forked));
            })
            .catch(() => dispatch(forkedHasErrored(true)));
    };
}