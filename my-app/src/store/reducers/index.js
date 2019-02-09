import { combineReducers } from 'redux';
import { authenticated } from './authenticated';
import { forked, forkedHasErrored, forkedIsLoading } from './forked';
import { pulls, pullsHasErrored, pullsIsLoading } from './pulls';

export default combineReducers({
    authenticated,
    forked,
    forkedHasErrored,
    forkedIsLoading,
    pulls,
    pullsHasErrored,
    pullsIsLoading,
});