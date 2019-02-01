import React from 'react';

export const Repository = (props) => {
	console.log(props.events);

	// const forkedEvents = props.events.filter(event => {
	// 	if (event.payload.pull_request.repo.fork) {
	// 		return event;
	// 	}
	// });

	return (
		<div>
			<h1 className="mb-4">Welcome to the Repository</h1>
			<table className="table">
			    <thead>
			        <tr>
			            <th scope="col">Forked Repos</th>
			        </tr>
			    </thead>
			    <tbody>
			    	{props.events.CreateEvent.map((event, index) => {
			    		return (
			    			<tr key={index}>
			    				<td><a href="#">{event.repo.name}</a></td>
			    			</tr>
			    		);
			    	})}
			    </tbody>
			</table>
		</div>
	);
};
