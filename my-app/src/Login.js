import React from 'react';
import { Button } from './Button';
// import { TextField } from './TextField';

export const Login = (props) => {
	// console.log('This is the login component', props);
	return (
		<div className="col-6 offset-3">
		    <div className="text-center">
		      <h1>Fake GitHub Login</h1>
		      <hr className="mb-3" />  
		    </div>
		    <form onSubmit={props.onSubmit}>
		        <div className="form-group">
		            <label htmlFor="inputUsername">Username</label>
		            <input type="text" name="username" className="form-control" id="inputUsername" aria-describedby="usernameHelp" placeholder="Enter your username" />
		        	<small id="usernameHelp" className="form-text text-muted">Any username will work because, well, this is fake.</small>
		        </div>
		        <Button />
		    </form>
		</div>
	);
}
