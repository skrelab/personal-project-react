import { combineReducers } from 'redux';
import { authenticated } from './authenticated';
import { forked, forkedHasErrored, forkedIsLoading } from './forked';

export default combineReducers({
    authenticated,
    forked,
    forkedHasErrored,
    forkedIsLoading
});