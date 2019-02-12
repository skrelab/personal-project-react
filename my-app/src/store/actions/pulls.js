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

export function fetchPullsSuccess(data) {
    return {
        type: 'FETCH_PULLS_SUCCESS',
        payload: data
    };
}

// Thunk Action Creator
export const fetchPulls = (url) => {
    return (dispatch) => {
        dispatch(pullsIsLoading(true));
        fetch(url)
            .then(response => response.json())
            .then(data => {

                const events = data.reduce((categorizedEvents, currentEvent) => {   
                    return Object.assign(
                        categorizedEvents,
                        { [currentEvent.type]: [...(categorizedEvents[currentEvent.type] || []), currentEvent] }
                    ); 
                    }, []); 
                
                dispatch(pullsIsLoading(false));
            	dispatch(fetchPullsSuccess(events.PullRequestEvent));
            })
            .catch(() => dispatch(pullsHasErrored(true)));
    };
}