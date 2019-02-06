import React from 'react';

export const Repository = (props) => {
	console.log(props.forked); 
	// console.log(props.pulls); 

	const gitHubDomain = 'https://github.com/';
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
			    	{Object.keys(props.pulls).map((key, index) => {
			    		const pull = props.pulls[key];
			    		return (
			    			<tr key={index}>
			    				<td>
			    					<a href={pull.url}>{pull.title}
			    						<span className={
			    							pull.state === 'open'? 'badge badge-success ml-2' : 
			    							(pull.state === 'closed'? 'badge badge-dark ml-2' : 'badge badge-dark ml-2')
			    						}>
			    						{pull.state}
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
