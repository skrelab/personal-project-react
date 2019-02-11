import { combineReducers } from 'redux';
import { authenticated } from './authenticated';
// import { forked, forkedHasErrored, forkedIsLoading } from './forked';
// import { pulls, pullsHasErrored, pullsIsLoading } from './pulls';
import { data, dataHasErrored, dataIsLoading } from './data';

export default combineReducers({
    authenticated,
    // forked,
    // forkedHasErrored,
    // forkedIsLoading,
    // pulls,
    // pullsHasErrored,
    // pullsIsLoading,
    dataHasErrored,
    dataIsLoading,
    data,
});