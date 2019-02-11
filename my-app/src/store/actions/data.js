// Action creators

export const dataHasErrored = (bool) => {
	return {
		type: 'DATA_HAS_ERRORED',
		hasErrored: bool
	};
}

export function dataIsLoading(bool) {
	return {
		type: 'DATA_IS_LOADING',
		isLoading: bool
	};
}

export function fetchDataSuccess(data) {
	return {
		type: 'DATA_FETCH_SUCCESS',
		payload: data
	};
}

export const fetchData = (url1, url2) => {
	return (dispatch) => {
		dispatch(dataIsLoading(true));

		Promise.all([
			fetch(url1),
			fetch(url2),
		])
		// .then(responses => {
		// 	console.log('----------------RESPONSES:');
		// 	for(let response of responses) {
		// 		console.log(`${response.url}: ${response.status}`); // shows 200 for every url
		// 	}
		// 	return responses;
		// })
		.then(responses => Promise.all(
			responses.map(r => r.json())
		))
		.then(([repos, events]) => {  

			const forked = repos.filter(repo => {
		        if (repo.fork) {
		            return repo;
		        }
		    });

	        const eventsTransformed = events.reduce((categorizedEvents, currentEvent) => {   
	            return Object.assign(
	                categorizedEvents,
	                { [currentEvent.type]: [...(categorizedEvents[currentEvent.type] || []), currentEvent] }
	            ); 
	        }, []); 

	        const pulls = eventsTransformed.PullRequestEvent;

	        dispatch(fetchDataSuccess([forked, pulls]));    
		})
		.catch(() => dispatch(dataHasErrored(true)));
	};
}