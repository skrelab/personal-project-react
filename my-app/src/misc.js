<div>
	<h1 className="mb-4">Welcome to the Repository</h1>
	<table className="table mb-2">
	    <thead>
	        <tr>
	            <th scope="col">Forked Repos</th>
	        </tr>
	    </thead>
	    <tbody>
	    	{ props.forkedHasErrored? <div className="alert alert-danger mt-3">Sorry! There was an error loading the forked items</div> : '' }
	    	{ props.forkedisLoading? <div class="spinner-border text-dark mt-3" role="status"><span class="sr-only">Loading...</span></div> : '' }

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
	    	{ props.pullsHasErrored? <div className="alert alert-danger mt-3">Sorry! There was an error loading the pulls items</div> : '' }
	    	{ props.pullsisLoading? <div class="spinner-border text-dark mt-3" role="status"><span class="sr-only">Loading...</span></div> : '' }

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