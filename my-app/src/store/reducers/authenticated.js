import { AUTHENTICATE } from '../constants';

export const authenticated = (state = false, action) => {
	switch (action.type) {
		case AUTHENTICATE:
			return true; // should be returning a new object
		default:
			return state;
	}
}
