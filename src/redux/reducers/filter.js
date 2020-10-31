const initialState = {
	stopsFilter: [-1],
};

const filter = (state = initialState, action) => {
	// console.log('STOPS_FILTER.action.payload', action);
	switch (action.type) {
		case 'SET_STOPS_FILTER':
			return {
				...state,
				stopsFilter: action.payload,
			};

		default:
			return state;
	}
};

export default filter;
