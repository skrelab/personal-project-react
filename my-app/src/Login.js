import React from 'react';
import { Button } from './Button';
import { TextField } from './TextField';

export const Login = (props) => {
	// console.log('This is the login component', props);
	return (
		<div className="col-6 offset-3">
		    <div className="text-center">
		      <h1>Fake GitHub Login</h1>
		      <hr className="mb-3" />  
		    </div>
		    <form onSubmit={props.onSubmit}>
		        <TextField onChange={props.onChange} username={props.username} />
		        <div className="form-group">
		            <label htmlFor="inputPassword">Password</label>
		            <input type="password" className="form-control" id="inputPassword" aria-describedby="passwordHelp" placeholder="Enter your password" />
		            <small id="passwordHelp" className="form-text text-muted">Any password will work because, well, this is fake.</small>
		        </div>
		        <Button />
		    </form>
		</div>
	);
}
