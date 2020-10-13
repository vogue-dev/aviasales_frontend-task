import { combineReducers } from 'redux';

import tickets from './tickets.js';

const rootReducer = combineReducers({
	tickets,
});

export default rootReducer;
