import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

// const initialState = {
//     authenticated: false,
//     data: {
//         hasErrored: false,
//         isLoading: false,
//         items: []
//     }
// }

// export const store = createStore(rootReducer, initialState, applyMiddleware(logger, thunk));
export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
