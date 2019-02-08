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