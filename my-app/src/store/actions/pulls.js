// Action creators

export const pullsHasErrored = (bool) => {
    return {
        type: 'PULLS_HAS_ERRORED',
        hasErrored: bool
    };
}

export function pullsIsLoading(bool) {
    return {
        type: 'PULLS_IS_LOADING',
        isLoading: bool
    };
}

export function pullsFetchDataSuccess(data) {
    return {
        type: 'PULLS_FETCH_DATA_SUCCESS',
        payload: data
    };
}

export const pullsFetchData = (url) => {
    return (dispatch) => {
        dispatch(pullsIsLoading(true));
        fetch(url)
            .then(response => {
                // if (!response.ok) {
                //     throw Error(response.statusText);
                // }
                dispatch(pullsIsLoading(false));
                return response;
            })
            .then(response => response.json())
            .then(data => {

                const events = data.reduce((categorizedEvents, currentEvent) => {   
                    return Object.assign(
                        categorizedEvents,
                        { [currentEvent.type]: [...(categorizedEvents[currentEvent.type] || []), currentEvent] }
                    ); 
                    }, []); 

            	dispatch(pullsFetchDataSuccess(events.PullRequestEvent));
            })
            .catch(() => dispatch(pullsHasErrored(true)));
    };
}