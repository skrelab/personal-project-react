import React from 'react';

export const Listing = (props) => {
	
	const generateTableHeader = (string) => {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	return (
		<table className="table mb-2">
		    <thead>
		        <tr>
		            <th scope="col">{generateTableHeader(props.dataType)}</th>
		        </tr>
		    </thead>
		    <tbody>
		    	{props.data.hasErrored? <div className="alert alert-danger mt-3">Sorry! There was an error loading the items</div> : ''}
		    	{props.data.isLoading? <div class="spinner-border text-dark mt-3" role="status"><span class="sr-only">Loading...</span></div> : ''}
		    	
		    	{props.data.items.map((item, index) => {
		    		return (
		    			<tr key={index}>
		    				<td>
		    					{
		    						(item.type === 'PullRequestEvent')?
		    						<a href={item.payload.pull_request.html_url}>{item.payload.pull_request.title}
		    							<span className={
		    								item.payload.action === 'opened'? 'badge badge-success ml-2' : 
		    								(item.payload.action === 'closed'? 'badge badge-dark ml-2' : 'badge badge-dark ml-2')
		    							}>
		    							{item.payload.action}
		    							</span>
		    						</a>
		    						:
		    						<a href={item.html_url}>{item.name}</a>
		    					}
		    				</td> 
		    			</tr>
		    		);
		    	})}
		    </tbody>
		</table>
	);
};