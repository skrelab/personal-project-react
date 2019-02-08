import { AUTHENTICATE } from '../constants';

export const authenticated = (state = false, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return {...state, authenticated: true} //
		default:
			return state;
	}
}
