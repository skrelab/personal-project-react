import React from 'react';

export const TextField = (props) => {
	return (
		<div className="form-group">
		    <label htmlFor="inputUsername">Username</label>
		    <input type="text" name="username" value={props.username} onChange={props.onChange} className="form-control" id="inputUsername" placeholder="Enter your username" />
		</div>
	);
}