import { combineReducers } from 'redux';
import { authenticated } from './authenticated';
import { data } from './data';

export default combineReducers({ authenticated, data });