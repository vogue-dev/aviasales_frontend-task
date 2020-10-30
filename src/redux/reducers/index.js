import { combineReducers } from 'redux';

import tickets from './tickets';
import sort from './sort';
import filter from './filter';

const rootReducer = combineReducers({
	tickets,
	sort,
	filter,
});

export default rootReducer;
