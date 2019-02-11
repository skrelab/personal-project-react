import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {
	authenticated: false, 
	forkedHasErrored: false,
	forkedIsLoading: false,
	forked: [],
	pullsHasErrored: false,
	pullsIsLoading: false,
	pulls: [],
}

// const initialState = {
//     authenticated: false,
//     data: {
//         forked: {
//             hasErrored: false,
//             isLoading: false,
//             items: []
//         },
//         pulls: {
//             hasErrored: false,
//             isLoading: false,
//             items: []
//         }
//     }
// }

export const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
