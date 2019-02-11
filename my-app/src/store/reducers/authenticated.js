import { AUTHENTICATE } from '../constants';

// export const authenticated = (state = false, action) => {
// 	switch (action.type) {
// 		case AUTHENTICATE:
// 			return {...state, authenticated: true} //
// 		default:
// 			return state;
// 	}
// }

export const authenticated = (state = false, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return action.hasAuthenticated;
		default:
			return state;
	}
}
