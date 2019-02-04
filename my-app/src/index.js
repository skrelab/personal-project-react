import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Import static data
import { events } from './events';
import { pulls } from './pulls';

// Transform events with static function
const transformEvents = (evts) => {
	
	return evts.reduce((categorizedEvents, currentEvent) => {
		
		return Object.assign(
			categorizedEvents,
			{ [currentEvent.type]: [...(categorizedEvents[currentEvent.type] || []), currentEvent] }
		); 
	}, []);	
}

const transformedEvents = transformEvents(events);




ReactDOM.render(<App events={transformedEvents} pulls={pulls} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
