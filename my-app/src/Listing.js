import React from 'react';

export const Listing = (props) => {
	return (
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
	);
}