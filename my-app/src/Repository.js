import React from 'react';

export const Repository = (props) => {
	console.log('Forked:', props.forked); 
	console.log('Pulls:', props.pulls); 

	// const gitHubDomain = 'https://github.com/:user/:repo';
	return (
		<div>
			<h1 className="mb-4">Welcome to the Repository</h1>
			<table className="table mb-2">
			    <thead>
			        <tr>
			            <th scope="col">Forked Repos</th>
			        </tr>
			    </thead>
			    <tbody>
			    	{props.forked.map((item, index) => {
			    		return (
			    			<tr key={index}>
			    				<td><a href="#">{item.name}</a></td> 
			    			</tr>
			    		);
			    	})}
			    </tbody>
			</table>
			<table className="table">
			    <thead>
			        <tr>
			            <th scope="col">Pulled Repos</th>
			        </tr>
			    </thead>
			    <tbody>
			    	{props.pulls.map((item, index) => {
			    		return (
			    			<tr key={index}>
			    				<td>
			    					<a href={item.payload.pull_request.html_url}>{item.payload.pull_request.title}
			    						<span className={
			    							item.payload.action === 'opened'? 'badge badge-success ml-2' : 
			    							(item.payload.action === 'closed'? 'badge badge-dark ml-2' : 'badge badge-dark ml-2')
			    						}>
			    						{item.payload.action}
			    						</span>
			    					</a>
			    				</td> 
			    			</tr>
			    		);
			    	})}
			    </tbody>
			</table>
		</div>
	);
};
